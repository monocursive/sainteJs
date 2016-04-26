import {Meteor} from 'meteor/meteor';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {Events} from './events';

const geocoderProvider = 'google';
const httpAdapter = 'http';
const geocoder = require('node-geocoder')(geocoderProvider, httpAdapter);

export default function() {
  Meteor.methods({
    'events.add'({title, speaker, description, venue, adress, date}) {
      let loggedInUser = Meteor.user();

      if (!loggedInUser || !Roles.userIsInRole(loggedInUser, 'admin')) {
        throw new Meteor.Error(403, "Accès refusé");
      }

      new SimpleSchema({
        title: {type: String},
        speaker: {type: String},
        description: {type: String},
        venue: {type: String},
        adress: {type: String},
        date: {type: Date}
      }).validate({title, speaker, description, venue, adress, date});

      geocoder.geocode(adress, Meteor.bindEnvironment(function(err, res) {
        Events.insert({title, speaker, description, venue, adress, res, date});
      }));


    }
  });
}
