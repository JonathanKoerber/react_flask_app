import React from 'react';
import styled, {css} from 'styled-components';

const Title = styled.h3`
text-align: center;
fort-family: Times New Roman, serif;
font-size: 30px;
color: #000002;
font-weight: lighter;
margin: 0;
`;

const SectionTitle = (props) => (
    <Title>{props.title}</Title>
)

export default SectionTitle;