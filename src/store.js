import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './reducers/notificationReducer'
import reducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  anecs: reducer,
  notification: notificationReducer,
  filter: filterReducer,
})

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store