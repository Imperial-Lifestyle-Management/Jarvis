import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn } from './NavbarElements'
import { useNavigate } from 'react-router'
import {RxDashboard} from 'react-icons/rx'

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
      navigate('/');
    }

 return (
    <>
      <Nav>
        <NavLink to="/" onClick={handleLogoClick}>
        <h1 style={{ display: 'flex', alignItems: 'center' }}>
            <RxDashboard style={{ marginRight: '0.5rem', marginTop: '0rem' }} /> 
            Employee Dashboard
          </h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/allclients" activeStyle>
            All Clients
          </NavLink>
          <NavLink to="/myclients" activeStyle>
            My Clients
          </NavLink>
          <NavLink to="/more" activeStyle>
            Pending Files
          </NavLink>
          <NavLink to="/idk" activeStyle>
            Idk
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar