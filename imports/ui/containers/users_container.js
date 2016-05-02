import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import Users from '../components/users/users';

function composer(props, onData) {
  const handle = Meteor.subscribe('usersList');
  if(handle.ready()) {
    const users = Meteor.users.find({}, {sort: {username: 1}}).fetch();
    onData(null, {users});
  }

}

export default composeWithTracker(composer)(Users);
