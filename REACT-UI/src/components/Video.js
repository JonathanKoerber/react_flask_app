import React, {Component, useEffect, useState} from 'react';
import styled, {css} from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    padding-bottom: 1em;
`;
const Vid = styled.video`
     width: 100%;
    height: auto;
    overflow: hidden;
    padding-bottom: 1em
`;
var p, s;
const Video = (props) =>(
    <Container>
        {props.video.map((v, index)=>{
            if(v.poster){
                p = v.poster;
            }else if(v.source){
                s=v.source;
            }
        })}
        <Vid preload="none" controls="play/pause"
               loop='loop' autoplay="autoplay" poster={"https://react-flask-app.s3-us-west-2.amazonaws.com"+p}>
            <source src={"https://react-flask-app.s3-us-west-2.amazonaws.com"+s} type="video/mp4"/>
        </Vid>
    </Container>
)

export default Video;