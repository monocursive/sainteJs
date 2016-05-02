import React, {Component} from 'react';
import Header from '../containers/header_container';

export default class MainLayout extends Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.content()}
        <div className="ui inverted vertical footer segment">
            <div className="ui container">
                Organisateur: <a href="https://github.com/maz-dev">Michaël Mazurczak</a> - Code source: <a href="https://github.com/maz-dev/sainteJs">https://github.com/maz-dev/sainteJs</a>
            </div>
        </div>
      </div>
    );
  }
}
