import React, {Component} from 'react';
import Header from '../containers/header_container';

export default class MainLayout extends Component {

  render() {
    return (
      <div className="Site">
        <Header />
        <div className="Site-content">{this.props.content()}</div>
        <div className="footer-main">
            Organisateur: <a href="https://github.com/maz-dev">Michaël Mazurczak</a> - Code source: <a href="https://github.com/maz-dev/sainteJs">https://github.com/maz-dev/sainteJs</a>
        </div>
      </div>
    );
  }
}
