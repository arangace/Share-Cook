import React, { useEffect, useState } from "react";

const AppContext = React.createContext();

function AppContextProvider({ children }) {

    // Wraps the given child components in a Provider for the above context.
    const context = "";
    return (
        <AppContext.Provider value={context}>{children}</AppContext.Provider>
    );
}

export { AppContext, AppContextProvider };
