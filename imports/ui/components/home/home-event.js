import React, {Component} from 'react';


var event = {
  title: "A la découverte d'ES6",
  speaker: "Michaël Mazurczak",
  description: "A la découverte des avantages d'ES6",
  venue: "OpenFactory",
  date: "11/05/2016 18h30",
}
export default class HomeEvent extends Component {

  render() {
    return (
        <div className="card">
          <div className="image">
            <img src="/es6.png" />
          </div>
          <div className="content">
            <div className="header">{event.title}</div>
            <div className="meta">
              <a>Michaël Mazurczak</a>
            </div>
            <div className="description">

              <p>
                <i className="calendar outline icon"></i>
                11/05/2016 - 18h30
              </p>
              <p>
                <i className="location arrow icon"></i>
                OpenFactory
              </p>
            </div>

          </div>
          <div className="extra content">
            <a className="ui teal basic button">En savoir plus</a>
            <a className="ui teal basic button">J'y vais</a>
          </div>
        </div>
    );
  }
}
