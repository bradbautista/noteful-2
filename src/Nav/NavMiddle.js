import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from '../Context';
import NavList from './NavList';
import NavItem from './NavItem';
import NavLink from './NavLink';
import NavLabel from './NavLabel';
import styled from 'styled-components';

export default class NavTop extends Component {

    static contextType = Context;

    render() {

        // const folderId = this.props.match.params.folderId

        let selectedNote = this.context.notes.filter((note) => {
            return note.id === this.props.currentPath.substr(6)
        }) || {"value": "value"}
        
        return (

            <NavList>
                {this.context.folders.map(foo =>
                    <NavItem 
                        key={foo.id}
                        active={                     

                            // If the ID of the folder being mapped matches the current path, or if the folderId of the selected note equals the id of the folder being mapped, mark it as active

                            (selectedNote[0] === undefined)
                            ? this.props.currentPath  === `/folder/${foo.id}`
                                ? "active"
                                : "" 
                            : selectedNote[0].folderId === foo.id
                                ? "active"
                                : ""
                        }
                        >
                        <NavLink to={`/folder/${foo.id}`}>
                                {foo.name}
                        </NavLink>            
                    </NavItem>
                )}
            </NavList>
        )
    }
}