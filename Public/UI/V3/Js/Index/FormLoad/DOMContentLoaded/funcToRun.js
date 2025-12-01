import { StartFunc as StartFuncFormAddListeners } from "./AddListeners/entryFile.js";

const StartFunc = () => {
    StartFuncFormAddListeners();
    const myButton = document.getElementById('RefreshId');

    // Simulate a click on the button
    if (myButton) { // Check if the element exists before trying to click it
        myButton.click();
    };
};

export { StartFunc };
