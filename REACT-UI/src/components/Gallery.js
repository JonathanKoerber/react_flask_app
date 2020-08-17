import React, {Component, useEffect, useState} from 'react';
import styled, {css} from 'styled-components';
import Project from "./Project";

const Figure = styled.figure`
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;

`;


function Gallery() {
    const [projects , setProjects] = useState([]);
    useEffect(()=> {
        fetch('/gallery').then(res => res.json()).then(data =>{
            setProjects(data.data)
     }).catch(function(err){
       console.log(err)
     })
   }, []);

    return(
              <Figure>
                      {projects.map((p, index)=>{
                          return <Project project={p} />
                  })}
              </Figure>
      );
}



export default Gallery;
