
import { ChevronDown } from "lucide-react";
function AIList({ data, openIndex, toggle }) {
  return (
    <>
      <div className="flex-1 space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-800 rounded-xl p-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">{item.title}</h2>

              <span
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <ChevronDown />
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 mt-3 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-300 text-sm lg:text-lg">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default AIList;