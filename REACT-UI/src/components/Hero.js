import React from 'react';
import styled, {css} from 'styled-components';
import logo from './images/logo.png';
import exit from './images/exit.png';

const Wrapper = styled.figure`
    padding: 0;
    margin: 0;
    width: 100%;
    height: auto;
    
`;
const Container = styled.div`
@media only screen and (min-width: 769px){
    position: absolute;
    z-index: 99;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 10%;
    text-align: center;
    width: 40%;
@media only screen and (min-width: 992ps){
    top: 20%
`;
const Content = styled`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
`;

const Image = styled.img`
    max-width: 100%;
    overflow: hidden;
    width: 100%;
    height: auto;
    position: relative;
    z-index: -2;
    background-color: #000000;
`;
const Logo = styled.img`
    height: 75%;
    width: auto;
    align-self: center;
`;

const Title = styled.h1`
    align-self: center;
    display: block;
    font-size: 5ems;
@media only screen and (min-width: 1199px){
    padding: 2% 0 2% 0;
    font-size: 7ems;
    font-weight: bolder;
    vertical-align: super;
`;
const Exit = styled.img`
    display: block;
    justify-self: center;
    min-width: 50px;
    width; 12%;
    height: auto;
    :hover{
    opacity: .7;
    }
`;

const Hero = (props) => {
<Wrapper>
    <Image src={props.image}/>
    <Container>
            <Content>
                <Logo src={logo}/>
                <Title>{props.title}</Title>
                <Exit src={exit}/>
            </Content>
        </Container>
</Wrapper>

}


export default Hero