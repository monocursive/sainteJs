import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import Home from '../components/home/home.js';
import {Polls} from '../../api/polls/polls';

function composer(props, onData) {
  const handle = Meteor.subscribe('polls');
  if(handle.ready()) {
    const polls = Polls.find({}, {sort: {createdAt: -1}}).fetch();
    onData(null, {polls});
  }

}

export default composeWithTracker(composer)(Home);
