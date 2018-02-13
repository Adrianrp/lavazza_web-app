import {Meteor} from 'meteor/meteor';
import _ from 'lodash';
import {Videos} from '../imports/collections/videos';
import {Users} from '../imports/collections/users';
import {Weeks} from '../imports/collections/weeks';
import {WeekNumber} from '../imports/collections/week_number';

//import MobileRedirect from ''

//import {WEEK_NUMBER} from './constants';
import Moment from '../node_modules/moment';
const WEEK_NUMBER = WeekNumber.findOne({}, {sort: {weekNr: -1}});
//console.log('WEEK_NUMBER in main/server: ', WEEK_NUMBER);



const VIDEOS = [
  {
    weekNr: WEEK_NUMBER.weekNr,
    url: '205071408',
    title: 'Janus’ Ceviche',
    votes: 0,
    winner: false,

  },
  {
    weekNr: WEEK_NUMBER.weekNr,
    url: '205072044',
    title: 'Hot Dog de Luxe',
    votes: 0,
    winner: false,

  },
  {
    weekNr: WEEK_NUMBER.weekNr,
    url: '205072738',
    title: 'Frederikkes Spidskålsoblater',
    votes: 0,
    winner: false,

  }
];

Meteor.startup(() => {

  const numberRecords = Videos.find({}).count();
  const weekNumber = WeekNumber.find({}).count();

  console.log('Number of records: ', numberRecords);
  console.log('week number: ', WEEK_NUMBER.weekNr);
  if (!numberRecords) {
    _.each(VIDEOS, function (obj) {
      Videos.insert(obj);
    });
  }
  // Make sure we always start with the actual week number
  if (!weekNumber) {
    const startWeek = Moment().subtract(3, 'days').isoWeek();
    WeekNumber.insert({weekNr: startWeek});
  }
  //const savedWeekNumber = WeekNumber.findOne();
  //console.log('week Number Count', savedWeekNumber);
  // Compare the saved week number with the actual week number, if different saved the new week number
/*  if (savedWeekNumber.weekNr !== WEEK_NUMBER) {
    WeekNumber.insert({weekNr: WEEK_NUMBER})
  }*/
  Meteor.publish('weekNumber', function () {
    return WeekNumber.find({});
  });
  Meteor.publish('videos', function () {
    return Videos.find({
      weekNr: WEEK_NUMBER.weekNr
    });
  });
  Meteor.publish('getVideos', function (per_page) {
    return Videos.find({}, { limit: per_page, sort: {weekNr: -1}});
  });
  Meteor.publish('allVideos', function () {
    return Videos.find({});
  });
  Meteor.publish('allWeeks', function () {
    return Weeks.find({});
  });
  Meteor.publish('user.public', function () {
    const amountUsers = Meteor.users.find({}).count();
    console.log(amountUsers, 'total users');
    if (!this.userId) {
      console.log('no user Id');
      return this.ready();
    }

    return Meteor.users.find({
      _id: this.userId
    }, {
      fields: {
        _idFb: 1
      }
    });
  });

});
