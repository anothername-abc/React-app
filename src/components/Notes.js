import React from "react";

export const Notes = (props) => {
  return (
    <ul className="list-group">
      {props.notes.map((note, index) => (
        <li className="list-group-item flex" key={index}>
          <div className="a">
            <strong className="mr-4">{note.title}</strong>
            <br />
            <span>{note.date}</span>
          </div>

          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => props.deleteNote(index)}
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};
