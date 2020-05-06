import React, { Component } from "react"
import { Link } from "react-router-dom"
import { ButtonContainer } from './Button'
import styled from "styled-components";
class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <ul className="navbar-nav align-item-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            {/* <i className="fas fa-cart-plus" /> */}
                        </span>
                        My cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}
export default Navbar;

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-Link{
color:var(--mainWhite)!important;
font-size: 1.3rem;
text-tranform: capitalize !important
}
`