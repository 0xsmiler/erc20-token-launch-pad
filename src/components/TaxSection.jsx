/* eslint-disable react/prop-types */
import InputField from "./InputField";

const TaxSection = ({ title, maxTax }) => (
    <div className="relative w-full max-w-[1000px] rounded-xl border border-solid border-[#172331] flex items-center justify-between mt-10 pt-5 pr-5 flex-col pb-[70px] pl-5 sm:pt-[50px] sm:pr-[30px] sm:pb-20 sm:pl-[30px] sm:flex-row lg:pt-[50px] lg:pr-[50px] lg:pb-20 lg:pl-[50px]">
      <p className="m-0 leading-6 text-white absolute left-[50px] -top-[14px] py-0 px-[5px] text-lg font-bold">
        {title}
      </p>
      <InputField label="Marketing" placeholder="0" type="number" className="mt-2.5 w-full sm:w-[30%] lg:w-[calc(30%-10px)]" />
      <InputField label="Development" placeholder="0" type="number" className="mt-2.5 w-full sm:w-[30%] lg:w-[calc(30%-10px)]" />
      <InputField label="Liquidity Pool" placeholder="0" type="number" className="mt-2.5 w-full sm:w-[30%] lg:w-[calc(30%-10px)]" />
      <p className="absolute m-0 leading-6 text-white/50 font-normal text-sm w-[calc(100%-40px)] bottom-[10px] sm:text-base sm:w-[calc(100%-60px)] lg:w-[calc(100%-100px)]">
        {title} cannot be greater than {maxTax}%.
      </p>
    </div>
  );

export default TaxSection;