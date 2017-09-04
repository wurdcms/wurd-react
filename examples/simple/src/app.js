import React, {Component} from 'react';
import wurd, {WurdText, WurdImage, WurdList, WurdMarkdown, WurdObject} from '../../../dist/wurd';

import Navbar from './navbar';


class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        
        <WurdImage id="home.heroImage" style={{objectFit: 'cover', width: '100%', height: 200}} />

        <WurdText type="h2" id="home.welcome.title" />

        <WurdText 
          id="home.welcome.intro" 
          type="div"
          className="alert alert-info" 
          vars={{name: 'John'}}
        />

        <WurdMarkdown id="home.welcome.markdown" />

        <hr />

        <WurdText type="h2" id="home.team.title" />

        <WurdList
          id="home.team.members"
          type="ul"
          className="list-group"
          itemType="li"
          itemProps={{className: 'list-group-item'}}
        >
          <WurdImage id=".image" width="75" style={{marginRight: 20}} />
          <WurdText id=".name" />
        </WurdList>


        {/* Example of how to edit off-page or interactive elements such as dropdowns */}
        {wurd.editMode &&
          <WurdObject
            id="home.meta"
            keys="title,description"
            style={{color: '#ccc'}}
          >
            [Metadata]
          </WurdObject>
        }
      </div>
    );
  }

};


export default App;
