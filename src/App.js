import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'tachyons';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Shortlists from './pages/shortlists/shortlists.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shortlists' component={Shortlists} />
      </Switch>
    </div>
  );
}

export default App;