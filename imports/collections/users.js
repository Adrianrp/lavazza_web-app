import {Mongo} from 'meteor/mongo';
import {check, Match} from 'meteor/check';

const users = Meteor.methods({
  'updateUser': function (weekNr) {
    // TODO check id here?
    check(weekNr, Number);

    Meteor.users.update({
      _id: this.userId
    }, {
      $set: {
        weekNr: weekNr
      }
    })

  },
  'addRole': function () {
    const currentUser = Meteor.user();
    if (currentUser.roles.length == 0) {
      //console.log('ene el add role no array');
      Roles.addUsersToRoles(currentUser._id, 'voter');
    }
  },
  'checkIsAdmin': function () {
    const loggedInUser = Meteor.user();
    if (Meteor.isServer) {
      console.log('loggedInUser', Number(loggedInUser._id));
    }
    if (loggedInUser._id == loggedInUser.services.facebook.id && loggedInUser.roles.length == 1) {
      Roles.addUsersToRoles(loggedInUser._id, 'barista');
    }
    if (!Roles.userIsInRole(loggedInUser, 'barista')) {
      throw new Meteor.Error('403', "Access denied")
    }
    console.log('Go ahead admin');
    return 'go';
  }
});

export default users;