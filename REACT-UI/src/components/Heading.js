import React from 'react';
import styled, {css} from 'styled-components'
import logo from './images/logo.png';

// style for heading component
const Wrapper = styled.header`
    width: 100%;
    height: 50%;
    background: black;
    display: flex;
    flex-direction: row;
    justify-content: center;

`;
const Text = styled.h3`
    font-size: 2em;
    font-weight: lighter;
    align-self: center;
    font-family: 'Helvetica Hue', sans-serif;
    
`;
const Link = styled.a`
    text-decoration: none;
    color: white;
    :hover{
        text-decoration: underline;   
    }
`;
const Logo = styled.img`
    height: 50%;
    width: auto;
    align-self: center;
    padding: 2em;
`;

const Heading = () =>(
    <Wrapper>
    <Logo src={logo} />
    </Wrapper>
)

export default Heading