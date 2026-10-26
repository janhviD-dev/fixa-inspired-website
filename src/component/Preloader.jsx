import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current.children;

      const tl = gsap.timeline();

      tl.fromTo(
        words,
        {
          y: 40,
          opacity: 0,
          filter: "blur(12px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.35, 
          duration: 1,
          ease: "power3.out",
          delay: 1,
        },
      )

        
        .to({}, { duration: 0.8 })

       
        .to(containerRef.current, {
          y: "-100%",
          duration: 1.4,
          ease: "power4.inOut",
          onComplete,
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const text = "Now is the Time.";

  return (
    <div
      ref={containerRef}
      className="preloader font-dancing fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center overflow-hidden z-[9999]"
    >
      <h1
        ref={textRef}
        className="text-5xl  font-bold font-serif flex flex-wrap justify-center text-black"
      >
        {text.split(" ").map((word, i) => (
          <span key={i} className="inline-block">
            {word}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default Preloader;
