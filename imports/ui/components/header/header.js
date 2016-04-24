import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="ui top stackable menu">
        <div className="header item">
          <a href="/">SaintéJS</a>
        </div>
        <a className="item">
          Events
        </a>
        <a className="item">
          Membres
        </a>
        <a className="item">
          A propos
        </a>
        <div className="right item">
          <a href="/login" className="ui green basic button">Se connecter</a>
        </div>
      </div>
    );
  }
}
