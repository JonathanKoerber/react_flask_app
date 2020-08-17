import React from 'react';
import styled, {css} from 'styled-components';

const Content = styled.div`
    padding: 5%;
    `;

const Main = (props) =>(
        <Content>
                {props.children}
        </Content>
)

export default Main;