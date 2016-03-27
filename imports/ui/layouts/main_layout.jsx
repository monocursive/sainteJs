import React, {Component} from 'react';

export default class MainLayout extends Component {

  render() {
    return (
      <div>
        <header>
          <img src="/logo_large.png" alt="Logo"/>
        </header>
        <main>
          {this.props.content()}
        </main>
      </div>
    );
  }
}
