import React, { createContext, useState, useContext, ReactNode } from 'react';

type CartItemProps = {
    name: string;
    quant: number;
    price: number;
};

// Create a CartContext with default value
const CartContext = createContext<{
    cart: CartItemProps[];
    addToCart: (name: string, price: number) => void;
    removeFromCart: (name: string) => void;
    totalPrice: number;
}>({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
    totalPrice: 0,
});

type CartProviderProps = {
    children: ReactNode;
};

// CartProvider component that wraps the app and provides the cart state
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<CartItemProps[]>([]);

    // Function to add an item to the cart
    const addToCart = (name: string, price: number) => {
        const existingItem = cart.find((item) => item.name === name);
        if (existingItem) {
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.name === name ? { ...item, quant: item.quant + 1 } : item
                )
            );
        } else {
            setCart((prevCart) => [...prevCart, { name, quant: 1, price }]);
        }
    };

    // Function to remove one quantity of an item from the cart
    const removeFromCart = (name: string) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.name === name
                        ? { ...item, quant: item.quant - 1 }
                        : item
                )
                .filter((item) => item.quant > 0) // Remove items with 0 quantity
        );
    };

    // Calculate the total price of all items in the cart
    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.quant,
        0
    );

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the CartContext
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
