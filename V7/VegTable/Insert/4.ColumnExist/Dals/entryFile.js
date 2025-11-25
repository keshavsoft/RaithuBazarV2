import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnGroupName,LocalCoumnGroupTelugu,LocalCoumnVegetableName,LocalCoumnVegetableImage,LocalCoumnVegetableTelugu,LocalCoumnVegetableRate}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnGroupName,LocalCoumnGroupTelugu,LocalCoumnVegetableName,LocalCoumnVegetableImage,LocalCoumnVegetableTelugu,LocalCoumnVegetableRate});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};