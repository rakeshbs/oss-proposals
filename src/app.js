import React from 'react';
import ReactDOM from 'react-dom'
import Header from './components/header.jsx'

class App extends React.Component {
  render() {
    return(
      <Header text='Mohan Lal'/>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

