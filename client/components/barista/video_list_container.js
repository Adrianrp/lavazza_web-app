import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from '../../../node_modules/material-ui/Table';
import Toggle from '../../../node_modules/material-ui/Toggle';
import FlatButton from '../../../node_modules/material-ui/FlatButton';
import EditVideo from '../../../node_modules/material-ui/svg-icons/editor/mode-edit';

const VideoListContainer = (props) => {
  //console.log(props);
  const videoList = props.videoList.map((video, idx) => {
    return (
      <TableRow key={video._id}>
        <TableRowColumn>{video.weekNr}</TableRowColumn>
        <TableRowColumn>{video.url}</TableRowColumn>
        <TableRowColumn>{video.title}</TableRowColumn>
        <TableRowColumn>{video.votes}</TableRowColumn>
        <TableRowColumn><Toggle
                          onToggle={props.handleToggle.bind(this, video)}
                          toggled={video.winner} />
        </TableRowColumn>
        <TableRowColumn><FlatButton icon={<EditVideo color="#9e8471" />} onTouchTap={() => {props.handleRowClick(idx)}} /></TableRowColumn>
      </TableRow>
    )
  });
  return (
    <div>
      <Table selectable={false}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Week</TableHeaderColumn>
            <TableHeaderColumn>video code</TableHeaderColumn>
            <TableHeaderColumn>title</TableHeaderColumn>
            <TableHeaderColumn>votes</TableHeaderColumn>
            <TableHeaderColumn>winner</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {videoList}
        </TableBody>
      </Table>
      <br />
    </div>
  )
};

export default VideoListContainer;