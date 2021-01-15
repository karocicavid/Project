import { CHECKEDFAVORITE, DELETEBYONE } from "../constants";
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
        case DELETEBYONE:{
        let filteredState = state.list.filter((element)=>element.id!==action.payload.id);
        return {list:filteredState}
        }
        default : {
           return{list : state.list}
        }
    }
}
