import React from 'react';
import styled, {css} from 'styled-components';

const Image = styled.img`
    max-width: 100%;
    width: 100%;
    height: auto
 @media only screen and (min-width: 992px){
    width: 50%;
    max-width: 50%;
 }
`;

const ImageHalf = (props) =>{
<Image scr={props.image}/>
}

export default ImageHalf;