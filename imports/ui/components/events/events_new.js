import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Form, Fields, Field, Label, Input, Icon} from 'react-semantify';
import ReactQuill from 'react-quill';
import moment from 'moment';
import DatePicker from 'react-datepicker';

export default class EventsNew extends Component {

  constructor(props) {
    super(props);

    if(props.edit ==  true) {
      let {_id, title, speaker, description, venue, address, level, date, hour} = props.event;
      this.state = {
        _id: _id,
        title: title,
        speaker: speaker,
        description: description,
        venue: venue,
        address: address.formattedAddress,
        level: level,
        date: moment(date),
        hour:hour
      };
    } else {
      this.state = {
        title: '',
        speaker: '',
        description: '',
        venue: '',
        address: '',
        level: '',
        date: moment(),
        hour:''
      };
    }

  }
  handleTitle(event) {
    this.setState({title: event.target.value});
  }
  handleSpeaker(event) {
    this.setState({speaker: event.target.value});
  }
  handleDescription(value) {
    this.setState({description: value});
  }
  handleVenue(event) {
    this.setState({venue: event.target.value});
  }
  handleAddress(event) {
    this.setState({address: event.target.value});
  }
  handleLevel(event) {
    this.setState({level: event.target.value});
  }
  handleDate(value) {
    this.setState({date: value});
  }
  handleHour(event) {
    this.setState({hour: event.target.value});
  }
  handleSave(event) {
    event.preventDefault();
    let data = this.state;
    data.date = this.state.date._d;
    if(this.props.edit == true) {
      Meteor.call('event.edit', data, (err, res) => {
        if(err) {
          console.log(err);
        } else {
          FlowRouter.go("/events/"+res);
        }
      });
    } else {
      Meteor.call('events.add', data, (err, res) => {
        if(err) {
          console.log(err);
        } else {
          FlowRouter.go("/events/"+res);
        }
      });
    }

  }
  render() {
    if(!Meteor.user()) {
      FlowRouter.go('/');
    }
    return (
      <Form className="container">
        <h2>Nouvel event</h2>
        <Fields className="two">
          <Field>
            <Label>Titre</Label>
            <Input className="icon">
              <input placeholder="Nom de l'event" type="text" value={this.state.title} onChange={this.handleTitle.bind(this)} />
              <Icon className="header"/>
            </Input>
          </Field>
          <Field>
            <Label>Speaker</Label>
            <Input className="icon">
              <input placeholder="Nom du speaker" type="text" value={this.state.speaker} onChange={this.handleSpeaker.bind(this)} />
              <Icon className="user"/>
            </Input>
          </Field>
        </Fields>
        <Field>
          <Label>Description</Label>
          <ReactQuill theme="snow" value={this.state.description} onChange={this.handleDescription.bind(this)}/>
        </Field>
        <Fields className="two">
          <Field>
            <Label>Nom du lieu</Label>
            <Input className="icon">
              <input placeholder="Nom du lieu" type="text" value={this.state.venue} onChange={this.handleVenue.bind(this)} />
              <Icon className="location arrow"/>
            </Input>
          </Field>
          <Field>
            <Label>Adresse</Label>
            <Input className="icon">
              <input placeholder="Addresse du lieu" type="text" value={this.state.address} onChange={this.handleAddress.bind(this)} />
              <Icon className="map"/>
            </Input>
          </Field>
        </Fields>
        <Fields className="three">
          <Field>
            <Label>Date</Label>
            <Input className="icon">
              <DatePicker
                dateFormat="DD/MM/YYYY"
                selected={this.state.date}
                onChange={this.handleDate.bind(this)} />
              <Icon className="calendar outline"/>
            </Input>
          </Field>
          <Field>
            <Label>Heure</Label>
            <Input className="icon">
              <input placeholder="Heure" type="text" value={this.state.hour} onChange={this.handleHour.bind(this)} />
              <Icon className="calendar outline"/>
            </Input>
          </Field>
          <Field>
            <Label>Niveau</Label>
            <select className="ui fluid dropdown" value={this.state.level} onChange={this.handleLevel.bind(this)}>
              <option value="">Niveau</option>
              <option value="Débutant">Débutant</option>
              <option value="Intermédiaire">Intermédiaire</option>
              <option value="Avancé">Avancé</option>
            </select>
          </Field>
        </Fields>
        <button className="ui primary button" onClick={this.handleSave.bind(this)}>Enregistrer</button>
      </Form>
    );
  }
}
