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
import ButtonLabel from '../Common/ButtonLabel';

export default class AllNotes extends Component {

    static contextType = Context;

    render() {

        let selectedNotes = this.context.notes.filter((note) => {
            return (`/folder/${note.folderId}`) === this.props.currentPath
        })

        return (

            <NoteList>
                {selectedNotes.map(note =>
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