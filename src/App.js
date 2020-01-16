import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import config from './config';
import Header from './Header';
import Nav from './Nav/Nav';
import BoundaryError from './BoundaryError';
import PropTypes from 'prop-types';
import Context from './Context';
import HomeView from './HomeView/HomeView';
import FolderView from './FolderView/FolderView';
import NoteView from './NoteView/NoteView';
import AddFolder from './AddFolderView/AddFolder';
import AddNote from './AddNoteView/AddNote';
import EditNote from './EditNoteView/EditNote';
import EditFolder from './EditFolderView/EditFolder';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

  .App {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  html {
    font-size: 62.5%;
    font-family: "Roboto";
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    text-decoration: none;
  }

  ::marker {
    color: transparent;
  }

  a {
    text-decoration: none;
  }

  header {
    width: 100%;
  }

  h1 {
    margin: 0;
  }

`

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      folders: [
      ],
      notes: [
      ]
    };
  }

  deleteNote = noteId => {

    // If you're going to use this code anywhere else, note that both
    // note.id and noteId are numbers, so this strict comparison works
    const newNotes = this.state.notes.filter(note => note.id !== noteId)

    fetch(config.API_ENDPOINT + `notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status)
      }
      return res.json()
    })
    .catch(error => this.setState({ error }))

    this.setState({
      notes: newNotes
    })

  }

  deleteFolder = folderId => {

    // If the types aren't equal, save yourself multiple hours by  
    // rolling your own type coercion or by loosening the comparator
    const newFolders = this.state.folders.filter(folder => folder.id.toString() !== folderId)

    fetch(config.API_ENDPOINT + `folders/${folderId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status)
      }
      return res.json()
    })
    .catch(error => this.setState({ error }))

    this.setState({
      folders: newFolders
    })

  }

  componentDidMount() {

    this.updateLists();

  }

  updateLists = () => {

    Promise.all([
      fetch(config.API_ENDPOINT + `folders`),
      fetch(config.API_ENDPOINT + `notes`)
    ])
    .then(([folders, notes]) => {
        if (!folders.ok) 
          return notes.json().then(e => Promise.reject(e));
        if (!notes.ok) 
          return notes.json().then(e => Promise.reject(e));
        return Promise.all([folders.json(), notes.json()]);
    })
    .then(([folders, notes]) => {
        this.setState({folders, notes})
      }
    )
    .catch(err => {console.error({err})})

  }

  render() {

    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote,
      deleteFolder: this.deleteFolder,
      updateLists: this.updateLists
    }


    return (
      <Context.Provider value={contextValue}>
        <div className="App">
          <GlobalStyle/>
          <Header/>
            
              <BoundaryError>
                <Route exact path='/' component={Nav} />
                <Route exact path='/' component={HomeView} />
                <Route path={['/folder/:folderId', '/note/:noteId', '/addfolder', '/addNote', '/note/:noteId/edit', '/folder/:folderId/edit']} component={Nav} />
                <Route exact path='/folder/:folderId' component={FolderView} />
                <Route exact path='/note/:noteId' component={NoteView} />
                <Route exact path='/note/:noteId/edit' component={EditNote} />
                <Route exact path='/folder/:folderId/edit' component={EditFolder} />
                <Route path='/addfolder' component={AddFolder} />
                <Route path='/addnote' component={AddNote} />
              </BoundaryError>
            
        </div>
      </Context.Provider>
    );
  }
}

Context.Provider.propTypes = {
  value: PropTypes.object,
}

export default App;