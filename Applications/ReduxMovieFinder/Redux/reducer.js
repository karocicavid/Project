const initialStateFavorite = {
    list :[]
};
const initialStateSearch ={
    list : []
};
export const reducerForFavorite = (state = initialStateFavorite,action)=>{
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
export const reducerForSearch = (state = initialStateSearch,action)=>{
    switch(action.type){
        case 'searchFromSaga':{
          return{  
                    ...state,list : action.payload  
                }
        }
        default : {
           return{list : state.list}
        }
    }
}

