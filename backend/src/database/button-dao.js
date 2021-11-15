import { Button } from "./schema";
async function checkPresentButton() {
    const dbButton = await Button.findById(1);
    if (dbButton) {
        console.log("button already here..")
    }
    else {
        createButton();
    }
};
checkPresentButton();

//Quiz code
export async function retrieveButtonState(id) {
    console.log(id);
    return await Button.findById(id);
}
export async function createButton() {
    const dbButton = new Button({ ID: 1, pressed: false });
    await dbButton.save();
    return dbButton;
}
export async function setButtonState(id) {
    const dbButton = await Button.findById(id);
    console.log(`Previous state...${dbButton.pressed}`)

    if (dbButton) {
        if (dbButton.pressed == true) {
            dbButton.pressed = false;
        }
        else if (dbButton.pressed == false) {
            dbButton.pressed = true;
        }
        console.log(`updated to..${dbButton.pressed}`);
        await dbButton.save();
        return dbButton.pressed;
    }
    else {
        return "Not found";
    }
}