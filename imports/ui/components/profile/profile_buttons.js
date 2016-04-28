import React, {Component} from 'react';

export default class ProfileButtons extends Component {
  render() {
    if(this.props.editState === true) {
      return(
        <div>
          <button className="ui red basic button" onClick={this.props.cancel}>Annuler</button>
          <button className="ui green basic button" onClick={this.props.saveProfile}>Valider</button>
        </div>
      );
    } else {
      return(
        <button className="ui blue basic button" onClick={this.props.edit}>Editer le profil</button>
      );
    }

  }
}
