import { useState } from "react"
import GlobalContext from "./GlobalContext"

//GlobalProvider provides state and logic
function GlobalProvider(props) {
    const [cart, setCart] = useState([])
    const [user, setUser] = useState({id: 25, name: 'Brant', cohort: 61})

    function addProductToCart(prod) {
        console.log('GLobal Add ', prod)
        setCart([...cart, prod])
    }

    function clearCart() {
        setCart([])
    }

    function removeProductFromCart(prodId) {
        const updatedCart = cart.filter(item => item.id != prodId) // filter keeps products that match the condition (i.e. not equal to the id you want to remove)
        setCart(updatedCart) 
    
    }

    return (
        <GlobalContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            clearCart: clearCart,
            removeProductFromCart: removeProductFromCart
        }}>

        {props.children} {/* render any child components inside the provider*/}
        </GlobalContext.Provider>
  )
}

export default GlobalProvider