import React, {Component} from 'react';
import Header from '../containers/header_container';

export default class LoginLayout extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container">
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
      </div>
    );
  }
}
