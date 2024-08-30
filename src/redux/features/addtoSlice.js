import { createSlice } from '@reduxjs/toolkit'
 

export const addtoSlice = createSlice({
    name: "addto",
    initialState: {
        items: []
    },
    reducers: {
        addPost: (state, action) => {
            state.items.push(action.payload)
        },
        deletePost: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        editPost : (state, action) => {
            state.items.map((item) => {
                if (item.id === action.payload.id) {
                    item.note = action.payload.note
                }
            })
        }
    }
})

export const { addPost, deletePost, editPost } = addtoSlice.actions
export default addtoSlice.reducer