import { Mongo } from 'meteor/mongo';
import { check, Match } from 'meteor/check';
import { Weeks } from './weeks';

Meteor.methods({
  'insertWeekNumber': function (weekNr) {
    check({
      weekNr: Number
    });
    WeekNumber.insert({
      weekNr: weekNr
    })
  },
  'checkIfUserInWeek': function (fbId) {
    const weekObj = WeekNumber.findOne({}, {sort: {weekNr: -1}});

    if(Meteor.isServer) {
      console.log(fbId, 'fbId');
      const resultsOf = Weeks.findOne({fbId: fbId.fbId, weekNr: weekObj.weekNr}, {sort: {weekNr: -1}});
      if (!resultsOf) {
        return weekObj
      } else {
        throw new Meteor.Error('user_has_voted', 'Come back next week to be able to vote again');
      }
    }
    //const resultsOf = Weeks.find({fbId: fbId, weekNr: WEEK_NUMBER});
    //console.log(resultsOf, 'userFbId server side');
    //console.log(weekObj.weekNr, 'week number');

  }
});

export const WeekNumber = new Mongo.Collection('weekNumber');