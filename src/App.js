import React from 'react';
import {Route} from 'react-router-dom';
import Home from "./home";
import Profile from "./profile";
import Nav from "./Nav";

function App() {
  return (
      <>
        <Nav />
        <div className="body">
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
        </div>
      </>
  );
}

export default App;
