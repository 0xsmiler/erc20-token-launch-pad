/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { useAccount, useWriteContract, useReadContract } from "wagmi";
import { parseUnits, formatEther } from "ethers";
import InputField from "./InputField";
import Section from "./Section";
import TaxSection from "./TaxSection";

import LiquiShieldABI from "../abi/LiquiShieldABI.json"; // Adjust path

const LIQUI_SHIELD_ADDRESS = "0xEE9b4ddC9e4d26c91E0a6ac552eb88fC60E49a07";

const Detail = () => {
  const { address, isConnected } = useAccount();

  // State for form inputs
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [tokenSupply, setTokenSupply] = useState("");
  const [marketingWallet, setMarketingWallet] = useState("");
  const [website, setWebsite] = useState("");
  const [twitter, setTwitter] = useState("");
  const [telegram, setTelegram] = useState("");
  const [initialTax, setInitialTax] = useState({ marketing: 0, development: 0, liquidity: 0 });
  const [finalTax, setFinalTax] = useState({ marketing: 0, development: 0, liquidity: 0 });
  const [txStatus, setTxStatus] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "", show: false }); // State for alerts

  // Refs for input fields to enable scrolling
  const tokenNameRef = useRef(null);
  const tokenSymbolRef = useRef(null);
  const tokenSupplyRef = useRef(null);
  const marketingWalletRef = useRef(null);

  // Fetch the fee from the contract
  const { data: fee } = useReadContract({
    address: LIQUI_SHIELD_ADDRESS,
    abi: LiquiShieldABI,
    functionName: "fee",
  });

  // Debug logs
  console.log("Raw fee from contract (wei):", fee?.toString());
  console.log("Formatted fee (ETH):", fee ? formatEther(fee) : "0.1");

  const encodeTax = (tax) => {
    const marketing = Math.min(tax.marketing || 0, 15) & 0xFF;
    const liquidity = (Math.min(tax.liquidity || 0, 15) & 0xFF) << 8;
    const development = (Math.min(tax.development || 0, 15) & 0xFF) << 16;
    return development | liquidity | marketing;
  };

  const { writeContract, isPending, isSuccess, error } = useWriteContract();

  const handleCreateToken = () => {
    // Reset previous alert
    setAlert({ message: "", type: "", show: false });

    // Sequential validation with alerts and auto-scroll
    if (!tokenName) {
      setAlert({ message: "Please enter token name.", type: "error", show: true });
      tokenNameRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if (!tokenSymbol) {
      setAlert({ message: "Please enter token symbol.", type: "error", show: true });
      tokenSymbolRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if (!tokenSupply || isNaN(tokenSupply) || Number(tokenSupply) <= 0) {
      setAlert({ message: "Token Supply must be a positive number.", type: "error", show: true });
      tokenSupplyRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if (!marketingWallet || !/^0x[a-fA-F0-9]{40}$/.test(marketingWallet)) {
      setAlert({ message: "Marketing Wallet must be a valid Ethereum address.", type: "error", show: true });
      marketingWalletRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    // Proceed with token creation if no errors
    writeContract({
      address: LIQUI_SHIELD_ADDRESS,
      abi: LiquiShieldABI,
      functionName: "deployToken",
      args: [
        tokenName,
        tokenSymbol,
        parseUnits(tokenSupply, 0),
        encodeTax(initialTax),
        encodeTax(finalTax),
        marketingWallet,
        website || "",
        twitter || "",
        telegram || ""
      ],
      value: fee || parseUnits("0.1", "ether"),
    }, {
      onSuccess: (data) => {
        setAlert({ message: "Token created successfully!", type: "success", show: true });
        setTxStatus(`Token created! Transaction: ${data.hash}`);
      },
      onError: (err) => {
        setTxStatus(`Error: ${err.message}`);
      },
    });
  };

  // Auto-dismiss alert after 2 seconds
  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        setAlert({ message: "", type: "", show: false });
      }, 2000);
      return () => clearTimeout(timer); // Cleanup on unmount or state change
    }
  }, [alert.show]);

  return (
    <div className="py-[100px] px-0 h-full">
      <div className="w-full h-[540px] bg-[url(/header-background.png)] bg-top bg-cover bg-no-repeat flex flex-col items-center">
        <div className="mt-[200px] flex items-center">
          <p className="text-white text-[22px] sm:text-[42px] md:text-[55px] font-semibold text-nowrap m-0 leading-normal">
            Create Your
          </p>
          <p className="text-cyan-500 text-[22px] sm:text-[42px] md:text-[55px] font-semibold text-nowrap my-0 mx-4 leading-normal">
            ERC20
          </p>
          <p className="text-white text-[22px] sm:text-[42px] md:text-[55px] font-semibold text-nowrap m-0 leading-normal">
            Token
          </p>
        </div>
        <p className="text-white py-0 px-2 text-sm leading-6 sm:px-3 sm:text-base sm:leading-7 md:px-0 md:text-lg md:leading-[30px] mt-[25px] mb-0 mx-0 w-full max-w-[760px] text-center font-normal">
          Easily deploy Smart Contract for an ERC20 Token on Ethereum. between
          several features like Mintable, Deflationary, Taxable, and others,
          giving your token its unique identity. Login. No setup. No coding
          required.
        </p>
      </div>

      <div className="w-full mx-auto block sm:px-6 lg:max-w-[1200px]">
        <div className="mt-5 border border-solid border-transparent relative w-full h-16">
          <hr className="border-t-0 border-r-0 border-b border-l-0 border-solid my-8 mx-0 border-[#1F262F]" />
          <a className="absolute top-0 left-1/2 -translate-x-8 w-16 h-16 rounded-[32px] border border-solid border-[#1F262F] bg-[#030b15] flex items-center justify-center cursor-pointer">
            <svg
              className="h-6 text-[#1F262F]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>

        {isConnected ? (
          <div className="flex flex-col pt-[30px] sm:pt-[50px] relative">
            <div>
              <p className="m-0 leading-6 text-cyan-500 font-semibold text-lg sm:text-xl">
                Token Details
              </p>
              <p className="m-0 leading-6 text-white/50 font-normal text-sm sm:text-base">
                Enter token details and choose a network
              </p>
              <div className="flex items-center justify-between mt-10">
                <InputField
                  label="Token Name"
                  placeholder="Enter your token name"
                  required
                  value={tokenName}
                  onChange={(e) => setTokenName(e.target.value)}
                  className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]"
                  ref={tokenNameRef} // Add ref for scrolling
                />
                <InputField
                  label="Token Symbol"
                  placeholder="Enter your token symbol"
                  required
                  value={tokenSymbol}
                  onChange={(e) => setTokenSymbol(e.target.value)}
                  className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]"
                  ref={tokenSymbolRef} // Add ref for scrolling
                />
              </div>
              <InputField
                label="Token Supply"
                placeholder="Enter your token supply"
                type="number"
                required
                value={tokenSupply}
                onChange={(e) => setTokenSupply(e.target.value)}
                className="mt-5"
                ref={tokenSupplyRef} // Add ref for scrolling
              />
            </div>

            <Section
              title="Wallet & DEX Address"
              description="Let us know your wallet information and dex address"
            >
              <div className="flex items-center justify-between mt-10">
                <InputField
                  label="Max Wallet"
                  value="2%"
                  disabled
                  className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]"
                />
                <InputField
                  label="Marketing Wallet"
                  placeholder="Enter your marketing wallet address"
                  required
                  value={marketingWallet}
                  onChange={(e) => setMarketingWallet(e.target.value)}
                  className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]"
                  ref={marketingWalletRef} // Add ref for scrolling
                />
              </div>
              <div className="flex items-center justify-between mt-5">
                <InputField
                  label="Max Transaction"
                  value="2%"
                  disabled
                  className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]"
                />
                <InputField
                  label="Development Wallet"
                  value={address}
                  disabled
                  className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]"
                />
              </div>
              <InputField
                label="Router DEX Address"
                value="0xeE567Fe1712Faf6149d80dA1E6934E354124CfE3"
                disabled
                className="mt-5 w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]"
              />
            </Section>

            <Section
              title="Contact Information"
              description="Enter social links to show your tokenomics"
            >
              <div className="flex items-center justify-between mt-10">
                <InputField
                  label="Website"
                  placeholder="https://yourwebsite.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]"
                />
                <InputField
                  label="Telegram"
                  placeholder="https://t.me/@"
                  value={telegram}
                  onChange={(e) => setTelegram(e.target.value)}
                  className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]"
                />
              </div>
              <InputField
                label="Twitter"
                placeholder="https://twitter.com/@"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                className="mt-5 w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]"
              />
            </Section>

            <Section
              title="Tax"
              description="Set the initial & final Tax you want"
            >
              <TaxSection
                title="Initial Tax"
                maxTax="15"
                onTaxChange={(tax) => setInitialTax(tax)}
              />
              <TaxSection
                title="Final Tax"
                maxTax="5"
                onTaxChange={(tax) => setFinalTax(tax)}
              />
            </Section>

            <p className="mt-5 mx-0 mb-0 leading-6 text-white/50 font-bold text-base sm:text-lg">
              A fixed {fee ? formatEther(fee) : "0.1"} ETH will be charged for creating the token. Please make
              sure you have enough ETH to cover the fee + gas cost.
            </p>
            <div className="flex items-center justify-center mt-[50px] sm:mt-20">
              <button
                className="bg-cyan-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 disabled:opacity-50"
                onClick={handleCreateToken}
                disabled={isPending}
              >
                {isPending ? "Creating..." : "Create a Token"}
              </button>
            </div>
            {txStatus && (
              <p className="mt-5 text-center text-white">{txStatus}</p>
            )}

            {/* Styled Alert for Validation and Success (Left Bottom Corner) */}
            {alert.show && (
              <div className="fixed bottom-4 left-4 z-50 pointer-events-none">
                <div className={`p-4 rounded-md shadow-lg animate-slideInOut ${alert.type === "error" ? "bg-red-600 text-white" : "bg-green-600 text-white"}`}>
                  {alert.message}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col pt-[30px] sm:pt-[50px] text-center text-cyan-500 text-lg lg:text-2xl">
            <p>You must connect wallet to create token</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;