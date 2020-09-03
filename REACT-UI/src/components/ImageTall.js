import React from 'react';
import styled, {css} from 'styled-components';



const Image = styled.img`
    width: auto; 
    height: 60%;
    overflow: hidden;
    padding: 2%;
   @media screen and (min-width: 1199px){
   padding-top: 50%;
    width: 100%;
    height: auto;
    align-self: baseline;
`;

const ImageTall = (props) => (

        <Image  src={"https://react-flask-app.s3-us-west-2.amazonaws.com"+props.image} />

)

export default ImageTall;