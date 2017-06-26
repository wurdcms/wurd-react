import React, {Component} from 'react';
import {WurdText, WurdImage, WurdList} from '../../../dist/wurd';


class App extends Component {

  render() {
    return (
      <div>
        <WurdImage id="simple.image" width="100%" />

        <h1><WurdText id="simple.title" /></h1>

        <WurdText id="simple.intro" markdown />

        <hr />

        <h1><WurdText id="react.title" /></h1>

        <WurdText id="react.intro" markdown vars={{name: 'John'}} />

        <h2><WurdText id="react.team.title" /></h2>
        <WurdList id="react.team.items">
          <WurdText type="h3" id=".name" />
          <WurdText id=".position" />
        </WurdList>
      </div>
    );
  }

};


export default App;
