import { CHECKEDFAVORITE, CHECKEDDELETE } from "../constants";
const initialState = {
    list :[]
};
export const reducerForFavorite = (state = initialState,action)=>{
    switch(action.type){
        case CHECKEDFAVORITE:{
            return {
                ...state,
                list:[...state.list,action.payload]
            }
        }
        case CHECKEDDELETE:{
        return {list:action.payload}
        }
        default : {
           return{list : state.list}
        }
    }
}
