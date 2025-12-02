import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnVegGroupName,LocalCoumnVegGroupImage,LocalCoumnVegGroupImageExt,LocalCoumnVegGroupLeftCol,LocalCoumnVegGroupRightCol}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnVegGroupName,LocalCoumnVegGroupImage,LocalCoumnVegGroupImageExt,LocalCoumnVegGroupLeftCol,LocalCoumnVegGroupRightCol});

    return LocalFromDal;
};

export {
    postDefaultFunc
};