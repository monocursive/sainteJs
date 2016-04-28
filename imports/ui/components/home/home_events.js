import React, {Component} from 'react';
import HomeEvent from './home_event';

export default class HomeEvents extends Component {

  render() {
    return (
      <div className="home-events">
        <div className="row event-header">
          <h2>A venir :</h2>
        </div>
        <div className="ui cards centered home-list">
          <HomeEvent />
        </div>
      </div>
    );
  }
}
