import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost, editPost } from "../redux/features/addtoSlice";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const Note = () => {
  const [note, setNote] = useState("");
  const [edit, setEdit] = useState(false);
  const [editNote, setEditNote] = useState("");
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  const addto = useSelector((state) => state.addto.items);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" pt-4">
      <div className="flex justify-center md:px-10 lg:px-40">
        <input
          type="text"
          placeholder="Add Your Note"
          onChange={(e) => setNote(e.target.value)}
          value={note}
          className="lg:w-full md:w-full  w-80 h-10 rounded-md text-white border-none outline-none  ps-2  bg-stone-700 shadow-sm"
        />
      </div>
      <div className="pt-3 pb-2 flex  justify-center ">
        <IoMdAddCircle
          className="w-8 h-8 text-teal-400  absolute  ms-3 cursor-pointer hover:scale-110  duration-300 "
          onClick={() => dispatch(addPost({ id: addto.length + 1, note }))}
        />
      </div>
      <div className="lg:px-80 px-6 pt-10">
        {addto.map((addto) => {
          return (
            <div
              style={{ backgroundColor: addto.c }}
              className="grid grid-cols-2 p-3 text-white bg-stone-700  mb-4 border-2 rounded-lg border-none shadow-md "
              key={addto.id}
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <h1 className="font-semibold">{addto.note}</h1>
              <div className="flex lg:gap-4 gap-2 lg:pe-2 justify-end">
                <MdDelete
                  className="lg:w-8 lg:h-8 w-6 h-6 text-red-500 cursor-pointer hover:scale-110 duration-300"
                  onClick={() => dispatch(deletePost(addto.id))}
                />
                <MdEdit
                  onClick={() => {
                    setEdit(true), setId(addto.id);
                  }}
                  className="lg:w-8 lg:h-8 w-6 h-6 text-blue-500  cursor-pointer hover:scale-110 duration-300"
                />
              </div>
              {edit && id === addto.id && (
                <div className="fixed inset-0  bg-gray-800 bg-opacity-75 flex items-center justify-center">
                  <div
                    className="bg-white p-4 mb-12  rounded-lg shadow-lg max-w-md w-80 lg:w-full"
                    data-aos="fade-down"
                    data-aos-duration="500"
                    s
                  >
                    <input
                      type="text"
                      placeholder="Edit Your Note"
                      onChange={(e) => setEditNote(e.target.value)}
                      value={editNote}
                      className="w-full border-2 text-black rounded-lg  ps-2 mb-4 "
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        className="border-2 lg:py-1 lg:px-4 px-2 font-semibold rounded-lg text-black border-gray-300 hover:scale-105 duration-300"
                        onClick={() => setEdit(false)} 
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-teal-400 text-black font-semibold lg:py-1 lg:px-4 px-2 rounded-lg hover:bg-blue-600 duration-300"
                        onClick={() => {
                          dispatch(editPost({ id: addto.id, note: editNote }));
                          setEdit(false); 
                        }}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default Note;
