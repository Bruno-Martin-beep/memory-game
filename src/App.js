import "./styles/index.css";
import { useEffect, useState } from "react";

const items = [
  {
    active: false,
    name: "shinji",
    urlBg: null,
    urlChar: null,
  },
  {
    active: false,
    name: "misato",
    urlBg: null,
    urlChar: null,
  },
  {
    active: false,
    name: "gendo",
    urlBg: null,
    urlChar: null,
  },
  {
    active: false,
    name: "rei",
    urlBg: null,
    urlChar: null,
  },
  {
    active: false,
    name: "asuka",
    urlBg: null,
    urlChar: null,
  },
  {
    active: false,
    name: "kaworu",
    urlBg: null,
    urlChar: null,
  },
  {
    active: false,
    name: "ritsuko",
    urlBg: null,
    urlChar: null,
  },
  {
    active: false,
    name: "ryoji",
    urlBg: null,
    urlChar: null,
  },
];

function App() {
  const [finalList, setfinalList] = useState([]);

  //timer

  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [time, setTime] = useState(0);

  const handleStart = () => {
    setIsPlaying(true);
  };

  const handleRestart = () => {
    setIsPlaying(false);
    // setIsFinished(false);
    setTime(0);
  }

  useEffect(() => {
    let interval = null;

    if (isPlaying && !isFinished) {
      interval = setInterval(() => {
        setTime((time) => time + 100);
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isPlaying, isFinished]);

  const forceUpdate = JSON.stringify(finalList);

  useEffect(() => {
    console.log(finalList);

    let arr1 = null;

    if (finalList.length !== 0) {
      arr1 = finalList.every((element) => element.active)
    }

    if (arr1) {
      setIsFinished(true);
      setIsPlaying(false)
    }
  }, [forceUpdate, finalList]);

  // handle selects

  const [select1, setselect1] = useState(null);
  const [select2, setselect2] = useState(null);

  const handleSelect = (value) => {
    if (!value.active && (select1 === null || select2 === null)) {
      if (select1 === null) {
        setfinalList((prev) => {
          prev[value.id].active = true;
          return prev;
        });
        return setselect1(value);
      } else {
        setfinalList((prev) => {
          prev[value.id].active = true;
          return prev;
        });
        return setselect2(value);
      }
    }
  };

  const resetItems = () => {
    setfinalList((prev) => {
      prev[select1.id].active = false;
      return prev;
    });
    setselect1(null);

    setfinalList((prev) => {
      prev[select2.id].active = false;
      return prev;
    });
    setselect2(null);
  };

  useEffect(() => {
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

  const doubleItems = (arr) => {
    return arr.reduce((acc, x) => acc.concat([x, x]), []);
  };

  const randomlyItems = (arr) => {
    let arr1 = arr.sort(() => Math.random() - 0.5);

    arr1 = arr1.map((element, index) => ({ ...element, id: index }));

    return arr1;
  };

  // console.log(finalList);

  useEffect(() => {
    setfinalList(randomlyItems(doubleItems(items)));
  }, []);

  return (
    <div className="App">
      <div>
        <h1 className="time">{time}</h1>
        <h1 onClick={handleStart}>play</h1>
        <h1 onClick={handleRestart}>restart</h1>
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
    </div>
  );
}

export default App;
