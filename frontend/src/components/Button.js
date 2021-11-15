import React, { useContext } from "react";
import { AppContext } from "../AppContextProvider";
export default function Button() {
    const { setButtonState, buttonPressed } = useContext(AppContext);
    async function handleClick() {
        await setButtonState();
    }
    return (
        <>
            <div data-testid="buttonToBePressed" className={buttonPressed ? "buttonActive" : "buttonInactive"} onClick={() => (handleClick())}>
                {buttonPressed ?
                    <div><h1 className="fontSizing" id="activeText">active</h1>
                    </div>
                    : <h1 className="fontSizing" id="inactiveText">inactive</h1>}
            </div>



        </>
    );
}
