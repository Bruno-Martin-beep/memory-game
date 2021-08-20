import React, { useEffect } from "react";
import gsap from "gsap";

const Home = ({ gameIsActive }) => {
  useEffect(() => {
    const textrev = gsap.timeline();

    textrev
      .from("h1 span", 2, {
        y: "140%",
        ease: "power4.out",
        delay: 0.75,
        skewY: 10,
        stagger: {
          amount: 0.4,
        },
      })
      .from(".MG", 1, {
        y: "50%",
        opacity: 0,
        ease: "power1.out",
        delay: 0,
        skewY: 2.5,
      })
      .from(".start-text", 1, {
        y: "50%",
        opacity: 0,
        ease: "power1.out",
        skewY: 2.5,
        autoAlpha: 0,
      });
      return () => textrev.kill();
  }, []);

  const handleStart = () => {
    gsap.to(".home", 1, {
      opacity: 0,
      ease: "power1.out",
      autoAlpha: 0,
    });
    gameIsActive()
  };

  return (
    <div className="home">
      <div className="name">
        <h1>
          <span>NEON</span>
        </h1>
        <h1>
          <span className=".h1">GENESIS</span>
        </h1>
        <h1>
          <span className=".h1">EVANGELION</span>
        </h1>
        <h2 className="MG">MEMORY GAME</h2>

        <h2 className="mont start-text" onClick={handleStart}>
          START
        </h2>
      </div>
    </div>
  );
};

export default Home;
