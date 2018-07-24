import React, {Component} from 'react';
import wurd from '../../../dist/wurd';

import Navbar from './navbar';


class App extends Component {

  render() {
    const page = wurd.content.block('home');

    return (
      <div>
        <Navbar 
          /*
          Here we pass a 'block' (subsection of content) to the child component so that 
          it does not need to be aware of anything outside it's own scope.
          This makes refactoring easier and makes content item IDs shorter to type.
          */
          content={wurd.content.block('nav')}
        />
        
        <page.Image id="heroImage" style={{objectFit: 'cover', width: '100%', height: 200}} />

        <page.Text type="h2" id="welcome.title" />

        <page.Text 
          id="welcome.intro" 
          type="div"
          className="alert alert-info" 
          vars={{name: 'John'}}
        />

        <page.Markdown id="welcome.markdown" vars={{date: (new Date()).toLocaleDateString()}} />

        <hr />

        <page.Text type="h2" id="team.title" />

        <page.List
          id="team.members"
          type="ul"
          className="list-group"
        >
          {item => 
            <li key={item.id()} className="list-group-item">
              <item.Image id="image" width="75" style={{marginRight: 20}} />
              <item.Text id="name" />
            </li>
          }
        </page.List>


        {/* Example of how to edit off-page or interactive elements such as dropdowns */}
        {wurd.editMode &&
          <page.Object
            id="meta"
            keys="title,description"
            style={{color: '#ccc'}}
          >
            [Metadata]
          </page.Object>
        }
      </div>
    );
  }

};


export default App;
