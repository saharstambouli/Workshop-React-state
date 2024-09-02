import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import AddPerson from './AddPerson';
import PersonList from './PersonList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      person : [
        {
          userName: "foulen-01",
          email:"foulen-01@email.com",
          age: "22"
        }
      ],
      show:true
    };
  }

  handleAddPerson = (newPerson) => {
    this.setState({
      person : [...this.state.person , newPerson]
    })
  }

  handleShow = () => {
    this.setState({
      show : !this.state.show
    })
  }
  
  
  render() {
    return (
      <div className="App">
      <header className="App-header">

        <button onClick={this.handleShow}> show </button>
        
        {
          this.state.show && <Counter/>
        }
        
        
        {/* <hr/>
        <AddPerson handleAddPerson = {this.handleAddPerson}/>
        <hr/>
        <PersonList list ={this.state.person} /> */}

       
      </header>
    </div>
    )
  }
}




















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;