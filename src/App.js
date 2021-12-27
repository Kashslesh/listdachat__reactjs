import React, { useState } from "react";
import "./App.css";
import Card from "./UI/Card";
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
    <div>
      <AddUsers onAddUsers={addDataHendler} />
      <UsersList listusers={usersList} />
    </div>
  );
}

export default App;
