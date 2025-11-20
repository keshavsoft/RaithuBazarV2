import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnVegetableName,LocalCoumnVegetableRate}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnVegetableName,LocalCoumnVegetableRate});

    return LocalFromDal;
};

export {
    postDefaultFunc
};