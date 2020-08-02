import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './components/Gallery';

function App() {
//  // useEffect(() => {
  //    fetch('/time').then(res => res.json()).then(data => {
  //      setCurrentTime(data.time);
  //    });
  //  }, []);
   const [pageRes,setPageRes] = useState(0);
   useEffect(()=> {
     fetch('/Gallery').then(res => res.json()).then(data =>{
       setPageRes(data.content)
     }).catch(function(err){
       console.log(err)
     })
   }, []);

  return (
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
    <p>The current time is: blank.</p>
    <p>{pageRes}</p>
      </header>
    </div>
  );
}

export default App;
