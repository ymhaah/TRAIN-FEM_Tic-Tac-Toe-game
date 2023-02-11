function accentFun(accent) {
    let acc = "";
    if (accent == "x") {
        acc = "accent-X-clr";
    } else if (accent == "o") {
        acc = "accent-O-clr";
    } else if (accent == "s") {
        acc = "accent-S-clr";
    } else if (accent == "m") {
        acc = "accent-M-clr";
    }
    return acc;
}

export default accentFun;
