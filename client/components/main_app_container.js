import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {browserHistory} from 'react-router';

import VideosListItem from './videos_list_item';
import Intro from './intro';

import {Videos} from '../../imports/collections/videos';
import { WeekNumber } from '../../imports/collections/week_number';

class MainAppContainer extends Component {

  constructor() {
    super();

    this.state = {
      selectedItem: null,
      error: ''
    };
  }

  componentWillMount() {
/*    const fbId = Meteor.userId();
    if (fbId) {
      Meteor.call('checkIfUserInWeek', {fbId}, (error) => {
        if (error) {
          if (error && error.error === "user_has_voted")
          browserHistory.push('/prized');
        }
      });
    }*/
  }
  submitVote(idx) {
    const video = this.props.videos[idx];
    //this.assignRole();
    Meteor.call('updateVote', video, (error) => {
      if (error) {
        this.setState({error: 'this is not a good value, try again '});
      } else {
        this.setState({
          error: '',
          selectedItem: idx,
          isVoteSubmitted: true
        });
        browserHistory.push({
          pathname: '/register',
          state: {
            weekNr: this.props.videos[0].weekNr
          }
        });
        //console.log(this.props, 'IN RENDER');

/*        browserHistory.push({
          pathname: '/register',
          query: {
            username: this.props.currentUser.username,
            emails: this.props.currentUser.emails
          },
          state: {
            fbId: this.props.currentUser._id,
            weekNr: this.props.videos[0].weekNr
          }
        });*/
      }
    });
  }

  assignRole() {
    Meteor.call('addRole', (error) => {
      if (error) {
        this.setState({error: 'Something went wrong, please try again'})
      }
    });
  }

  render() {
    //console.log(this.props.videos);
    const Videos = this.props.videos.map((video, idx) => {
      // Here is making a comparison, evaluates if the number is identical to idx, returns a boolean
      // That is what the double '==' sign is doing.
      let is_selected = this.state.selectedItem == idx;
      return (

          <VideosListItem video={video}
                          key={video._id}
                          clickHandler={this.submitVote.bind(this, idx)}
                          isSelected={is_selected}
                          isButton={true}
                          specialClass="video-list-container"
          />

      )
    });

    return (
      <main>
        <Intro />
        <div className="video-container">
          <div className="spacer-videos">
          {Videos}
          </div>
        </div>
      </main>
    )
  }
}
;

export default createContainer(() => {
  Meteor.subscribe('videos');
  Meteor.subscribe('user.public');
  Meteor.subscribe('weeks');
  Meteor.subscribe('weekNumber');
  return {
    videos: Videos.find({}).fetch(),
    currentUser: Meteor.user()
  }
}, MainAppContainer);