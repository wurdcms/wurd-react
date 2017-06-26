import React, {Component} from 'react';
import {WurdText, WurdImage, WurdList, WurdMarkdown} from '../../../dist/wurd';


class App extends Component {

  render() {
    return (
      <div>
        <WurdImage id="simple.image" width="100%" />

        <h1><WurdText id="simple.title" /></h1>

        <WurdMarkdown id="simple.intro" />

        <hr />

        <h1><WurdText id="react.title" /></h1>

        <WurdMarkdown id="react.intro" vars={{name: 'John'}} />

        <h2><WurdText id="react.team.title" /></h2>
        <WurdList id="react.team.items" type="ol">
          <WurdImage id=".image" width="50" height="50" />
          <WurdText type="h3" id=".name" />
          <WurdText id=".position" />
        </WurdList>
      </div>
    );
  }

};


export default App;
