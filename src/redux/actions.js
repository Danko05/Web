
export const addToCart = (item, quantity) => ({
    type: 'ADD_TO_CART',
    payload: {
        id: item.id,
        image: item.image,
        title: item.title,
        price: item.price ,
        quantity:quantity
    },
});

export const clearAllItems = () => ({
    type: 'CLEAR_ALL_ITEMS',
});

export const updateQuantity = (itemId, quantity) => ({
    type: 'UPDATE_QUANTITY',
    payload: { itemId, quantity },
});

export const removeFromCart = (itemId) => ({
    type: "REMOVE_FROM_CART",
    payload: itemId,
});
