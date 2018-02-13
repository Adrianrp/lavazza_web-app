import React from 'react';

import TextField from '../../../node_modules/material-ui/TextField';
import RaisedButton from '../../../node_modules/material-ui/RaisedButton';

const PickRandomWinner = (props) => {
//console.log(props.weekNumber.WEEK_NUMBER);
  return (
    <div className="random-winner-list">
        <p>Give me
          a number and I will get you a lucky potato</p>
      <TextField
        hintText="last week maybe?"
        floatingLabelText="Insert week Number"
        type="number"
        floatingLabelFixed={true}
        onChange={props.handleChangeWeek.bind(this)}
      /><br /><br />
      <RaisedButton
        label="Get it!"
        primary={true}
        onTouchTap={props.getWeeklyWinner} />

    </div>
  )
};
const style = {
  padding: 10,
  textAlign: 'center',
  display: 'inline-block',
};
export default PickRandomWinner;