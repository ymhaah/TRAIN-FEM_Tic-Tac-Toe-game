import itemInfoFun from "./itemInfo.js";

function playerFun(items, playerIndex, player) {
    items = itemInfoFun(items);
    items[playerIndex].ItemInfo.player = player;
    console.log(items[playerIndex]);
}

export default playerFun;
