import { useState } from "react";
import FAQHeader from "../sections/FAQHeader";
import FAQHeader2 from "../sections/FAQHeader2";
import BigSection from "../sections/BigSection";

function Page5() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "Is Fixa made for people with ADHD?",
      desc: "Fixa is designed with ADHD-friendly planning in mind: low-friction task creation, less visual noise, and a structure that helps you start without overthinking. It’s not a perfect productivity system — it’s a calmer way to move through your day.",
    },
    {
      title: "Will Fixa help me stay focused?",
      desc: "Yes. Fixa includes focus tools like a timer to help you stay in the zone. But the bigger difference is how the app feels: fewer distractions, fewer decisions, and a calmer interface that makes it easier to keep going.",
    },
    {
      title: "Can Fixa replace my to-do apps?",
      desc: "Fixa is designed with ADHD-friendly planning in mind: low-friction task creation, less visual noise, and a structure that helps you start without overthinking. It’s not a perfect productivity system — it’s a calmer way to move through your day.",
    },
  ];

  return (
    <div className="realtive ">
      <section className="bg-gray-200 text-black py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FAQHeader />
          <FAQHeader2 data={data} openIndex={openIndex} toggle={toggle} />
          <BigSection/>
        </div>
      </section>

      <div className=" bg-black rounded-4xl mb-80 py-10"></div>
    </div>
  );
}

export default Page5;
