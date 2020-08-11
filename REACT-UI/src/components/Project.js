import React, {useEffect, useState} from 'react';
import styled, {css} from 'styled-components';




const Title = styled.h1`
    font-family: "Times New Roman", serif;
    align-self: center;
    display: block;
    font-size: 2em;
    font-weight: bolder;
    color: white;
    position: absolute;
    padding: 4%;
    opacity: 1;
@media only screen and (min-width: 575.98px){
    font-size: 2.5em;
    padding: 5%;
}
@media only screen and (min-width: 768px){
    font-size: 3em;
    padding: 7%;
}
@media only screen and (min-width: 992px){
    display: block;
    font-size: 3.2em;
  
    }
`;

const Image = styled.img`
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 100%
    position: relative;
    z-index: -2;
    background-color: #000000;
    margin: 0;
    padding: 0;
@media only screen and (min-width: 992px){
   
    }
    `;
const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;

`;
const Wrapper = styled.section`
    padding: 0;
    width: 100%;
    height: 100%;
    margin-bottom: -.85%;
@media only screen and (min-width: 575.98px){
    margin-bottom: -.75%;
}
@media only screen and (min-width: 768px){
    margin-bottom: .-40%;
}
@media only screen and (min-width: 992px){
    width: 50%;
    height: auto;
    margin-bottom: -.2%;
    ${Image}:hover & {
    opacity: .7;
    }
  
    ${Title}:hover & {
    display: block;
    color: red;
    }
   
}
    `;


function Project(props) {
    const project = props.project;
return(
    <Wrapper>
        <Content>
            <Title>{project.title}</Title>
        </Content>
        <Image src={project.image} />
    </Wrapper>
)
}
export default Project;
