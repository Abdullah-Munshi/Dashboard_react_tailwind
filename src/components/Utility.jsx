export const TitlePrimary = ({ children }) => {
  return (
    <h2 className='text-white shadow-1 text-2xl xl:text-4xl translate-y-1 font-longshotRegular font-normal tracking-[3.1px]'>
      {children}
    </h2>
  );
};

export const TitlePrimaryTwo = ({ children }) => {
  return (
    <h2 className='text-primary shadow-1 text-2xl xl:text-4xl translate-y-1 font-longshotRegular font-normal tracking-[1.8px]'>
      {children}
    </h2>
  );
};

export const TitleSecondary = ({ children }) => {
  return (
    <h2 className='text-primary uppercase text-2xl translate-y-1 font-longshotRegular font-normal tracking-[1.5px]'>
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
