import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import FlatButton from '../../node_modules/material-ui/FlatButton';
import ChevronRight from '../../node_modules/material-ui/svg-icons/navigation/chevron-right';
import Dialog from '../../node_modules/material-ui/Dialog';
import {browserHistory} from 'react-router';

import Betingelser from './betingelser';

class Footer extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    }
  }
  handleOpen () {
    this.setState({open: true});
};
  handleClose () {
    this.setState({open: false});
};
  render() {
    return (
      <footer>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>

          <div className="betingelser">
            <FlatButton
              label="KONKURRENCEBETINGELSER"
              labelPosition="before"
              style={{
                color: '#9e8471'
              }}
              labelStyle={{
                fontSize: '11px',
                fontFamily: 'Verlag-Book'
              }}
              onTouchTap={this.handleOpen.bind(this)}
              icon={<ChevronRight />}
            />
          </div>
          <div className="logo-container"><img className="logo" src="/images/lavazza_logo.svg" alt=""/></div>
        </ReactCSSTransitionGroup>
        <Dialog
          actions={<FlatButton label="Luk" style={{color: '#9e8471'}} primary={true} onTouchTap={this.handleClose.bind(this)}/>}
          modal={true}
          open={this.state.open}
          autoScrollBodyContent={true}
          autoDetectWindowHeight={true}
        >
          <Betingelser/>
        </Dialog>
      </footer>
    )
  }

};

export default Footer;