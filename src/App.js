import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './app/todolist';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Categories from './app/Jokes/Categories';
import Joke from './app/Jokes/Joke';
import {Provider} from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Categories />
      </header>
    </div>
  );
}

function MainApp () {
  return (
    <Provider store={store}>
      <Router>
          <Switch>
              <Route path="/" component={App} exact  />
              <Route path="/jokes/:category" component={Joke} exact  />
          </Switch>
      </Router>
    </Provider>
   
  )
}

export default MainApp;
