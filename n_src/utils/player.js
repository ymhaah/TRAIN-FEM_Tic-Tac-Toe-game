import itemInfoFun from "./itemInfo.js";

function playerFun(items, playerIndex, player) {
    // items = itemInfoFun(items);
    items[playerIndex].ItemInfo.player = player;
}

export default playerFun;
