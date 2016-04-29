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
    profile = props.user.profile;
    this.twitterProps = "twitterUrl" in profile ? profile.twitterUrl : '';
    this.githubProps = "githubUrl" in profile ? profile.githubUrl : '';
    this.descriptionProps = "description" in profile ? profile.description : 'undefined';
    this.niveauProps = "niveau" in profile ? profile.niveau : 'undefined';
    this.interetsProps = "interets" in profile ? profile.interets : 'undefined';
    this.state = {
      edit: false,
      username: props.user.username,
      twitterUrl: this.twitterProps,
      githubUrl: this.githubProps,
      description: this.descriptionProps,
      niveau: this.niveauProps,
      interets: this.interetsProps
    };
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.user._id != nextProps.user._id) {
      this.setState({edit: false});
    }   
  }
  setUsername(event) {
    this.setState({username: event.target.value});
  }
  setTwitter(event) {
    this.setState({twitterUrl: event.target.value});
  }
  setGithub(event) {
    this.setState({githubUrl: event.target.value});
  }
  setDescription(event) {
    this.setState({description: event.target.value});
  }
  setNiveau(event) {
    this.setState({niveau: event.target.value});
  }
  setInterets(event) {
    this.setState({interets: event.target.value});
  }
  edit() {
    this.setState({edit: true});
  }
  cancel() {
    this.setState({
      edit: false,
      username: this.props.user.username,
      twitterUrl: this.twitterProps,
      githubUrl: this.githubProps,
      description: this.descriptionProps,
      niveau: this.niveauProps,
      interets: this.interetsProps
    });
  }
  saveProfile() {
    let userSet = {
      _id: this.props.user._id,
      username: this.state.username,
      twitterUrl: this.state.twitterUrl,
      githubUrl: this.state.githubUrl,
      description: this.state.description,
      niveau: this.state.niveau,
      interets: this.state.interets
    };
    Meteor.call('user.modify', userSet, (err, res) => {
      if(err) {
        console.log('error');
      } else {
        this.setState({
          edit: false
        });
      }
    });
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
            username={this.state.username}
            twitterUrl={this.state.twitterUrl}
            githubUrl={this.state.githubUrl}
            editState={this.state.edit}
            setUsername={this.setUsername.bind(this)}
            setTwitter={this.setTwitter.bind(this)}
            setGithub={this.setGithub.bind(this)}
          />
        </div>
        <div className="eleven wide column">
          {canEdit ?
              <ProfileButtons
                editState={this.state.edit}
                edit={this.edit.bind(this)}
                cancel={this.cancel.bind(this)}
                saveProfile={this.saveProfile.bind(this)}
                /> : ""
          }
          <h2>getUserInfo();</h2>
          <BioCode
            profile={this.props.user.profile}
            editState={this.state.edit}
            description={this.state.description}
            niveau={this.state.niveau}
            interets={this.state.interets}
            setDescription={this.setDescription.bind(this)}
            setNiveau={this.setNiveau.bind(this)}
            setInterets={this.setInterets.bind(this)}
          />
        </div>
      </div>
    );
  }
}
