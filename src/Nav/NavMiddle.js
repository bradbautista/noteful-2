import React, { Component } from 'react';
import Context from '../Context';
import NavList from './NavList';
import NavItem from './NavItem';
import NavLink from './NavLink';

export default class NavTop extends Component {

    static contextType = Context;

    render() {

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
                                {foo.folder_name}
                        </NavLink>            
                    </NavItem>
                )}
            </NavList>
        )
    }
}