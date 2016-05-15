import {Meteor} from 'meteor/meteor';
import {Events} from '../events';

Meteor.publish('eventsList', function() {
  return Events.find({});
});

Meteor.publish('singleEvent', function(id) {
  return Events.find(id);
});

Meteor.publish('eventsCount', function() {
  Counts.publish(this, 'events-count', Events.find());
});
