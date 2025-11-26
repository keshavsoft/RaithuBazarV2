
let StartFunc = ({ inResponseAsJson }) => {
    console.log("aaaaaaaaaaaa : ", inResponseAsJson);

    Object.entries(inResponseAsJson).forEach(([key, value]) => {
        console.log(`-----------${value.length}`);
        console.log(`-----------${value.length === 2}`);

        switch (value.length) {
            case 1:
                LocalFuncFor1({ value, key });

                break;
            case 2:
                LocalFuncFor2({ value, key });

                break;
            case 4:
                LocalFuncFor4({ value, key });

                break;

            default:
                break;
        };

        //     value.forEach(element => {
        //         jFLocalForImage4({
        //             inRate1: element.VegetableRate,
        //             inRate2: element.VegetableRate,
        //             inRate3: element.VegetableRate,
        //             inRate4: element.VegetableRate,
        //             inItemName: element.GroupTelugu,
        //             inItemName1: "దేశవాళీ పెద్దవి",
        //             inItemName2: "దేశవాళీ చిన్నవి",
        //             inItemName3: "హైబ్రిడ్ పెద్దవి",
        //             inItemName4: "హైబ్రిడ్ చిన్నవి",
        //             inImageId: element.VegetableImage
        //         });
        //     });

        // });

    });
};


// let StartFunc1 = ({ inResponseAsJson }) => {
//     console.log("aaaaaaaaaaaa : ", inResponseAsJson);

//     Object.entries(inResponseAsJson).forEach(([key, value]) => {
//         console.log(`-----------${value.length}`);
//         console.log(`-----------${value.length === 2}`);

//         switch (value.length) {
//             case 2:
//                 const jVarLocalItemName1 = value[0].VegetableTelugu;
//                 const jVarLocalItemName2 = value[1].VegetableTelugu;
//                 const jVarLocalRate1 = value[0].VegetableRate;
//                 const jVarLocalRate2 = value[1].VegetableRate;

//                 jFLocalForImageTagAnd2Cols({
//                     inItemName: key.split(".")[0],
//                     inItemName1: jVarLocalItemName1,
//                     inItemName2: jVarLocalItemName2,
//                     inRate1: jVarLocalRate1, inRate2: jVarLocalRate2,
//                     inImageId: `${key.split(".")[1]}.${key.split(".")[2]}`
//                 });

//                 break;
//             case 4:
//                 const jVarLocalItemName1 = value[0].VegetableTelugu;
//                 const jVarLocalItemName2 = value[1].VegetableTelugu;
//                 const jVarLocalRate1 = value[0].VegetableRate;
//                 const jVarLocalRate2 = value[1].VegetableRate;

//                 jFLocalForImageTagAnd2Cols({
//                     inItemName: key.split(".")[0],
//                     inItemName1: jVarLocalItemName1,
//                     inItemName2: jVarLocalItemName2,
//                     inRate1: jVarLocalRate1, inRate2: jVarLocalRate2,
//                     inImageId: `${key.split(".")[1]}.${key.split(".")[2]}`
//                 });

//                 break;

//             default:
//                 break;
//         };

//         //     value.forEach(element => {
//         //         jFLocalForImage4({
//         //             inRate1: element.VegetableRate,
//         //             inRate2: element.VegetableRate,
//         //             inRate3: element.VegetableRate,
//         //             inRate4: element.VegetableRate,
//         //             inItemName: element.GroupTelugu,
//         //             inItemName1: "దేశవాళీ పెద్దవి",
//         //             inItemName2: "దేశవాళీ చిన్నవి",
//         //             inItemName3: "హైబ్రిడ్ పెద్దవి",
//         //             inItemName4: "హైబ్రిడ్ చిన్నవి",
//         //             inImageId: element.VegetableImage
//         //         });
//         //     });

//         // });

//     });
// };

let LocalFuncFor2 = ({ value, key }) => {
    const jVarLocalItemName1 = value[0].VegetableTelugu;
    const jVarLocalItemName2 = value[1].VegetableTelugu;
    const jVarLocalRate1 = ` ₹ ${value[0].VegetableRate}`;
    const jVarLocalRate2 = ` ₹ ${value[1].VegetableRate}`;

    jFLocalForImageTagAnd2Cols({
        inItemName: key.split(".")[0],
        inItemName1: jVarLocalItemName1,
        inItemName2: jVarLocalItemName2,
        inRate1: jVarLocalRate1, inRate2: jVarLocalRate2,
        inImageId: `${key.split(".")[1]}.${key.split(".")[2]}`
    });
};

