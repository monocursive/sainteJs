import React, {Component} from 'react';
import {Modal} from 'react-semantify';


export default class HomeTop extends Component {
  componentDidMount() {
    $('.ui.modal').modal();
  }

  modalShow() {
    $('.ui.modal').modal('show');
  }

  modalHide() {
    $('.ui.modal').modal('hide');
  }

  render() {
    return (
      <div className="ui grid hometop">
        <div className="two column row stackable content">
          <div className="two wide column">
          </div>
          <div className="four wide column logo"><img src="/logo-dark-300.png" height="150px" /></div>
          <div className="eight wide column">
            <div className="one column row stackable">
              <h2 >Groupe des utilisateurs JavaScript de Saint-Etienne.</h2>
            </div>
            <div className="one column row">
              <button className="ui teal basic button" onClick={this.modalShow}>Notre code de conduite</button>
            </div>
          </div>
        </div>
        <Modal className="examplemodal" init={true}>
          <div className="header">Code de conduite</div>
            <div className="content">
              <p>Le groupe est ouvert à tous, sans distinction de niveau, de sexe, d'origine ou de tout autre critère arbitraire.</p>
              <p>Les comportements discrimant sont à proscrire.</p>
              <p>Si vous apprenez quelque chose lors d'une session, nous comptons sur vous pour le transmettre par la suite.</p>
              <p>Enfin, ce groupe est purement informel et organisé de manière bénévole, n'hésitez pas à proposer des présentations, inititaions et autres contenus.</p>
          </div>
          <div className="content">
            <button className="ui red basic button" onClick={this.modalHide}>Fermer</button>
          </div>
        </Modal>
      </div>
    );
  }
}
