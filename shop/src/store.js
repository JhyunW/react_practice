import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.jsx'



let inCart = createSlice({
    name : 'inCart',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1},
    ],
    reducers : {
      addCount(state, action){
        // action은 함수(받는숫자) 에서 받는숫자가 action임
        let idNum = state.findIndex((a)=>{return a.id === action.payload})
        state[idNum].count++
      },
      addCart(state, action){
        let idNum = state.findIndex((a) => {return a.id === action.payload.id})
        console.log(action)
        console.log(idNum)
        console.log(action.payload)
        if (idNum !== -1) {
          state[idNum].count++
          console.log('개수추가')
          console.log(state)
          console.log(inCart)
        }else {
          state.push(action.payload)
          console.log('상품추가')
          console.log(inCart)
        }
        console.log(state)
      }
    }
})

export let { addCount, addCart } = inCart.actions



export default configureStore({
  reducer: { 
    // 작명 : user.reducer
    user : user.reducer,
    inCart : inCart.reducer
   }
}) 