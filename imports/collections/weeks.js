import {Mongo} from 'meteor/mongo';
import {check, Match} from 'meteor/check';
import ValidEmail from 'meteor/froatsnook:valid-email';

Meteor.methods({
  'addWeekUser': function ({userToSave, week}) {

    /*    if (!userToSave) {
     throw new Meteor.Error('no-session',
     'There is no registered user, please login first!');
     }*/
    /*const currentUserId = userToSave.fbId;*/
    const isUserInWeeks = Weeks.findOne({emails: userToSave.emails, weekNr: week});
    const phoneCheck = /^((\(?\+45\)?)?)(\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2})$/;
    var email = userToSave.emails;
    console.log('are you here currentUserId?', isUserInWeeks);

    if (!isUserInWeeks) {
      console.log('go ahead');
      var email = userToSave.emails;
      check(week, Number);
      check(userToSave, {
        username: String,
        emails: String,
        tlf: String
      });
      if (!userToSave.username) {
        throw new Meteor.Error('empty_field', 'please insert a valid name');
      }
      if (userToSave.tlf) {
        //throw new Meteor.Error('empty_phone', 'please insert a phone number');
        if (!phoneCheck.test(userToSave.tlf)) {
          throw new Meteor.Error('wrong_phone_pattern', 'please insert a valid phone number');
        }
      }

      if (IsValidEmail(email) && userToSave !== 'undefined') {
        //console.log('is valid!!!');
        //console.log('attempting to insert user', userToSave);
        Weeks.insert({
          username: userToSave.username,
          emails: userToSave.emails,
          weekNr: week,
          winner: false,
          tlf: userToSave.tlf
        })
      } else {
        //console.log('something went wrong, please try again');
        throw new Meteor.Error('wrong-email', 'wrong email pattern');
      }
    } else {
      if (isUserInWeeks) {
        //console.log('are you here userDb isUserInWeeks[0].weekNr?', isUserInWeeks.weekNr);
        //console.log('en el if the user existente! weekNr', week, 'weekInDb:', isUserInWeeks);
        throw new Meteor.Error('user_has_voted', 'Come back next week to be able to vote again');
      }
      console.log('go ahead');
      var email = userToSave.emails;
      check(week, Number);
      check(userToSave, {
        username: String,
        emails: String,
        tlf: String
      });
      if (!userToSave.username) {
        throw new Meteor.Error('empty_field', 'please insert a valid name');
      }
      if (!userToSave.tlf) {
        throw new Meteor.Error('empty_phone', 'please insert a phone number');
      }
      if (!phoneCheck.test(userToSave.tlf)) {
        throw new Meteor.Error('wrong_phone_pattern', 'please insert a valid phone number');
      }
      if (IsValidEmail(email) && userToSave !== 'undefined') {
        //console.log('is valid!!!');
        //console.log('attempting to insert user', userToSave);
        Weeks.insert({
          username: userToSave.username,
          emails: userToSave.emails,
          weekNr: week,
          winner: false,
          tlf: userToSave.tlf
        })
      }
    }


    /*    if (userToSave) {
     if (!userToSave.username) {
     throw new Meteor.Error('empty_field', 'please insert a valid name');
     }
     if (!userToSave.emails) {
     throw new Meteor.Error('empty_email', 'please insert a valid email');
     }
     if (userToSave.tlf) {
     if (!phoneCheck.test(userToSave.tlf)) {
     throw new Meteor.Error('wrong_phone_pattern', 'please insert a valid phone number');
     }
     }
     if (IsValidEmail(email) && userToSave !== 'undefined') {
     //console.log('is valid!!!');
     //console.log('attempting to insert user', userToSave);
     Weeks.insert({
     username: userToSave.username,
     emails: userToSave.emails,
     weekNr: week,
     winner: false,
     tlf: userToSave.tlf
     })
     } else {
     throw new Meteor.Error('wrong-email', 'please insert a valid email');
     }
     }*/


    /*    if (!isUserInWeeks) {
     console.log('go ahead');
     var email = userToSave.emails;
     check(week, Number);
     check(userToSave, {
     fbId: String,
     username: String,
     emails: String,
     tlf: String
     });
     if (!userToSave.username) {
     throw new Meteor.Error('empty_field', 'please insert a valid name');
     }
     if (userToSave.tlf) {
     //throw new Meteor.Error('empty_phone', 'please insert a phone number');
     if (!phoneCheck.test(userToSave.tlf)) {
     throw new Meteor.Error('wrong_phone_pattern', 'please insert a valid phone number');
     }
     }

     if (IsValidEmail(email) && userToSave !== 'undefined') {
     //console.log('is valid!!!');
     //console.log('attempting to insert user', userToSave);
     Weeks.insert({
     fbId: userToSave.fbId,
     username: userToSave.username,
     emails: userToSave.emails,
     weekNr: week,
     winner: false,
     tlf: userToSave.tlf
     })
     } else {
     //console.log('something went wrong, please try again');
     throw new Meteor.Error('wrong-email', 'wrong email pattern');
     }
     } else {
     if (isUserInWeeks) {
     //console.log('are you here userDb isUserInWeeks[0].weekNr?', isUserInWeeks.weekNr);
     //console.log('en el if the user existente! weekNr', week, 'weekInDb:', isUserInWeeks);
     throw new Meteor.Error('user_has_voted', 'Come back next week to be able to vote again');
     }
     console.log('go ahead');
     var email = userToSave.emails;
     check(week, Number);
     check(userToSave, {
     fbId: String,
     username: String,
     emails: String,
     tlf: String
     });
     if (!userToSave.username) {
     throw new Meteor.Error('empty_field', 'please insert a valid name');
     }
     if (!userToSave.tlf) {
     throw new Meteor.Error('empty_phone', 'please insert a phone number');
     }
     if (!phoneCheck.test(userToSave.tlf)) {
     throw new Meteor.Error('wrong_phone_pattern', 'please insert a valid phone number');
     }
     if (IsValidEmail(email) && userToSave !== 'undefined') {
     //console.log('is valid!!!');
     //console.log('attempting to insert user', userToSave);
     Weeks.insert({
     fbId: userToSave.fbId,
     username: userToSave.username,
     emails: userToSave.emails,
     weekNr: week,
     winner: false,
     tlf: userToSave.tlf
     })
     }
     }*/
  },
  /*'checkIfUserInWeek': function (fbId) {
   console.log(WEEK_NUMBER, 'week number checkIfUserInWeek');
   const resultsOf = Weeks.findOne({fbId: fbId.fbId, weekNr: WEEK_NUMBER.weekNr});
   //const resultsOf = Weeks.find({fbId: fbId, weekNr: WEEK_NUMBER});
   console.log(resultsOf, 'userFbId server side');
   console.log(WEEK_NUMBER.weekNr, 'week number');
   if (!resultsOf) {
   return //console.log(resultsOf, 'in if server side');
   } else {
   throw new Meteor.Error('user_has_voted', 'Come back next week to be able to vote again');
   }
   },*/
  'getWinnerOfTheWeek': function (weekNr) {
    console.log(weekNr, 'en winner of the week');
    const query = {weekNr};
    const n = Weeks.find().count(query);
    const r = Math.floor(Math.random() * n);
    const luckyGuy = Weeks.find({weekNr: weekNr}, {limit: 1, skip: r});
    console.log(luckyGuy.fetch());
    return luckyGuy.fetch()
  }
})
;

