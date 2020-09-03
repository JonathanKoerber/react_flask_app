import React from 'react';
import styled, {css} from 'styled-components';

const Image = styled.img`
    max-width: 100%;
    width: 100%;
    height: auto;
 @media only screen and (min-width: 992px){
    width: 50%;
    max-width: 50%;
 }
`;

const ImageHalf = (props) =>(
    <div>
    <Image src={"https://react-flask-app.s3-us-west-2.amazonaws.com"+props.image.image}/>
        </div>
)

export default ImageHalf;