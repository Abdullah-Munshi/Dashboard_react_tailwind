export const Button = ({ variant, type, classes, onClick, children }) => {
  let dynamicClass = classes;
  switch (variant) {
    case "cyan":
      dynamicClass +=
        " bg-gradient-to-b from-[#1CE9E4] to-[#07918E] after:bg-[#036361]";
      break;
    case "pink":
      dynamicClass +=
        " bg-gradient-to-b from-[#B404D0] to-[#710084] after:bg-[#36003E]";
      break;
    case "green":
      dynamicClass +=
        " bg-gradient-to-b from-[#C1FF72] to-[#60AB00] after:bg-[#426E0A]";
      break;
    case "gray":
      dynamicClass +=
        " bg-gradient-to-b from-[#ffffff] to-[#BFBFBF] after:bg-[#888888]";
      break;
    default:
      dynamicClass += " bg-gradient-to-b from-[#1CE9E4] to-[#07918E]";
  }
  return (
    <button
      onClick={onClick}
      type={type ? type : "button"}
      className={`${dynamicClass} text-white rounded-2xl font-russoOne uppercase text-lg md:text-xl leading-tight px-8 pb-[22px] pt-[20px] text-shadow-1 relative after:w-full after:h-[4px] after:absolute after:bottom-0 after:left-0 overflow-hidden h-[68px] md:h-auto`}
    >
      {children}
    </button>
  );
};

export const TitlePrimary = ({ children }) => {
  return <h2 className="text-richBlack text-[32px] font-medium">{children}</h2>;
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
  return <div className="bg-[#FCFCFC] rounded-lg p-6">{children}</div>;
};
export const Overlay = ({ overlay }) => {
  return (
    <div
      className={`${
        overlay ? "opacity-100 visible" : "opacity-0 invisible"
      } fixed w-screen h-screen top-0 left-0 right-0 bg-black/60 transition duration-300 z-40 `}
    ></div>
  );
};
