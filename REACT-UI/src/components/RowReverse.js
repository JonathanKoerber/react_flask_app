import React from "react";
import styled from "styled-components";

const Row = styled.div`
    padding: 2%;
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
@media only screen and (min-width: 992px){
    flex-direction: row-reverse;
    }
`;

const RowReverse = (props)=>(
    <Row>
        {props.children}
    </Row>
)

export default RowReverse;