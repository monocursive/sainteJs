import React, {Component} from 'react';
import {Dropdown} from 'react-semantify';
import Gravatar from 'react-gravatar';

export default class HeaderUser extends Component {
  logout() {
    Meteor.logout();
  }
  render() {
    const profileUrl = `/users/${Meteor.user()._id}`;
    return (
      <Dropdown className="right item" init={true}>
        <Gravatar md5={this.props.user.profile.avatar} size={33} className="image" />
        <span className="ui green basic button">{this.props.user.username} <i className="dropdown icon"></i></span>
        <div className="menu">
          <a href={profileUrl} className="item">Profil</a>
          <a className="item" onClick={this.logout}>Se déconnecter</a>

        </div>
      </Dropdown>
    );
  }
}
