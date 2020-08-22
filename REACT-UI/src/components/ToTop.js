import React from 'react';
import styled, {css} from 'styled-components';
import toTop from './images/up_arrow.png';

const Wrapper = styled.div`
    padding: 1em; 
    position: sticky;
    bottom: 4px;
    float: right;
    z-index: 99;
`;

const Img = styled.img`
   display: none;
    position: sticky;
    bottom: 4px;
    float: right;
    z-index: 99;
    cursor: pointer;
`;



function toFunction(){
  document.body.scrollTop = 0; // for Safari
  document.documentElement.scrollTop = 0; //for Chrome, FF, IE, and Opera
}
const ToTop = (props) => (
    <Wrapper>
  {window.addEventListener('scroll', function () {
                if(window.pageYOffset >= 400){
                  document.getElementById('to_top').setAttribute("style", "display: block;")
                }else{
                 document.getElementById('to_top').setAttribute("style", "display: none;")
                }
            })}
   <Img id={'to_top'} src={toTop} onClick={toFunction}/>
   </Wrapper>
)

export default ToTop;