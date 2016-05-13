import React, {Component} from 'react';
import EventsList from './events_list';

export default class Events extends Component {
  render() {
    if(this.props.events.fetch().length > 0) {
      return (
        <div>
          <div className="ui three item menu">
            <a href='/events' className={this.props.newEvents ? "active item" : "item"}>
              A venir
            </a>
            <a href='events/old' className={!this.props.newEvents ? "active item" : "item"}>
              Passés
            </a>
          </div>
          <EventsList events={this.props.events}/>
        </div>

      );
    } else {
      return <h2>Rien pour l'instant</h2>;
    }
  }
}
