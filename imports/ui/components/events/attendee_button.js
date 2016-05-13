import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';

export default class AttendeeButton extends Component {
  render() {
    let today = new Date();
    if(this.props.date < today) {
     return(<span></span>);
    } else {
      switch(this.props.attends) {
        case true:
          return (<button className="ui red basic button" onClick={this.props.handleNotGoingAnymore}>Annuler ma présence</button>);
        case false:
          return (<button className="ui teal basic button" onClick={this.props.handleGoing}>Confirmer ma présence</button>);
        case "not displayed":
          return (<span></span>);
      }
    }

  }
}
