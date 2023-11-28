export const TitlePrimary = ({ children }) => {
  return (
    <h2 className='text-[#123377] text-stroke text-shadow-two text-2xl xl:text-[28px] font-trunoSemibold font-bold mb-5'>
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
