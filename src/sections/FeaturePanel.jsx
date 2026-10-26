function FeaturePanel({ features = [], active, leftPinRef }) {
  return (
    <>
      <div ref={leftPinRef} className="h-screen flex flex-col justify-center">
        <h1 className="text-5xl font-semibold mb-10">
          Tools that work with
          <br />
          your mind,
          <br />
          not against it
        </h1>

        <div className="hidden lg:flex flex-col gap-3">
          {features.map((f, i) => (
            <div
              key={i}
              className={`backdrop-blur-xl border border-white/20 rounded-xl px-4 py-2 w-fit transition-all duration-300
                ${
                  active === i
                    ? "bg-white/20 opacity-100"
                    : "bg-white/10 opacity-40"
                }`}
            >
              {f.title}
            </div>
          ))}
        </div>

        <button className="mt-20 bg-white text-black px-3 py-3 rounded-full">
          Join the waitlist
        </button>
      </div>
    </>
  );
}
export default FeaturePanel; 