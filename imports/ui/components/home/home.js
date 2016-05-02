import React, {Component} from 'react';
import HomeTop from './home_top';
import Events from '../events/events';

export default class Home extends Component {

  render() {
    return (
      <div className="container">
        <HomeTop />
        <Events events= {this.props.events}/>
      </div>
    );
  }
}


// {this.props.polls.map(function(poll) {
//   return <div>{poll.title}</div>;
// })}
