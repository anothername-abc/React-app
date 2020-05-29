import React, { Fragment, useReducer, useEffect } from "react";
import { Form } from "../components/Form.js";
import { Notes } from "../components/Notes.js";
import reducer from "./reducer.js";

export const Home = () => {

  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem('state')) || []
  );
  useEffect(() => {localStorage.setItem('state', JSON.stringify(state))} , [state]);

  const addNote = (elem) => dispatch({ type: "add", elem });
  const deleteNote = (index) => dispatch({ type: "delete", index });
  return (
    <Fragment>
      <Form addNote={addNote} />
      <hr />
      <Notes notes={state} deleteNote={deleteNote} />
    </Fragment>
  );
};
