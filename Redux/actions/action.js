import { FAVORITE,CHECKEDFAVORITE,DELETEBYONE,SEARCH,SEARCHFROMSAGA,LOADING,CHECKEDDELETE , SETTIMEOUT , SETTIMEOUTFROMSAGA} from "../constants";
export const favoriteAdd = (props) =>{
    return(
        {
        type:FAVORITE,
        payload:props
        }
    )
}
export const checkedFavorite = (props) =>{
    return(
        {
        type:CHECKEDFAVORITE,
        payload:props
        }
    )
}

export const favoriteDelete = (props)=>{
    return({
        type:DELETEBYONE,
        payload:props
    })
}
export const checkedDelete = (props)=>{
    return({
        type:CHECKEDDELETE,
        payload:props
    })
}

export const searchMovie = (props) => {
    return(
        {
        type:SEARCH,
        payload:props
        }
    )
}

export const fromSaga = (data) =>{
    return({
        type:SEARCHFROMSAGA,
        payload : data
    })
}

export const loading = (check) =>{
    return({
        type:LOADING,
        payload:check
    })
}

export const splashSetTimeOut = () => {
    return({
        type:SETTIMEOUT,
    })
}
export const splashSetTimeOutFromSaga = (data) => {
    return({
        type:SETTIMEOUTFROMSAGA,
        payload:data
    })
}

