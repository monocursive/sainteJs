import React, {Component} from 'react';
import Gravatar from 'react-gravatar';
import {Popup} from 'react-semantify';


export default class Attendee extends Component {
  componentDidMount() {
    $("."+this.props.user._id).popup({
      popup: $(".popup"+this.props.user._id),
      on: 'hover'
    });
  }
  render() {
    return (
      <a href={"/users/"+this.props.user._id}>
        <Gravatar md5={this.props.user.avatar} size={50} https className={"ui circular image " + this.props.user._id} />
        <Popup className={"popup"+this.props.user._id}>{this.props.user.username}</Popup>
      </a>
    );
  }
}
