import React, { Component } from 'react'

export default class PersonList extends Component {

   



  render() {
    return (

      <div> 
        <h1> PersonList  </h1>

        {
            this.props.list.map((el,i)=>(
                <div key={i}>
                    <hr></hr>
                    <h1> {el.userName} </h1>
                    <h1> {el.email} </h1>
                    <h1> {el.age} </h1>
                    <hr></hr>
                </div>
            ))
        }

      </div>
    )
  }
}
