import React, {Component} from 'react';
import DashboardUserSingle from './dashboard_user_single';

export default class DashboardUsers extends Component {
  render() {
    return (
      <table className="ui celled table">
        <thead>
          <tr><th>Email</th>
          <th>Name</th>
          <th>Notifs</th>
          <th>Actions</th>
        </tr></thead>
        <tbody>
          {this.props.users.map((user) => {
            return (<DashboardUserSingle user={user} key={user._id} />);
          })}
        </tbody>
      </table>
    );
  }
}
