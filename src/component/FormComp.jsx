import Form from "react-bootstrap/Form";
import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost, editPost } from "../redux/features/addtoSlice";
const FormComp = () => {
const [note, setNote] = useState("")
const [edit, setEdit] = useState(false)
const [editNote, setEditNote] = useState("")
const [id, setId] = useState(null)
const dispatch = useDispatch()
const addto = useSelector((state) => state.addto.items)


  return (
    <div>
   <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="name@example.com"
         onChange={(e) => setNote(e.target.value)} value={note} />
      </Form.Group>
    </Form>
    <Button onClick={()=> dispatch (addPost({id: addto.length + 1, note}))} variant="primary" >Add</Button>

    <div>
      {addto.length > 0 ? addto.map((addto) => {
        return (
          <div key={addto.id}>
            <h1>{addto.note}</h1>
            <Button onClick={() => dispatch(deletePost(addto.id))} variant="primary" >Delete</Button>
            <Button onClick = {() => {setEdit(true),  setId(addto.id)}} variant="primary" >Edit</Button>
            {edit && id === addto.id && (
              <div>
                <input type="text" placeholder="edit"
                onChange={(e) => setEditNote(e.target.value)} value={editNote}/>
                <button onClick={() => dispatch(editPost({id: addto.id, note: editNote}))(setEdit(false)) } >save</button>
              </div>
            )}
          </div> 
        );
      }): "there is no post"}
    </div>
    </div>
  );
};

export default FormComp;
