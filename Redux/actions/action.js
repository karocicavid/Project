export const favoriteAdd = (props) =>{
    return(
        {
        type:'favorite',
        payload:props
        }
    )
}
export const checkedFavorite = (props) =>{
    return(
        {
        type:'checkedFavorite',
        payload:props
        }
    )
}

export const favoriteDelete = (props)=>{
    return({
        type:'deleteByOne',
        payload:props
    })
}

export const searchMovie = (props) => {
    return(
        {
        type:'search',
        payload:props
        }
    )
}

export const fromSaga = (data) =>{
    return({
        type:'searchFromSaga',
        payload : data
    })
}
