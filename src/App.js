import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/style.css'
import './styles/media.css'

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Poems from './pages/Poems';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';

class App extends Component {

  state = {
    poem: []
  }

  componentDidMount(){
    fetch('https://kajecik.herokuapp.com/poems')
    .then(res => res.json())
    .then(res => {
      
      this.setState({
        poem: res
      })
    })
  }

  render() {
    return (
      <Router basename = {process.env.PUBLIC_URL}>
        <Navigation/>

        <Switch>
          <Route path = '/' exact>
            <Home/>
          </Route>

          <Route path = '/poems' exact>
            <Poems/>
          </Route>

          <Route>
            <ErrorPage/>
          </Route>


        </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App;
