function H1({upperRef}){
    
      return(

        <>
        <div className="absolute flex justify-center w-full  z-10">
        <button
          ref={upperRef}
          className="bg-white text-black text-2xl md:text-3xl font-semibold mt-10 py-3 px-6 rounded-xl shadow-lg"
        >
          Fixa.
        </button>
      </div>
      
    </>
      );

}
export default H1;
