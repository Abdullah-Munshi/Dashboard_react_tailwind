export const ButtonGray = ({ children, onClick }) => {
  return (
    <button
      onClick={onclick}
      className="btn-gray bg-[#474747] text-white text-sm font-bold px-6 py-3 rounded-lg_next"
    >
      {children}
    </button>
  );
};

export const ButtonPrimary = ({ children, onClick }) => {
  return (
    <button
      onClick={onclick}
      className="btn-primary border border-primary bg-primary text-white text-base font-bold px-4 py-4 rounded-xl"
    >
      {children}
    </button>
  );
};

export const ButtonPrimaryOutline = ({ children, onClick }) => {
  return (
    <button
      onClick={onclick}
      className="btn-primary-outline border border-primary bg-transparent text-white text-base font-bold px-5 py-4 rounded-xl"
    >
      {children}
    </button>
  );
};

export const ButtonPrimaryType2 = ({ children, onClick }) => {
  return (
    <button
      onClick={onclick}
      className="btn-primary border border-primary bg-primary text-white text-base font-bold px-4 py-[14px] rounded-xl flex items-center justify-between min-w-[245px]"
    >
      {children}
    </button>
  );
};

export const ButtonPrimaryGradient = ({ children, onClick }) => {
  return (
    <button
      onClick={onclick}
      className="btn-primary bg-gradient-to-b from-[#52B86E] to-[#3E9055] text-white text-base font-bold px-4 py-4 rounded-xl"
    >
      {children}
    </button>
  );
};
