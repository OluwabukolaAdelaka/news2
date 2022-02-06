import React, {useState} from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, 
    Nav, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../styles/Nav.css';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const closeMenu = () => {
        setIsOpen(false);
    };
  return (
        <div className='container-fluid'>
            <Navbar className='mynavbar'
                color="dark"
                expand="md"
                dark
                sticky="true"
            >
                <NavbarBrand to="/" className='ms-5'>
                DAILY NEWS
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav
                    className="mx-auto"
                    navbar
                >
                    <NavItem>
                        <Link to="/" className='mylinks' onClick={closeMenu}> BUSINESS</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/entertainment" className='mylinks' onClick={closeMenu}> ENTERTAINMENT</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/tech" className='mylinks' onClick={closeMenu}>TECHNOLOGY</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/science" className='mylinks' onClick={closeMenu}>SCIENCE</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/politics" className='mylinks' onClick={closeMenu}>POLITICS</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/health" className='mylinks' onClick={closeMenu}>HEALTH</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/innovations" className='mylinks' onClick={closeMenu}>INNOVATIONS</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/culture" className='mylinks' onClick={closeMenu}>CULTURE</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/security" className='mylinks' onClick={closeMenu}>SECURITY</Link>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;
