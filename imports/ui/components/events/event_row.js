import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';
import _ from 'lodash';
import {Icon} from 'react-semantify';
import moment from 'moment';
import AttendeeButton from './attendee_button';

export default class EventRow extends Component {
  constructor(props) {
    super(props);
    
    if(Meteor.user()) {
      this.attends = _.some(props.event.attendees, 
        ['_id', Meteor.user()._id]
      );
    } else {
      this.attends = "not displayed";
    }

    this.state = {
      attends: this.attends
    };
  }

  handleGoing() {
    Meteor.call('event.going', this.props.event._id, (err, res) => {
      if(err) {
        console.log(err);
      } else {
        this.setState({attends: true});
      }
    });
  }

  handleNotGoingAnymore() {
    Meteor.call('event.notGoingAnymore', this.props.event._id, (err, res) => {
      if(err) {
        console.log(err);
      } else {
        this.setState({attends: false});
      }
    });
  }
  
  render() {
    let that = this;
    function createMarkup() { return {__html: that.props.event.description}; };
    return (
      <div className="two column row stackable content event-row">

        <div className="five wide column">
          <div className="row">
            <h2>{this.props.event.title}</h2>
          </div>
          <div className="row speaker">
            <p>{this.props.event.speaker}</p>
          </div>
          <div className="row date">
            <p><Icon className="calendar outline"/> le <b>{moment(this.props.event.date).format('LL')}</b> à <b>{this.props.event.hour}</b></p>
          </div>
          <div className="row">
            <a className="ui black basic button" href={"/events/"+this.props.event._id}>Plus d'infos</a> 
            <AttendeeButton 
              attends={this.state.attends} 
              handleGoing={this.handleGoing.bind(this)}
              handleNotGoingAnymore={this.handleNotGoingAnymore.bind(this)}
            />
          </div>
        </div>

        <div className="eleven wide column">
          <p dangerouslySetInnerHTML={createMarkup()}></p>
          <hr />
          <p><b><Icon className="line chart"/> Niveau {this.props.event.level}</b></p>
          <p><b><Icon className="location arrow"/> {this.props.event.venue} - {this.props.event.address.formattedAddress}</b></p>
        </div>
        
      </div>
    );
  }
}

