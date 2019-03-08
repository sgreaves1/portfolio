import React, { Component } from 'react';
import './App.css';
import {NavTest} from './components/NavTest';

class App extends Component {
  render() {
    return (
        <body>
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossOrigin="anonymous"
        />
        <NavTest/>
        </body>
    );
  }
}

export default App;
