const initialState = {
    list :[]
};
export const reducerForFavorite = (state = initialState,action)=>{
    switch(action.type){
        case 'checkedFavorite':{
            return {
                ...state,
                list:[...state.list,action.payload]
            }
        }
        case 'deleteByOne':{
        let filteredState = state.list.filter((element)=>element.id!==action.payload.id);
        return {list:filteredState}
        }
        default : {
           return{list : state.list}
        }
    }
}
