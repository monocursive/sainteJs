import React, {Component} from 'react';

export default class BioCode extends Component {
  render() {
    const profile = this.props.profile;
    const description = "description" in profile ? profile.description  : "undefined";
    const niveau = "niveau" in profile ? profile.niveau :  "undefined";
    const interets = "interets" in profile ? profile.interets : "undefined";
    if(this.props.editState === true) {
      return (
        <form className="ui form">
          <div className="field">
            <label>Description</label>
            <input 
              type="text" 
              name="Description" 
              placeholder="Vous, en quelques mots"
              value={this.props.description}
              onChange={this.props.setDescription} 
            />
          </div>
          <div className="field">
            <label>Niveau</label>
            <input 
              type="text" 
              name="Niveau" 
              placeholder="ex: Débutant, confirmé, Brendan Eich etc.." 
              value={this.props.niveau} 
              onChange={this.props.setNiveau} 
            />
          </div>
          <div className="field">
            <label>Intérêts</label>
            <input 
              type="text" 
              name="Intérêts" 
              placeholder="ex: Javascript appliqué aux arts" 
              value={this.props.interets}
              onChange={this.props.setInterets}  
            />
          </div>
        </form>
      );
    } else {
     //  _.,-----/=\-----,._
     // (__ ~~~"""""""~~~ __)
     //  | ~~~"""""""""~~~ |
     //  | |  ; ,   , ;  | |
     //  | |  | |   | |  | |
     //  | |  | |   | |  | |
     //  | |  | |   | |  | |
     //  | |  | |   | |  | |
     //  | |  | |   | |  | |
     //  | |  | |   | |  | |
     //  | |  | |   | |  | |
     //  |. \_| |   | |_/ .|
     //   `-,.__ ~~~ __.,-'
     //         ~~~~~
     //TODO: Remplacer par prismJS asap
       
      return (
        <div className="biocode">
          <p className="">{"{"}</p>
          <p className="">&nbsp;&nbsp;&nbsp;&nbsp;<span className="biocodekey">'profil'</span> : {"{"}</p>
          <p className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="biocodekey">'description'</span> : {'"'}<span className="biocodevalue">{description}</span>{'"'},</p>
          <p className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="biocodekey">'niveau'</span> : {'"'}<span className="biocodevalue">{niveau}</span>{'"'},</p>
          <p className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="biocodekey">'intérêts'</span> : {'"'}<span className="biocodevalue">{interets}</span>{'"'}</p>
          <p className="">&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</p>
          <p className="">{"}"}</p>
        </div>
      );
    }
  }
}
