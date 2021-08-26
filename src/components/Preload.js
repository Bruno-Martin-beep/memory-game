import React from "react";
import items from "./items";

const Preload = () => {
  return (
    <div className="preload-cont">
      {items.map((elem) => (
        <img key={elem.name} className="preload-img" src={elem.urlBg} alt={elem.name} />
      ))}
    </div>
  );
};

export default Preload;
