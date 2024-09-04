import React, { Component } from 'react'
import Person from './Person';

export default class PersonList extends Component {
  
 


  render() {
    return (
      <div> 
        <h1> PersonList  </h1>
        {
            this.props.list.map((el,i)=>(
                <div key={i}>
                    <Person el={el} updateUser={this.props.updateUser} />
                </div>
            ))
        }
      </div>
    )
  }
}
