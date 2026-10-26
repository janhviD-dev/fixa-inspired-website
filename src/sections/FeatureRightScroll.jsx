import img from "../assets/glass1.webp";
function FeatureRightScroll({ features = [] }) {
  return <>
  <div className="space-y-[80vh]">
          {features.map((feature, i) => (
            <div
              key={i}
              className="featureStep flex flex-col items-center text-center"
            >
              <div
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-xl
                flex flex-col items-center text-center px-6 py-12 transition-all duration-500"
              >
                <p className="text-xl mb-">{feature.title}</p>

                <img src={img} alt="" className="w-40 mb-4 rounded-xl" />

                <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      
  </>;
}
export default FeatureRightScroll;
