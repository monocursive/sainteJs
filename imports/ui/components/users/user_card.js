import React, {Component} from 'react';
import Gravatar from 'react-gravatar';
import {Content, Card, Header, Image} from 'react-semantify';


export default class UserCard extends Component {
  render() {
    return (
      <Card className="profileCard">
        <Content>
          <Gravatar md5={this.props.user.profile.avatar} size={150} className="ui circular image" />
          <Header>{this.props.user.username}</Header>
          <div>
            <i className="twitter icon"></i> <a href={this.props.user.profile.twitterUrl}>{this.props.user.profile.twitterUrl}</a>
          </div>
          <div>
            <i className="github icon"></i> <a href={this.props.user.profile.githubUrl}>{this.props.user.profile.githubUrl}</a>
          </div>
        </Content>
        <Content>
          <a href={"/users/" + this.props.user._id} className="ui green basic button">Voir le profil</a>
        </Content>
      </Card>
    );
  }
}
