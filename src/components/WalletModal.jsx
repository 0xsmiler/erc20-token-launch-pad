/* eslint-disable react/prop-types */
const WalletModal = ({ modalOpen, toggleModal, connectors, connect }) => {
  // Return null if the modal is not open to avoid rendering anything
  if (!modalOpen) return null;

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="bg-[#030b15] w-full max-w-[400px] rounded-xl shadow-lg p-6 mx-4 sm:mx-0 border border-white/10">
          {/* Modal Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white text-xl font-semibold">
              Connect a Wallet
            </h2>
            <button
              onClick={toggleModal}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Wallet List */}
          <div className="space-y-4">
            {connectors.map((connector) => (
              <button
                key={connector.id}
                onClick={() => {
                  connect({ connector });
                  toggleModal(); // Close modal after connecting
                }}
                className="w-full flex items-center justify-between bg-[#0b1d33] text-white px-4 py-3 rounded-md hover:bg-[#1F262F] transition-colors border border-white/5"
              >
                <img className="w-10 h-10" src={connector.icon} />
                <span>{connector.name}</span>
                {/* Optional: Add wallet icons if available */}
                <svg
                  className="w-5 h-5 text-cyan-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            ))}
          </div>

          {/* Optional Footer */}
          <p className="text-white/50 text-sm text-center mt-6">
            Select a wallet to connect securely.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
