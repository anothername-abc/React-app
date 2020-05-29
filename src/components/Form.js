import React, { useState } from "react";

export const Form = (props) => {
  const [value, setValue] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    setValue("");
    props.addNote({ title: value, date: new Date().toLocaleDateString() });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="текст заметки"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};
