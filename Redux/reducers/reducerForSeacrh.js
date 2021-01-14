const initialState ={
    list : []
};

export const reducerForSearch = (state = initialState,action)=>{
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

