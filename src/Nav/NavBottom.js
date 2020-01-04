import React, { Component } from 'react';
import Context from '../Context';
import NavList from './NavList';
import NavItem from './NavList';
import AddFolderLink from './AddFolderLink';

export default class NavBottom extends Component {

    static contextType = Context;

    render() {

        let uid = Math.floor((Math.random() * 9999999) * (Math.random() * 9999999) * (Math.random() * 9999999))

        // Undefined value here is holdover from
        // when previous incarnation would expect
        // undefined value in this spot, so we're
        // faking it. 


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