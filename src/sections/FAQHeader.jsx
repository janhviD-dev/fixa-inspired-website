function FAQHeader(){
    return (
      <>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 mb-12">
          <div
            className="bg-gray-500/20 backdrop-blur-md text-gray-500 
                  font-semibold rounded px-4 py-1 text-sm w-fit"
          >
            FAQ
          </div>

          <p
            className="text-3xl lg:text-3xl text-gray-500 font-bold font-arimo 
                leading-relaxed text-center lg:text-left max-w-2xl"
          >
            We’re here to help. If you didn’t find the answer to your question,
            <span className="bg-white px-2 py-1 rounded text-black font-semibold mx-2">
              email=
            </span>
            us anytime.
          </p>
        </div>
      </>
    );
}
export default FAQHeader;