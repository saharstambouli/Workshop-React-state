import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()
        this.state = {
          count : 0 ,
          timer : 0

        }
      }
    
       increment = () => {
        this.setState({
          count : this.state.count + 1
        })
       }
    
    
       decrement = () => {
        if(this.state.count > 0){
          this.setState({
            count : this.state.count - 1
          })
        }
       }

       componentDidMount(){
        console.log('Did Mount')
        setInterval(() => {
          this.setState({
            timer : this.state.timer + 1
          });
        }, 1000);        
       }

       componentDidUpdate(){
        console.log("update")
       }

       componentWillUnmount(){
          console.log("remove component")
       }


  render() {
    return (
      <div>
        <h1> Counter </h1>
        <h2> this component was monted from : {this.state.timer} </h2>
        <button onClick={this.decrement}> - </button>
        <h1> {this.state.count} </h1>
        <button onClick={this.increment}> + </button>
    </div>
    )
  }
}
