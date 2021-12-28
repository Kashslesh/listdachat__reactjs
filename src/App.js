import React, { useState, Fragment } from "react";
import "./App.css";
import AddUsers from "./Users/AddUsers";
import UsersList from "./Users/UsersList";

function App() {
  const [usersList, setusersList] = useState([]);
  const addDataHendler = (eName, eAge) => {
    setusersList((prevData) => {
      return [
        ...prevData,
        { name: eName, age: eAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment>
      <AddUsers onAddUsers={addDataHendler} />
      <UsersList listusers={usersList} />
    </Fragment>
  );
}

export default App;
