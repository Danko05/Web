const initialCartState = {
    cartItems: [],
    totalPrice: 0,
};

const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.id === item.id);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.id === existItem.id ? { ...x, quantity: x.quantity + item.quantity } : x
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        }
        case 'CLEAR_ALL_ITEMS':
            return {cartItems: []};
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (item) => item.id !== action.payload
                ),
            };
        case 'UPDATE_QUANTITY':
            console.log(state.cartItems)
            console.log(action.payload)
            const updatedCartItems = state.cartItems.map((item) => {
                if (item.id == action.payload.itemId) {
                    return {
                        id: item.id,
                        image: item.image,
                        title: item.title,
                        price: item.price,
                        quantity: action.payload.quantity
                    };
                    console.log(state.cartItems)
                }
                return item;
            });

            return {
                ...state,
                cartItems: updatedCartItems,
            };


        default:
            return state;

    }


};

export default cartReducer;

