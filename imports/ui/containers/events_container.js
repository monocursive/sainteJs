import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import Events from '../components/events/events';

function composer(props, onData) {
  const handle = Meteor.subscribe('eventsList');
  if(handle.ready()) {
    const events = Events.find({});
    onData(null, {events});
  }

}

export default composeWithTracker(composer)(Events);
