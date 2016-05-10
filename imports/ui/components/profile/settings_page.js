import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';


export default class SettingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailNotif: this.props.user.profile.notif_email
    };
  }
  componentDidMount() {
    $('.emailCheckbox').checkbox('enable');
  }
  handleEmailSetting(event) {
    const e = event.target.checked;
    Meteor.call('user.setNotifEmail', {_id: this.props.user._id, notif_email: e}, (err, res) =>{
      if(err) {
        console.log(err);
      } else {
        this.setState({emailNotif: e});
      }
    });
  }
  deleteAccount() {
    let result = confirm('Attention, aucun moyen de revenir en arrière une fois cette action effectuée.');
    if (result == true) {
      Meteor.call('user.deleteAccount', {_id: this.props.user._id}, () => {
        FlowRouter.go('/');
      });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="ui grid">
          <div className="one column row stackable content">
            <div className="five wide column">
            </div>
            <div className="six wide column">
              <h2>Paramètres du compte</h2>
              <div className="ui segment">
                <div className="field">
                  <div className="ui checkbox">
                    <input
                      type="checkbox"
                      onChange={this.handleEmailSetting.bind(this)}
                      checked={this.state.emailNotif}
                    />
                    <label>Recevoir des rappels par email.</label>
                  </div>
                </div>
              </div>
              <div className="ui segment">
                <a href='/login' className="ui primary button">Changer de mot de passe</a>
              </div>
              <div className="ui segment">
                <button className="ui red button" onClick={this.deleteAccount.bind(this)}>Supprimer ce compte</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
