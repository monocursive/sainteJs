import React, {Component} from 'react';
import EventRow from './event_row';

export default class Events extends Component {
  render() {
    return (
      <div className="ui grid container">
        {this.props.events.map(function(event) {
          return <EventRow event={event} key={event._id} />;
        })}
      </div>
    );
  }
}
