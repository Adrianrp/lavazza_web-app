import React from 'react';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from '../../../node_modules/material-ui/Table';


const UserListContainer = (props) => {
  const UserList = props.userList.map((week, idx) => {
    // Get the week Number which is inserted as a key
    //const weekNr = Object.keys(week)[0];
    // Get the object user under the week number.
    //const weekKey = week[`${weekNr}`];
    return (
        <TableRow key={week._id}>
                <TableRowColumn>{week.weekNr}</TableRowColumn>
                <TableRowColumn>{week.tlf}</TableRowColumn>
                <TableRowColumn>{week.username}</TableRowColumn>
                <TableRowColumn>{week.emails}</TableRowColumn>
                <TableRowColumn>{week.fbId}</TableRowColumn>
              </TableRow>
    )
  });
  return (
    <div>
      <br />
      <Table selectable={false} >
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Week</TableHeaderColumn>
            <TableHeaderColumn>Telefon</TableHeaderColumn>
            <TableHeaderColumn>username</TableHeaderColumn>
            <TableHeaderColumn>email</TableHeaderColumn>
            <TableHeaderColumn>Facebook Id</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
      {UserList}
        </TableBody>
      </Table>
    </div>
  )
};

export default UserListContainer;