import React, {Component} from 'react';
import RaisedButton from '../../node_modules/material-ui/RaisedButton';
import {browserHistory} from 'react-router';

class FbLogin extends Component {

  constructor() {
    super();
    this.state = {
      fbIdLogin: null
    }
  }

  handleClickFb (e) {
    e.preventDefault();
    Meteor.loginWithFacebook({
      requestPermissions: ['public_profile', 'email']
    }, (err) => {
        if (err) {
          console.log('Handle error', err);
          throw new Meteor.Error("Facebook login failed");
        } else {
          this.setState({
            fbIdLogin: Meteor.userId()
          });
          console.log('this.state.fbIdLogin', this.state.fbIdLogin);
          /*console.log('success in FB');
           browserHistory.push('/')*/
        }

      });

  };
  handleClickSignUp (e) {
    e.preventDefault();
    browserHistory.push({
      pathname: '/register'
    });
  }
  render() {
/*    const checkFbId = (Meteor.userId()) ? browserHistory.push('/') :  <RaisedButton
        onClick={this.handleClick.bind(this)}
        label={'LOG IND MED Facebook'}
        labelColor="white"
        fullWidth={true}
        labelStyle={{
          fontFamily: 'Verlag-Book'
        }}
        className="login-fb-btn"
        backgroundColor="#6e92cc"
      />;*/
    console.log('fbId here', Meteor.userId());
    return (
      <div className="fb-container">
        <p>Tak for din stemme, vi skal bare registrere dig så du kan vinde en Torino rejse</p>
        <RaisedButton
          onClick={this.handleClickFb.bind(this)}
          label={'Sign up MED Facebook'}
          labelColor="white"
          fullWidth={true}
          labelStyle={{
            fontFamily: 'Verlag-Book'
          }}
          className="login-fb-btn"
          backgroundColor="#6e92cc"
        />
        <RaisedButton
          onClick={this.handleClickSignUp.bind(this)}
          label={'Sign up'}
          labelColor="white"
          fullWidth={true}
          labelStyle={{
            fontFamily: 'Verlag-Book'
          }}
          className="login-fb-btn"
          backgroundColor="#9e8471"
        />

      </div>
    )
  }
};
export default FbLogin;

/*
import React from 'react';
import RaisedButton from '../../node_modules/material-ui/RaisedButton';
import { browserHistory } from 'react-router';

const FbLogin = () => {
  const handleClick = function (e) {
    e.preventDefault();
    if(Meteor.userId()) {
      browserHistory.push('/')
    }

    Meteor.loginWithFacebook({requestPermissions: ['public_profile', 'email']},
      function (err) {
        if (err) {
          /!*if (err && err.error === '403') {
           browserHistory.push('/');
           }*!/
          console.log('Handle error', err);
          throw new Meteor.Error("Facebook login failed");
        }
        console.log('success in FB');
        browserHistory.push('/redirect')
      })
  };
  return (
    <div className="fb-container">
      <p>For at få adgang til denne side skal du være logget ind på Facebook.</p>
      <RaisedButton
        onClick={handleClick}
        label={'LOG IND MED Facebook'}
        labelColor="white"
        fullWidth={true}
        labelStyle={{
          fontFamily: 'Verlag-Book'
        }}
        className="login-fb-btn"
        backgroundColor="#6e92cc"
      />
    </div>
  )

};

export default FbLogin;*/
