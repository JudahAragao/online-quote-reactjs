import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as S from './styles'

const Header = () => {
    return (
        <S.Container>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">JA quotes online</Navbar.Brand>
                    <Nav className="me-auto">
                        <S.NavLink to='/'>Home</S.NavLink>
                        <S.NavLink to='/add-badget'>New Badget</S.NavLink>
                        <S.NavLink to='/my-infos'>My Info.</S.NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </S.Container>
    )
}

export default Header