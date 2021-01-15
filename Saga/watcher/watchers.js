import { takeEvery } from "redux-saga/effects";
import { workerForFetch , workerForFavorite , workerForDelete} from "../workers";
import { SEARCH,FAVORITE,DELETEBYONE } from "../../Redux/constants";

export function* watchData(){
    yield takeEvery(SEARCH,workerForFetch);
    yield takeEvery(FAVORITE,workerForFavorite);
    yield takeEvery(DELETEBYONE,workerForDelete);
}
