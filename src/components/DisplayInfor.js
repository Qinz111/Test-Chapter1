import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

const DisplayInfor = (props) => {
  const { listUser } = props;

  const [isShowHideListUser, setIsShowHideListUser] = useState(true);

  const [isHideListUser] = useState(false);

  const HandleHideUser = () => {
    setIsShowHideListUser(!isShowHideListUser);
  };

  const HandleShowHileListUser = () => {
    setIsShowHideListUser(!isShowHideListUser);
  };

  // useEffect(() => {
  //   if (listUser.length === 0) alert("You are clear all user");
  // }, [listUser]);

  return (
    <div className="container">
      <span onClick={() => HandleShowHileListUser()}>
        {isShowHideListUser === true ? "Information" : "Show"}
      </span>
      {isShowHideListUser && (
        <>
          {listUser.map((user) => {
            return (
              <div key={user.id} className={user.age > 18 ? "red" : "blue"}>
                <div>My name is {user.name}</div>
                <div>I'm {user.age} years </div>

                <div>
                  <button onClick={() => props.HandleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <hr />
                <span onClick={() => HandleHideUser()}>
                  {isHideListUser === false ? "An thong tin" : ""}
                </span>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
