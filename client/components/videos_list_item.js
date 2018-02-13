import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import RaisedButton from '../../node_modules/material-ui/RaisedButton';
import {indigo} from '../../node_modules/material-ui/styles/colors';
import ThumbUp from '../../node_modules/material-ui/svg-icons/action/thumb-up';
import StarRate from '../../node_modules/material-ui/svg-icons/toggle/star';

const VideosListItem = (props) => {
//console.log(props);
  const includeButton = (props.isButton) ? <RaisedButton
      onClick={props.clickHandler}
      icon={(props.isSelected) ? <ThumbUp /> : ""}
      fullWidth={true}
      labelStyle={{
        fontFamily: 'Verlag-Book'
      }}
      label={(props.isSelected) ? "" : "Stem"}/> : '';

  const weekDisplay = (props.isWeekDisplay) ?
    <span className={`video-nr${props.counter} weekNr`}>Uge {props.isWeekDisplay}</span> :
    '';
  const isAWinner = (props.isWinner) ? <span className="has-star"><StarRate color={'#cead96'}></StarRate></span> : '';
  //console.log(props);
  return (
    <div className={props.specialClass}>
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
          <div>
            {weekDisplay}
            <span className="title-video">{props.video.title}</span>
            {isAWinner}
            <iframe
              src={`https://player.vimeo.com/video/${props.video.url}?byline=0&portrait=0&badge=0"`}
              frameBorder="0"
              allowFullScreen>
            </iframe>
            {includeButton}
          </div>
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default VideosListItem;
