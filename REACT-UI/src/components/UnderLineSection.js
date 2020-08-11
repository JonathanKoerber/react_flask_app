import React from 'react';
import styled, {css} from 'styled-components';

const Wrapper = styled.section`
    align-item: start; 
    margin: 5% 0 5% 0;
    padding 0 5% 2% 5%;
`;
const Underline = styled.section`
    border-bottom-color: #cbcbcb;
    border-bottom-width: 1px;
    border-bottom-style: solid;
`;

const UnderLineSection = (props) =>{

    <Wrapper>
        <Underline>
            <div>
                {props.content}
            </div>
        </Underline>
    </Wrapper>

}

export default UnderLineSection;