import React, {Component} from 'react';
import HomeTop from './home_top';
import HomeEvents from './home_events';

export default class Home extends Component {

  render() {
    return (
      <div className="container">
        <HomeTop />
        <HomeEvents />
      </div>
    );
  }
}


// {this.props.polls.map(function(poll) {
//   return <div>{poll.title}</div>;
// })}
