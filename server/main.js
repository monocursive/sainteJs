import { Meteor } from 'meteor/meteor';
import Polls from '../imports/api/polls/server/publications';
import PollsSeed from '../imports/api/polls/server/publications_seeds';

Meteor.startup(() => {
  // code to run on server at startup
});

Polls();
PollsSeed();
