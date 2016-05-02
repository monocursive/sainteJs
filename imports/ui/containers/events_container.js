import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import {Events} from '../../api/events/events';
import EventsList from '../components/events/events';

function composer(props, onData) {
  const handle = Meteor.subscribe('eventsList');
  if(handle.ready()) {
    const events = Events.find({}, {sort: {date: 1}});
    onData(null, {events});
  }
}

export default composeWithTracker(composer)(EventsList);
