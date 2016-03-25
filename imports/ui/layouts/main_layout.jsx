import React, {Component} from 'react';

export default class MainLayout extends Component {

  render() {
    return (
      <div>
        <header>
          Hello
        </header>
        <main>
          {this.props.content()}
        </main>
      </div>
    );
  }
}
