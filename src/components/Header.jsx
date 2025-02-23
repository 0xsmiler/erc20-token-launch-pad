const Header = () => {
  return (
    <header className="bg-black/50 w-screen h-[72px] sm:h-[100px] backdrop-blur fixed z-20">
      <div className="w-full mx-auto h-full flex items-center justify-between css-13lrvwv">
        <div className="flex items-center space-x-2">
          <img
            src="/logo512.png"
            alt="Token Automation Logo"
            className="w-[160px]"
          />
        </div>
        <div className="flex items-center">
          <button className="bg-black text-white px-6 py-2 rounded-full border border-white hover:bg-white hover:text-black transition-colors">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
