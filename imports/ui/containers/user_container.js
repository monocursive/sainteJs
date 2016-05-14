import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import {LoaderTransition} from './loader';
import Profile from '../components/profile/profile';

function composer(props, onData) {
  const handle = Meteor.subscribe('singleUser', props.userId);
  if(handle.ready()) {
    const user = Meteor.users.findOne({_id: props.userId});
    onData(null, {user});
  }

}

export default composeWithTracker(composer, LoaderTransition)(Profile);
