import { setCoinAmount, workWaitTimeCurrent, workWaitTimeMax, setWorkWaitTimeCurrent, coinAmount, setWorkCoin, 
    workCoin, workTotal, setWorkTotal, workCoinMin, workCoinMax, workDoubleChance, shardWorkAchievementBonus2 } from "./resources.js";
import { refreshCoinAmount, refreshWorkWaitTimeCurrent, refreshWorkTotalAmount, refreshButtonBackground, 
    refreshWorkCoinID } from "./display.js";
import { getRandomInt } from "../index.js";
import { checkShopItemAvailable } from "./shop.js";


const workButton = document.getElementById("workButton");

export let workInterval = "";

export function setWorkInterval (data) {
    workInterval = data;
}

const intervalTime = 1000;
const workAutomationLimit = 15;

export function work (workWaitTimeMax) {
    if ( workInterval === "" && workWaitTimeCurrent === 0 && workWaitTimeMax > workAutomationLimit) {

        refreshButtonBackground({ domObj: workButton, color: "red" });

        setWorkTotal(workTotal + 1);
        refreshWorkTotalAmount(workTotal);

        setCoinAmount ( coinAmount + workCoin );
        
        refreshCoinAmount ( coinAmount );
        genWork();

        checkShopItemAvailable();
        
        setWorkWaitTimeCurrent( workWaitTimeMax );
        workInterval = setInterval(waitWork, intervalTime);
    }
}

export function waitWork () {
    if ( workWaitTimeCurrent - 1 >= 0 ) {

        setWorkWaitTimeCurrent(workWaitTimeCurrent - 1);
        refreshWorkWaitTimeCurrent(workWaitTimeCurrent);

    } 
    if ( workWaitTimeCurrent === 0 ) {
        refreshWorkWaitTimeCurrent(workWaitTimeMax);
        
        clearInterval(workInterval);
        workInterval = "";

        refreshButtonBackground({ domObj: workButton, color: "green" });

    }
}

export function genWork () {
    if (getRandomInt(0, 100) < workDoubleChance) {
        setWorkCoin( 2 * getRandomInt( workCoinMin, workCoinMax ) / 100 * shardWorkAchievementBonus2);
    } else {
        setWorkCoin( getRandomInt( workCoinMin, workCoinMax ) / 100 * shardWorkAchievementBonus2);
    }
    
    refreshWorkCoinID (workCoin);
}