import {Meteor} from 'meteor/meteor';
import {Promise} from 'meteor/promise';
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
      published: false
    });
  }
});
