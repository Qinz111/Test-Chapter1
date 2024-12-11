import React from "react";
import ModelCreatUser from "./ModelCreateUser";

const ManageUser = () => {
  return (
    <div className="manage-user-container">
      <div className="title">User Manage</div>
      <div className="user-content">
        <div>
          <button>Add new user</button>
        </div>
        <div>
          Table
          <ModelCreatUser />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
