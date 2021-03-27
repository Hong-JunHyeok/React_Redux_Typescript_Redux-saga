import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as Pages from 'pages';
import 'styles/reset.scss';

function App() {
  return (
    <Router basename="/React_Redux_Typescript_Redux-saga">
      <Route exact path="/">
        <Pages.MainPage />
      </Route>
      <Route exact path="/counter">
        <Pages.CounterPage />
      </Route>
      <Route exact path="/todo">
        <Pages.TodoPage />
      </Route>
      <Route exact path="/jsonplaceholder">
        <Pages.JsonPlaceholderPage />
      </Route>
    </Router>
  );
}

export default App;
