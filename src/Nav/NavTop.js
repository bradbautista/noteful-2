import React, { Component } from 'react';
import Context from '../Context';
import NavList from './NavList';
import NavItem from './NavItem';
import NavLink from './NavLink';

export default class NavTop extends Component {

    static contextType = Context;

    render() {

        let uid = Math.floor((Math.random() * 9999999) * (Math.random() * 9999999) * (Math.random() * 9999999))

        // Undefined value here is holdover from
        // when previous incarnation would expect
        // undefined value in this spot, so we're
        // faking it. 

        let allNotes = {
            id: undefined,
            name: "Home"
        }

        return (

            <NavList>                    
                <NavItem 
                    key={uid}
                    active={

                        // Is the path, without the leading /,
                        // the same as the (lowercased) name attr 
                        // of the given foo? Or, is the foo's name Home
                        // and the path actually "/"?
                        (this.props.currentPath.substring(1) === allNotes.name.toLowerCase() || (allNotes.name === "Home" && this.props.currentPath.substring(1) === "")) 
                        ? "active"

                        : ""
                    } 
                >   
                    <NavLink to={`/`}>
                            All notes
                    </NavLink>
                </NavItem>
            </NavList>
        )
    }
}