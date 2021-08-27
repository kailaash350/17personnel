import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Rentdate from "./Rentdate";

const TextScroller = ({ text }) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(60%,0)" },
    to: { transform: "translate(-60%,0)" },
    config: { duration: 8000},
    reset: true,
    onRest: () => {
      setKey(key + 1);
    }
  });

  return (
    <div key={key}>
      <animated.div className="text-scroll" style={scrolling}>{text}<Rentdate/></animated.div>
    </div>
  );
};

export default TextScroller;