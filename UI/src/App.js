import React, { Component } from 'react';
import LoginPage from '../src/components/LoginPage'
import Main from '../src/components/Main'
import NavBar from '../src/components/NavBar'

class App extends Component {
  render() {
    return (
        <div>
        {/*<NavBar />*/}
        <Main />
        {/*<LoginPage />*/}
        </div>
    );
  }
}

export default App;
