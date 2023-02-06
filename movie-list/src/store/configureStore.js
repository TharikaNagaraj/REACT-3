import {combineReducers, configureStore} from '@reduxjs/toolkit'
import movieReducer from '../reducers/movieReducer'

const reducers = combineReducers({
    movies : movieReducer
})
const storeSetUp = () => 
{
    const store = configureStore({
        reducer : reducers
       
    })
    return store
}

export default storeSetUp
