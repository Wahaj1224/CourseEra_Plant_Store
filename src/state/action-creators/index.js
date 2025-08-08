
export const addtocart=(item)=>{

    return {
        type: "add_to_cart",
        payload: item
    }

}

export const removefromcart=(item)=>{

    return {
        type: "remove_from_cart",
        payload: item
    }

}

export const updatecart=(item)=>{

    return {
        type: "update_cart",
        payload: item
    }

}

export const increasequantity=(item)=>{

    return {
        type: "increase_quantity",
        payload: item
    }
}

export const decreasequantity=(item)=>{     
    return {
        type: "decrease_quantity",
        payload: item
    }
}