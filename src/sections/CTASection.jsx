function CTASection({ ctaRef }) {
  return (
    <div
      ref={ctaRef}
      className="mt-30 py-4 px-6 rounded-2xl bg-black/60 backdrop-blur-lg
      flex flex-col sm:flex-row items-center gap-4 shadow-xl"
    >
      <span className="text-sm md:text-base font-arimo text-semibold">
        No clutter. No complicated setup. Just your day.
      </span>

      <button className="bg-white text-black font-semibold px-5 py-2 rounded-lg hover:scale-105 transition">
        Join the waitlist
      </button>
    </div>
  );
}

export default CTASection;
