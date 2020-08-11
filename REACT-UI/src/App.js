import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from "./components/Gallery";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import About from "./components/About";

function App(){
    const [time, setTime]= useState(0)
        useEffect(() => {
            fetch('/time').then(res => res.json()).then(data => {
            setTime(data.time);
        });
        }, []);


  return (
      <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
>
          Learn React
        </a>

    <p>The current time is: {time}.</p>
            </header>
        </div>
      <div>
          <Heading />
          <Gallery />
    <About />
          <Footer />

    </div>
          </div>
  );
}

export default App;
