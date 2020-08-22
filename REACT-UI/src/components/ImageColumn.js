import React from 'react';
import styled, {css} from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 2px;
    width: 100%;
@media only screen and (min-width: 992px){
    width: 50%;
   
}
    `;

const ImageColumn = (props)=>(
    <Wrapper>
        {props.children}
    </Wrapper>
)

export default ImageColumn;