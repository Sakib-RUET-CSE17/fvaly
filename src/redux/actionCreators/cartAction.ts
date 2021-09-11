import { ActionType } from './../actionTypes';
import { IProduct } from "types"
import { CartAction } from 'redux/actions/cartAction';

export const addToCart = (payLoad: IProduct): CartAction => {
    return {
        type: ActionType.ADD_TO_CART,
        payLoad
    }
}

export const removeFromCart = (payLoad: string): CartAction => {
    return {
        type: ActionType.REMOVE_FROM_CART,
        payLoad
    }
}

export const clearCart = (): CartAction => {
    return {
        type: ActionType.CLEAR_CART,
    }
}
