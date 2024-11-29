import React, { useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

// class DisplayInfor extends React.Component {

//   render() {
//     const { listUser } = this.props;
//     // = const listUser = this.props.listUser;
//     console.log("Render");

//     return (
//       <div className="container">
//         {/* <img src={logo} alt="" /> */}

//         {true && (
//           <>
//             {listUser.map((user) => {
//               return (
//                 <div key={user.id} className={user.age > 18 ? "red" : "blue"}>
//                   <div>My name is {user.name}</div>
//                   <div>I'm {user.age} years </div>

//                   <div>
//                     <button
//                       onClick={() => this.props.HandleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

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
