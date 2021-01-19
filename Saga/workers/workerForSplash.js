import { set } from "react-native-reanimated";
import {  put , call } from "redux-saga/effects";
import { splashSetTimeOutFromSaga } from "../../redux/actions/action";

const delay = time => new Promise(resolve => setTimeout(resolve, time));

export function* workerForSplash (){
   yield call(delay, 10000);
   yield put(splashSetTimeOutFromSaga(true))
}
