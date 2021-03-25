import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as Pages from 'pages';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Pages.MainPage />
      </Route>
    </Router>
  );
}

export default App;
