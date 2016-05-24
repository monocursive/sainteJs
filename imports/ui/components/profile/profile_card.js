import React, {Component} from 'react';
import Gravatar from 'react-gravatar';
import moment from 'moment';
import {Content, Card, Header, Image} from 'react-semantify';

export default class ProfileCard extends Component {
  render() {
    if(this.props.editState === true) {
      return (
        <Card className="profileCard">
          <Content>
            <Gravatar md5={this.props.user.profile.avatar} https size={150} className="ui circular image" />
            <form className="ui form">
              <div className="field">
                <input
                  type="text"
                  placeholder="Votre nom d'utilisateur"
                  value={this.props.username}
                  onChange={this.props.setUsername}
                />
              </div>
              <div className="field">
                <i className="twitter icon"></i>
                <input
                  type="text"
                  placeholder="Votre url Twitter"
                  value={this.props.twitterUrl}
                  onChange={this.props.setTwitter}
                />
              </div>
              <div className="field">
                <i className="github icon"></i>
                <input
                  type="text"
                  placeholder="Votre url Github"
                  value={this.props.githubUrl}
                  onChange={this.props.setGithub}
                />
              </div>
            </form>
          </Content>
          <Content>
            Nous a rejoint le {moment(this.props.createdAt).format('ll')}
          </Content>
        </Card>
      );
    } else {
      return (
        <Card className="profileCard">
          <Content>
            <Gravatar md5={this.props.user.profile.avatar} https size={150} className="ui circular image" />
            <Header>{this.props.user.username}</Header>
            <div>
              <i className="twitter icon"></i> <a href={this.props.user.profile.twitterUrl}>{this.props.user.profile.twitterUrl}</a>
            </div>
            <div>
              <i className="github icon"></i> <a href={this.props.user.profile.githubUrl}>{this.props.user.profile.githubUrl}</a>
            </div>
          </Content>
          <Content>
            Nous a rejoint le {moment(this.props.user.createdAt).format('ll')}
          </Content>
        </Card>
      );
    }

  }
}
