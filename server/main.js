import { Meteor } from 'meteor/meteor';
import { SyncedCron } from 'meteor/percolate:synced-cron';

import '../imports/api/polls/server/publications';
import '../imports/api/events/server/publications';
import '../imports/api/users/server/publications';
import '../imports/api/events/methods';
import '../imports/api/users/methods';

import PollsSeed from '../imports/api/polls/server/publications_seeds';
import UsersSeeds from '../imports/api/users/server/publications_seeds';

import '../imports/api/users/server/config';
import '../imports/startup/server/cron';


Meteor.startup(() => {
  PollsSeed();
  UsersSeeds();
  console.log('ok');
  SyncedCron.config({
    utc: true,
  });
  SyncedCron.start();
});
