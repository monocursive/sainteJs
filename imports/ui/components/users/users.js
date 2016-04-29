import React, {Component} from 'react';
import UserCard from './user_card';

export default class Users extends Component {
  render() {
    return(
      <div className="ui cards centered home-list container">
        {this.props.users.map((user) => {
          return <UserCard user={user} key={user._id}/>;
        })}
      </div>
    );

  }
}
