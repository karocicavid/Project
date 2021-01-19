import { call, put, select } from "redux-saga/effects";
import { getList } from "../selectors";
import { checkedDelete } from "../../redux/actions/action";

export function* workerForDelete(action){
   const data = yield select(getList);
   const checkedData = yield call(check, data,action.payload);
   if(checkedData){
    yield put(checkedDelete(checkedData))
   }
}

function check(dataObject,payload){
    return dataObject.filter((element)=>element.id!==payload.id);
}