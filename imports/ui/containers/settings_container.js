import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import SettingsPage from '../components/profile/settings_page';

function composer(props, onData) {
  const handle = Meteor.subscribe('currentUser');
  if(handle.ready()) {
    const user = Meteor.user();
    onData(null, {user});
  }

}

export default composeWithTracker(composer)(SettingsPage);
