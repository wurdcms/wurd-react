import React, {Component} from 'react';
import wurd, {WurdText, WurdImage, WurdList, WurdMarkdown, WurdObject} from '../../../dist/wurd';


class App extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li><a href="/"><WurdText id="nav.home" /></a></li>
          </ul>
        </nav>
        
        <WurdImage id="home.heroImage" style={{objectFit: 'cover', width: '100%', height: 200}} />

        <h2><WurdText id="home.welcome.title" /></h2>

        <WurdText 
          id="home.welcome.intro" 
          type="div"
          className="alert alert-info" 
          vars={{name: 'John'}}
        />

        <WurdMarkdown id="home.welcome.markdown" />

        <hr />

        <h2><WurdText id="home.team.title" /></h2>

        <WurdList id="home.team.members">
          <WurdImage id=".image" width="75" />
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
