import React, {Component} from 'react';
import Header from '../containers/header_container';

export default class LoginLayout extends Component {

  render() {
    return (
      <div className="Site">
        <Header />
        <div className="container Site-content">
          <div className="ui grid">
            <div className="one column row stackable content">
              <div className="six wide column">
              </div>
              <div className="four wide column">
                {this.props.content()}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-main">
            Organisateur: <a href="https://github.com/maz-dev">Michaël Mazurczak</a> - Code source: <a href="https://github.com/maz-dev/sainteJs">https://github.com/maz-dev/sainteJs</a>
        </div>
      </div>
    );
  }
}
