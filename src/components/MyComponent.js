import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  //jSX

  render() {
    return (
      <div>
        <UserInfor />
        <br />
        <DisplayInfor name="Quang" age="20" />
        <hr />
        <DisplayInfor name={"Quang"} age={21} />
      </div>
    );
  }
}

export default MyComponent;
