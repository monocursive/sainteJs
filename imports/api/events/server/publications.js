import {Meteor} from 'meteor/meteor';
import {Events} from '../events';

Meteor.publish('eventsList', function() {
  return Events.find({});
});

Meteor.publish('singleEvent', function(id) {
  return Events.find({id});
});
