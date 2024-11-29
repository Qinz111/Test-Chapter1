import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
import { useState } from "react";

const MyComponent = (props) => {
  //jSX

  const [listUser, setListUser] = useState([
    { id: 1, name: "Truong Minh Quang", age: 16 },
    { id: 2, name: "Muoi tieu chanh", age: 18 },
  ]);

  const HandleAddNewUser = (user) => {
    setListUser([user, ...listUser]);

    // this.setState({
    //   listUser: [user, ...this.state.listUser],
    // });
  };

  const HandleDeleteUser = (user) => {
    let listUserClone = listUser;
    listUserClone = listUserClone.filter((usr) => usr.id !== user);
    setListUser(listUserClone);
    // this.setState({
    //   listUser: listUserClone,
    // });
  };

  return (
    <>
      <div className="a">
        <AddUserInfor HandleAddNewUser={HandleAddNewUser} />
        <DisplayInfor listUser={listUser} HandleDeleteUser={HandleDeleteUser} />
      </div>
      <div className="b"></div>
    </>
  );
};

export default MyComponent;
