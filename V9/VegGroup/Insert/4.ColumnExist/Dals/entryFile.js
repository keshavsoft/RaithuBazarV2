import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnVegGroupName,LocalCoumnVegGroupImage,LocalCoumnVegGroupImageExt,LocalCoumnVegGroupLeftCol,LocalCoumnVegGroupRightCol}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnVegGroupName,LocalCoumnVegGroupImage,LocalCoumnVegGroupImageExt,LocalCoumnVegGroupLeftCol,LocalCoumnVegGroupRightCol});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};