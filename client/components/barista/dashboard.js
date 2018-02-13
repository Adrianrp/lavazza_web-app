import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {browserHistory} from 'react-router';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from '../../../node_modules/material-ui/Toolbar';
import AddVideo from '../../../node_modules/material-ui/svg-icons/av/video-call';
import IconButton from '../../../node_modules/material-ui/IconButton';
//import WEEK_NUMBER from '../../../server/constants';

import Dialog from '../../../node_modules/material-ui/Dialog';
import FlatButton from '../../../node_modules/material-ui/FlatButton';

import {Videos} from '../../../imports/collections/videos';
import {Weeks} from '../../../imports/collections/weeks';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import VideoListContainer from './video_list_container';
import UserListContainer from './user_list_container';
import WidgetContainer from './widget_container';
import Form from './form';

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      dialog: {open: false},
      valueWeek: 'undefined',
      luckyWinner: []
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeWeek = this.handleChangeWeek.bind(this);
    this.handleWeeklyWinner = this.handleWeeklyWinner.bind(this);
    this.handleSubmitNewVideo = this.handleSubmitNewVideo.bind(this);
  }

  componentWillMount() {
    Meteor.call('checkIsAdmin', (error) => {
      if (error) {
        console.log(error);
        browserHistory.push('/');
      }
    });
  }
  componentDidMount() {
    $('.wrap').addClass('wrap-dashboard');
  }
  /*
   * @Accepts Boolean
   *   Handles the switch icon to toggle a winner video
   * */
  handleToggle(video) {
    Meteor.call('updateWinner', video, (error) => {
      if (error) {
        console.log(error);
        // TODO Implementar error en switch video winner
      }
    })
  }

  /*
   * Detects a touch or click on a table row
   *
   *
   *
   * */
  handleRowClick(rowId) {
    //console.log(rowId);
    this.setState({
      _id: this.props.videos[rowId]._id,
      title: this.props.videos[rowId].title,
      url: this.props.videos[rowId].url,
      weekNr: this.props.videos[rowId].weekNr,
      dialog: {
        open: true
      }
    })
  }

  toInt(value) {
    return Number(value)
  }

  handleClose() {
    this.setState({
      title: '',
      url: '',
      weekNr: '',
      dialog: {open: false}
    });
  }

  handleOpen() {
    this.setState({
      dialog: {open: true}
    });
  }

  handleChange(ev) {
    const target = ev.target;
    const name = target.name;
    const value = target.type === 'number' ? this.toInt(target.value) : target.value;
    //console.log('event here ', target.name);
    this.setState({
      [name]: value
    })
  }

  handleSubmit() {
    const video = this.state;

    console.log(video);
    Meteor.call('updateVideo', video, (error) => {
      if (error) {
        //console.log(error);
        // TODO Implementar errors en update Video
      }
    });
    this.setState({
      title: '',
      url: '',
      weekNr: '',
      dialog: {
        open: false
      }
    })
  }
  handleChangeNewVideo(ev) {
    const target = ev.target;
    const name = target.name;
    const value = target.type === 'number' ? this.toInt(target.value) : target.value;
    this.setState({
        [name]: value
    });
  }
  handleSubmitNewVideo() {
    const video = this.state;
    console.log(video, 'en handlesubmitvideo');
    Meteor.call('addNewVideo', video, (error) => {
      if (error) {
        //console.log(error);
        // TODO Implementar errors en update Video
      }
      this.setState({
        title: '',
        url: '',
        weekNr: '',
        dialog: {
          open: false
        }
      })
    });
  }
  handleTabChange (value) {
    this.setState({
      slideIndex:value
    });
  }
  handleChangeWeek(ev) {
    this.setState({
      valueWeek: this.toInt(ev.target.value)
    })
  }
  handleWeeklyWinner() {
    console.log(this.state);
    Meteor.call('getWinnerOfTheWeek', this.state.valueWeek, (error, res) => {
      if (error) {
        console.log(error);
      }
      else {
        console.log(res);
        this.setState({
          luckyWinner: res
        })
      }
    })
  }
  render() {
    console.log(this.state);
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={this.state.disabled}
        onTouchTap={(this.state._id) ? this.handleSubmit : this.handleSubmitNewVideo}
      />
    ];

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
          <WidgetContainer
            handleWeeklyWinner={this.handleWeeklyWinner}
            weekNumber={this.state.valueWeek}
            handleChangeWeek={this.handleChangeWeek}
            luckyWinner={this.state.luckyWinner}
          />
          <div className="dashboard-video-container">
          <Toolbar >
            <ToolbarGroup>
              <ToolbarTitle text="Barista"/>
            </ToolbarGroup>
            <ToolbarGroup>
              <IconButton
                tooltip="Add video"
                onClick={this.handleOpen}>
                <AddVideo />
              </IconButton>
            </ToolbarGroup>
          </Toolbar>
          <VideoListContainer
            videoList={this.props.videos}
            handleRowClick={this.handleRowClick}
            handleToggle={this.handleToggle}/>
          </div>
          <div className="dashboard-users-container">
          <UserListContainer
            userList={this.props.usersInWeek}/>
          </div>
        </ReactCSSTransitionGroup>
        <Dialog
          title="Please enter your new values"
          actions={actions}
          modal={true}
          open={this.state.dialog.open}
          style={{textAlign: 'left'}}
          autoScrollBodyContent={true}
          onRequestClose={this.handleClose}>
          <Form
            selectedVideo={this.state}
            handleChange={(this.state._id) ? this.handleChange.bind(this) : this.handleChangeNewVideo.bind(this)}/>
        </Dialog>
      </div>
    )
  }
}
;

export default createContainer(() => {
  Meteor.subscribe('allVideos');
  Meteor.subscribe('allWeeks');
  return {
    videos: Videos.find({}).fetch(),
    usersInWeek: Weeks.find({}).fetch()
  }
}, Dashboard);