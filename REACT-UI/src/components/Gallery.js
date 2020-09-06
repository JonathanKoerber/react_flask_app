import React, {Component, useEffect, useState} from 'react';
import styled, {css} from 'styled-components';
import Project from "./Project";
import Heading from "./Heading";
import About from "./About";

const Figure = styled.figure`
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
`;


function Gallery() {
    const [projects , setProjects] = useState([]);
    useEffect(()=> {
        fetch('/api/gallery').then(res => res.json()).then(data =>{
            setProjects(data.data)
     }).catch(function(err){
       console.log(err)
     })
   }, []);
var pro = [];
    return(
        <div>
        <Heading />
              <Figure>
                  {projects.map((p, index)=>{
                          return <Project project={p} />
                  })}
              </Figure>
    <About />
    </div>
      );
}



export default Gallery;
