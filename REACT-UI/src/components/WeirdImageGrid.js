import React, {Component, useEffect, useState} from 'react';
import styled, {css} from 'styled-components';
import ImageFull from "./ImageFull";
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    float: left;
    width: 100%;
`;
const Content = styled.div`
    //image_column
    display: grid;
    grid-template-columns: auto;
    grid-template-row: auto 10% 20%;
    height: auto;
    
`;
const ImageOne = styled.img`
    grid-column-start: 1;
    grid-row-start: 1;
`;
const ImageTwo  = styled.img`
    grid-column: 1;
    grid-row: 2;
    width: 80%;
`;
const ImageThree = styled.img`
    grid-column: 1;
    grid-row: 3;
`;
const WeirdImageGrid = (props) => {
    <Wrapper >
        <Content>
            <ImageOne>
                <ImageFull src={props.image_one} />
            </ImageOne>
            <ImageTwo>
                <ImageFull src={props.image_two} />
            </ImageTwo>
            <ImageThree>
                <ImageFull src={props.image_three} />
            </ImageThree>
        </Content>
    </Wrapper>
}

export default WeirdImageGrid