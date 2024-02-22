import bgViewportTrans from "../../assets/bg-viewport-trans.png";
export const Viewport = ({ children }) => {
  return (
    <div
      className="min-h-screen bg-[#111111] bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${bgViewportTrans})` }}
    >
      {children}
    </div>
  );
};

export const Container = ({ children }) => {
  return (
    <div className="w-full max-w-full px-4 md:px-6  lg:px-8">{children}</div>
  );
};

export const ContentBox = ({ children }) => {
  return <div className="bg-[#353535] p-6 rounded-lg_next">{children}</div>;
};
