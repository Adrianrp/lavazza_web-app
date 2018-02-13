import React from 'react';
import PickRandomWinner from './pick_random_winner';

const WidgetContainer = (props) => {
  const winnerOfTheWeek = (props.luckyWinner.length >= 1) ? <div>{props.luckyWinner.map((data) => {return data.username})}</div> : <li>No winner yet :-(</li> ;
  const displayData = <li>data.username</li>
  return (
    <div className="random-winner-container">
      <PickRandomWinner
        getWeeklyWinner={props.handleWeeklyWinner}
        weekNumber={props.weekNumber}
        handleChangeWeek={props.handleChangeWeek}/>
      <ul className="random-winner-list">
        {
          (props.luckyWinner.length >= 1) ?
          <div>
            {props.luckyWinner.map((data, index) => {
              return (
                <div key={index}>
                  <li>{data.username}</li>
                  <li>{data.emails}</li>
                  <li>{data.tlf}</li>
                  <li>  {data.fbId}</li>
                </div>
              )
            })}
            </div> :
          <li>No winner yet :-(</li>
        }
      </ul>
    </div>
  )
};

export default WidgetContainer;