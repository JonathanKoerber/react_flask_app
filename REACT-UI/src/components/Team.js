import React from 'react';
import styled, {css} from 'styled-components';
import Paragraph from "./Paragraph";
const Wrapper = styled.section`
    margin: 5% 0 5% 0;
    padding: 0 5% 2% 5%
    display: flex;
    flex-direction: row;
`;
const Column = styled.div`
    padding: 0;
    width: 50%;
    height: 100%;
`;
const Title = styled.div`
    text-align: left;
    font-family: Times New Roman, serif;
    font-size: 30px;
    color: #000002;
    font-weight: lighter;
    margin: 0;
`;

const Team = (props) => {
    <Wrapper>
        <Column>
            <Title>My Role</Title>
            {props.role.map(r=> {
                <Paragraph>{r}</Paragraph>
            })}
            {props.role}
            </Column>
        <Column>
            <Title>Team</Title>
            {props.team.map(t=>{
                <Paragraph>t</Paragraph>
            })}
        </Column>
    </Wrapper>
}