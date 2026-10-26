function HeroSubtitle({ subtitleRef }) {
  return (
    <div
      ref={subtitleRef}
      className="mt-10 text-lg md:text-2xl font-arimo font-bold opacity-90"
    >
      <p>Fixa is a simple, ADHD-friendly planner</p>
      <p>that turns your thoughts into a clear plan</p>
    </div>
  );
}

export default HeroSubtitle;
