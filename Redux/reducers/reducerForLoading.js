import { LOADING } from "../constants";
const initialState = {loading:false};

export const reducerForLoading = (state = initialState,action)=>{
    switch(action.type){
        case LOADING:{
          return {
              loading:action.payload
            }
        }
        default : {
          return(state)
        }
    }
}

