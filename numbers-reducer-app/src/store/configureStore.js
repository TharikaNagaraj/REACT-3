
import {createStore,combineReducers,applyMiddleware} from 'redux'
import numberReducer from "../reducers/numberReducer";
import thunk from 'redux-thunk'
import usersReducer from "../reducers/usersReducer"

const configureStore = () => 
{
    const store = createStore(combineReducers({
        numbers : numberReducer,
        users : usersReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore