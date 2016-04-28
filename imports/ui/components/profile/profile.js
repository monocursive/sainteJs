import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {Roles} from 'meteor/alanning:roles';
import {Breadcrumb, Section, Icon} from 'react-semantify';
import ProfileCard from './profile_card';
import BioCode from './bio_code';
import ProfileButtons from './profile_buttons';


export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
  }
  saveProfile() {
    console.log('saved');
  }
  edit() {
    this.setState({edit: true});
  }
  cancel() {
    this.setState({edit: false});
  }
  render() {
    const canEdit = Meteor.user()._id == this.props.user._id ||
                    Roles.userIsInRole(Meteor.user()._id, 'admin');
    return (
      <div className="ui container two column stackable grid">
        <div className="five wide column">
          <Breadcrumb className="examplebreadcrumb">
            <Section><a href="/">Home</a></Section>
            <Icon className="right chevron divider"></Icon>
            <Section><a href="/users">Membres</a></Section>
            <Icon className="right chevron divider"></Icon>
            <Section>{this.props.user.username}</Section>
          </Breadcrumb>
          <ProfileCard
            user={this.props.user}
            editState={this.state.edit}
          />
        </div>
        <div className="eleven wide column">
        {canEdit ? <ProfileButtons editState={this.state.edit} edit={this.edit.bind(this)} cancel={this.cancel.bind(this)} saveProfile={this.saveProfile.bind(this)} /> : ""}

          <h2>getUserInfo();</h2>
          <BioCode profile={this.props.user.profile} editState={this.state.edit}/>
        </div>
      </div>
    );
  }
}
