import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import RaisedButton from '../../node_modules/material-ui/RaisedButton';
import {browserHistory} from 'react-router';

class RegisterForm extends Component {
  /*  static contextTypes = {
   router: PropTypes.object.isRequired
   };*/
  constructor() {
    super();
    this.state = {
      error: '',
      username: '',
      emails: '',
      tlf: ''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeTlf = this.handleChangeTlf.bind(this);
    this.updateUSer = this.updateUSer.bind(this);
  }

  componentWillMount() {
/*    //console.log('component will mount', this.props.location.state.fbId);
    const fbId = this.props.location.state.fbId;
    Meteor.call('checkIfUserInWeek', {fbId}, (error) => {
      if (error) {
        if (error && error.error === "user_has_voted")
          return this.setState({error: 'Kom tilbage i næste uge og afgiv din stemme igen.'});
        console.log('ERROR!!!!!!', error);

        //return this.setState({error: 'Come back next week to be able to vote again'});
      }
    });
    this.setState({
      fbId: this.props.location.state.fbId,
      username: this.props.location.query.username,
      emails: this.props.location.query.emails
    });*/
  }
  componentDidMount() {
    $('.wrap').addClass('wrap-register');
  }
  handleChangeName(ev) {
    //console.log(ev.target.value, 'event');
    this.setState({
      username: ev.target.value,
      emails: this.state.emails,
      tlf: this.state.tlf
    });
  }

  handleChangeEmail(ev) {
    //console.log(ev.target.value, 'event');
    this.setState({
      username: this.state.username,
      emails: ev.target.value,
      tlf: this.state.tlf
    });
  }
  handleChangeTlf(ev) {
    const regex = /^((\(?\+45\)?)?)(\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2})$/;
    //console.log(regex.test(ev.target.value), 'event');
    this.setState({
      username: this.state.username,
      emails: this.state.emails,
      tlf: ev.target.value
    })
  }
  updateUSer(event) {
    event.preventDefault();

    const week = this.props.location.state.weekNr;
    const userToSave = {
      username: this.state.username,
      emails: this.state.emails,
      tlf: this.state.tlf
    };
    //console.log(week, 'in update user');
    Meteor.call('addWeekUser', {userToSave, week}, (error) => {
      if (error) {
        if (error && error.error === "wrong-email")
          return this.setState({error: 'Benyt venligst en gyldig email'});
        if (error && error.error === "empty_email")
          return this.setState({error: 'Benyt venligst en gyldig email'});
        if (error && error.error === "empty_field")
          return this.setState({error: 'Benyt venligst et gyldig navn'});
        if (error && error.error === "empty_phone")
          return this.setState({error: 'Benyt venligst et gyldig telefon nr.'});
        if (error && error.error === "wrong_phone_pattern")
          return this.setState({error: 'Benyt venligst et gyldig telefon nr.'});
        console.log(error, 'error');
        this.setState({error: 'Hov! Der er sket en fejl'});
        if (error && error.error === "user_has_voted")
          return this.setState({error: 'Kom tilbage i næste uge og afgiv din stemme igen.'});
      } else {
        console.log('success!');
        this.setState({
          error: ''
        });
        browserHistory.push('/prized');
      }
    })
  }

  render() {

    return (
      <div className="register-container">

        <div>
          <h2>Indtast Navn, Email og Telefon Nr</h2>
          <p>Kontroller venligst, at vi har de korrekte oplysninger på dig!<br />
            Det er vigtigt, for så har vi mulighed for at kontakte dig, hvis du er heldig at vinde ugepræmier fra
            Lavazza eller hovedpræmien om en gourmetrejse for 2 personer til Torino i Italien med middag
            på Michelin restaurant.
          </p>
          <div className="text-danger">
            {this.state.error}
          </div>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
          <form >
            <fieldset>
              <input
                type="text"
                name="navn"
                placeholder="NAVN"
                required={true}
                autoFocus
                maxLength="50"
                onChange={this.handleChangeName}
                value={this.state.username}/>
              <input
                type="email"
                name="email"
                placeholder="EMAILADRESSE"
                required={true}
                maxLength="50"
                onChange={this.handleChangeEmail}
                value={this.state.emails}/>
              <input
                type="tel"
                name="tlf"
                placeholder="TELEFON - valgfrit*"
                required={true}
                maxLength="50"
                onChange={this.handleChangeTlf}
                value={this.state.tlf}/>
              <div className="advarsel">* Vi kontakter dig kun hvis du vinder</div>
            </fieldset>
            <div className="submit-btn">

            <RaisedButton
              label={'SEND'}
              type="submit"
              labelColor="white"
              fullWidth={true}
              backgroundColor="#6e92cc"
              onClick={this.updateUSer}
            /></div>
          </form>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }

}
;

export default RegisterForm;