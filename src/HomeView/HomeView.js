import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context';
import AllNotes from './AllNotes';
import AddNoteLink from '../Common/AddNoteLink';
import NavLabel from '../Nav/NavLabel';
import MainContentArea from '../Common/MainContentArea';
import NotesArea from '../Common/NotesArea'


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