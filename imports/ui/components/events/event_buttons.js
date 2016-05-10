import React, {Component} from 'react';

export default class EventButtons extends Component {
  render() {
      return(
        <div>
          <a className="ui green basic button" href={'/events/'+this.props._id+'/edit'}>Editer</a>
          <a className="ui red basic button" onClick={this.props.delete}>Delete</a>
        </div>        
      );
    }
}
