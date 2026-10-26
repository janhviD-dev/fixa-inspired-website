function BottomOption(){
    return (
      <>
        <div className="absolute bottom-10 left-10">
          <div className="text-4xl lg:text-5xl text-black font-bold opacity-70">
            <p>Choose your next step,</p>
            <p>whenever you’re ready</p>
          </div>

          <div className="flex gap-4  font-semibold mt-6">
            <div
              className="backdrop-blur-md bg-white/10 border border-white/30 
    rounded-xl px-5 py-3 shadow-lg"
            >
              Task Breakdown{" "}
            </div>

            <div
              className="backdrop-blur-md bg-white/10 border border-white/30 
    rounded-xl px-5 py-3 shadow-lg"
            >
              Brain Dump
            </div>

            <div
              className="backdrop-blur-md bg-white/10 border border-white/30 
    rounded-xl px-5 py-3 shadow-lg"
            >
              Priorities
            </div>
          </div>
        </div>
      </>
    );
}
export default BottomOption;