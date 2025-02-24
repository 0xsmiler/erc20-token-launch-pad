/* eslint-disable react/prop-types */
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const InputField = forwardRef(({ 
  label, 
  placeholder, 
  type = "text", 
  required = false, 
  disabled = false, 
  value, 
  className = "", 
  onChange, 
}, ref) => (
  <div className={`w-full ${className}`}>
    <div className="flex items-center">
      <p className="text-nowrap text-white m-0 leading-6 text-sm sm:text-base">
        {label}
      </p>
      {required && (
        <p className="flex m-0 leading-6 text-red-500 text-sm sm:text-base">*</p>
      )}
    </div>
    <div
      className={`inline-flex leading-6 items-center relative mt-1 w-full p-5 rounded-md border border-solid border-white/5 ${
        disabled ? "bg-[#0b1d33]/40 text-[#6587b0]/70" : "bg-[#0b1d33] text-[#6587b0]"
      } h-12 text-sm sm:h-[60px] sm:text-base`}
    >
      <input
        ref={ref} // Forward the ref to the input element
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        value={value}
        onChange={onChange}
        readOnly={disabled}
        min={type === "number" ? 0 : undefined}
        className={`pt-1 pr-0 pb-1 pl-0 border-inherit ${
          disabled ? "bg-[#0b1d33]/5" : "bg-inherit"
        } h-6 m-0 block w-full outline-none placeholder:text-[#6587b0]/50`}
      />
    </div>
  </div>
));

export default InputField;