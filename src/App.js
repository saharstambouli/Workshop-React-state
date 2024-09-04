import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import AddPerson from './AddPerson';
import PersonList from './PersonList';
import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      person : [
        {
          id:uuidv4(),
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

  updateUser = (id , data) => {
    console.log('id', id)
    this.setState({
      person : this.state.person.map((el)=>{
        if( el.id==id ){
          console.log('el', el)
          console.log('data', data)
          return data 
        }else {
          return el
        }
      })
    })
    
  }
  
  
  render() {
    return (
      <div className="App">
      <header className="App-header">
        {/* <button onClick={this.handleShow}> show </button>
        
        {
          this.state.show && <Counter/>
        } */}
        
        
        <hr/>
        <AddPerson handleAddPerson = {this.handleAddPerson}/>
        <hr/>
        <PersonList list ={this.state.person} updateUser={this.updateUser} />

        {console.log('this.state.', this.state.person)}
       
      </header>
    </div>
    )
  }
}



















