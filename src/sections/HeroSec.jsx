import gsap from "gsap";
import { useEffect, useRef } from "react";
function HeroSec() {

  const headingref = useRef(null);
  const textref = useRef(null);
  const btnref = useRef(null);


  useEffect(() =>{
    gsap.from(headingref.current,{
      y:-80,
      opacity: 0,
      duration: 2,
    });
    gsap.from(textref.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });

    gsap.from(btnref.current, {
      scale: 0,
      opacity: 0,
      duration: 0.6,
    delay: 1,
  });

  },[])


  return (
    <div>
      <nav>
        <h1>MyPortfolio</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section>
        <h2 ref={headingref}>Hi, I'm Janhvi</h2>
        <p ref={textref}>
          I am a Frontend Developer learning React, Tailwind and GSAP
          animations.
        </p>
        <button ref={btnref}>Hire Me</button>
      </section>

      <section>
        <div>
          <h3>Web Development</h3>
          <p>I build modern responsive websites.</p>
        </div>

        <div>
          <h3>UI Design</h3>
          <p>Creating clean and beautiful interfaces.</p>
        </div>

        <div>
          <h3>Animations</h3>
          <p>Using GSAP for smooth animations.</p>
        </div>
      </section>

      <footer>
        <p>© 2026 Janhvi Portfolio</p>
      </footer>
    </div>
  );
}

export default HeroSec;
