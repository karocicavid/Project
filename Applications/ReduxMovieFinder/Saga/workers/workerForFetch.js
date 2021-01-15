import {  put , call } from "redux-saga/effects";
import { fromSaga , loading} from "../../../../Redux/actions/action";

export const fetchData = (payload) =>{
    return async()=> {
        try{
            const response = await fetch('http://api.tvmaze.com/search/shows?q=' + payload.payload);
            return await response.json();
        } 
        catch (e){
        console.log('error')
        }
    }
}

export function* workerForFetch (payload){
   yield put(loading(true));
   const example =  yield call (fetchData(payload));
   yield put(loading(false));
   yield put(fromSaga(example))
}
