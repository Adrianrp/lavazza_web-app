import React, {Component} from 'react';
import RaisedButton from '../../node_modules/material-ui/RaisedButton';
import {browserHistory} from 'react-router';

class FbLogin extends Component {

  constructor() {
    super();

  }
  componentWillMount() {
    const fbId = Meteor.userId();
    console.log('fbId here', fbId);

    if (fbId) {
      browserHistory.push('/')
    }
  }
  handleClick (e) {
    e.preventDefault();
    Meteor.loginWithFacebook({requestPermissions: ['public_profile', 'email']},
      function (err) {
        if (err) {
          /*if (err && err.error === '403') {
           browserHistory.push('/');
           }*/
          console.log('Handle error', err);
          throw new Meteor.Error("Facebook login failed");
        }
        console.log('success in FB');
        browserHistory.push('/')
      })
  };

  render() {
    const checkFbId = (Meteor.userId()) ? browserHistory.push('/') :  <RaisedButton
        onClick={this.handleClick.bind(this)}
        label={'LOG IND MED Facebook'}
        labelColor="white"
        fullWidth={true}
        labelStyle={{
          fontFamily: 'Verlag-Book'
        }}
        className="login-fb-btn"
        backgroundColor="#6e92cc"
      />
    return (
      <div className="fb-container">
        <p>For at få adgang til denne side skal du være logget ind på Facebook.</p>
        {checkFbId}

      </div>
    )
  }
};
export default FbLogin;