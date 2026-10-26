import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeaturePanel from "../sections/FeaturePanel";
import FeatureRightScroll from "../sections/FeatureRightScroll";

gsap.registerPlugin(ScrollTrigger);

function Page2() {
  const sectionRef = useRef(null);
  const leftPinRef = useRef(null);
  const [active, setActive] = useState(0);

  const features = [
    {
      title: "Designed for calm, not chaos",
      desc: "Fixa removes the clutter that makes planning feel exhausting. Every screen is built to be clear.",
    },
    {
      title: "The effortless way to begin",
      desc: "Fixa removes the clutter that makes planning feel exhausting. Every screen is built to be clear.",
    },
    {
      title: "Daily fully focused",
      desc: "Fixa removes the clutter that makes planning feel exhausting. Every screen is built to be clear.",
    },
    {
      title: "Small steps. Zero guilt",
      desc: "Fixa removes the clutter that makes planning feel exhausting. Every screen is built to be clear.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".featureStep");

      items.forEach((item, i) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });  


const mm = gsap.matchMedia(); //ye hamari screen ko apne accoding manage karta hai 

mm.add("(min-width: 769px)", () => {
  ScrollTrigger.create({
    trigger: sectionRef.current,
    start: "top top",
    end: "+=2500",
    pin: leftPinRef.current,
    scrub: true,
  });
});
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-[300vh] bg-gradient-to-br from-yellow-600   via-neutral-900 to-black text-white px-10 py-32"
    >
      <div className="grid lg:grid-cols-2 gap-20">
        <FeaturePanel
          features={features}
          active={active}
          leftPinRef={leftPinRef}
        />
        <FeatureRightScroll features={features} />
      </div>
    </section>
  );
}

export default Page2;
