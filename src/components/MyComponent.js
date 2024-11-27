import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "MQ",
    age: 20,
    address: "QN",
  };

  handleClick(event) {
    // console.log(">>Click me");
    console.log(event);
  }
  //jSX
  render() {
    return (
      <div>
        My name is {this.state.name} , I am {this.state.age} years old , I live
        in {this.state.address}
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default MyComponent;
