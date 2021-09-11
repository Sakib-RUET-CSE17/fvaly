import { CartAction } from "redux/actions/cartAction";
import { ActionType } from "redux/actionTypes";
import { IProduct } from "types";

const cartReducer = (state: IProduct[] = [], action: CartAction): IProduct[] => {
    switch (action.type) {
        case ActionType.ADD_TO_CART: {
            return [...state, action.payLoad];
        }
        case ActionType.REMOVE_FROM_CART: {
            const newState = state.filter(item => item._id !== action.payLoad)
            return newState
        }
        case ActionType.CLEAR_CART: {
            return []
        }
        default:
            return state
    }
}

export default cartReducer;