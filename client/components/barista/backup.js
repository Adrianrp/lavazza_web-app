import React from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from '../../../node_modules/material-ui/Table';
import {Tabs, Tab} from '../../../node_modules/material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

const UserListContainer = (props) => {
  const weekTabs = props.userList.map((week, idx) => {
    // Get the week Number which is inserted as a key
    const weekNr = Object.keys(week)[0];
    // Get the object user under the week number.
    const weekKey = week[`${weekNr}`];
    return (
      <Tab label={`WEEK: ${weekNr}`} value={idx}/>
    )
  });
  const views = props.userList.map((week, idx) => {
    const weekNr = Object.keys(week)[0];
    const weekKey = week[`${weekNr}`];
    console.log(week);

    return (
      <TableRow>
        <TableRowColumn>{weekNr}</TableRowColumn>
        <TableRowColumn>{weekKey.username}</TableRowColumn>
        <TableRowColumn>{weekKey.emails}</TableRowColumn>
        <TableRowColumn>{weekKey.fbId}</TableRowColumn>
      </TableRow>
    )
  });
  const tableHeader =  <TableRow>
    <TableHeaderColumn>Week</TableHeaderColumn>
    <TableHeaderColumn>username</TableHeaderColumn>
    <TableHeaderColumn>email</TableHeaderColumn>
    <TableHeaderColumn>Facebook Id</TableHeaderColumn>
  </TableRow>;
  return (
    <div>
      <Tabs
        onChange={props.handleTabChange}
        value={props.slideIndex}
      >
        {weekTabs}
      </Tabs>
      <SwipeableViews
        index={props.slideIndex}
        onChangeIndex={props.handleTabChange}>
        <div>
          <Table selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>

            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {views}
            </TableBody>
          </Table>
        </div>
      </SwipeableViews>
    </div>
  )
};

export default UserListContainer;
/*
 *
 * <SwipeableViews
 index={props.slideIndex}
 onChangeIndex={props.handleTabChange}>
 <div>
 <Table selectable={false}  key={week._id}>
 <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
 <TableRow>
 <TableHeaderColumn>Week</TableHeaderColumn>
 <TableHeaderColumn>username</TableHeaderColumn>
 <TableHeaderColumn>email</TableHeaderColumn>
 <TableHeaderColumn>Facebook Id</TableHeaderColumn>
 </TableRow>
 </TableHeader>
 <TableBody displayRowCheckbox={false}>

 {

 <TableRow>
 <TableRowColumn>{weekNr}</TableRowColumn>
 <TableRowColumn>{weekKey.username}</TableRowColumn>
 <TableRowColumn>{weekKey.emails}</TableRowColumn>
 <TableRowColumn>{weekKey.fbId}</TableRowColumn>
 </TableRow>

 }
 </TableBody>
 </Table>
 </div>
 </SwipeableViews>
 * */