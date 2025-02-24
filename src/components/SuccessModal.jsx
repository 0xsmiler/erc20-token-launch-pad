/* eslint-disable react/prop-types */
import { useEffect } from "react";

const SuccessModal = ({ isOpen, onClose, tokenName, tokenSymbol, tokenSupply, tokenAddress, txHash }) => {
  useEffect(() => {
    if (isOpen) {
      // Focus the close button for accessibility
      const closeButton = document.querySelector(".success-modal-close");
      if (closeButton) closeButton.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#0D1B2A] p-6 rounded-lg shadow-lg max-w-md w-full text-white relative">
        <button
          className="success-modal-close absolute top-2 right-2 text-white text-xl font-bold hover:text-gray-200 focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <h3 className="text-lg font-bold text-green-500 mb-4">Well! Transaction Done!</h3>
        <p className="text-sm text-blue-300 mb-2">Transaction Hash:</p>
        <p className="text-sm text-blue-300 break-all mb-4">{txHash}</p>
        <div className="border-t border-gray-700 my-4"></div>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <p className="text-gray-400">YOUR TOKEN</p>
          <p className="text-gray-400">TOTAL SUPPLY</p>
          <p className="text-gray-400">ADDRESS</p>
          <p className="text-green-500 font-bold">{tokenName} ({tokenSymbol})</p>
          <p className="text-green-500 font-bold">{tokenSupply} {tokenSymbol}</p>
          <p className="text-green-500 font-bold break-all">{tokenAddress}</p>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            className="bg-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-orange-600 focus:outline-none"
            onClick={() => {
              // Logic to add token to MetaMask (example implementation)
              const token = {
                type: "ERC20",
                options: {
                  address: tokenAddress,
                  symbol: tokenSymbol,
                  decimals: 18, // Default for ERC20 tokens; adjust if different
                  image: "https://your-token-image-url.com", // Optional: Add your token image URL
                },
              };
              if (window.ethereum) {
                window.ethereum.request({
                  method: "wallet_watchAsset",
                  params: token,
                }).then((success) => {
                  if (success) {
                    console.log("Token added to MetaMask!");
                  } else {
                    console.log("Failed to add token to MetaMask.");
                  }
                }).catch(console.error);
              }
            }}
          >
            Add to MetaMask
          </button>
          <button
            className="bg-cyan-500 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-cyan-600 focus:outline-none"
            onClick={() => {
              // Logic to add liquidity on LiquiShield (example placeholder)
              console.log("Add Liquidity on LiquiShield clicked for token:", tokenAddress);
              // You would implement navigation or contract call here
            }}
          >
            Add Liquidity on LiquiShield
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;