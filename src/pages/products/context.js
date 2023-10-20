import { createContext, useReducer } from "react";
import reducer, { initialState } from "./Reducer";

export const ProductContext = createContext()

export const ProductProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(reducer, initialState)
    
    
    
    const value = {

    }
    
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}