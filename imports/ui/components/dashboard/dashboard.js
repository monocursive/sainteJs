import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';
import DashboardContent from './dashboard_content';

export default class Dashboard extends Component {
  render() {
    if(!Meteor.user()) {
      FlowRouter.go('/');
    }
    return (
      <div className="ui container">
        <div className="ui divider"></div>
        <br />
        <div className="ui grid">
          <div className="four wide column">
            <div className="ui secondary vertical pointing fluid menu">
              <a href="/dashboard" className={this.props.screen == "home" ? "item active" : "item"}>
                Statistiques
              </a>
              <a href="/dashboard/users" className={this.props.screen == "users" ? "item active" : "item"}>
                Utilisateurs
              </a>
              <a href="/dashboard/events" className={this.props.screen == "events" ? "item active" : "item"}>
                Events
              </a>
            </div>
          </div>
          <div className="twelve wide column">
            <DashboardContent screen={this.props.screen} />
          </div>
        </div>
      </div>
    );
  }
}
