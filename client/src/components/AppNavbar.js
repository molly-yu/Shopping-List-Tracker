import React, {Component} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container} from 'reactstrap';

class AppNavbar extends Component{
    // constructor(props){
    //     super(props);
        state = {
            isOpen: false
        }

    toggle = () => { // function, binding, replaces need for this.toggle.bind(this), as well as removes need for constructor
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Shopping List</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}></NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/molly-yu/mern_shopping_list">Github</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        );
    }
        
    }
 export default AppNavbar;