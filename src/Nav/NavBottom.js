import React, { Component } from 'react';
import Context from '../Context';
import NavList from './NavList';
import NavItem from './NavList';
import AddFolderLink from './AddFolderLink';

export default class NavBottom extends Component {

    static contextType = Context;

    render() {

        return (

            <NavList>                    
                <NavItem>   
                    <AddFolderLink to={`/addfolder`}>
                            + Add folder
                    </AddFolderLink>
                </NavItem>
            </NavList>
        )
    }
}