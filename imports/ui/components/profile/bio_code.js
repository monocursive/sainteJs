import React, {Component} from 'react';

export default class BioCode extends Component {
  render() {
    const profile = this.props.profile;
    const description = "description" in profile ? profile.description  : "undefined";
    const niveau = "niveau" in profile ? profile.niveau :  "undefined";
    const interets = "interets" in profile ? profile.interets : "undefined";
    return (
      <div className="biocode">
        <p className="">{"{"}</p>
        <p className="">&nbsp;&nbsp;&nbsp;&nbsp;<span className="biocodekey">'profil'</span> : {"{"}</p>
        <p className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="biocodekey">'description'</span> : <span className="biocodevalue">{description}</span>,</p>
        <p className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="biocodekey">'niveau'</span> : <span className="biocodevalue">{niveau}</span>,</p>
        <p className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="biocodekey">'intérêts'</span> : <span className="biocodevalue">{interets}</span></p>
        <p className="">&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</p>
        <p className="">{"}"}</p>
      </div>
    );
  }
}
