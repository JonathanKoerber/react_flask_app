import React, {useEffect, useState} from 'react';
import styled, {css} from 'styled-components';

const Container = styled.div`
    max-width: 100%;
    width: 100%;    
@media screen and (min-width: 1199px){
    max-width: 50%;
    width: 50%;
    height: auto'
`;

const Image = style.img`
    width: auto; 
    height: 100%;
    max-height: 95%;
    overflow: hidden;
    
`;

const ImageTall = (props) => {
    <Container>
        <Image  src={props.image} />
    </Container>

}

export default ImageTall;