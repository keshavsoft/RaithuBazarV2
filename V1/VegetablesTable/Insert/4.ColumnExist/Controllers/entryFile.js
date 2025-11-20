import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnVegetableRate = LocalRequestBody.VegetableRate;
	let LocalCoumnVegetableName = LocalRequestBody.VegetableName;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnVegetableName,LocalCoumnVegetableRate});

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