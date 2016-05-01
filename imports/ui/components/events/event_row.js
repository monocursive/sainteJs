import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';
import _ from 'lodash';
import {Icon} from 'react-semantify';
import moment from 'moment';

export default class EventRow extends Component {
  constructor(props) {
    super(props);
    
    if(Meteor.user()) {
      this.attends = _.some(props.event.attendees, 
        ['_id', Meteor.user()._id]
      );
      console.log(this.attends);
    } else {
      this.attends = false;
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
  //TODO: Gérer le switch non log, pas attendee, et attendee
  render() {
    
    let that = this;
    function createMarkup() { return {__html: that.props.event.description}; };
    console.log(this.state.attends);
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
            <button className="ui black basic button">Plus d'infos</button> 
            {this.state.attends ?
              ''
              :
              <button className="ui teal basic button" onClick={this.handleGoing.bind(this)}>J'y vais</button>
            }
            
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

