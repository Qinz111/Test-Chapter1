import React from "react";

class AddUserInfor extends React.Component {
  state = {
    name: "MQ",
    age: 20,
    address: "QN",
  };

  handleClick(event) {
    // console.log(">>Click me");
    console.log(event);
    this.setState({
      name: "Muoi Tieu Chanh",
    });
    this.setState({
      age: Math.floor(Math.random() * 100),
    });
  }

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeAge = (event) => {
    this.setState({
      age: Number(event.target.value),
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.HandleAddNewUser({
      id: Math.floor(Math.random() * 9999999) + "-random",
      name: this.state.name,
      age: this.state.age,
    });
  };
  render() {
    return (
      <div>
        My name is {this.state.name} , I am {this.state.age} years old , I live
        in {this.state.address}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your Name</label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <label>Your Age</label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfor;
