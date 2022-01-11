import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cleartime,
  addError,
  clearErrors,
  togglePlaying,
  selectIsPlaying,
} from "../features/timerSlice";

import items from "./items";
import Scorelist from "./Scorelist";
import Submit from "./Submit";
import Start from "./Start";
import ControlsBar from "./ControlsBar";
import CardsList from "./CardsList";
import gsap from "gsap";
import Preload from "./Preload";

function Home() {
  const isPlaying = useSelector(selectIsPlaying);
  const dispatch = useDispatch();
  const [finalList, setfinalList] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  //restart

  const handleRestart = () => {
    gsap.to(".card-left", 0.2, { x: "0" });
    gsap.to(".card-right", 0.2, { x: "0" });
    gsap.to(".card-name-span", 0.2, {
      y: "50%",
      opacity: 0,
      ease: "power1.out",
      skewY: 0,
    });
    let reset = setTimeout(() => {
      dispatch(cleartime());
      dispatch(clearErrors());
      dispatch(togglePlaying(false));
      setIsFinished(false);
      setfinalList(doubleAndRandomlyItems(items));
      setselect1(null);
      setselect2(null);
    }, 200);
    return () => clearTimeout(reset);
  };

  // finisher

  useEffect(() => {
    let arr1 = null;

    if (finalList.length !== 0) {
      arr1 = finalList.every((element) => element.active);
    }

    if (arr1) {
      dispatch(togglePlaying(false));
      setIsFinished(true);
    }
  }, [finalList, dispatch]);

  // handle selects

  const [select1, setselect1] = useState(null);
  const [select2, setselect2] = useState(null);

  const handleSelect = (value) => {
    if (
      !value.active &&
      (select1 === null || select2 === null) &&
      !isFinished
    ) {
      if (!isPlaying) {
        dispatch(togglePlaying(true));
      }
      if (select1 === null) {
        setfinalList((prev) => [
          ...prev.slice(0, value.id),
          { ...prev[value.id], active: true },
          ...prev.slice(value.id + 1),
        ]);
        gsap.to(".card-left-" + value.id, 0.2, { x: "-100%" });
        gsap.to(".card-right-" + value.id, 0.2, { x: "101%" });
        gsap.to(".card-name-span-" + value.id, 0.2, {
          y: "0",
          opacity: 1,
          ease: "power1.out",
          skewY: -10,
        });
        return setselect1(value);
      } else {
        setfinalList((prev) => [
          ...prev.slice(0, value.id),
          { ...prev[value.id], active: true },
          ...prev.slice(value.id + 1),
        ]);
        gsap.to(".card-left-" + value.id, 0.2, { x: "-100%" });
        gsap.to(".card-right-" + value.id, 0.2, { x: "101%" });
        gsap.to(".card-name-span-" + value.id, 0.2, {
          y: "0",
          opacity: 1,
          ease: "power1.out",
          skewY: -10,
        });
        return setselect2(value);
      }
    }
  };

  useEffect(() => {
    const resetItems = () => {
      gsap.to(".card-left-" + select1.id, 0.2, { x: "0" });
      gsap.to(".card-right-" + select1.id, 0.2, { x: "0" });
      gsap.to(".card-name-span-" + select1.id, 0.2, {
        y: "50%",
        opacity: 0,
        ease: "power1.out",
        skewY: 0,
      });

      let revomeImg1 = setTimeout(() => {
        setfinalList((prev) => [
          ...prev.slice(0, select1.id),
          { ...prev[select1.id], active: false },
          ...prev.slice(select1.id + 1),
        ]);
      }, 200);

      setselect1(null);

      gsap.to(".card-left-" + select2.id, 0.2, { x: "0" });
      gsap.to(".card-right-" + select2.id, 0.2, { x: "0" });
      gsap.to(".card-name-span-" + select2.id, 0.2, {
        y: "50%",
        opacity: 0,
        ease: "power1.out",
        skewY: 0,
      });

      let revomeImg2 = setTimeout(() => {
        setfinalList((prev) => [
          ...prev.slice(0, select2.id),
          { ...prev[select2.id], active: false },
          ...prev.slice(select2.id + 1),
        ]);
      }, 200);
      setselect2(null);

      dispatch(addError())

      return () => clearTimeout(revomeImg1, revomeImg2);
    };

    if (select1 !== null && select2 !== null) {
      if (select1.name === select2.name) {
        setselect1(null);
        setselect2(null);
      } else {
        let close = setTimeout(resetItems, 500);

        return () => clearTimeout(close);
      }
    }
  }, [select1, select2, dispatch]);

  //get finalList

  const doubleAndRandomlyItems = (arr) => {
    let arr1 = arr.reduce((acc, x) => acc.concat([x, x]), []);

    arr1 = arr1.sort(() => Math.random() - 0.5);

    arr1 = arr1.map((element, index) => ({ ...element, id: index }));

    return arr1;
  };

  useEffect(() => {
    setfinalList(doubleAndRandomlyItems(items));
  }, [dispatch]);

  /// gsap animation

  const gameIsActive = () => {
    const gamerev = gsap.timeline();
    gamerev
      .from(".contbar-item", 0.6, {
        y: "50%",
        opacity: 0,
        ease: "power1.out",
        skewY: 2.5,
        delay: 0.6,
        stagger: {
          amount: 1,
        },
      })
      .from(".card", 0.6, {
        y: "50%",
        opacity: 0,
        ease: "power1.out",
        skewY: 10,
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
        duration: 0.6,
      });
  };

  return (
    <div className="App">
      <Start gameIsActive={gameIsActive} />
      <div className="game">
        <Preload />
        <ControlsBar handleRestart={handleRestart} />
        <CardsList cardsList={finalList} handleSelect={handleSelect} />
        <Scorelist />
      </div>
      <Submit
        setIsFinished={setIsFinished}
        isFinished={isFinished}
        gameIsActive={gameIsActive}
      />
    </div>
  );
}

export default Home;
