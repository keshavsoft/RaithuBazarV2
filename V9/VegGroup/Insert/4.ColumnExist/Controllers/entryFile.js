import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnVegGroupRightCol = LocalRequestBody.VegGroupRightCol;
	let LocalCoumnVegGroupLeftCol = LocalRequestBody.VegGroupLeftCol;
	let LocalCoumnVegGroupImageExt = LocalRequestBody.VegGroupImageExt;
	let LocalCoumnVegGroupImage = LocalRequestBody.VegGroupImage;
	let LocalCoumnVegGroupName = LocalRequestBody.VegGroupName;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnVegGroupName,LocalCoumnVegGroupImage,LocalCoumnVegGroupImageExt,LocalCoumnVegGroupLeftCol,LocalCoumnVegGroupRightCol});

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFilterDataFromBodyFunc
};