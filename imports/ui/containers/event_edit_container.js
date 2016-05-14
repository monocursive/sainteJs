import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import {LoaderTransition} from './loader';
import {Events} from '../../api/events/events';
import EventEdit from '../components/events/events_new';

function composer(props, onData) {
  const handle = Meteor.subscribe('singleEvent', props.id);
  if(handle.ready()) {
    const event = Events.findOne({_id: props.id});
    onData(null, {event});
  }
}

export default composeWithTracker(composer, LoaderTransition)(EventEdit);
