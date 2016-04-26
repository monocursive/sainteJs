import {Meteor} from 'meteor/meteor';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {Events} from './events';

export default function() {
  Meteor.methods({
    'events.add'({title, speaker, description, venue, date}) {
      let loggedInUser = Meteor.user();

      if (!loggedInUser ||
        !Roles.userIsInRole(loggedInUser, 'admin')) {
        throw new Meteor.Error(403, "Access denied");
      }

      new SimpleSchema({
        title: {type: String},
        speaker: {type: String},
        description: {type: String},
        venue: {type: String},
        date: {type: Date}
      }).validate({title, speaker, description, venue, date});


      Events.insert({title, speaker, description, venue, date});
    }
  });
}
