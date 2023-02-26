function dimensionsFun(numOfElements) {
    let i = 1;
    while (i * i != numOfElements) {
        i++;
        if (numOfElements < 4) {
            return console.warn("the min dimensions is 4");
            break;
        }
        if (i >= 6) {
            return console.warn(
                "your board has unequal dimensions or has more than 16 element"
            );
            break;
        }
    }
    return i;
}

export default dimensionsFun;
