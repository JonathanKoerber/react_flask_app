import React from 'react';
import styled, {css} from 'styled-components';

const Image = styled.img`
    max-width: 100%;
    width: 100%;
    height: auto;
    overflow: hidden;
`;

const ImageFull = (props) =>{
    <Image src={props.image} />

}

export default ImageFull;