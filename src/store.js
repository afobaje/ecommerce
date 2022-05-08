import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from './reducers'
import counterReducer from './features/counter/counterSlice'

export const store=configureStore({
    reducer:{
        counter:counterReducer
    }
})

// export default store