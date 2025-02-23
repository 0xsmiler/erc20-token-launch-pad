import { useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import WalletModal from "./WalletModal";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { connectors, connect } = useConnect();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <header className="bg-black/70 w-screen h-[72px] sm:h-[100px] backdrop-blur-sm fixed top-0 z-[100]">
        <div className="w-full mx-auto h-full flex items-center justify-between css-13lrvwv">
          <div className="flex items-center space-x-2">
            <img
              src="/logo512.png"
              alt="Token Automation Logo"
              className="w-[160px]"
            />
          </div>
          <div className="flex items-center">
            {isConnected ? (
              <button
                onClick={() => disconnect()}
                className="bg-black text-white px-6 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors"
              >
                {address.slice(0, 6)}...{address.slice(-4)}
              </button>
            ) : (
              <button
                onClick={toggleModal}
                className="bg-black text-white px-6 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </header>
      <WalletModal
        modalOpen={modalOpen}
        toggleModal={toggleModal}
        connectors={connectors}
        connect={connect}
      />
    </>
  );
};

export default Header;
