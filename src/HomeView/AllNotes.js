import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context';
import NoteList from '../Common/NoteList';
import Note from '../Common/Note';
import NoteTitle from '../Common/NoteTitle';
import NoteInfo from '../Common/NoteInfo';
import NotePreview from '../Common/NotePreview';
import DeleteNoteButton from '../Common/DeleteNoteButton';
import EditNoteButton from '../Common/EditNoteButton';
import NoteLink from '../Common/NoteLink';

export default class AllNotes extends Component {

    static contextType = Context;

    render() {

        
        return (

            <NoteList>
                {this.context.notes.map(note =>
                    <Note key={note.id}>
                    <NoteLink to={`/note/${note.id}`}>
                        <NoteTitle>
                            {note.note_name}
                        </NoteTitle>
                    </NoteLink>
                    <NoteInfo>
                        Last modified: {note.date_modified}
                    </NoteInfo>
                    <NotePreview>
                        {(typeof note.content === 'string')
                            ? note.content.substring(0, 100)
                            : note.content[0].substring(0, 100)               
                        }...
                    </NotePreview>
                    <DeleteNoteButton 
                        onClick={() => this.context.deleteNote(note.id)}
                    >
                        Delete note
                    </DeleteNoteButton>
                    <EditNoteButton 
                        to={`/note/${note.id}/edit`}
                    >
                            Edit note
                    </EditNoteButton>
                    </Note>    
                )}
                
            </NoteList>
            

        )
    }
}

Context.propTypes = {
    value: PropTypes.object,
}