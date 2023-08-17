import { workCoinMin, workCoinMax, setWorkCoin, workCoin, workDoubleChance } from "./resources.js";
import { refreshWorkCoinID } from "./display.js";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function genWork () {
    if (getRandomInt(0, 100) < workDoubleChance) {
        setWorkCoin( 2 * getRandomInt( workCoinMin, workCoinMax ) / 100 );
    } else {
        setWorkCoin( getRandomInt( workCoinMin, workCoinMax ) / 100 );
    }
    
    refreshWorkCoinID (workCoin);
}