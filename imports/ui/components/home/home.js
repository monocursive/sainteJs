import React, {Component} from 'react';
import HomeTop from './home_top';
import EventsList from '../events/events_list';

export default class Home extends Component {

  render() {
    return (
      <div className="container">
        <HomeTop />
        {this.props.events.fetch().length > 0 ?
          <EventsList events= {this.props.events}/>
          :
          <span></span>
        }
      </div>
    );
  }
}


// {this.props.polls.map(function(poll) {
//   return <div>{poll.title}</div>;
// })}
