import React from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost, editPost } from "../redux/features/addtoSlice";
import Navbar from "./Navbar";
import "./style.css";

const FormComp = () => {
  const [note, setNote] = useState("");
  const [edit, setEdit] = useState(false);
  const [editNote, setEditNote] = useState("");
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  const addto = useSelector((state) => state.addto.items);

  return (
    <div>
      <Navbar />
      <div className="form">
        <input
          id="input-note"
          type="text"
          placeholder="Add Your Notes"
          onChange={(e) => setNote(e.target.value)}
          value={note}
          className="border-2 border-amber-200 bg-amber-300 shadow-sm"
        />
        <svg
          className="w-6 h-6 ms-3 cursor-pointer"
          onClick={() => dispatch(addPost({ id: addto.length + 1, note }))}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      </div>

      <div className="col-result">
        {addto.map((addto) => {
          return (
            <div className="result" key={addto.id}>
              <div id="card" className="border-3 rounded-lg border-amber-400 shadow-md">
                <h6 className="font-semibold">{addto.note}</h6>
                <div id="button">
                  <svg
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => dispatch(deletePost(addto.id))}
                    id="delete"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>

                  <svg
                    onClick={() => {
                      setEdit(true), setId(addto.id);
                    }}
                    className="w-6 h-6 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                  </svg>
                </div>
                <div className="edit-form">
                  {edit && id === addto.id && (
                    <div>
                      <input
                        id="input-edit"
                        type="text"
                        placeholder="Edit Your Note"
                        onChange={(e) => setEditNote(e.target.value)}
                        value={editNote}
                        className="border-2 rounded-lg border-amber-400 ps-2"
                      />
                      <div id="button-save">
                        <button
                          className="border-2 ms-2 py-1 px-1 rounded-lg border-amber-400  font-bold"
                          onClick={() =>
                            dispatch(
                              editPost({ id: addto.id, note: editNote })
                            )(setEdit(false))
                          }
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormComp;
