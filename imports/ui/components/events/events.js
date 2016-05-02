import React, {Component} from 'react';
import EventRow from './event_row';

export default class Events extends Component {
  render() {
    if(this.props.events.fetch().length > 0) {
      return (
        <div className="ui grid container">
          {this.props.events.map(function(event) {
            return <EventRow event={event} key={event._id} />;
          })}
        </div>
      );
    } else {
      return <h2>Rien pour l'instant</h2>;
    }
  }
}
