import { Meteor } from 'meteor/meteor';
import { SyncedCron } from 'meteor/percolate:synced-cron';
import mailRemind from './emails';

SyncedCron.add({
  name: 'Send event reminder' ,
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.text('every 1 mins');;
  },
  job: function() {
    mailRemind();
  }
});
