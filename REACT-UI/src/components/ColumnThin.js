import React from 'react';
import styled, {css} from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 2px;
@media only screen and (min-width: 992px){
    width: 32.5%;
   
}
    `;

const ColumnThin = (props)=>(
    <Wrapper>
        {props.children}
    </Wrapper>
)

export default ColumnThin;