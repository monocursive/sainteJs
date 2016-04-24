import React, {Component} from 'react';
import HomeTop from './home-top';
import HomeEvents from './home-events';

export default class Home extends Component {

  render() {
    return (
      <div>
        <HomeTop />
        <HomeEvents />
      </div>
    );
  }
}


// {this.props.polls.map(function(poll) {
//   return <div>{poll.title}</div>;
// })}
