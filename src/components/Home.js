import React, { useState } from "react";

const Home = () => {
  const [isHome, setIsHome] = useState(false);

  return (
    <div className={`home ${isHome && "is-active"}`}>
      <div className="name">
        <h1>NEON</h1>
        <h1>GENESIS</h1>
        <h1>EVANGELION</h1>
        <h2 className="MG">MEMORY GAME</h2>
        <div className="start">
          <h2 className="mont start-text" onClick={() => setIsHome(true)}>
            START
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
