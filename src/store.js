import { createStore } from 'redux';
import reducers from './reducers';
export const store = createStore(reducers);
store.subscribe(()=>{
    console.log("store changed", store.getState(0))
})