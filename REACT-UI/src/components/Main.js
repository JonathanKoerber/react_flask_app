import React from 'react';
import styled, {css} from 'styled-components';

const Content = styled.div`
    padding: 5%;
`;

const Main = (props) =>(
    <Content>
    <p>My Stringify Token = {JSON.stringify(window.token, null, 2) }</p>
    <p>My Token {window.token}</p>
    </Content>
)

export default Main;