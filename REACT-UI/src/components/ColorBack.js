import React from 'react';
import styled, {css} from 'styled-components';
import ImageFull from "./ImageFull";


const Wrapper = styled.div`
    background-color: #e3f7f7;
    padding: 8% 2% 8% 2%;
    margin-bottom: 6%;
    `;
const Row = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
@media only screen and (min-width: 992px){
    display: flex;
    flex-direction: row;
    }
`;

const ColorBack = (props) =>(
    <Wrapper>
      <Row>
          {props.image.map((i,index)=> {
              if (i.image) {
              return <ImageFull image={i.image}/>
          }
          })}
      </Row>
    </Wrapper>
    )

export default ColorBack;