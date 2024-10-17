import {createContext} from "react";
import {doctors} from "../assets/assets.js";
import {createRoutesFromChildren} from "react-router-dom";

export const AppContext = createContext();
export const AppContextProvider = ( props ) => {

    const value = {
        doctors

    }

    return(

            <AppContext.Provider value={value}>
                {props.children}
            </AppContext.Provider>

    )

}

export default AppContextProvider