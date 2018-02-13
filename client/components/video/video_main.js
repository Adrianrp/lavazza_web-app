import React from 'react';

import VideosListItem from './videos_list_item';
/* NOT IN USE */
/*const VideoMain = (props) => {
  console.log(props);
    props.videos.map((video, idx) => {
    // Here is making a comparison, evaluates if the number is identical to idx, returns a boolean
    // That is what the double '==' sign is doing.
    let is_selected = props.selectedItem == idx;
    return (
        <VideosListItem video={video}
                        key={video._id}
                        clickHandler={props.submitVote.bind(this, idx)}
                        isSelected={is_selected}
        />
    )
  });
};

export default VideoMain;*/
