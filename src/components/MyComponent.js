import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  //jSX

  state = {
    listUser: [{ id: 1, name: "Nguyễn Văn A", age: 16 }],
  };

  HandleAddNewUser = (user) => {
    this.setState({
      listUser: [user, ...this.state.listUser],
    });
  };

  render() {
    return (
      <div>
        <AddUserInfor HandleAddNewUser={this.HandleAddNewUser} />
        <br />
        <DisplayInfor listUser={this.state.listUser} />
      </div>
    );
  }
}

export default MyComponent;
