import React from 'react';
import styled, {css} from 'styled-components';

const Wrapper = styled.section`
    overflow: hidden;
    background: black;
    padding: 4% 10% 0% 10%;
    `;
const Column = styled.div`
    max-width: 340px;
@media only screen and (min-width: 575px){
    max-width: 400px;
}
@media only screen and (min-width: 992px){
    max-width: 550px;
    }
    `;
const Title = styled.h1`
    font-family: "Times New Roman", serif;
    align-self: left;
    font-size 1.5em;
    font-weight: bolder;
    color: white;
    padding: 4%%;
@media only screen and (min-width: 992px){
    font-size: 3em;
    }
    `;
const Text = styled.p`
    font-family: "Helvetica Nue", sans-serif;
    color: white;
    font-size: .8em;
@media only screen and (min-width: 992px){
    font-size: 1em;
    } 
    `;
const About =() =>(
    <Wrapper>
        <Column>
        <Title>Design is a collaboration.</Title>
        <Title>Let's work together.</Title>
        <Text>
            On this site I am displaying four projects I’ve worked on within the last 2 years.
            Please dive into each. Coming soon is my lifestyle site.
        </Text>
        </Column>
    </Wrapper>
)
export default About;