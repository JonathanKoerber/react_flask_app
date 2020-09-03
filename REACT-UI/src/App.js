import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"
import About from "./components/About"
import Detail from "./components/Detail";

function App() {

        return (
            <div>

            <Router>
                <Switch>
                    <Route path="/" exact component={()=><Gallery />}/>
                    <Route path="/PrimeDayConcerts" exact component={()=><Detail project={"/pdc"}/>}/>
                    <Route path="/OprahFavoriteThings" exact component={()=><Detail project={"/oft"}/>}/>
                    <Route path="/Flair" exact component={()=><Detail project={"/flair"}/>}/>
                    <Route path="/AmazonPets" exact component={()=><Detail project={"/pets"}/>}/>
                </Switch>
            </Router>

                <Footer/>
            </div>
        )
}

export default App;
