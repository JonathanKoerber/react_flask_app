import React, {useState, useEffect} from 'react';
import {Heading, Gallery, About} from "./components";


const Index = (props) =>(
    <div>
        <Heading />
        <Gallery/>
        <About />
    </div>
)

export default Index;