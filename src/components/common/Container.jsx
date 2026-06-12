const Container = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
      {children}
    </div>
  );
};

export default Container;