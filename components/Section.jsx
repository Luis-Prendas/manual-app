const Section = ({ children }) => {
  return (
    <section className="relative p-4 w-full max-w-[1000px] flex-col bg-stone-800 min-h-[500px] rounded flex justify-center items-center gap-4 shadow-xl shadow-stone-900/25">
      {children}
    </section>
  );
};

export default Section
