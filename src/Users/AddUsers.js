import React, { useState, Fragment } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUsers.module.css";

const AddUsers = (props) => {
  const [enteredAchat, setName] = useState("");
  const [enteredPrix, setAge] = useState("");
  const [error, setError] = useState();
  const addNameHandler = (event) => {
    setName(event.target.value);
  };
  const addAgeHandler = (event) => {
    setAge(event.target.value);
  };
  const addInfoHandler = (event) => {
    event.preventDefault();
    if (enteredAchat.trim().length === 0 || enteredPrix.trim().length === 0) {
      setError({
        title: "Erreur le Nom d'achat",
        message: "Saisissez le bon nom d'achat, s'il vous plâit",
      });
      return;
    }
    if (+enteredPrix < 1) {
      setError({
        title: "Erreur le prix d'achat",
        message: "Saisissez le prix, s'il vous plâit",
      });
      return;
    }
    props.onAddUsers(enteredAchat, enteredPrix);
    setName("");
    setAge("");
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseModal={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addInfoHandler}>
          <label htmlFor="username">Achat</label>
          <input
            id="username"
            type="text"
            value={enteredAchat}
            onChange={addNameHandler}
          ></input>
          <label htmlFor="age">Prix</label>
          <input
            id="age"
            type="number"
            value={enteredPrix}
            onChange={addAgeHandler}
          ></input>
          <Button type="submit">Ajoutez un</Button>
        </form>
      </Card>
    </Fragment>
  );
};
export default AddUsers;
