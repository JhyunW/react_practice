import { configureStore, createSlice } from '@reduxjs/toolkit'


let user = createSlice({
    name : 'user',
    initialState : { name : 'kim', age : 20 },
    reducers : {
        changeName : (state, action) => {
            state.name = 'park'
        },
        plusAge : (state, action) => {
            state.age += action.payload
        }
    }
})
// 오른쪽 문법을 왼쪽의 변수로 빼는거라 생각하면 됨
export let { changeName, plusAge } = user.actions

export default user