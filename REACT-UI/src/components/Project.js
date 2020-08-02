import React from 'react';
import styled, {css} from 'styled-components';

const Wrapper = styled.section`
    padding: 0;
    width: 100%;
    height: auto;

@media only screen and (min-width: 992px){
    width: 50%;
    height: auto;
      &:hover${Image}{
        opacity: .7
    }

}
    `;
const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;

`;
const Title = styled.h1`
    font-family: "Times New Roman", serif;
    align-self: center;
    display: block;
    font-size: 2em;
    font-weight: bolder;
    color: white;
    position: absolute;
    padding: 8%;
@media only screen and (min-width: 992px){
        display: none;
    font-size: 3em;
    ${Wrapper}:hover & {
    display: block;
    }
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
    `;

const Project = (props) => (
// <Wrapper styles={{ backgroundImage:`url(${props.project_img})` }}>
    <Wrapper>
    <Content>
        <Title>{props.project_title}</Title>
    </Content>
         <Image src={props.project_img}/>
</Wrapper>
)
export default Project;
