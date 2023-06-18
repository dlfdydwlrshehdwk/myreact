import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : { name : "kim", age : 22 },
    reducers : {
        changeName(state){
                state.name = 'park'
        },
        plusAge(state, action){
            // return(
            //     { name : 'park', age : state.age + 1}
            // )
            state.age += action.payload
        },
        addItem(state, action){
            state.push(action.payload)
        }
    } // reducers //
}) // user //

export let {changeName, plusAge, addItem} = user.actions

export default user