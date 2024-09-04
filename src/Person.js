import React, { Component } from "react";

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.el.userName,
      editable: false,
    };
  }

  handleUpdate = () => {
    this.setState({
      editable: !this.state.editable,
    });
  };

  handleUpdateInput = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  handleupdateUser = (id,data) => {

      this.props.updateUser(id,data);
      this.handleUpdate()
    
  };

  render() {
    return (
      <div>
        <hr></hr>
        <h6> id: {this.props.el.id} </h6>
        <button onClick={this.handleUpdate}>
          {" "}
          {this.state.editable ? "cancel" : "Edit user name"}{" "}
        </button>
        {this.state.editable ? (
          <>
            <input
              type="text"
              defaultValue={this.state.userName}
              onChange={this.handleUpdateInput}
            />
            <button onClick={() => {
                this.handleupdateUser(
                    this.props.el.id,
                    {
                        id:this.props.el.id,
                        userName: this.state.userName,
                        email:this.props.el.email,
                        age: this.props.el.age
                    }
                )
            }}>
              {" "}
              save{" "}
            </button>
          </>
        ) : (
          <h1> {this.props.el.userName} </h1>
        )}
        <h1> {this.props.el.email} </h1>
        <h1> {this.props.el.age} </h1>
        <hr></hr>
      </div>
    );
  }
}
