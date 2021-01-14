import { takeEvery } from "redux-saga/effects";
import { workerForFetch , workerForFavorite} from "../workers";

export function* watchData(){
    yield takeEvery('search',workerForFetch);
    yield takeEvery('favorite',workerForFavorite);
}
