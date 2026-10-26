import { ChevronDown } from "lucide-react";
function FAQHeader2({ data, openIndex, toggle }) {
  return (
    <>
      <div className="space-y-4 mt-12 00 text-left">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-300 font-arimo font-semibold rounded-xl p-5 cursor-pointer shadow-sm transition hover:shadow-md"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{item.title}</h3>

              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-60 mt-4 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 text-sm lg:text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default FAQHeader2;
