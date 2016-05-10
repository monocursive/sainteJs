import {Meteor} from 'meteor/meteor';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

Meteor.methods({
  'user.modify'({_id, username, twitterUrl, githubUrl, description, niveau, interets}) {

    const loggedInUser = Meteor.user();

    if(loggedInUser._id != _id ) {
      if(!Roles.userIsInRole(loggedInUser, 'admin')) {
        throw new Meteor.Error(403, "Accès refusé");
      }
    }

    new SimpleSchema({
      _id: {type: String},
      username: {type: String},
      twitterUrl: {type: String},
      githubUrl: {type: String},
      description: {type: String},
      niveau: {type: String},
      interets: {type: String}
    }).validate({_id, username, twitterUrl, githubUrl, description, niveau, interets});

    Meteor.users.update(
      {_id: _id},
      {
        $set: {
          "username": username,
          "profile.twitterUrl": twitterUrl,
          "profile.githubUrl": githubUrl,
          "profile.description": description,
          "profile.niveau": niveau,
          "profile.interets": interets
        }
      }
    );
  },
  'user.setNotifEmail'({_id, notif_email}) {
    const loggedInUser = Meteor.user();

    if(loggedInUser._id != _id ) {
      if(!Roles.userIsInRole(loggedInUser, 'admin')) {
        throw new Meteor.Error(403, "Accès refusé");
      }
    }

    new SimpleSchema({
      _id: {type: String},
      notif_email: {type: Boolean}
    }).validate({_id, notif_email});

    Meteor.users.update(
      {_id: _id},
      {
        $set: {
          "profile.notif_email": notif_email,
        }
      }
    );
  },
  'user.deleteAccount'({_id}) {
    const loggedInUser = Meteor.user();

    if(loggedInUser._id != _id ) {
      if(!Roles.userIsInRole(loggedInUser, 'admin')) {
        throw new Meteor.Error(403, "Accès refusé");
      }
    }
    new SimpleSchema({
      _id: {type: String},
    }).validate({_id});

    Meteor.users.remove({_id: _id});
  }
});
