import React, { useState, Fragment, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUsers.module.css";

const AddUsers = (props) => {
  const articleName = useRef();
  const articlePrix = useRef();
  const [error, setError] = useState();
  const addInfoHandler = (event) => {
    event.preventDefault();
    const enteredAchat = articleName.current.value;
    const enteredPrix = articlePrix.current.value;
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
    articleName.current.value = "";
    articlePrix.current.value = "";
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
          <input id="username" type="text" ref={articleName}></input>
          <label htmlFor="age">Prix</label>
          <input id="age" type="number" ref={articlePrix}></input>
          <Button type="submit">Ajoutez un</Button>
        </form>
      </Card>
    </Fragment>
  );
};
export default AddUsers;
