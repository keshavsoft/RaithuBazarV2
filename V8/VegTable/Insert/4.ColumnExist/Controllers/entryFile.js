import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnVegetableRate = LocalRequestBody.VegetableRate;
	let LocalCoumnVegetableTelugu = LocalRequestBody.VegetableTelugu;
	let LocalCoumnVegetableImage = LocalRequestBody.VegetableImage;
	let LocalCoumnVegetableName = LocalRequestBody.VegetableName;
	let LocalCoumnGroupTelugu = LocalRequestBody.GroupTelugu;
	let LocalCoumnGroupName = LocalRequestBody.GroupName;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnGroupName,LocalCoumnGroupTelugu,LocalCoumnVegetableName,LocalCoumnVegetableImage,LocalCoumnVegetableTelugu,LocalCoumnVegetableRate});

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