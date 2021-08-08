import "./styles/index.css";
import { useEffect, useState } from "react";
import items from "./components/items";
import Scorelist from "./components/Scorelist";
import Submit from "./components/Submit";
import Home from "./components/Home";


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
  }

  const handleRestart = () => {
    setIsPlaying(true);
    setIsPaused(true)
    setTime(0);
    setErrors(0);
    setIsFinished(false);
    setfinalList(doubleAndRandomlyItems(items));
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
      if(isPaused) {
        setIsPaused(false);
      }
      if (select1 === null) {
        setfinalList((prev) => [...prev.slice(0,value.id), {...prev[value.id],  active: true}, ...prev.slice(value.id + 1)]);
        return setselect1(value);
      } else {
        setfinalList((prev) => [...prev.slice(0,value.id), {...prev[value.id],  active: true}, ...prev.slice(value.id + 1)]);
        return setselect2(value);
      }
    }
  };

  useEffect(() => {
    const resetItems = () => {
      setfinalList((prev) => [...prev.slice(0,select1.id), {...prev[select1.id],  active: false}, ...prev.slice(select1.id + 1)]);
      setselect1(null);
  
      setfinalList((prev) => [...prev.slice(0,select2.id), {...prev[select2.id],  active: false}, ...prev.slice(select2.id + 1)]);
      setselect2(null);

      setErrors(prev => prev + 1)
    };

    if (select1 !== null && select2 !== null) {
      if (select1.name === select2.name) {
        setselect1(null);
        setselect2(null);
      } else {
        let rotate = setTimeout(resetItems, 1000);

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
 

  return (
    <div className="App">
      <Home />
      <div>
        <p className="time">{time}</p>
        <p>{errors}</p>
        <p onClick={handleRestart}>start</p>
        <p onClick={handlePause}>pause</p>
        <p onClick={handleRestart}>restart</p>
        {isFinished && <Submit time={time} errors={errors} handleRestart={handleRestart} />}
      </div>

      <div className="grid">
        {finalList.map((element, i) => {
          return (
            <div
              className="gridItem"
              key={i}
              onClick={() => handleSelect(element)}
            >
              <p>{element.name}</p>
              <p>{element.active ? "activo" : ""}</p>
            </div>
          );
        })}
      </div>
      <Scorelist />
    </div>
  );
}

export default App;
