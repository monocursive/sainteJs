import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';
import _ from 'lodash';

export default class AttendeeButton extends Component {
  render() {
    switch(this.props.attends) {
      case true:
        return (<button className="ui red basic button" onClick={this.props.handleNotGoingAnymore}>J'y vais plus :(</button>);
      case false:
        return (<button className="ui teal basic button" onClick={this.props.handleGoing}>J'y vais</button>);
      case "not logged in":
        return (<span></span>);
    }
  }
}
