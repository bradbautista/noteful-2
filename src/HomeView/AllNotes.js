import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context';
import NoteList from '../Common/NoteList';
import Note from '../Common/Note';
import NoteTitle from '../Common/NoteTitle';
import NoteInfo from '../Common/NoteInfo';
import NotePreview from '../Common/NotePreview';
import DeleteNoteButton from '../Common/DeleteNoteButton';
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
                            {note.name}
                        </NoteTitle>
                    </NoteLink>
                    <NoteInfo>
                        Last modified: {note.modified}
                    </NoteInfo>
                    <NotePreview>
                        {note.content.substring(0, 100)}...
                    </NotePreview>
                    <DeleteNoteButton 
                        onClick={() => this.context.deleteNote(note.id)}
                    >
                        Delete note
                    </DeleteNoteButton>
                    </Note>    
                )}
                
            </NoteList>
            

        )
    }
}

Context.propTypes = {
    value: PropTypes.object,
}