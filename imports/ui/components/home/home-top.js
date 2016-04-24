import React, {Component} from 'react';

export default class HomeTop extends Component {

  render() {
    return (
      <div className="ui grid hometop">
        <div className="two column row stackable content">
          <div className="two wide column">
          </div>
          <div className="four wide column logo"><img src="/logo-dark.png" height="250px" width="200px"/></div>
          <div className="eight wide column">
            <div className="one column row stackable">
              <h2 >Groupe des utilisateurs JavaScript de Saint-Etienne.</h2>
            </div>
            <div className="one column row">
              <p>Rejoignez nous afin de partager vos expériences, apprendre et rencontrer d'autres développeurs.</p>
              <p>Le groupe est ouvert à tout le monde sans aucune distinction.</p>
              <a href="/code-of-conduct" className="ui teal basic button">Notre code de conduite</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
