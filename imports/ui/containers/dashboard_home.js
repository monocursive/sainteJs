import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import {Counts} from 'meteor/tmeasday:publish-counts';
import {LoaderTransition} from './loader';
import DashboardHome from '../components/dashboard/dashboard_home';

function composer(props, onData) {
  Meteor.subscribe('usersCount');
  Meteor.subscribe('eventsCount');
  const usersCount = Counts.get('users-count');
  const eventsCount = Counts.get('events-count');
  onData(null, {usersCount, eventsCount});
}

export default composeWithTracker(composer, LoaderTransition)(DashboardHome);
