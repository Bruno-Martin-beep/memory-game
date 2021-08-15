import React from 'react';
import nerv from '../assets/nerv.png';

const CardsList = ({cardsList, handleSelect}) => {
  return (
    <div className="cardsList">
        {cardsList.map((elem, i) => {
          return (
            <div
              className="card"
              key={i}
              onClick={() => handleSelect(elem)}
            >
              <div className="card-img">
                <img className="card-back" src={nerv} alt="nerv" />
                {elem.active && <img className="card-bg" src={elem.urlBg} alt={elem.name} />}
              </div>
              <p className="card-name">{elem.active && elem.name}</p>
            </div>
          );
        })}
      </div>
  )
}

export default CardsList
