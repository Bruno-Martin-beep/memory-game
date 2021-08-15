import React, { useState, useEffect } from "react";
import firebase from "./firebase";

const Scorelist = () => {
  const [scoresList, setScoresList] = useState([]);

  useEffect(() => {
    const scoresRef = firebase.database().ref("scores");
    scoresRef.on("value", (snapshot) => {
      const scores = snapshot.val();

      const scoreList = [];

      for (let id in scores) {
        scoreList.push(scores[id]);
      }

      scoreList.sort((a, b) => a.time - b.time);

      scoreList.forEach((elem, index) => (elem.rank = index + 1));

      setScoresList(scoreList);
    });
  }, []);

  return (
    <div className="scores-cont">
      <h3 className="epil">SCORES</h3>
      <div className="scores">
        <p className="scores-title">RANK</p>
        <p className="scores-title">TIME</p>
        <p className="scores-title">NAME</p>
        <p className="scores-title">ERRORS</p>
        {scoresList.map((elem) => {
          return (
            <React.Fragment key={elem.rank + elem.time}>
              <p className="orbit scores-item">{elem.rank}º</p>
              <p className="orbit scoreTime scores-item">
                {("0" + Math.floor((elem.time / 60000) % 60)).slice(-2)}
                :{("0" + Math.floor((elem.time / 1000) % 60)).slice(-2)}
                <span className="orbit score-mili-sec">
                  :{("0" + ((elem.time / 10) % 100)).slice(-2)}
                </span>
              </p>
              <p className="scores-item">{elem.name}</p>
              <p className="orbit scores-item">{elem.errors}</p>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Scorelist;
