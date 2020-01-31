import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(false);
  
  return (
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <NavLink href='/'>Home</NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink href='/characters/'>Characters</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/search/'>Search</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/locations/'>Locations</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/episodes/'>Episodes</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Austin Huisinga</NavbarText>
          </Collapse>
        </Navbar>
  );
}

