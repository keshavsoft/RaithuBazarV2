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


const jFLocalForImageTagAnd2Cols = ({ inRate1, inRate2, inImageId, inItemName, inItemName1, inItemName2 }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.querySelector("#RowContainerId");
        const template = document.querySelector("#TemplateForImageAnd2ColsId");

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

const jFLocalForSvgAnd2Cols = ({ inRate1, inRate2, inImageId, inItemName, inItemName1, inItemName2 }) => {
    if ("content" in document.createElement("template")) {
        const tbody = document.querySelector("#RowContainerId");
        const template = document.querySelector("#TemplateForImageAnd2ColsId");

        const clone = template.content.cloneNode(true);
        const ImageId = inImageId;
        const jVarLocalItemName = inItemName;

        let td = clone.querySelector(".ImageClass");
        // td.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"
        //                 xmlns:xlink="http://www.w3.org/1999/xlink" width="150" height="150">
        //                 <use xlink:href="#${ImageId}"></use>
        //             </svg>`;



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


const StartFunc = () => {
    jFLocalForTomato({
        inRate1: 27
    });

    jFLocalForBrinjal({
        inRate1: 66,
        inRate2: 80,
        inRate3: 68,
        inRate4: 70
    });

    jFLocalForOkra({ inRate: 60 });

    // jFLocalSingleRate({
    //     inItemName: "పచ్చి మిర్చి",
    //     inRate: 50, inImageId: "greenchilli"
    // });


    jFLocalForImageTagAnd3Cols({
        inItemName: "పచ్చి మిర్చి",
        inItemName1: "సన్నాలు",
        inItemName2: "లావులు",
        inItemName3: "బరంపురం",
        inRate1: 45, inRate2: 38, inRate3: 45,
        inImageId: "greenchilli"
    });

    jFLocalSingleRate({
        inItemName: "కాకరకాయ",
        inRate: 50,
        inImageId: "bitterGourd"
    });

    jFLocalSingleRate({
        inItemName: "బీరకాయ",
        inRate: 60,
        inImageId: "ridgeGourd"
    });

    jFLocalSingleRate({
        inItemName: "కాలీఫ్లవర్",
        inRate: "25-30",
        inImageId: "cauliflower"
    });

    jFLocalSingleRate({
        inItemName: "క్యాబేజీ",
        inRate: "36",
        inImageId: "cabbage"
    });


    jFLocalForImageTagAnd2Cols({
        inItemName: "క్యారెట్",
        inItemName1: "బెంగళూరు",
        inItemName2: "మట్టి",
        inRate1: 45, inRate2: 38,
        inImageId: "carrot"
    });

    
    jFLocalForSvgAnd2Cols({
        inItemName: "దొండకాయ",
        inItemName1: "లోకల్",
        inItemName2: "నాన్ లోకల్",
        inRate1: 45, inRate2: 38,
        inImageId: "ivyGourd"
    });

    jFLocalForImageTagAnd2ColsSmallName({
        inItemName: "బంగాళాదుంపలు",
        inItemName1: "లోకల్",
        inItemName2: "నాన్ లోకల్",
        inRate1: 45, inRate2: 38,
        inImageId: "potato"
    });


};

export { StartFunc };
