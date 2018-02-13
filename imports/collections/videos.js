import {Mongo} from 'meteor/mongo';
import {check, Match} from 'meteor/check';

Meteor.methods({
  'updateVote': function (video) {
    check(video, {
      _id: Match.Any,
      weekNr: Number,
      url: String,
      title: String,
      votes: Number,
      winner: Boolean
    });

    // Update Mongo
    Videos.update(video, {$inc: {votes: 1}});
  },
  'getVideos': function () {
    Videos.find();
  },
  'allVideos': function () {
    Videos.find();
  },
  'updateWinner': function (video) {

    check(video, {
      _id: Match.Any,
      weekNr: Number,
      url: String,
      title: String,
      votes: Number,
      winner: Boolean
    });
    const winner = !video.winner;
    Videos.update(video, {$set: {winner}});
  },
  'updateVideo': function (video) {
    check(video, {
      _id: Match.Any,
      weekNr: Number,
      url: String,
      title: String,
      dialog: Object,
      valueWeek: String,
      luckyWinner: Array
    });
    Videos.update({_id: video._id}, {$set: {url: video.url, title: video.title, weekNr: video.weekNr}})
  },
  'addNewVideo': function (video) {
    if (Meteor.isServer) {
      console.log('this is the new video', video);
    }
    check(video, {
      weekNr: Number,
      url: String,
      title: String,
      dialog: Object,
      valueWeek: String,
      luckyWinner: Array
    });
    Videos.insert({weekNr: video.weekNr, url: video.url, title: video.title, votes: 0, winner: false});
  }
});

export const Videos = new Mongo.Collection('videos');

