import axios from "axios";
import React, { useEffect, useState } from "react";

const AppContext = React.createContext();

function AppContextProvider({ children }) {
    const [buttonPressed, setButtonPressed] = useState(false);
    window.onbeforeunload = (e) => {
        reload();
    };
    async function reload() {
        if (buttonPressed === false) {
        }
        else {
            await axios.put(
                "http://localhost:3000/api/button/setState"
            );
            await axios.get(
                "http://localhost:3000/api/button/state"
            );
        }

    };
    async function setButtonState() {
        await axios.put(
            "http://localhost:3000/api/button/setState"
        );
        const response = await axios.get(
            "http://localhost:3000/api/button/state"
        );
        setButtonPressed(response.data);
    }

    useEffect(() => {

        async function fetchData() {
            await axios
                .get("http://localhost:3000/api/button/state")
                .then((response) => {
                    if (response.data.length > 0) {
                        setButtonPressed(response.data);
                    }
                })
                .catch((error) => console.error(error.response));
        }
        fetchData();
    }, [buttonPressed, setButtonPressed]);
    // The context value that will be supplied to any descendants of this component.
    const context = {
        setButtonState,
        buttonPressed,
        setButtonPressed,
    };

    // Wraps the given child components in a Provider for the above context.
    return (
        <AppContext.Provider value={context}>{children}</AppContext.Provider>
    );
}

export { AppContext, AppContextProvider };
