import { SETTIMEOUTFROMSAGA} from "../constants";
let initialState = {loading:false};

export const reducerForSplashScreen = (state = initialState,action)=>{
    switch(action.type){
        case SETTIMEOUTFROMSAGA:{
          initialState.loading=true;
          return {
              loading:action.payload
            }
        }
        default : {
          return {loading:initialState.loading};
        }
    }
}

