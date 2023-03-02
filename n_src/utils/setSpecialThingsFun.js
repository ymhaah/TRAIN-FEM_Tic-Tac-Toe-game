function setSpecialThings(
    specialThings,
    fatherSons,
    specialThingsFunction,
    unSpecialThingsFunction
) {
    let specialThingsArr = Array.isArray(specialThings)
        ? specialThings
        : [specialThings];

    let fatherSonsArr = Array.isArray(fatherSons) ? fatherSons : [fatherSons];

    for (let fatherSon = 0; fatherSon < fatherSonsArr.length; fatherSon++) {
        if (specialThingsArr.length == 1) {
            if (fatherSonsArr[fatherSon] == specialThingsArr[0]) {
                specialThingsFunction(fatherSonsArr[fatherSon]);
            } else if (fatherSonsArr[fatherSon] != specialThingsArr[0]) {
                unSpecialThingsFunction(fatherSonsArr[fatherSon]);
            }
        } else {
            let unSpecialElement = [];
            let match = false;
            for (let i = 0; i < specialThingsArr.length; i++) {
                if (specialThingsArr[i] == fatherSonsArr[fatherSon]) {
                    match = true;
                    break;
                }
            }
            if (!match) {
                unSpecialElement.push(fatherSonsArr[fatherSon]);
            }
            specialThingsArr.forEach((specialThing) => {
                specialThingsFunction(specialThing);
            });
            unSpecialElement.forEach((unSpecial) => {
                unSpecialThingsFunction(unSpecial);
            });
        }
    }
}

export default setSpecialThings;