export const Weeks = new Mongo.Collection('weeks');

/*import {Mongo} from 'meteor/mongo';
 import {check, Match} from 'meteor/check';
 import ValidEmail from 'meteor/froatsnook:valid-email';
 //import {WEEK_NUMBER} from '../../server/constants';
 import WeekNumber from './week_number';

 WEEK_NUMBER = WeekNumber;
 Meteor.methods({
 'addWeekUser': function ({userToSave, week, userId}) {

 /!*    if (!userToSave) {
 throw new Meteor.Error('no-session',
 'There is no registered user, please login first!');
 }*!/
 /!*const currentUserId = userToSave.fbId;
 const isUserInWeeks = Weeks.findOne({fbId: userToSave.fbId, weekNr: week});*!/
 const phoneCheck = /^((\(?\+45\)?)?)(\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2})$/;
 //console.log('are you here currentUserId?', isUserInWeeks);
 //console.log('are you here isUserInWeeks?', isUserInWeeks);

 if (!isUserInWeeks) {
 console.log('go ahead');
 var email = userToSave.emails;
 check(week, Number);
 check(userToSave, {
 fbId: String,
 username: String,
 emails: String,
 tlf: String
 });
 if (!userToSave.username) {
 throw new Meteor.Error('empty_field', 'please insert a valid name');
 }
 if (userToSave.tlf) {
 //throw new Meteor.Error('empty_phone', 'please insert a phone number');
 if (!phoneCheck.test(userToSave.tlf)) {
 throw new Meteor.Error('wrong_phone_pattern', 'please insert a valid phone number');
 }
 }

 if (IsValidEmail(email) && userToSave !== 'undefined') {
 //console.log('is valid!!!');
 //console.log('attempting to insert user', userToSave);
 Weeks.insert({
 fbId: userToSave.fbId,
 username: userToSave.username,
 emails: userToSave.emails,
 weekNr: week,
 winner: false,
 tlf: userToSave.tlf
 })
 } else {
 //console.log('something went wrong, please try again');
 throw new Meteor.Error('wrong-email', 'wrong email pattern');
 }
 } else {
 if (isUserInWeeks) {
 //console.log('are you here userDb isUserInWeeks[0].weekNr?', isUserInWeeks.weekNr);
 //console.log('en el if the user existente! weekNr', week, 'weekInDb:', isUserInWeeks);
 throw new Meteor.Error('user_has_voted', 'Come back next week to be able to vote again');
 }
 console.log('go ahead');
 var email = userToSave.emails;
 check(week, Number);
 check(userToSave, {
 fbId: String,
 username: String,
 emails: String,
 tlf: String
 });
 if (!userToSave.username) {
 throw new Meteor.Error('empty_field', 'please insert a valid name');
 }
 if (!userToSave.tlf) {
 throw new Meteor.Error('empty_phone', 'please insert a phone number');
 }
 if (!phoneCheck.test(userToSave.tlf)) {
 throw new Meteor.Error('wrong_phone_pattern', 'please insert a valid phone number');
 }
 if (IsValidEmail(email) && userToSave !== 'undefined') {
 //console.log('is valid!!!');
 //console.log('attempting to insert user', userToSave);
 Weeks.insert({
 fbId: userToSave.fbId,
 username: userToSave.username,
 emails: userToSave.emails,
 weekNr: week,
 winner: false,
 tlf: userToSave.tlf
 })
 }
 }
 },
 /!*'checkIfUserInWeek': function (fbId) {
 console.log(WEEK_NUMBER, 'week number checkIfUserInWeek');
 const resultsOf = Weeks.findOne({fbId: fbId.fbId, weekNr: WEEK_NUMBER.weekNr});
 //const resultsOf = Weeks.find({fbId: fbId, weekNr: WEEK_NUMBER});
 console.log(resultsOf, 'userFbId server side');
 console.log(WEEK_NUMBER.weekNr, 'week number');
 if (!resultsOf) {
 return //console.log(resultsOf, 'in if server side');
 } else {
 throw new Meteor.Error('user_has_voted', 'Come back next week to be able to vote again');
 }
 },*!/
 'getWinnerOfTheWeek': function (weekNr) {
 console.log(weekNr, 'en winner of the week');
 const query = {weekNr};
 const n = Weeks.find().count(query);
 const r = Math.floor(Math.random() * n);
 const luckyGuy = Weeks.find({weekNr: weekNr}, {limit: 1, skip: r});
 console.log(luckyGuy.fetch());
 return luckyGuy.fetch()
 }
 })
 ;

 export const Weeks = new Mongo.Collection('weeks');*/
