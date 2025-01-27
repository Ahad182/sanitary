import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { useState } from "react";


export const fetchTodo = createAsyncThunk("fetchTodo",async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
    return response.json()
})

const todoSlice = createSlice({

    name:"todo",
    initialState : {
        isLoading : false,
        todoData : [],
        isError : false
    },
    
    extraReducers:  (builder)=>{
        builder.addCase(fetchTodo.pending,(state,action)=>{
            state.isLoading = true
        });
        builder.addCase(fetchTodo.fulfilled,(state,action)=>{
            state.isLoading = false
            state.todoData = action.payload
        });
        builder.addCase(fetchTodo.rejected,(state,action)=>{
            console.log("Error",action.payload);
            state.isError = true
            
        })
    }
})


export default todoSlice.reducer