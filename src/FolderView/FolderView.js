import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context';
import SelectedNotes from './SelectedNotes';
import styled from 'styled-components';
import { Note } from 'styled-icons/material/Note';
import AddNoteLink from '../Common/AddNoteLink';
import EditFolderLink from '../Common/EditFolderLink';
import DeleteFolderButton from '../Common/DeleteFolderButton';
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

        // We're establishing the ID of the selected folder
        // so we have it handy in case the user wants to
        // delete or edit the folder
        const folderId = this.props.match.params.folderId;

        return (

            <MainContentArea>
                <AddNoteLink to={'/addnote'}>
                    <NavLabel>+ Add note</NavLabel>
                </AddNoteLink>
                <EditFolderLink to={`/folder/${folderId}/edit`}>
                    <NavLabel>o Edit Folder</NavLabel>
                </EditFolderLink>
                <DeleteFolderButton
                    onClick={() => {
                        this.context.deleteFolder(folderId);
                        this.props.history.push('/');
                        this.context.updateLists()
                    }}
                >
                    <NavLabel>- Delete Folder</NavLabel>
                </DeleteFolderButton>
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