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
    default:
      dynamicClass += " bg-gradient-to-b from-[#1CE9E4] to-[#07918E]";
  }
  return (
    <button
      onClick={onClick}
      type={type ? type : "button"}
      className={`${dynamicClass} text-white rounded-2xl font-russoOne uppercase text-lg md:text-xl leading-tight px-8 pb-6 pt-[22px] text-shadow-1 relative after:w-full after:h-[4px] after:absolute after:bottom-0 after:left-0 overflow-hidden`}
    >
      {children}
    </button>
  );
};

export const TitlePrimary = ({ children }) => {
  return (
    <h2 className="text-white shadow-1 text-2xl xl:text-4xl translate-y-1 font-longshotRegular font-normal tracking-[3.1px]">
      {children}
    </h2>
  );
};

export const TitlePrimaryTwo = ({ children }) => {
  return (
    <h2 className="text-primary shadow-1 text-2xl xl:text-4xl translate-y-1 font-longshotRegular font-normal tracking-[1.8px]">
      {children}
    </h2>
  );
};

export const TitleSecondary = ({ children }) => {
  return (
    <h2 className="text-primary uppercase text-2xl translate-y-1 font-longshotRegular font-normal tracking-[1.5px]">
      {children}
    </h2>
  );
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

export const BlkContainer = ({ children, className }) => {
  return <div className={`blk-container ${className}`}>{children}</div>;
};
