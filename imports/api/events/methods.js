import {Meteor} from 'meteor/meteor';
import {Promise} from 'meteor/promise';
import _ from 'lodash';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {Events} from './events';

const geocoderProvider = 'google';
const httpAdapter = 'http';
const geocoder = require('node-geocoder')(geocoderProvider, httpAdapter);

Meteor.methods({
  'events.add'({authorId, title, speaker, description, venue, address, level, date, hour}) {
    this.unblock();

    let loggedInUser = Meteor.user();

    if(loggedInUser._id != authorId ) {
      if(!Roles.userIsInRole(loggedInUser, 'admin')) {
        throw new Meteor.Error(403, "Accès refusé");
      }
    }

    new SimpleSchema({
      title: {type: String},
      speaker: {type: String},
      description: {type: String},
      venue: {type: String},
      address: {type: String},
      level: {type: String},
      date: {type: Date},
      hour: {type: String}
    }).validate({title, speaker, description, venue, address, level, date, hour});

    const promise = geocoder.geocode(address);
    const res = Promise.await(promise);
    return Events.insert({
      authorId: loggedInUser._id,
      title, speaker,
      description,
      venue,
      address: res[0],
      level,
      date,
      hour,
      attendees: new Array(),
      published: false
    });
  },

  'event.going'(id) {
    let loggedInUser = Meteor.user();
    if(!loggedInUser) {
      throw new Meteor.Error(403, "Vous devez être connecté.");
    }
    let attendees = Events.findOne(id).attendees;
    let attendee = {_id: Meteor.user()._id, username: Meteor.user().username, avatar: Meteor.user().profile.avatar};
    let alreadyAttending = _.some(attendees,
      ['_id', Meteor.user()._id]
    );

    if(!alreadyAttending) {
      attendees.push(attendee);
      Events.update(
        {_id: id},
        {$set:
          {
            'attendees': attendees
          }
        }
      );
    } else {
      throw new Meteor.Error(403, "Vous avez un clone ou le dev de ce site a pas géré son affaire.");
    }
  },

  'event.notGoingAnymore'(id) {
    let loggedInUser = Meteor.user();
    if(!loggedInUser) {
      throw new Meteor.Error(403, "Vous devez être connecté.");
    }

    let attendees = Events.findOne(id).attendees;
    attendees.map((attendee, index) => {
      if(attendee._id == Meteor.user()._id) {
        attendees.splice(index, 1);
      }
    });
    Events.update(
      {_id: id},
      {$set:
        {
          'attendees': attendees
        }
      }
    );
  },
  'event.edit'({_id, authorId, title, speaker, description, venue, address, level, date, hour}) {
    this.unblock();

    const loggedInUser = Meteor.user();

    if(!Roles.userIsInRole(loggedInUser, 'admin')) {
      throw new Meteor.Error(403, "Accès refusé");
    }

    new SimpleSchema({
      _id: {type: String},
      title: {type: String},
      speaker: {type: String},
      description: {type: String},
      venue: {type: String},
      address: {type: String},
      level: {type: String},
      date: {type: Date},
      hour: {type: String}
    }).validate({title, speaker, description, venue, address, level, date, hour});

    const promise = geocoder.geocode(address);
    const res = Promise.await(promise);

    Events.edit(
      {_id},
      {
        $set: {
          authorId: loggedInUser._id,
          title, speaker,
          description,
          venue,
          address: res[0],
          level,
          date,
          hour,
          attendees: new Array(),
        }
      }
    );
  }
});
