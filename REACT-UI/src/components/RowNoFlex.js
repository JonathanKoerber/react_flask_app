import React from "react";
import styled from "styled-components";

const Row = styled.div`
    padding: 2%;
    margin: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const RowNoFlex = (props)=>(
    <Row>
        {props.children}
    </Row>
)

export default RowNoFlex;