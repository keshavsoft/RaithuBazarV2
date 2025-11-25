import { StartFunc as StartFuncFromInsertToDom } from "./insertToDom.js";
import { StartFunc as StartFuncFormAddListeners } from "./AddListeners/entryFile.js";

const StartFunc = () => {
    // StartFuncFromInsertToDom();
	StartFuncFormAddListeners();
};

export { StartFunc };
