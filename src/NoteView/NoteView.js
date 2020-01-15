import React, { Component } from 'react';
import Context from '../Context';
import EditNoteLink from '../Common/EditNoteLink.js'
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

        console.log(this)
        console.log(this.context.notes)

        let selectedNote = this.context.notes.filter((note) => {
            return (`/note/${note.id}`) === this.props.location.pathname
        })

        return (

        

            <MainContentArea>
                <NavLabel><NotePageBackButton onClick={() => {this.props.history.push('/')}} size="7rem"/></NavLabel>
                <NotePad>
                    {selectedNote.map(note =>
                    <Note key={note.id}>
                        <NoteTitle>
                            {note.note_name}
                        </NoteTitle>
                        <NoteInfo>
                            Last modified: {note.date_modified}
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
                        <EditNoteLink to={`${note.id}/edit`} >                            Edit Note
                        </EditNoteLink>

                        
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