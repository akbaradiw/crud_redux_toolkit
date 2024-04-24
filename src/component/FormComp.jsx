import React from "react";
import {Button, Card, Alert} from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost, editPost } from "../redux/features/addtoSlice";
import "./style.css";
import { toast } from "react-toastify";


const FormComp = () => {
  const [note, setNote] = useState("");
  const [edit, setEdit] = useState(false);
  const [editNote, setEditNote] = useState("");
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  const addto = useSelector((state) => state.addto.items);

  return (
    <div>
      <div className="form">
        <input
          className="input-note"
          type="text"
          placeholder="Add Your Note"
          onChange={(e) => setNote(e.target.value)}
          value={note}
        />

        <Button
          className="ms-5"
          onClick={() => dispatch(addPost({ id: addto.length + 1, note }))}
          variant="dark"
        >
          Add
        </Button>
      </div>

      <div className="col-result">
        { addto.map((addto) => {
              return (
                <div className="result" key={addto.id}>
                  <Card className="card">
                    <h6>{addto.note}</h6>
                    <div className="button">
                      <Button className="me-3 "
                        // className="button-del"
                        onClick={() => dispatch(deletePost(addto.id))}
                        variant="secondary"
                        size="sm"
                      >
                        Delete
                      </Button>
                      <Button
                        // className="button-edit"
                        onClick={() => {
                          setEdit(true), setId(addto.id);
                        }}
                        variant="secondary"
                        size="sm"

                      >
                        Edit
                      </Button>
                    </div>
                    <div className="edit-form">
                      {edit && id === addto.id && (
                        <div>
                          <input
                            type="text"
                            placeholder="Edit Your Note"
                            onChange={(e) => setEditNote(e.target.value)}
                            value={editNote}
                            className="input-edit"
                          />
                          <Button
                            // className="button-fix-edit"
                            variant="outline-secondary"
                            size="sm"
                            className="ms-2"
                            onClick={() =>
                              dispatch(
                                editPost({ id: addto.id, note: editNote })
                              )(setEdit(false))
                            }
                          >
                            save
                          </Button>
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              );
            })
          }
      </div>
    </div>
  );
};

export default FormComp;
