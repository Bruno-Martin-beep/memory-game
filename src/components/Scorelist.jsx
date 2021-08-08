import React, {useState, useEffect} from 'react'
import firebase from "./firebase";

const Scorelist = () => {
  const [scoresList, setScoresList] = useState([]);

  useEffect(() => {
    const scoresRef = firebase.database().ref('scores');
    scoresRef.on('value', (snapshot) => {
      const scores = snapshot.val();

      const scoreList = [];

      for (let id in scores) {
        scoreList.push(scores[id]);
      }

      scoreList.sort((a,b) => a.time - b.time);

      scoreList.forEach((elem, index) => elem.rank = (index + 1));

      setScoresList(scoreList);
    })
  }, []);

  return (
    <div>
      <h2>SCORES</h2>
      <div className="scores">
        <p>rank</p>
        <p>time</p>
        <p>name</p>
        <p>errors</p>
        {scoresList.map((elem) => {
        return (
          <React.Fragment key={elem.rank + elem.time}>
        <p>{elem.rank}º</p>
        <p>{elem.time}</p>
        <p>{elem.name}</p>
        <p>{elem.errors}</p>
        </React.Fragment>
        )
      })}
      </div>
      
    </div>
  )
}

export default Scorelist
