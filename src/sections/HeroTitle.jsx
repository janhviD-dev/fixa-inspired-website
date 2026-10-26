function HeroTitle({ titleRef }) {
  return (
    <div ref={titleRef}>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold">
        Plan your day
      </h1>

      <h1 className="text-5xl md:text-6xl lg:text-7xl flex gap-4 justify-center">
        without
        <span className="font-dancing">overwhelm</span>
      </h1>
    </div>
  );
}

export default HeroTitle;
