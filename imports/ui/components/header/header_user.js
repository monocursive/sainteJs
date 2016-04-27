import React, {Component} from 'react';
import {Dropdown} from 'react-semantify';

export default class HeaderUser extends Component {
  logout() {
    Meteor.logout();
  }
  render() {
    return (
      <Dropdown className="right item" init={true}>
        {this.props.user.username}
        <i className="dropdown icon"></i>
          <div className="menu">
            <div className="item">Profil</div>
            <div className="item">Changer de mot de passe</div>
            <div className="item">
              <button className="ui red basic button" onClick={this.logout}>Logout</button>
            </div>
          </div>
        </Dropdown>
    );
  }
}
