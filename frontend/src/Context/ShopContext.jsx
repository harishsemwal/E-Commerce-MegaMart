import React, {createContext} from "react";
import all_products from '../Components/Assests/all_product';

export const ShopContext = React.createContext(null);

const ShopContextProvider = (props) =>{
    const contextValue = {all_products};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;