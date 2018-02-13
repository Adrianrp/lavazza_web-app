/*import React from 'react';

import RaisedButton from '../../../node_modules/material-ui/RaisedButton';
import {indigo} from '../../../node_modules/material-ui/styles/colors';
import ThumbUp from '../../../node_modules/material-ui/svg-icons/action/thumb-up';

const VideosListItem = (props) => {

    //console.log(props.isSelected);
    return (
      <div className="video-list-container">
        <div className="video-container">
          <div className="items-container">
            <img src={props.video.url} alt=""/>
            <RaisedButton
              onClick={props.clickHandler}
              icon={(props.isSelected) ? <ThumbUp /> : ""}
              fullWidth={true}
              label={(props.isSelected) ? "" : "Stem"}/>
          </div>
        </div>
      </div>

    );
/!*const styles = {
  btnStyles: {
    width: '100%'
  }*!/

};

export default VideosListItem;*/
