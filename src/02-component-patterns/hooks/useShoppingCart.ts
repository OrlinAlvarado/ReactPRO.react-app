import { useState } from 'react';
import { onChangeArgs, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = () => {
    
    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart}>({});
    
    const onProductCountChange = ({ count, product }: onChangeArgs) => {
        setShoppingCart(oldShoppingCart => {
           
            // let newShoppingCart = oldShoppingCart;
            
            if(count === 0){
                // delete newShoppingCart[product.id]
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                console.log({ toDelete });
                return rest;
            }
            
            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count }
            }
        });
        
        
    }
    
    return {
        shoppingCart,
        onProductCountChange,
    }
}

