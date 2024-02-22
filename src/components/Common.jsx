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

export const TableTitle = ({ title, buttonText }) => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-primary font-bold text-base">{title}</h3>
      <Button variant="gray" classes="btn-size-2">
        {buttonText}
      </Button>
    </div>
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
