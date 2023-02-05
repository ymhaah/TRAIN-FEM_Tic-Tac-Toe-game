import dimensionsFun from "./dimensions.js";

let dimensions = 9;
dimensionsFun(dimensions);

// result = how win , which board item

let arr = [];

let id = [];

// for (let i =0; i < dimensions; i++) {

//     for (let i = 0; i < dimensionsFun(dimensions); i++) {

//         id[0]= 1;
//     }
//     for (let i = 0; i < dimensionsFun(dimensions); i++) {
//         id[1]= 1;
//     }
// }

class BoardItemInfo {
    constructor(id, player, location) {
        this.id = id;
        this.player = player;
        this.location = location;
    }
}

for (let i = 1; i < 10; i++) {
    arr.push(new BoardItemInfo(i, i * 2));
}

console.log(arr);

function gameResultFun() {}
