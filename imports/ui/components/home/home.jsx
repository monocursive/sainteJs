import React, {Component} from 'react';

export default class Home extends Component {

  render() {
    return (
      <div>
        {this.props.polls.map(function(poll) {
          return <div>{poll.title}</div>;
        })}
      </div>
    );
  }
}
