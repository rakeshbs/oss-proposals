import React from 'react';
import ReactDOM from 'react-dom'
import Header from './components/header.jsx'
import Table from './components/table.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentComponentIndex: -1,
    };
  }

  changeComponent(index) {
    console.log(index);
    this.setState({ currentComponentIndex: index });
    console.log(this.state);
  }
  render() {
    var currentComponent;
    if (this.state.currentComponentIndex == 0) {
      currentComponent = <Header text="Component 1"/>;
    } else if (this.state.currentComponentIndex == 1) {
      currentComponent = <Table />;
    }
    return(
      <div className='container'>
      <a href="#" onClick={ this.changeComponent.bind(this, 0) }> Load Header </a>
      <a href="#" onClick={ this.changeComponent.bind(this, 1) }> Load Table </a>
      {currentComponent}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);


