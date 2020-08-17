import React, {Component, useEffect, useState} from 'react';
import styled, {css} from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    float: left;
`;
const Content = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 10% 20%;
    justify-content: left;
`;
const ImageOne = styled.img`
    grid-column-start: 1;
    grid-row-start: 1;
    padding-bottom: .1em;
    width: 100%
`;
const ImageTwo  = styled.img`
    grid-column: 1;
    grid-row: 2;
    padding-bottom: .2em;
    width: 80%;
`;
const ImageThree = styled.img`
    grid-column: 1;
    grid-row: 3;
    padding-bottom: .1em;
    width: 90%;
`;
function getImages(element){
    if(element.image_one){
        return <ImageOne src={element.image_one}/>
    }else if(element.image_two){
        return <ImageTwo src={element.image_two}/>
    }else if(element.image_three){
        return <ImageThree src={element.image_three}/>
    }
}
const Pink = styled.div`
    background-color: #888;
    width: 100%;
    height: 100px;
    grid-column-start: 1;
    grid-row-start: 1;
    padding-bottom: .1em;
`;
const WeirdImageGrid = (props) => (
    <Wrapper >
        <Content>
            {props.image.map((i, index)=>{
                return getImages(i)
            })}

        </Content>
    </Wrapper>
)

export default WeirdImageGrid