import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnGroupFK,LocalCoumnGroupTelugu,LocalCoumnVegetableName,LocalCoumnVegetableImage,LocalCoumnVegetableTelugu,LocalCoumnVegetableRate}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnGroupFK,LocalCoumnGroupTelugu,LocalCoumnVegetableName,LocalCoumnVegetableImage,LocalCoumnVegetableTelugu,LocalCoumnVegetableRate});

    return LocalFromDal;
};

export {
    postDefaultFunc
};