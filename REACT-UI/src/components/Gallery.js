import React, {Component, useEffect, useState} from 'react';
import styled, {css} from 'styled-components';
import Project from "./Project";

const Figure = styled.figure`
    margin: 0;
    padding: 0;
     display: flex;
    flex-flow: row wrap;

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
