function HeroPart(){
    return (
      <>
        <div className="absolute inset-0 mb-80 flex justify-end items-center px-10 lg:px-20">
          <div className="text-right">
            <h1 className="  text-4xl sm:text-5xl lg:text-7xl font-bold text-black opacity-40 leading-tight">
              For days when your brain
              <br />
              feels too loud.
            </h1>

            <button className="mt-6 bg-white text-black px-6 py-3 font-semibold rounded-xl hover:cursor-pointer transition">
              Join the waitlist
            </button>
          </div>
        </div>
      </>
    );
}
export default HeroPart;