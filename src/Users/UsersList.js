import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.listusers.map((user) => (
          <li key={user.id}>
            {user.name} {user.age} euros
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
