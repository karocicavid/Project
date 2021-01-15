import { takeEvery } from "redux-saga/effects";
import { workerForFetch , workerForFavorite} from "../workers";
import { SEARCH,FAVORITE } from "../../../../Redux/constants";

export function* watchData(){
    yield takeEvery(SEARCH,workerForFetch);
    yield takeEvery(FAVORITE,workerForFavorite);

}
