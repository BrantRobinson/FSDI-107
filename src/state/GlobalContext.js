import { createContext } from "react";

// GlobalContext defines context structure
const GlobalContext = createContext({
    cart: [], // an empty array and will hold product objects later
    user: {}, // empty object and will store user info like name, email, etc

    addProductToCart: () => {}, //function to add items to the cart
    clearCart: () => {}, // function to clear the cart
    removeProductFromCart: () => {} // function to remove a specific item from the cart
})

export default GlobalContext // export so that it can be used in other components