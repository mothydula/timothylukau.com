import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import MainPage from "./components/MainPage"
import Press from "./components/Press"
import Resume from "./components/Resume"
import Creative from "./components/Creative"

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route>
      <Route exact path='/' component={MainPage}/>
      <Route exact path='/Press' component={Press}/>
      <Route exact path='/Resume' component={Resume}/>
      <Route exact path='/Creative' component={Creative}/>
      </Route>
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
