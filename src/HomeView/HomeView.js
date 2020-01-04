import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context';
import AllNotes from './AllNotes';
import styled from 'styled-components';
import { Note } from 'styled-icons/material/Note';
import AddNoteLink from '../Common/AddNoteLink';
import NavLabel from '../Nav/NavLabel';
import MainContentArea from '../Common/MainContentArea';
import NotesArea from '../Common/NotesArea'

const AlignedNote = styled(Note)`
    align-self: center;
    margin-right: 0;
`
export default class Home extends Component {

    static contextType = Context;

    render() {

        return (

            <MainContentArea>
                <NotesArea>
                    <AddNoteLink to={'/addNote'}>
                    <NavLabel>+ Add note</NavLabel>
                    </AddNoteLink>
                    <AllNotes />
                </NotesArea>

            </MainContentArea>
        )
    }
}

Context.propTypes = {
    value: PropTypes.object,
}