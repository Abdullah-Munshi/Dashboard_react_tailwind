export const TitlePrimary = ({ children }) => {
  return (
    <h2 className="text-richBlack text-2xl xl:text-[32px] font-medium">
      {children}
    </h2>
  );
};
export const TitleSecondary = ({ variant, children }) => {
  let classes;
  switch (variant) {
    case "light-blue":
      classes = "bg-[#B1E5FC]";
      break;
    case "light-orange":
      classes = "bg-[#FFBC99]";
      break;
    default:
      classes = "bg-[#B1E5FC]";
  }
  return (
    <h2 className="text-[#1A1D1F] text-xl font-semibold inline-flex items-center">
      <span
        className={`${classes} w-4 h-8 rounded-sm inline-block mr-3`}
      ></span>
      {children}
    </h2>
  );
};
export const CommonCard = ({ children }) => {
  return (
    <div className="bg-[#FCFCFC] rounded-lg px-4 py-5 md:p-6">{children}</div>
  );
};
