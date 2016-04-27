import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import Header from '../components/header/header';

function composer(props, onData) {
  const user = Meteor.user();
  onData(null, {user});
}

export default composeWithTracker(composer)(Header);
