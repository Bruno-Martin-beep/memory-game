import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  togglePlaying
} from "../features/timerSlice";
import { 
  setAllcards, 
  setIsFinished,
  selectAllCards
} from "../features/cardListSlice";

import items from "./items";
import Scorelist from "./Scorelist";
import Submit from "./Submit";
import Start from "./Start";
import ControlsBar from "./ControlsBar";
import CardsList from "./CardsList";
import gsap from "gsap";
import Preload from "./Preload";

function Home() {
  const dispatch = useDispatch();
  const allCards = useSelector(selectAllCards);

  // finisher

  useEffect(() => {
    let arr1 = null;

    if (allCards.length !== 0) {
      arr1 = allCards.every((element) => element.active);
    }

    if (arr1) {
      dispatch(togglePlaying(false));
      dispatch(setIsFinished(true));
    }
  }, [allCards, dispatch]);

  //get allCards

  const doubleAndRandomlyItems = (arr) => {
    let arr1 = arr.reduce((acc, x) => acc.concat([x, x]), []);

    arr1 = arr1.sort(() => Math.random() - 0.5);

    arr1 = arr1.map((element, index) => ({ ...element, id: index }));

    return arr1;
  };

  useEffect(() => {
    dispatch(setAllcards(doubleAndRandomlyItems(items)));
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
        <ControlsBar doubleAndRandomlyItems={doubleAndRandomlyItems} />
        <CardsList cardsList={allCards} />
        <Scorelist />
      </div>
      <Submit gameIsActive={gameIsActive} />
    </div>
  );
}

export default Home;
