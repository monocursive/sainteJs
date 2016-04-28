import {Meteor} from 'meteor/meteor';

Meteor.methods({
  'user.modify'({_id, bio}) {

    let loggedInUser = Meteor.user();

    if (!loggedInUser._id === _id || !Roles.userIsInRole(loggedInUser, 'admin')) {
      throw new Meteor.Error(403, "Accès refusé");
    }
  }
});
