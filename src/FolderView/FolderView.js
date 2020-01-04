import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context';
import SelectedNotes from './SelectedNotes';
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
                <AddNoteLink to={'/addnote'}>
                    <NavLabel>+ Add Note</NavLabel>
                </AddNoteLink>
                <NotesArea>
                    <SelectedNotes currentPath={this.props.location.pathname}/>
                </NotesArea>

            </MainContentArea>
        )
    }
}

Context.propTypes = {
    value: PropTypes.object,
}