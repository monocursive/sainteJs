import React, {Component} from 'react';
import DashboardHome from '../../containers/dashboard_home';
import DashboardUsers from '../../containers/dashboard_users';
import DashboardEvents from './dashboard_events';

export default class DashboardContent  extends Component {
  render() {
    switch(this.props.screen) {
      case "home":
        return(<DashboardHome />);
      case "users":
        return(<DashboardUsers />);
      case "events":
        return(<DashboardEvents />);
    }
  }
}
