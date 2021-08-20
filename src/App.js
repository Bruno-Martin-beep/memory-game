import "./styles/main.css";
import { useEffect, useState } from "react";
import items from "./components/items";
import Scorelist from "./components/Scorelist";
import Submit from "./components/Submit";
import Home from "./components/Home";
import ControlsBar from "./components/ControlsBar";
import CardsList from "./components/CardsList";
import gsap from "gsap";

function App() {
  const [finalList, setfinalList] = useState([]);
  const [errors, setErrors] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  //timer

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(0);

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleRestart = () => {
    gsap.to(".card-back", 0.2, {
      y: "0",
    });
    setIsPlaying(true);
    setIsPaused(true);
    setTime(0);
    setErrors(0);
    setIsFinished(false);
    setfinalList(doubleAndRandomlyItems(items));
    setselect1(null);
    setselect2(null);
  };

  useEffect(() => {
    let interval = null;

    if (isPlaying && !isPaused) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isPlaying, isPaused]);

  useEffect(() => {
    let arr1 = null;

    if (finalList.length !== 0) {
      arr1 = finalList.every((element) => element.active);
    }

    if (arr1) {
      setIsPlaying(false);
      setIsFinished(true);
    }
  }, [finalList]);

  // handle selects

  const [select1, setselect1] = useState(null);
  const [select2, setselect2] = useState(null);

  const handleSelect = (value) => {
    if (!value.active && (select1 === null || select2 === null) && isPlaying) {
      if (isPaused) {
        setIsPaused(false);
      }
      if (select1 === null) {
        setfinalList((prev) => [
          ...prev.slice(0, value.id),
          { ...prev[value.id], active: true },
          ...prev.slice(value.id + 1),
        ]);
        gsap.to(`.${"card-" + value.id}`, 0.2, { y: "120%" });
        return setselect1(value);
      } else {
        setfinalList((prev) => [
          ...prev.slice(0, value.id),
          { ...prev[value.id], active: true },
          ...prev.slice(value.id + 1),
        ]);
        gsap.to(`.${"card-" + value.id}`, 0.2, { y: "120%" });
        return setselect2(value);
      }
    }
  };

  useEffect(() => {
    const resetItems = () => {
      gsap.to(`.${"card-" + select1.id}`, 0.2, { y: "0" });
      setfinalList((prev) => [
        ...prev.slice(0, select1.id),
        { ...prev[select1.id], active: false },
        ...prev.slice(select1.id + 1),
      ]);
      setselect1(null);

      gsap.to(`.${"card-" + select2.id}`, 0.2, { y: "0" });
      setfinalList((prev) => [
        ...prev.slice(0, select2.id),
        { ...prev[select2.id], active: false },
        ...prev.slice(select2.id + 1),
      ]);
      setselect2(null);

      setErrors((prev) => prev + 1);
    };

    if (select1 !== null && select2 !== null) {
      if (select1.name === select2.name) {
        setselect1(null);
        setselect2(null);
      } else {
        let rotate = setTimeout(resetItems, 750);

        return () => clearInterval(rotate);
      }
    }
  }, [select1, select2]);

  //get finalList

  const doubleAndRandomlyItems = (arr) => {
    let arr1 = arr.reduce((acc, x) => acc.concat([x, x]), []);

    arr1 = arr1.sort(() => Math.random() - 0.5);

    arr1 = arr1.map((element, index) => ({ ...element, id: index }));

    return arr1;
  };

  useEffect(() => {
    setIsPlaying(true);
    setIsPaused(true);
    setfinalList(doubleAndRandomlyItems(items));
  }, []);

  /// gsap animation

  const gameIsActive = () => {
    const gamerev = gsap.timeline();
    gamerev
      .from(".contbar-item", {
        y: "50%",
        opacity: 0,
        ease: "power1.out",
        skewY: 2.5,
        duration: 1,
        delay: 1,
        stagger: {
          amount: 1,
        },
      })
      .from(".card", {
        y: "50%",
        opacity: 0,
        ease: "power1.out",
        skewY: 10,
        duration: 1,
        stagger: {
          grid: "auto",
          from: "start",
          amount: 1.5,
        },
      })
      .from(".score-name", {
        y: "50%",
        opacity: 0,
        ease: "power1.out",
        skewY: 2.5,
        duration: 1,
      })
      .from(".score-child", {
        y: "50%",
        opacity: 0,
        ease: "power1.out",
        skewY: 10,
        duration: 1,
        stagger: {
          grid: "auto",
          axis: "y",
          from: "start",
          amount: 1.5,
        },
      });
  };

  return (
    <div className="App">
      <Home gameIsActive={gameIsActive} />
      <div className="game">
        <ControlsBar
          time={time}
          errors={errors}
          handlePause={handlePause}
          handleRestart={handleRestart}
        />
        <CardsList cardsList={finalList} handleSelect={handleSelect} />
        <Scorelist />
      </div>
      <Submit
        time={time}
        errors={errors}
        setIsFinished={setIsFinished}
        isFinished={isFinished}
        gameIsActive={gameIsActive}
      />
    </div>
  );
}

export default App;
