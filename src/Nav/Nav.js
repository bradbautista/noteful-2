import React, { Component } from 'react';
import Context from '../Context';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import BackButton from '../Common/BackButton';
import NavTop from './NavTop';
import NavMiddle from './NavMiddle';
import NavBottom from './NavBottom';

class Nav extends Component {

    static contextType = Context;

    render() {

        return (

            <Navbar>
                <NavTop currentPath={this.props.location.pathname} />
                <NavMiddle currentPath={this.props.location.pathname} />
                <NavBottom currentPath={this.props.location.pathname} />
                
                {(this.props.location.pathname.includes(`/note/`))
                ? <BackButton onClick={() => {this.props.history.push('/')}} size="2.5rem"/>
                : ""

                }
            </Navbar>
        )
    }
}

Nav.defaultProps = {
    barId: '1',
    fooId: '1'
}
  
Nav.propTypes = {
    barId: PropTypes.string.isRequired,
    fooId: PropTypes.string.isRequired,
};

Context.Consumer.propTypes = {
    value: PropTypes.object,
}

export default Nav;