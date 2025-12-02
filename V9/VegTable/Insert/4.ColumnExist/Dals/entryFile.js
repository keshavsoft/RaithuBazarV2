import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnGroupFK,LocalCoumnGroupTelugu,LocalCoumnVegetableName,LocalCoumnVegetableImage,LocalCoumnVegetableTelugu,LocalCoumnVegetableRate}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnGroupFK,LocalCoumnGroupTelugu,LocalCoumnVegetableName,LocalCoumnVegetableImage,LocalCoumnVegetableTelugu,LocalCoumnVegetableRate});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};