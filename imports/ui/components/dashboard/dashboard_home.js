import React, {Component} from 'react';

export default class DashboardHome extends Component {
  render() {
    return (
      <div>
        <h2>Users: {this.props.usersCount}</h2>
        <h2>Events: {this.props.eventsCount}</h2>
      </div>
    );
  }
}
