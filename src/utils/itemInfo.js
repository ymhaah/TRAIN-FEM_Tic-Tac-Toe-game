import dimensionsFun from "./dimensions.js";

function itemInfoFun(items) {
    let dimensions = dimensionsFun(items.length);

    class ItemInfo {
        constructor(id, player, x, y) {
            this.id = id;
            this.player = player;
            this.location = {
                x: x,
                y: y,
            };
        }
    }

    items.forEach((ele) => {
        ele.ItemInfo = new ItemInfo(crypto.randomUUID(), null);
    });

    for (let i = 0; i < dimensions; i++) {
        let item = i;
        let X = 1;
        for (item; item < items.length; item = item + dimensions) {
            items[item].ItemInfo.location.x = X++;
        }
    }
    for (let i = 0; i < dimensions; i++) {
        let item = i;
        for (item; item < items.length; item = item + dimensions) {
            items[item].ItemInfo.location.y = i + 1;
        }
    }
    return items;
}

export default itemInfoFun;
