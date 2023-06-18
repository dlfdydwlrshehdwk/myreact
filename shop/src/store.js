import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'






let data = createSlice({
    name : 'data',
    initialState : 
    [
        {id : 1, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        plusCount(state, action){
            // console.log('안녕')
            let 번호 = state.findIndex((a)=>{ return a.id == action.payload})
            state[번호].count++
        }
    }
})

export let {plusCount} = data.actions


export default configureStore({
  reducer: {
    data : data.reducer,
    user : user.reducer
   }
}) 