const Detail = () => {
  return (
    <div className="py-[100px] px-0">
      <div className="w-full h-[540px] bg-[url(/header-background.png)] bg-top bg-cover bg-no-repeat flex flex-col items-center">
        <div className="mt-[200px] flex items-center">
          <p className="text-white text-[22px] sm:text-[42px] md:text-[55px] font-semibold text-nowrap m-0 leading-normal">
            Create Your
          </p>
          <p className="text-cyan-500 text-[22px] sm:text-[42px] md:text-[55px] font-semibold text-nowrap my-0 mx-4 leading-normal ">
            ERC20
          </p>
          <p className="text-white text-[22px] sm:text-[42px] md:text-[55px] font-semibold text-nowrap m-0 leading-normal">
            Token
          </p>
        </div>
        <p className="text-white py-0 px-2 text-sm leading-6 sm:px-3 sm:text-base sm:leading-7 md:px-0 md:text-lg md:leading-[30px] mt-[25px] mb-0 mx-0 w-full max-w-[760px] text-center font-normal">
          Easily deploy Smart Contract for an ERC20 Token on Ethereum. between
          several features like Mintable, , Deflationary, Taxable, and others,
          giving your token its unique identity. Login. No setup. No coding
          required.
        </p>
      </div>
      <div className="w-full mx-auto block sm:px-6 lg:max-w-[1200px]">
        <div className="mt-5 border border-solid border-transparent relative w-full h-16">
          <hr className="border-t-0 border-r-0 border-b border-l-0 border-solid my-8 mx-0 border-[#1F262F] "></hr>
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
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-col pt-[30px] sm:pt-[50px]">
          <div>
            <div>
              <p className="m-0 leading-6 text-cyan-500 font-semibold text-lg sm:text-xl">
                {" "}
                Token Details{" "}
              </p>
              <p className="m-0 leading-6 text-white/50 font-normal text-sm sm:text-base">
                {" "}
                Enter token details and choose a network{" "}
              </p>
            </div>
            <div className="flex items-center justify-between mt-10">
              <div className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]">
                <div className="flex items-center">
                  <p className="text-nowrap text-white m-0 leading-6 text-sm sm:text-base">
                    Token Name
                  </p>
                  <p className="flex m-0 leading-6 text-red-500 text-sm sm:text-base">
                    *
                  </p>
                </div>
                <div className="inline-flex leading-6 items-center relative mt-1 w-full p-5 rounded-md border border-solid border-white/5 bg-[#0b1d33] text-[#6587b0] h-12 text-sm sm:h-[60px] sm:text-base">
                  <input
                    placeholder="Enter your token name"
                    type="text"
                    className="pt-1 pr-0 pb-1 pl-0 border-inherit bg-inherit h-6 m-0 block w-full outline-none placeholder:text-[#6587b0]/50"
                  ></input>
                </div>
              </div>
              <div className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]">
                <div className="flex items-center">
                  <p className="text-nowrap text-white m-0 leading-6 text-sm sm:text-base">
                    Token Symbol
                  </p>
                  <p className="flex m-0 leading-6 text-red-500 text-sm sm:text-base">
                    *
                  </p>
                </div>
                <div className="inline-flex leading-6 items-center relative mt-1 w-full p-5 rounded-md border border-solid border-white/5 bg-[#0b1d33] text-[#6587b0] h-12 text-sm sm:h-[60px] sm:text-base">
                  <input
                    placeholder="Enter your token symbol"
                    type="text"
                    className="pt-1 pr-0 pb-1 pl-0 border-inherit bg-inherit h-6 m-0 block w-full outline-none placeholder:text-[#6587b0]/50"
                  ></input>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="w-full flex items-center">
                <p className="text-nowrap text-white m-0 leading-6 text-sm sm:text-base">
                  Token Supply
                </p>
                <p className="flex m-0 leading-6 text-red-500 text-sm sm:text-base">
                  *
                </p>
              </div>
              <div className="inline-flex leading-6 items-center relative mt-1 w-full p-5 rounded-md border border-solid border-white/5 bg-[#0b1d33] text-[#6587b0] h-12 text-sm sm:h-[60px] sm:text-base">
                <input
                  placeholder="Enter your token supply"
                  type="number"
                  min={1}
                  className="pt-1 pr-0 pb-1 pl-0 border-inherit bg-inherit h-6 m-0 block w-full outline-none placeholder:text-[#6587b0]/50"
                ></input>
              </div>
            </div>
          </div>
          <div className="mt-[100px]">
            <div>
              <p className="m-0 leading-6 text-cyan-500 font-semibold text-lg sm:text-xl">
                {" "}
                Wallet & DEX Address{" "}
              </p>
              <p className="m-0 leading-6 text-white/50 font-normal text-sm sm:text-base">
                {" "}
                Let us know your wallet information and dex address{" "}
              </p>
            </div>
            <div className="flex items-center justify-between mt-10">
              <div className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]">
                <div className="flex items-center">
                  <p className="text-nowrap text-white m-0 leading-6 text-sm sm:text-base">
                    Max Wallet
                  </p>
                </div>
                <div className="inline-flex leading-6 items-center relative mt-1 w-full p-5 rounded-md border border-solid border-white/5 bg-[#0b1d33]/40 text-[#6587b0]/70 h-12 text-sm sm:h-[60px] sm:text-base">
                  <input
                    disabled
                    value="2%"
                    type="text"
                    className="pt-1 pr-0 pb-1 pl-0 border-inherit bg-[#0b1d33]/5 h-6 m-0 block w-full outline-none"
                  ></input>
                </div>
              </div>
              <div className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]">
                <div className="flex items-center">
                  <p className="text-nowrap text-white m-0 leading-6 text-sm sm:text-base">
                    Marketing Wallet
                  </p>
                  <p className="flex m-0 leading-6 text-red-500 text-sm sm:text-base">
                    *
                  </p>
                </div>
                <div className="inline-flex leading-6 items-center relative mt-1 w-full p-5 rounded-md border border-solid border-white/5 bg-[#0b1d33] text-[#6587b0] h-12 text-sm sm:h-[60px] sm:text-base">
                  <input
                    placeholder="Enter your token symbol"
                    type="text"
                    className="pt-1 pr-0 pb-1 pl-0 border-inherit bg-inherit h-6 m-0 block w-full outline-none placeholder:text-[#6587b0]/50"
                  ></input>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]">
                <div className="flex items-center">
                  <p className="text-nowrap text-white m-0 leading-6 text-sm sm:text-base">
                    Max Transaction
                  </p>
                </div>
                <div className="inline-flex leading-6 items-center relative mt-1 w-full p-5 rounded-md border border-solid border-white/5 bg-[#0b1d33]/40 text-[#6587b0]/70 h-12 text-sm sm:h-[60px] sm:text-base">
                  <input
                    disabled
                    value="2%"
                    type="text"
                    className="pt-1 pr-0 pb-1 pl-0 border-inherit bg-[#0b1d33]/5 h-6 m-0 block w-full outline-none"
                  ></input>
                </div>
              </div>
              <div className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]">
                <div className="flex items-center">
                  <p className="text-nowrap text-white m-0 leading-6 text-sm sm:text-base">
                    Development Wallet
                  </p>
                </div>
                <div className="inline-flex leading-6 items-center relative mt-1 w-full p-5 rounded-md border border-solid border-white/5 bg-[#0b1d33]/40 text-[#6587b0]/70 h-12 text-sm sm:h-[60px] sm:text-base">
                  <input
                    disabled
                    value="0xE290F416428cc79d5C701100d1776BCB78527423"
                    type="text"
                    className="pt-1 pr-0 pb-1 pl-0 border-inherit bg-[#0b1d33]/5 h-6 m-0 block w-full outline-none placeholder:text-[#6587b0]/50"
                  ></input>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]">
                <div className="flex items-center">
                  <p className="text-nowrap text-white m-0 leading-6 text-sm sm:text-base">
                    Router DEX Address
                  </p>
                </div>
                <div className="inline-flex leading-6 items-center relative mt-1 w-full p-5 rounded-md border border-solid border-white/5 bg-[#0b1d33]/40 text-[#6587b0]/70 h-12 text-sm sm:h-[60px] sm:text-base">
                  <input
                    disabled
                    value="0x5FE315412D1AC145312531322F1B122EF2A"
                    type="text"
                    className="pt-1 pr-0 pb-1 pl-0 border-inherit bg-[#0b1d33]/5 h-6 m-0 block w-full outline-none"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[80px] sm:mt-[100px]">
            <div>
              <p className="m-0 leading-6 text-cyan-500 font-semibold text-lg sm:text-xl">
                Contact Information
              </p>
              <p className="m-0 leading-6 text-white/50 font-normal text-sm sm:text-base">
                Enter social links to show your tokenomics
              </p>
            </div>
            <div className="flex items-center justify-between mt-10">
              <div className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]">
                <div className="flex items-center">
                  <p className="text-nowrap text-white m-0 leading-6 text-sm sm:text-base">
                    Website
                  </p>
                </div>
                <div className="inline-flex leading-6 items-center relative mt-1 w-full p-5 rounded-md border border-solid border-white/5 bg-[#0b1d33] text-[#6587b0] h-12 text-sm sm:h-[60px] sm:text-base">
                  <input
                    placeholder="https://yourwebsite.com"
                    type="text"
                    className="pt-1 pr-0 pb-1 pl-0 border-inherit bg-inherit h-6 m-0 block w-full outline-none placeholder:text-[#6587b0]/50"
                  ></input>
                </div>
              </div>
              <div className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)]">
                <div className="flex items-center">
                  <p className="text-nowrap text-white m-0 leading-6 text-sm sm:text-base">
                    Telegram
                  </p>
                </div>
                <div className="inline-flex leading-6 items-center relative mt-1 w-full p-5 rounded-md border border-solid border-white/5 bg-[#0b1d33] text-[#6587b0] h-12 text-sm sm:h-[60px] sm:text-base">
                  <input
                    placeholder="https://t.me/@"
                    type="text"
                    className="pt-1 pr-0 pb-1 pl-0 border-inherit bg-inherit h-6 m-0 block w-full outline-none placeholder:text-[#6587b0]/50"
                  ></input>
                </div>
              </div>
            </div>
            <div className="w-[calc(50%-10px)] sm:w-[calc(50%-20px)] lg:w-[calc(50%-30px)] mt-5">
              <div className="flex items-center">
                <p className="text-nowrap text-white m-0 leading-6 text-sm sm:text-base">
                  Twitter
                </p>
              </div>
              <div className="inline-flex leading-6 items-center relative mt-1 w-full p-5 rounded-md border border-solid border-white/5 bg-[#0b1d33] text-[#6587b0] h-12 text-sm sm:h-[60px] sm:text-base">
                <input
                  placeholder="https://twitter.com/@"
                  type="text"
                  className="pt-1 pr-0 pb-1 pl-0 border-inherit bg-inherit h-6 m-0 block w-full outline-none placeholder:text-[#6587b0]/50"
                ></input>
              </div>
            </div>
          </div>
          <div className="mt-[80px] sm:mt-[100px]">
            <div>
              <p className="m-0 leading-6 text-cyan-500 font-semibold text-lg sm:text-xl">
                Tax
              </p>
              <p className="m-0 leading-6 text-white/50 font-normal text-sm sm:text-base">
                Set the initial & final Tax you want
              </p>
            </div>
            <div className="relative w-full max-w-[1000px] rounded-xl border border-solid border-[#172331] flex items-center justify-between mt-10 pt-5 pr-5 flex-col pb-[70px] pl-5 sm:pt-[50px] sm:pr-[30px] sm:pb-20 sm:pl-[30px] sm:flex-row lg:pt-[50px] lg:pr-[50px] lg:pb-20 lg:pl-[50px]">
              <p className="m-0 leading-6 text-white absolute left-[50px] -top-[14px] py-0 px-[5px] text-lg font-bold">
                Initial Tax
              </p>
              <div className="mt-2.5 w-full sm:w-[30%] lg:w-[calc(30%-10px)]">
                <div className="flex items-center mt-2.5 w-full sm:w-[30%] lg:w-[calc(30%-10px)]">
                  <p className="text-nowrap text-white m-0 leading-6 text-sm sm:text-base">
                    Marketing
                  </p>
                </div>
                <div className="inline-flex leading-6 items-center relative mt-1 w-full p-5 rounded-md border border-solid border-white/5 bg-[#0b1d33] text-[#6587b0] h-12 text-sm sm:h-[60px] sm:text-base">
                  <input
                    placeholder="0"
                    min={0}
                    type="number"
                    className="pt-1 pr-0 pb-1 pl-0 border-inherit bg-inherit h-6 m-0 block w-full outline-none placeholder:text-[#6587b0]/50"
                  ></input>
                </div>
              </div>
              <div className="mt-2.5 w-full sm:w-[30%] lg:w-[calc(30%-10px)]">
                <div className="flex items-center mt-2.5 w-full sm:w-[30%] lg:w-[calc(30%-10px)]">
                  <p className="text-nowrap text-white m-0 leading-6 text-sm sm:text-base">
                    Development
                  </p>
                </div>
                <div className="inline-flex leading-6 items-center relative mt-1 w-full p-5 rounded-md border border-solid border-white/5 bg-[#0b1d33] text-[#6587b0] h-12 text-sm sm:h-[60px] sm:text-base">
                  <input
                    placeholder="0"
                    min={0}
                    type="number"
                    className="pt-1 pr-0 pb-1 pl-0 border-inherit bg-inherit h-6 m-0 block w-full outline-none placeholder:text-[#6587b0]/50"
                  ></input>
                </div>
              </div>
              <div className="mt-2.5 w-full sm:w-[30%] lg:w-[calc(30%-10px)]">
                <div className="flex items-center mt-2.5 w-full sm:w-[30%] lg:w-[calc(30%-10px)]">
                  <p className="text-nowrap text-white m-0 leading-6 text-sm sm:text-base">
                    Liquidity Pool
                  </p>
                </div>
                <div className="inline-flex leading-6 items-center relative mt-1 w-full p-5 rounded-md border border-solid border-white/5 bg-[#0b1d33] text-[#6587b0] h-12 text-sm sm:h-[60px] sm:text-base">
                  <input
                    placeholder="0"
                    min={0}
                    type="number"
                    className="pt-1 pr-0 pb-1 pl-0 border-inherit bg-inherit h-6 m-0 block w-full outline-none placeholder:text-[#6587b0]/50"
                  ></input>
                </div>
              </div>
              <p className="absolute m-0 leading-6 text-white/50 font-normal text-sm w-[calc(100%-40px)] bottom-[10px] sm:text-base sm:w-[calc(100%-60px)] lg:w-[calc(100%-100px)]">
                Initial Tax cannot be greater than 15%.
              </p>
            </div>
            <div className="relative w-full max-w-[1000px] rounded-xl border border-solid border-[#172331] flex items-center justify-between mt-10 pt-5 pr-5 flex-col pb-[70px] pl-5 sm:pt-[50px] sm:pr-[30px] sm:pb-20 sm:pl-[30px] sm:flex-row lg:pt-[50px] lg:pr-[50px] lg:pb-20 lg:pl-[50px]">
              <p className="m-0 leading-6 text-white absolute left-[50px] -top-[14px] py-0 px-[5px] text-lg font-bold">
                Final Tax
              </p>
              <div className="mt-2.5 w-full sm:w-[30%] lg:w-[calc(30%-10px)]">
                <div className="flex items-center mt-2.5 w-full sm:w-[30%] lg:w-[calc(30%-10px)]">
                  <p className="text-nowrap text-white m-0 leading-6 text-sm sm:text-base">
                    Marketing
                  </p>
                </div>
                <div className="inline-flex leading-6 items-center relative mt-1 w-full p-5 rounded-md border border-solid border-white/5 bg-[#0b1d33] text-[#6587b0] h-12 text-sm sm:h-[60px] sm:text-base">
                  <input
                    placeholder="0"
                    min={0}
                    type="number"
                    className="pt-1 pr-0 pb-1 pl-0 border-inherit bg-inherit h-6 m-0 block w-full outline-none placeholder:text-[#6587b0]/50"
                  ></input>
                </div>
              </div>
              <div className="mt-2.5 w-full sm:w-[30%] lg:w-[calc(30%-10px)]">
                <div className="flex items-center mt-2.5 w-full sm:w-[30%] lg:w-[calc(30%-10px)]">
                  <p className="text-nowrap text-white m-0 leading-6 text-sm sm:text-base">
                    Development
                  </p>
                </div>
                <div className="inline-flex leading-6 items-center relative mt-1 w-full p-5 rounded-md border border-solid border-white/5 bg-[#0b1d33] text-[#6587b0] h-12 text-sm sm:h-[60px] sm:text-base">
                  <input
                    placeholder="0"
                    min={0}
                    type="number"
                    className="pt-1 pr-0 pb-1 pl-0 border-inherit bg-inherit h-6 m-0 block w-full outline-none placeholder:text-[#6587b0]/50"
                  ></input>
                </div>
              </div>
              <div className="mt-2.5 w-full sm:w-[30%] lg:w-[calc(30%-10px)]">
                <div className="flex items-center mt-2.5 w-full sm:w-[30%] lg:w-[calc(30%-10px)]">
                  <p className="text-nowrap text-white m-0 leading-6 text-sm sm:text-base">
                    Liquidity Pool
                  </p>
                </div>
                <div className="inline-flex leading-6 items-center relative mt-1 w-full p-5 rounded-md border border-solid border-white/5 bg-[#0b1d33] text-[#6587b0] h-12 text-sm sm:h-[60px] sm:text-base">
                  <input
                    placeholder="0"
                    min={0}
                    type="number"
                    className="pt-1 pr-0 pb-1 pl-0 border-inherit bg-inherit h-6 m-0 block w-full outline-none placeholder:text-[#6587b0]/50"
                  ></input>
                </div>
              </div>
              <p className="absolute m-0 leading-6 text-white/50 font-normal text-sm w-[calc(100%-40px)] bottom-[10px] sm:text-base sm:w-[calc(100%-60px)] lg:w-[calc(100%-100px)]">
                Final Tax cannot be greater than 5%.
              </p>
            </div>
          </div>
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
