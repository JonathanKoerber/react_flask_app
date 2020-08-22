import React from 'react';
import styled, {css} from 'styled-components';
import ToTop from "./ToTop";

const Content = styled.div`
    padding: 5%;
    `;
function topScroll(e){
    let element = e.target
    if(element.scrollHeight - element.scrollTop > element.clientHeight/3){
        console.log("inside topScroll");
    }

}
const Main = (props) =>(
        <Content onScroll={topScroll}>
                {props.children}

            <ToTop />
        </Content>
)

export default Main;