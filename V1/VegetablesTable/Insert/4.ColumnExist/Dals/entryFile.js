import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnVegetableName,LocalCoumnVegetableRate}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnVegetableName,LocalCoumnVegetableRate});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};