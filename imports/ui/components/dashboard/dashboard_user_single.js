import { Meteor } from 'meteor/meteor';
import React,{ Component } from 'react';

export default class DashboardUserSingle extends Component {
  delete() {
    let result = confirm('Attention, aucun moyen de revenir en arrière une fois cette action effectuée.');
    if (result == true) {
      Meteor.call('user.deleteAccount', {_id: this.props.user._id}, () => {
      });
    }
  }
  render() {
    return(
      <tr>
        <td>{'emails' in this.props.user ? this.props.user.emails[0].address : "Username only"}</td>
        <td>{this.props.user.username}</td>
        <td>{this.props.user.profile.notif_email ? "oui" : "non"}</td>
        <td>
          <a href={"/users/"+this.props.user._id} className="ui primary button">Profil</a>
          <button onClick={this.delete.bind(this)} className="ui red button">Delete</button>
        </td>
      </tr>
    );
  }
}
