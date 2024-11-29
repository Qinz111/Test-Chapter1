import React, { useState } from "react";

const AddUserInfor = (props) => {
  const [name, setName] = useState("Your Name ?");
  const [age, setAge] = useState("Your Age ?");

  const handleOnChangeInput = (event) => {
    setName(event.target.value);
  };
  const handleOnChangeAge = (event) => {
    setAge(Number(event.target.value));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.HandleAddNewUser({
      id: Math.floor(Math.random() * 9999999) + "-random",
      name: name,
      age: age,
    });
  };
  return (
    <div>
      My name is {name} , I am {age} years old
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your Name</label>
        <input
          value={name}
          type="text"
          onChange={(event) => handleOnChangeInput(event)}
        />
        <label>Your Age</label>
        <input
          value={age}
          type="text"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
