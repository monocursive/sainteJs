import React, {Component} from 'react';

export default class Home extends Component {

  render() {
    return (
      <div>
        <div className="content">
          <p>L'aventure commence.</p>
          <p>Retrouvons-nous au prochain Web En Vert :</p>
          <p>Le 30 mars 2016 au batiment des hautes technologies.</p>
        </div>
        <a href="/login">En savoir plus.</a>
      </div>
    );
  }
}


// {this.props.polls.map(function(poll) {
//   return <div>{poll.title}</div>;
// })}
