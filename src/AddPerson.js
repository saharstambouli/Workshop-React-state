import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
export default class AddPerson extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email:"",
      age: "",
    };
  }

//   handleUserName = (e) => {
//     this.setState({userName : e.target.value})
//   }

//   handleEmail = (e) => {
//     this.setState({email : e.target.value})
//   }

//   handleAge = (e) => {
//     this.setState({age : e.target.value})
//   }


  handleInput = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    })
  }

  handleSubmit = () => {
    this.props.handleAddPerson({
        userName: this.state.userName ,
        email: this.state.email,
        age: this.state.age,
        id: uuidv4()
    })
  }

  render() {
    return (
      <div>
        <h1>AddPerson</h1>
        <input placeholder="user name" name="userName" onChange={this.handleInput} />
        <input placeholder="email" name="email" onChange={this.handleInput}/>
        <input placeholder="age" name="age"  onChange={this.handleInput} />
        <button onClick={this.handleSubmit}> Submit </button>
        <hr/>
        User Name : {this.state.userName}  <br/>
        Email : {this.state.email}  <br/>
        Age : {this.state.age}

      </div>
    );
  }
}
