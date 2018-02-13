import React from 'react';
import VideosListItem from '../videos_list_item';

const VideoArchive = (props) => {
  const videoArchive = props.videos.map((video, index) => {
    return (
      <VideosListItem video={video}
                      key={video._id}
                      isButton={false}
                      isWinner={video.winner}
                      counter={index}
                      isWeekDisplay={video.weekNr}
                      specialClass="video-list-container-archive"
      />
    )
  });
  return (
    <div>
      {videoArchive}
    </div>
  )
};

export default VideoArchive;