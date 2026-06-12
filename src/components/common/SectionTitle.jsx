const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="mb-20">
      <p className="text-[#7D7D7D] uppercase tracking-[6px] text-sm mb-4">
        {subtitle}
      </p>

      <h2 className="text-5xl md:text-7xl font-light uppercase leading-none">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;