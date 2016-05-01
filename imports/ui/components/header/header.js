import React, {Component} from 'react';
import HeaderLogin from './header_login';
import HeaderUser from './header_user';

export default class Header extends Component {
  render() {
    const headerUser = <HeaderUser user={this.props.user} />;
    const headerLogin = <HeaderLogin />;
    return (
      <div className="ui top stackable menu">
        <div className="header item">
          <a href="/">SaintéJS</a>
        </div>
        <a className="item" href="/events">
          Events
        </a>
        <a className="item" href="/users">
          Membres
        </a>
        <a className="item">
          A propos
        </a>
        {this.props.user ? headerUser : headerLogin}
      </div>
    );
  }
}
