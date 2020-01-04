import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from '../Context';
import styled from 'styled-components';
import { ArrowLeft } from 'styled-icons/fa-solid/ArrowLeft';


const MainContentArea = styled.main`
    background-color: white;
    flex: 1;
    padding-left: 6rem;
    box-shadow: 1px 1px 66px -46px rgba(0,0,0,0.25) inset;
    -webkit-box-shadow: 1px 1px 66px -46px rgba(0,0,0,0.25) inset;
`
const NotePad = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-top: 1rem;
    max-width: 110rem;
`
const Note = styled.li`
`
const NoteTitle = styled.h2`
    font-size: 9rem;
    margin: 0;
    font-family: "Roboto";
    letter-spacing: -3px;
`
const NoteInfo = styled.p`
    font-size: 2.2rem;
    margin: 0;
    font-family: "Roboto";
    margin-top: 1.5rem;
    color: dimgray;
    font-weight: 100;
    padding: 0;
`
const NoteText= styled.p`
    max-width: 70%;
    font-size: 2.7rem;
    margin: 0;
    margin-top: 1.5rem;
    font-family: "Roboto";
    color: black;
    font-weight: 200;
    padding: 0;
`
const DeleteNote= styled.button`
    align-self: flex-start;
    font-size: 1.6rem;
    font-family: "Roboto";
    margin-top: 3rem;
    font-weight: 700;
    color: white;
    padding: 1.5rem;
    width: 27.3rem;
    margin-bottom: 5rem;
    background-color: orangered;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: none;
`

const BackButton= styled(ArrowLeft)`
    margin-right: 0.75rem;
    align-self: center;
    padding-top: 3rem;
`

const NavLabel = styled.span`
    display: flex;
    /* height: 100%; */
    /* width: 100%; */
    align-self: center;
    font-family: "Roboto";
    font-size: 4rem;
    font-weight: 800;
`

export default class NoteView extends Component {

    static contextType = Context; 

    render() {

        const noteId = this.props.match.params.noteId;

        let selectedNote = this.context.notes.filter((note) => {
            return note.id === noteId
        })

        return (

            <MainContentArea>
                <NavLabel><BackButton onClick={() => {this.props.history.push('/')}} size="3rem"/></NavLabel>
                <NotePad>
                    {selectedNote.map(note =>
                    <Note key={note.id}>
                        <NoteTitle>
                            {note.name}
                        </NoteTitle>
                        <NoteInfo>
                            Last modified: {note.modified}
                        </NoteInfo>
                        <NoteText>
                            {note.content}
                        </NoteText>
                        <DeleteNote>Delete Note
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