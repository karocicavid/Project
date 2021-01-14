import { call, put, select } from "redux-saga/effects";
import { getList } from "../selectors";
import { checkedFavorite } from "../../Redux/action";

export function* workerForFavorite(action){
   const data = yield select(getList);
   const checkedData = yield call(check, data,action.payload);
   if(checkedData){
    yield put(checkedFavorite(checkedData))
   }
}

function check(dataObject,payload){
    let actionPayload;
    if(dataObject.length==0){
          actionPayload = payload
    }
    else{
        isEqual = false
        dataObject.map((element)=>{
            if(element.id==payload.id){
                isEqual=true;
            }
        })
        if(!isEqual){actionPayload=payload}
    }
    return actionPayload;
}