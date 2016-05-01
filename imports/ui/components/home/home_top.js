import React, {Component} from 'react';

export default class HomeTop extends Component {

  render() {
    return (
      <div className="ui grid hometop">
        <div className="two column row stackable content">
          <div className="two wide column">
          </div>
          <div className="four wide column logo"><img src="/logo-dark.png" height="150px" /></div>
          <div className="eight wide column">
            <div className="one column row stackable">
              <h2 >Groupe des utilisateurs JavaScript de Saint-Etienne.</h2>
            </div>
            <div className="one column row">
              <a href="/code-of-conduct" className="ui teal basic button">Notre code de conduite</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
