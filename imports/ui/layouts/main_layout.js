import React, {Component} from 'react';
import Header from '../containers/header_container';

export default class MainLayout extends Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.content()}
      </div>
    );
  }
}
