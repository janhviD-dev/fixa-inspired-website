import img from "../assets/web.avif";

function HeroImageSection() {
  return (
    <div className="relative w-full h-screen">
      <img
        src={img}
        alt="bg"
        className="rounded-2xl px-3 w-full h-full mt-20 sm:mt-20 mb:mt-20 md:mt-20 lg:mt-30 object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-10">
        <div
          className="
          backdrop-blur-xl
          bg-white/10
          border border-white/20
          rounded-3xl
          w-80
          text-white
          shadow-xl
        "
        >
          <h2 className="text-xl font-semibold mb-6 text-center">Anxiety</h2>

          <div className="w-full h-3 bg-white/20 rounded-full">
            <div className="h-3 bg-white/70 rounded-full w-[35%]"></div>
          </div>

          <p className="text-center mt-4 text-sm opacity-80">35% Active</p>
        </div>

        <div
          className="
          backdrop-blur-xl
          bg-white/10
          border border-white/20
          rounded-3xl
          w-80
          text-white
          shadow-xl
        "
        >
          <h2 className="text-xl font-semibold mb-6 text-center">
            Productivity
          </h2>

          <div className="w-full h-3 bg-white/20 rounded-full">
            <div className="h-3 bg-white/70 rounded-full w-[70%]"></div>
          </div>

          <p className="text-center mt-4 text-sm opacity-80">70% Focused</p>
        </div>
      </div>
    </div>
  );
}

export default HeroImageSection;
