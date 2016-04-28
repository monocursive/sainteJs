import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Polls} from '../polls';


Meteor.publish('polls', function() {
  const selector = {};
  const options = {
    sort: {
      createdAt: -1
    },
    limit: 3
  };
  return Polls.find(selector, options);
});
