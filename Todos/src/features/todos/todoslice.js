import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[{id:1,text:"hello world"}]
}

export const todoslice=createSlice({
    name:'todo',
    initialState,
    reducers:{
       addtodo:(state,action)=>{
        const todo={
            id:nanoid(),
            text:action.payload
        }
        state.todos.push(todo)

        },
        removetodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)

        },
        updatetodo:(state,action)=>{
            state.todos.forEach((todo)=>{
                if(todo.id===action.payload.id){
                    todo.text=action.payload.text
                }
            })

        }
    }
})
export const {addtodo,removetodo,updatetodo}=todoslice.actions
export default todoslice.reducer