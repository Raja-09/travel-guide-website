import { db } from './firebase';

export const initialState = {
    cart: [],
};


const reducer = (state, action) => {
    switch (action.type) {
        // case 'CLEAR_CART':
        //     return {
        //         ...state,
        //         cart: [],
        //     };
        default:
            return state;

    }
}
export default reducer;