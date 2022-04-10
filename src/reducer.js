export const initialState = {
    cart: [],
};


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const i = state.cart.findIndex(
                (cartItem) => cartItem.id === action.item.id
            );
            if (i < 0) {
                return {
                    ...state,
                    cart: [...state.cart, action.item],
                };
            } else {
                window.alert(`Already added ${action.item.title} to Favorites`);
            }
        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newCart = [...state.cart];
            if (index > -1) {
                newCart.splice(index, 1);
                return {
                    ...state,
                    cart: newCart,
                };
            }
            else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in cart`);
            }
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