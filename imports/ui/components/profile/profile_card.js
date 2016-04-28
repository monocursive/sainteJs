import React, {Component} from 'react';
import Gravatar from 'react-gravatar';
import moment from 'moment';
import {Content, Card, Header, Image} from 'react-semantify';

export default class ProfileCard extends Component {
  constructor(props) {
    super(props);
    const twitterProps = "twitterUrl" in props.user.profile ? props.user.profile.twitterUrl : '';
    const githubProps = "githubUrl" in props.user.profile ? props.user.profile.githubUrl : '';
    this.state = {
      username: props.user.username,
      twitterUrl: twitterProps,
      githubUrl: githubProps
    };
  }
  setTwitter(event) {
    this.setState({twitterUrl: event.target.value});
  }
  setGithub(event) {
    this.setState({githubUrl: event.target.value});
  }
  render() {
    if(this.props.editState === true) {
      return (
        <Card className="profileCard">
          <Content>
            <Gravatar md5={this.props.user.profile.avatar} size={150} className="ui circular image" />
            <Header>{this.props.user.username}</Header>
              <form className="ui form">
                <div className="field">
                  <i className="twitter icon"></i>
                  <input
                    type="text"
                    placeholder="Votre url Twitter"
                    value={this.state.twitterUrl}
                    onChange={this.setTwitter.bind(this)}
                  />
                </div>
                <div className="field">
                  <i className="github icon"></i>
                  <input
                    type="text"
                    placeholder="Votre url Github"
                    value={this.state.githubUrl}
                    onChange={this.setGithub.bind(this)}
                  />
                </div>
              </form>
          </Content>
          <Content>
            Nous a rejoins le 28/04/2016
          </Content>
        </Card>
      );
    } else {
      return (
        <Card className="profileCard">
          <Content>
            <Gravatar md5={this.props.user.profile.avatar} size={150} className="ui circular image" />
            <Header>{this.props.user.username}</Header>
            <div>
              <i className="twitter icon"></i> <a href="http://twitter.com/mutantantihero">{this.state.twitterUrl}</a>
            </div>
            <div>
              <i className="github icon"></i> <a href="http://github.com/maz-dev">{this.state.githubUrl}</a>
            </div>
          </Content>
          <Content>
            Nous a rejoins le 28/04/2016
          </Content>
        </Card>
      );
    }

  }
}
