/* eslint-disable react/prop-types */
const Section = ({ title, description, children }) => (
    <div className="mt-[80px] sm:mt-[100px]">
      <div>
        <p className="m-0 leading-6 text-cyan-500 font-semibold text-lg sm:text-xl">
          {title}
        </p>
        <p className="m-0 leading-6 text-white/50 font-normal text-sm sm:text-base">
          {description}
        </p>
      </div>
      {children}
    </div>
  );

  export default Section;