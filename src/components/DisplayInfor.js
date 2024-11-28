import React from "react";

class DisplayInfor extends React.Component {
  state = {
    ShowHide: true,
  };
  HandleShowHide = () => {
    this.setState({
      ShowHide: !this.state.ShowHide,
    });
  };
  render() {
    const { listUser } = this.props;
    // = const listUser = this.props.listUser;
    // console.log(listUser);

    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.HandleShowHide();
            }}
          >
            {this.state.ShowHide === true
              ? "Hide list user"
              : "Done hide list user"}
          </span>
        </div>
        {this.state.ShowHide && (
          <div>
            {listUser.map((user) => {
              return (
                <div key={user.id} className={user.age > 18 ? "red" : "blue"}>
                  <div>My name is {user.name}</div>
                  <div>I'm {user.age} years </div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
