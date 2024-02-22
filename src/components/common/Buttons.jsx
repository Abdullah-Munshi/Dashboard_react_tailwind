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
      className="btn-primary border border-primary bg-primary text-white text-base font-bold px-4 py-4 rounded-xl"
    >
      {children}
    </button>
  );
};
