import React, {Component} from 'react';
import Header from '../components/header/header';

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
