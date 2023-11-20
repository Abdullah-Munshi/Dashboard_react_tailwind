export const TitlePrimary = ({ children }) => {
  return (
    <h2 className="text-[#1C1B18] text-[28px] font-Bungee font-bold uppercase mb-5">
      {children}
    </h2>
  );
};

export const TitleSecondary = ({ children }) => {
  return (
    <h3 className="bg-gradient-gold text-secondary bg-clip-text text-transparent uppercase font-Bungee text-2xl m-0">
      {children}
    </h3>
  );
};
export const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export const CardBlack = ({ children }) => {
  return (
    <div className="bg-black border-[3px] border-secondary rounded-2xl_next shadow-one">
      {children}
    </div>
  );
};

export const CardGold = ({ children }) => {
  return (
    <div className="bg-gradient-gold border-[3px] border-[#2E2E2D] rounded-2xl_next shadow-one">
      {children}
    </div>
  );
};
