import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from '../Context';
import styled from 'styled-components';

import MainContentArea from '../Common/MainContentArea';
import Note from './Note';
import NotePad from './NotePad';
import NoteTitle from './NoteTitle';
import NoteInfo from './NoteInfo';
import NoteText from './NoteText';
import DeleteNote from './DeleteNote';
import NavLabel from '../Nav/NavLabel';
import NotePageBackButton from './NotePageBackButton'



export default class NoteView extends Component {

    static contextType = Context; 

    render() {

        const noteId = this.props.match.params.noteId;

        let selectedNote = this.context.notes.filter((note) => {
            return note.id === noteId
        })

        console.log(selectedNote)

        return (

            

            <MainContentArea>
                <NavLabel><NotePageBackButton onClick={() => {this.props.history.push('/')}} size="7rem"/></NavLabel>
                <NotePad>
                    {selectedNote.map(note =>
                    <Note key={note.id}>
                        <NoteTitle>
                            {note.name}
                        </NoteTitle>
                        <NoteInfo>
                            Last modified: {note.modified}
                        </NoteInfo>
                        
                            {/* If it's an object, that object contains an array of paragraphs, so render one for each array item*/}
                            {(typeof note.content === 'object')
                            ? note.content.map((note) => 
                                <NoteText>{note}</NoteText>
                                )
                            : <NoteText>{note.content}</NoteText>
                            }
                        
                        <DeleteNote
                        name="deleteNote" 
                        id="deleteNote"
                        onClick={() => {
                            this.context.deleteNote(note.id);
                            this.props.history.push('/');
                        }}
                        >
                            Delete Note
                        </DeleteNote>

                        
                    </Note>
                    )}
                </NotePad>

            </MainContentArea>
        )
    }
}

// Context.propTypes = {
//     value: PropTypes.object,
// }

// Note.defaultProps = {
//     noteId: '1',
// }
  
// Note.propTypes = {
//     noteId: PropTypes.string.isRequired,
// };