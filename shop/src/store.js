import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.jsx'



let inCart = createSlice({
    name : 'inCart',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
})



export default configureStore({
  reducer: { 
    // 작명 : user.reducer
    user : user.reducer,
    inCart : inCart.reducer
   }
}) 