function IntroText() {
  return (
    <>
      <p className="sm:mt-20 font-semibold sm:ml-5 text-black lg:flex lg:ml-80 lg:text-3xl">
        Here, you stop fighting your brain
      </p>

      <p className="font-arimo font-semibold text-black lg:flex sm:ml-6 lg:ml-80 lg:text-3xl">
        and start working with it.
      </p>

      <p
        className="font-arimo text-gray-400
        mt-6 ml-4 text-base
        sm:mt-10 sm:ml-8 sm:text-3xl
        lg:mt-12 lg:ml-80 lg:text-3xl
        max-w-3xl leading-relaxed"
      >
        We provide clear tools designed specifically for people with ADHD More.
        <span className="bg-white py-1 px-2 rounded-xl cursor-pointer text-black ml-2">
          calm inside
        </span>
        — More
        <span className="bg-white py-1 px-2 rounded-xl cursor-pointer text-black ml-2">
          impact outside
        </span>
      </p>
    </>
  );
}

export default IntroText;
