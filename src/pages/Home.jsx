import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import H1 from "../sections/H1";
import HomeSecVideo from "../sections/HomeSecVideo";
import HeroTitle from "../sections/HeroTitle";
import HeroSubtitle from "../sections/HeroSubtitle";
import CTASection from "../sections/CtaSection";

function Home({ isLoaded }) {
  const containerRef = useRef(null);
  const upperRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    if (!isLoaded) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 1,
        },
      });

      tl.from(upperRef.current, {
        y: -60,
        opacity: 0,
      })

        .from(
          titleRef.current.children,
          {
            y: 80,
            opacity: 0,
            stagger: 0.15,
          },
          "-=0.5",
        )

        .from(
          subtitleRef.current,
          {
            y: 40,
            opacity: 0,
          },
          "-=0.4",
        )

        .from(
          ctaRef.current,
          {
            scale: 0.9,
            opacity: 0,
          },
          "-=0.3",
        );
    }, containerRef);

    return () => ctx.revert();
  }, [isLoaded]);

  return (
    <section ref={containerRef} className="w-full overflow-hidden">
      <div className="relative w-full min-h-screen">
        <HomeSecVideo />

        <H1 upperRef={upperRef} />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10">
          <HeroTitle titleRef={titleRef} />

          <HeroSubtitle subtitleRef={subtitleRef} />

          <CTASection ctaRef={ctaRef} />
        </div>
      </div>
    </section>
  );
}

export default Home;