let LocalFuncFor1 = ({ value, key }) => {
    const jVarLocalItemName1 = value[0].VegetableTelugu;
    const jVarLocalRate1 = ` ₹ ${value[0].VegetableRate}`;
    console.log("jVarLocalRate1 : ", jVarLocalRate1);

    jFLocalForImageTagAnd1({
        inItemName: key.split(".")[0],
        inRate: jVarLocalRate1,
        inImageId: `${key.split(".")[1]}.${key.split(".")[2]}`
    });
};

let LocalFuncFor4 = ({ value, key }) => {
    const jVarLocalItemName1 = value[0].VegetableTelugu;
    const jVarLocalItemName2 = value[1].VegetableTelugu;
    const jVarLocalRate1 = ` ₹ ${value[0].VegetableRate}`;
    const jVarLocalRate2 = ` ₹ ${value[1].VegetableRate}`;

    jFLocalForImageTagAnd4Cols({
        inItemName: key.split(".")[0],
        inItemName1: jVarLocalItemName1,
        inItemName2: jVarLocalItemName2,
        inRate1: jVarLocalRate1, inRate2: jVarLocalRate2,
        inImageId: `${key.split(".")[1]}.${key.split(".")[2]}`
    });
};

export { StartFunc };




const jFLocalSingleImageNoWt = ({ inItemName, inRate, inImageId }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.querySelector("#RowContainerId");
        const template = document.querySelector("#TemplateForImageAndSingleNoWt");

        const clone = template.content.cloneNode(true);
        const ImageId = inImageId;

        const jVarLocalItemName = inItemName;

        let td = clone.querySelector(".ImageClass");
        td.innerHTML = `<img width="150" height="150" src="Images/${ImageId}.jpg" alt="${jVarLocalItemName}">`;

        const jVarLocalItemNameFind = clone.querySelector(".ItemNameClass");
        jVarLocalItemNameFind.innerHTML = jVarLocalItemName;

        const jVarLocalItemRateFind = clone.querySelector(".RateClass");
        jVarLocalItemRateFind.innerHTML = inRate;

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

const jFLocalSingleRate = ({ inItemName, inRate, inImageId }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.querySelector("#RowContainerId");
        const template = document.querySelector("#TemplateForImageAndSingleColumn");

        const clone = template.content.cloneNode(true);
        const ImageId = inImageId;

        const jVarLocalItemName = inItemName;

        let td = clone.querySelector(".ImageClass");
        td.innerHTML = `<img width="150" height="150" src="Images/${ImageId}.jpg" alt="${jVarLocalItemName}">`;

        const jVarLocalItemNameFind = clone.querySelector(".ItemNameClass");
        jVarLocalItemNameFind.innerHTML = jVarLocalItemName;

        const jVarLocalItemRateFind = clone.querySelector(".RateClass");
        jVarLocalItemRateFind.innerHTML = inRate;

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

const jFLocalForImageTagAnd2Cols9_3NoWt = ({ inRate1, inRate2, inImageId, inItemName, inItemName1, inItemName2 }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.querySelector("#RowContainerId");
        const template = document.querySelector("#TemplateForImageAnd2Cols9_3IdNoWt");

        const clone = template.content.cloneNode(true);
        const ImageId = inImageId;
        const jVarLocalItemName = inItemName;

        let td = clone.querySelector(".ImageClass");
        td.innerHTML = `<img width="150" height="150" src="Images/${ImageId}.jpg" alt="${jVarLocalItemName}">`;

        const jVarLocalItemNameFind = clone.querySelector(".ItemNameClass");
        jVarLocalItemNameFind.innerHTML = jVarLocalItemName;

        jFLocalForLine1({
            inClone: clone, inItemName: inItemName1,
            inItemRate: inRate1
        });

        jFLocalForLine2({
            inClone: clone, inItemName: inItemName2,
            inItemRate: inRate2
        });

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

const jFLocalForNoImage2Items = ({ inItemName, inRate1, inRate2, inItemName1, inItemName2 }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.querySelector("#RowContainerId");
        const template = document.querySelector("#TemplateForNoImage2Items");

        const clone = template.content.cloneNode(true);
        const ImageId = "okra";

        const jVarLocalItemName = inItemName;

        const jVarLocalItemNameFind = clone.querySelector(".ItemNameClass");
        jVarLocalItemNameFind.innerHTML = jVarLocalItemName;

        jFLocalForLine1({
            inClone: clone, inItemName: inItemName1,
            inItemRate: inRate1
        });

        jFLocalForLine2({
            inClone: clone, inItemName: inItemName2,
            inItemRate: inRate2
        });

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

const jFLocalForSingleWithImage = ({ inRate }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.querySelector("#RowContainerId");
        const template = document.querySelector("#TemplateForImageAndSingleColumn");

        const clone = template.content.cloneNode(true);
        const ImageId = "okra";

        const jVarLocalItemName = "బెండకాయ";

        let td = clone.querySelector(".ImageClass");
        td.innerHTML = `<img width="150" height="150" src="Images/${ImageId}.jpg" alt="${jVarLocalItemName}">`;

        const jVarLocalItemNameFind = clone.querySelector(".ItemNameClass");
        jVarLocalItemNameFind.innerHTML = jVarLocalItemName;

        const jVarLocalItemRateFind = clone.querySelector(".RateClass");
        jVarLocalItemRateFind.innerHTML = inRate;

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

const jFLocalForNoImageSingleItem = ({ inItemName, inRate }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.querySelector("#RowContainerId");
        const template = document.querySelector("#TemplateForNoImageSingleItem");

        const clone = template.content.cloneNode(true);
        const ImageId = "okra";

        const jVarLocalItemName = inItemName;

        const jVarLocalItemNameFind = clone.querySelector(".ItemNameClass");
        jVarLocalItemNameFind.innerHTML = jVarLocalItemName;

        if (inRate !== undefined) {
            const jVarLocalItemRateFind = clone.querySelector(".RateClass");
            jVarLocalItemRateFind.innerHTML = inRate;
        };

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

const jFLocalForNoImageSingleItemGreen = ({ inItemName, inRate }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.querySelector("#RowContainerId");
        const template = document.querySelector("#TemplateForNoImageSingleItemGreen");

        const clone = template.content.cloneNode(true);
        const ImageId = "okra";

        const jVarLocalItemName = inItemName;

        const jVarLocalItemNameFind = clone.querySelector(".ItemNameClass");
        jVarLocalItemNameFind.innerHTML = jVarLocalItemName;

        if (inRate !== undefined) {
            const jVarLocalItemRateFind = clone.querySelector(".RateClass");
            jVarLocalItemRateFind.innerHTML = inRate;
        };

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

const jFLocalForImageTagAnd2ColsSmallName = ({ inRate1, inRate2, inImageId, inItemName, inItemName1, inItemName2 }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.querySelector("#RowContainerId");
        const template = document.querySelector("#TemplateForImageAnd2ColsSmallNameId");

        const clone = template.content.cloneNode(true);
        const ImageId = inImageId;
        const jVarLocalItemName = inItemName;

        let td = clone.querySelector(".ImageClass");
        //  td.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"
        //         xmlns:xlink="http://www.w3.org/1999/xlink" width="150" height="150">
        //         <use xlink:href="#${ImageId}"></use>
        //     </svg>`;



        td.innerHTML = `<img width="150" height="150" src="Images/${ImageId}.svg" alt="${jVarLocalItemName}">`;

        const jVarLocalItemNameFind = clone.querySelector(".ItemNameClass");
        jVarLocalItemNameFind.innerHTML = jVarLocalItemName;

        jFLocalForLine1({
            inClone: clone, inItemName: inItemName1,
            inItemRate: inRate1
        });

        jFLocalForLine2({
            inClone: clone, inItemName: inItemName2,
            inItemRate: inRate2
        });

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

const jFLocalForImageTagAnd2ColsSmallName4_8 = ({ inRate1, inRate2, inImageId, inItemName, inItemName1, inItemName2 }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.querySelector("#RowContainerId");
        const template = document.querySelector("#TemplateForImageAnd2ColsSmallName4_8Id");

        const clone = template.content.cloneNode(true);
        const ImageId = inImageId;
        const jVarLocalItemName = inItemName;

        let td = clone.querySelector(".ImageClass");
        //  td.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"
        //         xmlns:xlink="http://www.w3.org/1999/xlink" width="150" height="150">
        //         <use xlink:href="#${ImageId}"></use>
        //     </svg>`;



        td.innerHTML = `<img width="150" height="150" src="Images/${ImageId}.svg" alt="${jVarLocalItemName}">`;

        const jVarLocalItemNameFind = clone.querySelector(".ItemNameClass");
        jVarLocalItemNameFind.innerHTML = jVarLocalItemName;

        jFLocalForLine1({
            inClone: clone, inItemName: inItemName1,
            inItemRate: inRate1
        });

        jFLocalForLine2({
            inClone: clone, inItemName: inItemName2,
            inItemRate: inRate2
        });

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

const jFLocalForImageTagAnd2Cols = ({ inRate1, inRate2, inImageId, inItemName, inItemName1, inItemName2 }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.querySelector("#RowContainerId");
        const template = document.querySelector("#TemplateForImageAnd2ColsId");

        const clone = template.content.cloneNode(true);
        const ImageId = inImageId;
        const jVarLocalItemName = inItemName;

        let td = clone.querySelector(".ImageClass");
        td.innerHTML = `<img width="150" height="150" src="Images/${ImageId}" alt="${jVarLocalItemName}">`;

        const jVarLocalItemNameFind = clone.querySelector(".ItemNameClass");
        jVarLocalItemNameFind.innerHTML = jVarLocalItemName;

        jFLocalForLine1({
            inClone: clone, inItemName: inItemName1,
            inItemRate: inRate1
        });

        jFLocalForLine2({
            inClone: clone, inItemName: inItemName2,
            inItemRate: inRate2
        });

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

const jFLocalForImageTagAnd4Cols = ({ inRate1, inRate2, inRate3, inRate4, inImageId, inItemName, inItemName1, inItemName2, inItemName3, inItemName4 }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.querySelector("#RowContainerId");
        const template = document.querySelector("#TemplateForImageAnd4ColsId");

        const clone = template.content.cloneNode(true);
        const ImageId = inImageId;
        const jVarLocalItemName = inItemName;

        let td = clone.querySelector(".ImageClass");
        td.innerHTML = `<img width="150" height="150" src="Images/${ImageId}" alt="${jVarLocalItemName}">`;

        const jVarLocalItemNameFind = clone.querySelector(".ItemNameClass");
        jVarLocalItemNameFind.innerHTML = jVarLocalItemName;

        jFLocalForLine1({
            inClone: clone, inItemName: inItemName1,
            inItemRate: inRate1
        });

        jFLocalForLine2({
            inClone: clone, inItemName: inItemName2,
            inItemRate: inRate2
        });

        if (inItemName3 !== undefined) {


            jFLocalForLine3({
                inClone: clone, inItemName: inItemName3,
                inItemRate: inRate3
            });

        };
        if (inItemName4 !== undefined) {

            jFLocalForLine4({
                inClone: clone, inItemName: inItemName4,
                inItemRate: inRate4
            });
        };

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

const jFLocalForImageTagAnd1 = ({ inRate, inImageId, inItemName }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.querySelector("#RowContainerId");
        const template = document.querySelector("#TemplateForImageAndSingleColumn");

        const clone = template.content.cloneNode(true);
        const ImageId = inImageId;
        const jVarLocalItemName = inItemName;

        let td = clone.querySelector(".ImageClass");
        td.innerHTML = `<img width="150" height="150" src="Images/${ImageId}" alt="${jVarLocalItemName}">`;

        const jVarLocalItemNameFind = clone.querySelector(".ItemNameClass");
        jVarLocalItemNameFind.innerHTML = jVarLocalItemName;

        const jVarLocalItemRateFind = clone.querySelector(".RateClass");
        jVarLocalItemRateFind.innerHTML = inRate;

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

const jFLocalForImageTagAnd2Cols9_3 = ({ inRate1, inRate2, inImageId, inItemName, inItemName1, inItemName2 }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.querySelector("#RowContainerId");
        const template = document.querySelector("#TemplateForImageAnd2Cols9_3Id");

        const clone = template.content.cloneNode(true);
        const ImageId = inImageId;
        const jVarLocalItemName = inItemName;

        let td = clone.querySelector(".ImageClass");
        td.innerHTML = `<img width="150" height="150" src="Images/${ImageId}.jpg" alt="${jVarLocalItemName}">`;

        const jVarLocalItemNameFind = clone.querySelector(".ItemNameClass");
        jVarLocalItemNameFind.innerHTML = jVarLocalItemName;

        jFLocalForLine1({
            inClone: clone, inItemName: inItemName1,
            inItemRate: inRate1
        });

        jFLocalForLine2({
            inClone: clone, inItemName: inItemName2,
            inItemRate: inRate2
        });

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

const jFLocalForJpgAnd2Cols = ({ inRate1, inRate2, inImageId, inItemName, inItemName1, inItemName2 }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.querySelector("#RowContainerId");
        const template = document.querySelector("#TemplateForImageAnd2ColsId");

        const clone = template.content.cloneNode(true);
        const ImageId = inImageId;
        const jVarLocalItemName = inItemName;

        let td = clone.querySelector(".ImageClass");

        td.innerHTML = `<img width="150" height="150" src="Images/${ImageId}.jpg" alt="${jVarLocalItemName}">`;

        const jVarLocalItemNameFind = clone.querySelector(".ItemNameClass");
        jVarLocalItemNameFind.innerHTML = jVarLocalItemName;

        jFLocalForLine1({
            inClone: clone, inItemName: inItemName1,
            inItemRate: inRate1
        });

        jFLocalForLine2({
            inClone: clone, inItemName: inItemName2,
            inItemRate: inRate2
        });

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

const jFLocalForImage4 = ({ inRate1, inRate2, inRate3, inRate4, inItemName, inItemName1, inItemName2, inItemName3, inItemName4, inImageId }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.querySelector("#RowContainerId");
        const template = document.querySelector("#TemplateForImageAnd4ItemsId");

        const clone = template.content.cloneNode(true);
        const ImageId = inImageId;

        let td = clone.querySelector(".ImageClass");
        td.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="140" height="140">
                                <use xlink:href="#${ImageId}"></use>
                            </svg>`;

        const jVarLocalItemName = inItemName;
        const jVarLocalItemNameFind = clone.querySelector(".ItemNameClass");
        jVarLocalItemNameFind.innerHTML = jVarLocalItemName;

        jFLocalForLine1({
            inClone: clone, inItemName: inItemName1,
            inItemRate: inRate1
        });

        jFLocalForLine2({
            inClone: clone, inItemName: inItemName2,
            inItemRate: inRate2
        });

        jFLocalForLine3({
            inClone: clone, inItemName: inItemName3,
            inItemRate: inRate3
        });

        jFLocalForLine4({
            inClone: clone, inItemName: inItemName4,
            inItemRate: inRate4
        });

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

const jFLocalForTomato = ({ inRate1, inRate2, inRate3, inRate4 }) => {
    jFLocalForImage4({
        inRate1, inRate2, inRate3, inRate4, inItemName: "టమోటా",
        inItemName1: "దేశవాళీ పెద్దవి",
        inItemName2: "దేశవాళీ చిన్నవి",
        inItemName3: "హైబ్రిడ్ పెద్దవి",
        inItemName4: "హైబ్రిడ్ చిన్నవి",
        inImageId: "TomatoId"
    });
};

const jFLocalForBrinjal = ({ inRate1, inRate2, inRate3, inRate4 }) => {
    jFLocalForImage4({
        inRate1, inRate2, inRate3, inRate4, inItemName: "వంకాయ",
        inItemName1: "నలుపు (నీటి)",
        inItemName2: "గులాబీ (మువ్వ)",
        inItemName3: "తెలుపు (మెట్ట)",
        inItemName4: "దొమ్మరు",
        inImageId: "BrinjalId"
    });
};

// const StartFunc = () => {
//     jFLocalForTomato({
//         inRate1: 27
//     });

//     jFLocalForBrinjal({
//         inRate1: 66,
//         inRate2: 80,
//         inRate3: 68,
//         inRate4: 70
//     });

//     jFLocalForSingleWithImage({ inRate: 60 });

//     // jFLocalSingleRate({
//     //     inItemName: "పచ్చి మిర్చి",
//     //     inRate: 50, inImageId: "greenchilli"
//     // });


//     jFLocalForImageTagAnd3Cols({
//         inItemName: "పచ్చి మిర్చి",
//         inItemName1: "సన్నాలు",
//         inItemName2: "లావులు",
//         inItemName3: "బరంపురం",
//         inRate1: 45, inRate2: 38, inRate3: 45,
//         inImageId: "greenchilli"
//     });

//     jFLocalSingleRate({
//         inItemName: "కాకరకాయ",
//         inRate: 50,
//         inImageId: "bitterGourd"
//     });

//     jFLocalSingleRate({
//         inItemName: "బీరకాయ",
//         inRate: 60,
//         inImageId: "ridgeGourd"
//     });

//     jFLocalSingleRate({
//         inItemName: "కాలీఫ్లవర్",
//         inRate: "25-30",
//         inImageId: "cauliflower"
//     });

//     jFLocalSingleRate({
//         inItemName: "క్యాబేజీ",
//         inRate: "36",
//         inImageId: "cabbage"
//     });


//     jFLocalForImageTagAnd2Cols({
//         inItemName: "క్యారెట్",
//         inItemName1: "బెంగళూరు",
//         inItemName2: "మట్టి",
//         inRate1: 45, inRate2: 38,
//         inImageId: "carrot"
//     });


//     jFLocalForJpgAnd2Cols({
//         inItemName: "దొండకాయ",
//         inItemName1: "లోకల్",
//         inItemName2: "నాన్ లోకల్",
//         inRate1: 45, inRate2: 38,
//         inImageId: "ivyGourd"
//     });

//     jFLocalForImageTagAnd2ColsSmallName4_8({
//         inItemName: "బంగాళాదుంపలు",
//         inItemName1: "లోకల్",
//         inItemName2: "నాన్ లోకల్",
//         inRate1: 45, inRate2: 38,
//         inImageId: "potato"
//     });

//     jFLocalForImageTagAnd2Cols9_3({
//         inItemName: "ఉల్లిపాయలు",
//         inItemName1: "గ్రేడ్ 1",
//         inItemName2: "చిన్నవి",
//         inRate1: 45, inRate2: 38,
//         inImageId: "onion"
//     });

//     jFLocalForNoImageSingleItem({
//         inItemName: "గోరు చిక్కుళ్ళు"
//     });

//     jFLocalForNoImageSingleItem({
//         inItemName: "దోస కాయలు",
//         inRate: 38
//     });


//     jFLocalForNoImage2Items({
//         inItemName: "ఆనపకాయ 1",
//         inRate1: 40,
//         inRate2: 35, inItemName1: "పెద్ద",
//         inItemName2: "చిన్న"
//     });

//     jFLocalForImageTagAnd2Cols9_3NoWt({
//         inItemName: "పొట్లకాయ 1",
//         inRate1: 25,
//         inRate2: 30, inItemName1: "పెద్ద",
//         inItemName2: "చిన్న",
//         inImageId: "snakeGourd"
//     });

//     jFLocalSingleImageNoWt({
//         inItemName: "ఆరతి కాయ ఒకటి",
//         inRate: "6 - 8",
//         inImageId: "greenBanana"
//     });

//     jFLocalForNoImageSingleItem({
//         inItemName: "చామదుంపలు",
//         inRate: "30-34"
//     });

//     jFLocalForNoImageSingleItem({
//         inItemName: "మునగ కాయలు",
//         inRate: "12-13"
//     });

//     jFLocalForNoImageSingleItem({
//         inItemName: "కంద",
//         inRate: "60"
//     });

//     jFLocalForNoImageSingleItem({
//         inItemName: "బీట్రూట్",
//         inRate: "50"
//     });

//     jFLocalForNoImageSingleItem({
//         inItemName: "కీరదోస",
//         inRate: "50"
//     });

//     jFLocalForNoImage2Items({
//         inItemName: "బీన్స్",
//         inRate1: 50,
//         inRate2: 270, inItemName1: "కాయలు",
//         inItemName2: "గింజలు"
//     });

//     jFLocalForNoImage2Items({
//         inItemName: "అల్లం",
//         inRate1: 74,
//         inRate2: 74, inItemName1: "పాటది",
//         inItemName2: "కొట్టాడి"
//     });

//     jFLocalForNoImageSingleItem({
//         inItemName: "క్యాప్సికమ్",
//         inRate: "86"
//     });


//     jFLocalForNoImageSingleItem({
//         inItemName: "బొబ్బర్లు",
//         inRate: "60"
//     });


//     jFLocalForNoImageSingleItem({
//         inItemName: "చిలగడదుంప",
//         inRate: "38"
//     });


//     jFLocalForNoImageSingleItem({
//         inItemName: "అకరకాయలు",
//         inRate: "110"
//     });


//     jFLocalForNoImageSingleItem({
//         inItemName: "మామిడికాయలు",
//         inRate: "12-15"
//     });


//     jFLocalForNoImageSingleItem({
//         inItemName: "నిమ్మకాయలు",
//         inRate: "24-30"
//     });


//     jFLocalForNoImageSingleItem({
//         inItemName: "చింతకాయలు",
//         inRate: "35"
//     });

//     jFLocalForNoImageSingleItem({
//         inItemName: "సొరకాయలు",
//         inRate: "30"
//     });

//     jFLocalForNoImageSingleItem({
//         inItemName: "బుడిద గుమ్మడి కాయ కేజీ",
//         inRate: "30"
//     });
//     jFLocalLeafy();

// };

const jFLocalLeafy = () => {

    jFLocalForNoImageSingleItemGreen({
        inItemName: "పుదీనా",
        inRate: "110"
    });


    jFLocalForNoImageSingleItemGreen({
        inItemName: "కరివేపాకు",
        inRate: "55"
    });


    jFLocalForNoImageSingleItemGreen({
        inItemName: "చింత చిగురు",
        inRate: "50"
    });


    jFLocalForNoImageSingleItemGreen({
        inItemName: "ముల్లంగి",
        inRate: "60"
    });
};

const jFLocalForLine1 = ({ inClone, inItemName, inItemRate }) => {
    const jVarLocalItemName = inItemName;
    const jVarLocalLine1Rate = inItemRate;

    const jVarLocalItemRow = inClone.querySelector(".Line1Class");

    jFLocalForInsideLines({ inItemRow: jVarLocalItemRow, inItemName, inItemRate });
};

const jFLocalForLine2 = ({ inClone, inItemName, inItemRate }) => {
    const jVarLocalItemName = inItemName;
    const jVarLocalLine1Rate = inItemRate;

    const jVarLocalItemRow = inClone.querySelector(".Line2Class");

    jFLocalForInsideLines({ inItemRow: jVarLocalItemRow, inItemName, inItemRate });
};

const jFLocalForLine3 = ({ inClone, inItemName, inItemRate }) => {
    const jVarLocalItemName = inItemName;
    const jVarLocalLine1Rate = inItemRate;

    const jVarLocalItemRow = inClone.querySelector(".Line3Class");

    jFLocalForInsideLines({ inItemRow: jVarLocalItemRow, inItemName, inItemRate });
};
const jFLocalForLine4 = ({ inClone, inItemName, inItemRate }) => {
    const jVarLocalItemName = inItemName;
    const jVarLocalLine1Rate = inItemRate;

    const jVarLocalItemRow = inClone.querySelector(".Line4Class");

    jFLocalForInsideLines({ inItemRow: jVarLocalItemRow, inItemName, inItemRate });
};

const jFLocalForInsideLines = ({ inItemRow, inItemName, inItemRate }) => {
    const jVarLocalItemName = inItemName;
    const jVarLocalLine1Rate = inItemRate;

    const jVarLocalItemRow = inItemRow

    const jVarLocalItemNameFind = jVarLocalItemRow.querySelector(".NameClass");
    jVarLocalItemNameFind.innerHTML = jVarLocalItemName;

    if (jVarLocalLine1Rate !== undefined) {

        const jVarLocalItemRate = jVarLocalItemRow.querySelector(".RateClass");
        jVarLocalItemRate.innerHTML = jVarLocalLine1Rate;

    };
};

// export { StartFunc };