export const TitlePrimary = ({ children }) => {
  return (
    <h2 className='text-white text-2xl font-ibm-plex-sans font-bold leading-tight'>
      {children}
    </h2>
  );
};

export const TitleSecondary = ({ children }) => {
  return (
    <h3 className='bg-gradient-gold text-secondary bg-clip-text text-transparent uppercase font-Bungee text-2xl m-0'>
      {children}
    </h3>
  );
};
export const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
