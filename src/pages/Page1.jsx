import { useState, useEffect } from "react";
import IntroBadge from "../sections/IntroBadge";
import IntroText from "../sections/IntroText";
import HeroImageSection from "../sections/HeroImageSection";
import BottomTextSection from "../sections/BottomTextSection";
function Page1() {

 
  return (
    <>
      <div className=" bg-gray-200 rounded-3xl   sm:text-3xl">
       <IntroBadge/>

       <IntroText/>
       <HeroImageSection/>

            <BottomTextSection/>
          </div>
        
    </>
  );
}
export default Page1;



