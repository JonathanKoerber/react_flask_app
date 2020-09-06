import React from 'react';
import styled, {css} from 'styled-components'
import logo from './images/logo.png';

// style for heading component
const Wrapper = styled.header`
    width: 100%;
    height: auto;
    background: black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: auto;
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
    height: 75%;
    width: auto;
    align-self: center;
`;

const Heading = () =>(
    <Wrapper>
    <Text>
        <Link href="about.html">About</Link>
    </Text>
    <Logo src={logo} />
    <Text>
        <Link href="projects.html">Projects</Link>
    </Text>
    </Wrapper>
)

export default Heading