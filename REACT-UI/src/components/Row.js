import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 2%;
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
@media only screen and (min-width: 992px){
    flex-direction: row;
    }
`;

const Row = (props)=>(
    <Wrapper>
        {props.children}
    </Wrapper>
)

export default Row;