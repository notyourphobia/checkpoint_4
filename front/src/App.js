import React, { useState, useEffect } from 'react'
import './App.scss';

import NavBar from './components/NavBar/NavBar.jsx';

import Main from './components/Pages/Main/Main.jsx';
import Laugh from './components/Pages/Laugh/Laugh.jsx';
import Dream from './components/Pages/Dream/Dream.jsx';
import MarvelAt from './components/Pages/MarvelAt/MarvelAt.jsx';
import About from './components/Pages/About/About.jsx'
import Book from './components/Pages/Book/Book.jsx'

import { BrowserRouter, Switch, Route } from "react-router-dom";

const Content = (props) =>
  <div className='App'>
    <NavBar />
    <Main />
    <Laugh />
    <Dream />
    <MarvelAt />
    <Book fetchData={[...props.fetchData]} />
  </div>

const App = (props) => {
  const [fetchData, setFetchData] = useState([])

  useEffect(() => {
    fetch('/all_shows')
      .then(res => res.json())
      .then(res => setFetchData(res))
  }, [])

  return <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <Content fetchData={fetchData} />
      </Route>
      <Route path='/about' component={About} />
    </Switch>
  </BrowserRouter>
}

export default App;
