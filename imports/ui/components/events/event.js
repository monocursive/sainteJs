import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';
import _ from 'lodash';
import {Roles} from 'meteor/alanning:roles';
import {Content, Card, Header, Icon, Image} from 'react-semantify';
import moment from 'moment';
import Attendee from './attendee';
import EventButtons from './event_buttons';
import EventMap from './map';
import AttendeeButton from './attendee_button';

export default class Event extends Component {
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

  handleDelete() {
    Meteor.call('event.delete', {_id: this.props.event._id}, (err, res) => {
      FlowRouter.go('/');
    });
  }


  render() {

    let that = this;
    function createMarkup() { return {__html: that.props.event.description}; };

    let canEdit;
    if(Meteor.user()) {
      if(Roles.userIsInRole(Meteor.user()._id, 'admin')) {
        canEdit = true;
      } else {
        canEdit = false;
      }
    }
    return (
      <div className="ui container two column stackable grid">
        <div className="five wide column">
          <Card className="profileCard">
            <Content>
              <Header>{this.props.event.title}</Header>
            <div className="speaker">
                 {this.props.event.speaker}
              </div>
            </Content>
            <Content>
              <Icon className="calendar outline"/> le <b>{moment(this.props.event.date).format('LL')}</b> à <b>{this.props.event.hour}</b>
            </Content>
            <Content>
              <AttendeeButton
                attends={this.state.attends}
                handleGoing={this.handleGoing.bind(this)}
                handleNotGoingAnymore={this.handleNotGoingAnymore.bind(this)}
              />
            </Content>
          </Card>

          <h3>Ils y vont :</h3>
        <div className="attendee-list">
          {this.props.event.attendees.map((attendee) => {
            return <Attendee user={attendee} key={attendee._id}/>;
          })}
          </div>

        </div>
        <div className="eleven wide column">
          {canEdit ? <EventButtons _id={this.props.event._id} delete={this.handleDelete.bind(this)}/>: ''}
          <p dangerouslySetInnerHTML={createMarkup()}></p>
          <p><b><Icon className="line chart"/> Niveau {this.props.event.level}</b></p>
          <p><b><Icon className="location arrow"/> {this.props.event.venue} - {this.props.event.address.formattedAddress}</b></p>
          <EventMap
            zoom={12}
            latLong={[this.props.event.address.latitude, this.props.event.address.longitude]}
          />
        </div>
      </div>
    );
  }
}
