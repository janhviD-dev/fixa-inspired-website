import { useState } from "react";
import { ChevronDown } from "lucide-react";
import img1 from "../assets/Alogo.webp";
import img2 from "../assets/Alogo2.avif";
import img3 from "../assets/Alogo3.avif";
import AIList from "../sections/AIList";
import AIHeaderSec from "../sections/AIHeaderSec";
import AIImageView from "../sections/AIImageView";

function Page3() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "Talk like a human",
      desc: "Fixa AI is your personal productivity assistant that helps you plan your day without overwhelm.",
      img: img1,
    },
    {
      title: "Always one step ahead",
      desc: "You do not need to explain the details. Fixa AI understands the task, picks the right category, and estimates how long it will take.",
      img: img2,
    },
    {
      title: "Smart understanding",
      desc: "It automatically breaks your work into simple steps so you can focus better and stress less.",
      img: img3,
    },
  ];

  return (
    <div className="bg-black text-white px-10 py-20">
      <AIHeaderSec />

      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        <AIList data={data} openIndex={openIndex} toggle={toggle} />
        <AIImageView data={data} openIndex={openIndex} />
      </div>
    </div>
  );
}

export default Page3;
