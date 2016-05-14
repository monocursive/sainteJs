import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import {LoaderTransition} from './loader';
import {Events} from '../../api/events/events';
import EventsList from '../components/events/events';

function composer(props, onData) {
  const handle = Meteor.subscribe('eventsList');
  let selector;

  if(handle.ready()) {
    if (props.newEvents == true) {
      var events = Events.find(
        {
          date: {
            $gte: new Date()
          }
        },
        {sort: {date: 1}});
    } else {
      var events = Events.find(
        {
          date: {
            $lte: new Date()
          }
        },
        {sort: {date: 1}});
    }
    onData(null, {events});
  }
}

export default composeWithTracker(composer, LoaderTransition)(EventsList);
