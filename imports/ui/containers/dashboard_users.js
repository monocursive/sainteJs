import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import {LoaderTransition} from './loader';
import DashboardUsers from '../components/dashboard/dashboard_users';

function composer(props, onData) {
  const handle = Meteor.subscribe('usersListAdmin');
  if(handle.ready()) {
    const users = Meteor.users.find({}, {sort: {username: 1}}).fetch();
    onData(null, {users});
  }

}

export default composeWithTracker(composer, LoaderTransition)(DashboardUsers);
