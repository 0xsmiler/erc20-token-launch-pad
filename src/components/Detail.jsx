import InputField from "./InputField";
import Section from "./Section";
import TaxSection from "./TaxSection";

const Detail = () => {
  return (
    <div className="py-[100px] px-0">
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
        <div className="flex flex-col pt-[30px] sm:pt-[50px]">
          {/* Token Details Section */}
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
                className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]"
              />
              <InputField
                label="Token Symbol"
                placeholder="Enter your token symbol"
                required
                className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]"
              />
            </div>
            <InputField
              label="Token Supply"
              placeholder="Enter your token supply"
              type="number"
              required
              className="mt-5"
            />
          </div>

          {/* Wallet & DEX Address Section */}
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
                placeholder="Enter your token symbol"
                required
                className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]"
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
                value="0xE290F416428cc79d5C701100d1776BCB78527423"
                disabled
                className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]"
              />
            </div>
            <InputField
              label="Router DEX Address"
              value="0x5FE315412D1AC145312531322F1B122EF2A"
              disabled
              className="mt-5 w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]"
            />
          </Section>

          {/* Contact Information Section */}
          <Section
            title="Contact Information"
            description="Enter social links to show your tokenomics"
          >
            <div className="flex items-center justify-between mt-10">
              <InputField
                label="Website"
                placeholder="https://yourwebsite.com"
                className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]"
              />
              <InputField
                label="Telegram"
                placeholder="https://t.me/@"
                className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]"
              />
            </div>
            <InputField
              label="Twitter"
              placeholder="https://twitter.com/@"
              className="mt-5 w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]"
            />
          </Section>

          {/* Tax Section */}
          <Section
            title="Tax"
            description="Set the initial & final Tax you want"
          >
            <TaxSection title="Initial Tax" maxTax="15" />
            <TaxSection title="Final Tax" maxTax="5" />
          </Section>

          <p className="mt-5 mx-0 mb-0 leading-6 text-white/50 font-bold text-base sm:text-lg">
            A fixed 0.1ETH will be charged for creating the token. Please make
            sure you have enough ETH to cover the fee + gas cost.
          </p>
          <div className="flex items-center justify-center mt-[50px] sm:mt-20">
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50">
              Create a Token
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
