
function shoppingCart(action, item, cart) {
    cart = [];
    item = { id: 1,
             name: "T-Shirt",
             price: 10
             };
    switch (action) {
        case "add_to_cart":
            cart.push(item);
            return cart;
        case "remove_from_cart":
            cart.pop(item);
            return cart;
        case "remove_all_from_cart":
            cart.pop(item);
            return cart;
        case "empty_cart":
            cart.pop(item);
            return cart;
        default:
            return cart;
    }
}
