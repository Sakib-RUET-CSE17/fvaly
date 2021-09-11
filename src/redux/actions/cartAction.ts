import { ActionType } from "redux/actionTypes";
import { IProduct } from "types";

interface addToCartAction {
    type: ActionType.ADD_TO_CART;
    payLoad: IProduct;
}

interface removeFromCartAction {
    type: ActionType.REMOVE_FROM_CART;
    payLoad: string;
}

interface clearCartAction {
    type: ActionType.CLEAR_CART;
}

export type CartAction =
    addToCartAction
    | removeFromCartAction
    | clearCartAction;
