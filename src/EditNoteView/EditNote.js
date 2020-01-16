import React, { Component } from 'react';
import ValidationError from '../ValidationError';
import Context from '../Context';
import config from '../config';
import MainContentArea from '../Common/MainContentArea';
import FormTitle from '../Common/FormTitle';
import FormLabel from '../Common/FormLabel';
import ButtonLabel from '../Common/ButtonLabel';
import AddNoteForm from '../AddNoteView/AddNoteForm';
import NoteNameInput from '../AddNoteView/NoteNameInput';
import FolderSelect from '../AddNoteView/FolderSelect';
import NoteTextInput from '../AddNoteView/NoteTextInput';
import AddNoteButton from '../AddNoteView/AddNoteButton';
import CancelButton from '../Common/CancelButton';
import ButtonWrapper from '../Common/ButtonWrapper';

export default class AddNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notename: {
              value: '',
              touched: false,
            },
            notetext: {
                value: '',
                touched: false,
            },
            foldername: {
                value: '',
                optionid: '',
            },
        }
    }

    static contextType = Context;
  
    handleSubmit = (e) => {

        e.preventDefault()
        
        // Our new note
        const note = {
            note_name: this.state.notename.value,
            folder_id: this.state.foldername.optionid,
            content: this.state.notetext.value
        }

        // establishing the id of the note to be edited
        // in order to patch to the proper URL
        const noteId = this.props.match.params.noteId

        fetch(config.API_ENDPOINT + `notes/${noteId}`, {
            method: 'PATCH',
            body: JSON.stringify(note),
            headers: {
            'content-type': 'application/json',
            }
        })
        .then(res => {
            if (!res.ok) {
                // get the error message from the response,
                return res.json().then(error => {
                // then throw it
                throw error
                })
            }
            return res.json()
        })
        .then(data => {
            this.setState({
                notename: {value: '', touched: false},
                notetext: {value: '', touched: false},
            });
            this.props.history.push('/')
            this.context.updateLists()
        })
        .catch(error => {
            alert(error.toString());
        })
    }

    updateName(name) {
        this.setState({notename: {value: name, touched: true}});
    }

    updateNoteText(text) {
        this.setState({notetext: {value: text, touched: true}});
    }

    updateFolder(e) {

        let index = e.target.selectedIndex;
        let optionElement = e.target.childNodes[index];
        let option = optionElement.getAttribute('id');

        this.setState({foldername: {value: e.target.value, optionid: option}});
    }

    validateNoteName(fieldValue) {
        const name = this.state.notename.value.trim();
        if (name.length === 0) {
          return 'Name is required';
        }
    }

    validateNoteText(fieldValue) {
        const text = this.state.notetext.value.trim();
        if (text.length === 0) {
          return 'No blank notes!';
        }
    }

    // To be tidy and make it easier to get the select value,
    // and also to avoid a case where the user submits without
    // selecting, we need it to be something other than null, but 
    // it can't be a default string in case the user deletes all
    // default values, SO, wait until we've got context data
    // available, then set it to the first folder name that appears

    componentDidMount() {

        setTimeout(() => {
            this.setState({foldername: {value: this.context.folders[0].name, optionid: this.context.folders[0].id}} || {})
        }, 600);    
    } 

    render() {

        // console.log(this.state.notetext.value.split('\n'));
        console.log(this)

        // Establish asterisk component
        const Required = () => (
            <span className="inputField__required">*</span>
        )

        // Define options for our select input
        const folderOptions = this.context.folders.map((folder) => {
            return (
            <option value={folder.folder_name} key={folder.id} id={folder.id}>
            {folder.folder_name}
            </option>
            )
        })

        const noteId = this.props.match.params.noteId

        return (

            <MainContentArea>
                <FormTitle>
                    Edit note
                </FormTitle>
                <AddNoteForm onSubmit={this.handleSubmit}>
                    <FormLabel htmlFor="noteName">New note name {' '} <Required/>
                    </FormLabel>
                    <NoteNameInput
                    type="text"
                    name="noteName"
                    id="noteName"
                    placeholder="Existing title, in due time"
                    onChange={e => this.updateName(e.target.value)}
                    required
                    >
                    </NoteNameInput>
                    {this.state.notename.touched && (
                    <ValidationError message={this.validateNoteName()} />
                    )}
                    <FormLabel htmlFor="folderSelect">Select folder (Current folder: Not yet implemented) </FormLabel>
                    <FolderSelect
                    name="folders" 
                    id="folderSelect"   
                    onChange={e => this.updateFolder(e)}
                    >
                        {folderOptions}
                    </FolderSelect>
                    <FormLabel htmlFor="noteText">New note text {' '}<Required /></FormLabel>
                    <NoteTextInput
                        name="noteText"
                        id="noteText"
                        placeholder="This should be the existing text of the note, but the dev hasn't added that feature yet. I hope you remember what the note said! If not, click cancel to return to safety."
                        onChange={e => this.updateNoteText(e.target.value)}
                        required
                    />
                    {this.state.notetext.touched && (
                        <ValidationError message={this.validateNoteText()} />
                    )}
                    <ButtonWrapper>
                    <AddNoteButton
                    type="submit" 
                    name="saveAddNote" 
                    id="saveAddNote"
                    onClick={(e) => {this.handleSubmit(e)}}
                    disabled={
                        this.validateNoteName()
                    }
                    >
                        <ButtonLabel>
                            Edit note
                        </ButtonLabel>
                    </AddNoteButton>
                    <CancelButton
                        type="button" 
                        name="cancelAddFolder" 
                        id="cancelAddFolder" 
                        onClick={() => {this.props.history.push(`/note/${noteId}`)}}
                    >
                        <ButtonLabel>
                            Cancel
                        </ButtonLabel>
                    </CancelButton>
                    </ButtonWrapper>
                    
                </AddNoteForm>

            </MainContentArea>
        )
    }
}