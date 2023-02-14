// for add items in cart

export const addCart =()=>{
    return(
        <>
            type : "ADDITEM",
            payload : product,

        </>
    )
}

// for delete items from  cart

export const delCart =()=>{
    return(
        <>
            type : "DELITEM",
            payload : product,
            
        </>
    )
}