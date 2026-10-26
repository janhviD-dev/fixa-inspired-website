import { useState, useEffect } from "react";

function Section1() {
  const [anxiety, setAnxiety] = useState(0);
  const [productivity, setProductivity] = useState(0);

  useEffect(() => {
    setAnxiety(Math.floor(Math.random() * 100));
    setProductivity(Math.floor(Math.random() * 100));
  }, []);

  return (
    <div>
      <h2>Anxiety: {anxiety}%</h2>
      <h2>Productivity: {productivity}%</h2>
    </div>
  );
}

export default Section1;
