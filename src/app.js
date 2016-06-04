import React from 'react';
import ReactDOM from 'react-dom'
import Header from './components/header.jsx'
import Table from './components/table.jsx'

class App extends React.Component {
  render() {
    return(
      <div className='container'>
        <Header text='Open Source Saturday Proposals'/>
        <br />
        <br />
        <Table />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

