import { takeEvery } from "redux-saga/effects";
import { workerForFetch , workerForFavorite , workerForDelete , workerForSplash} from "../workers";
import { SEARCH,FAVORITE,DELETEBYONE ,SETTIMEOUT} from "../../redux/constants";

export function* watchData(){
    yield takeEvery(SEARCH,workerForFetch);
    yield takeEvery(FAVORITE,workerForFavorite);
    yield takeEvery(DELETEBYONE,workerForDelete);
    yield takeEvery(SETTIMEOUT,workerForSplash);
}
