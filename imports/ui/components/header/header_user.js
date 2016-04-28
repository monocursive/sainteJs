import React, {Component} from 'react';
import {Dropdown} from 'react-semantify';
import Gravatar from 'react-gravatar';

export default class HeaderUser extends Component {
  logout() {
    Meteor.logout();
  }
  render() {
    return (
      <Dropdown className="right item" init={true}>
        <Gravatar md5={this.props.user.profile.avatar} size={33} className="image" />
        <span className="ui green basic button">{this.props.user.username} <i className="dropdown icon"></i></span>
        <div className="menu">
          <div className="item">Profil</div>
          <div className="item">Changer de mot de passe</div>
          <div className="item">
            <button className="ui red basic button" onClick={this.logout}>Se déconnecter</button>
          </div>
        </div>
      </Dropdown>
    );
  }
}
