import { talkAmount, talkPower, talkWaitTimeCurrent, talkWaitTimeMax, resistanceAmount, setTalkAmount, 
    setResistanceAmount, setTalkWaitTimeCurrent, setTalkWaitTimeMax, talkTotal, setTalkTotal, zoneLevel, 
    zoneLimits, 
    hateAmount} from "./resources.js";
import { refreshTalkAmount, refreshTalkWaitTimeCurrent, refreshResistanceAmount, refreshTalkTotalAmount, 
    refreshButtonBackground } from "./display.js";
import { getRandomInt } from "../index.js";

const talkButton = document.getElementById("talkButton");

const intervalTime = 1000;

export let talkInterval = "";

export function setTalkInterval (data) {
    talkInterval = data;
}

export function talk () {
    if (talkInterval === "" && talkWaitTimeCurrent === 0 && talkAmount < zoneLimits[zoneLevel]) {
        setTalkWaitTimeCurrent(talkWaitTimeMax);
        talkInterval = setInterval(waitTalk, intervalTime);
        
        setTalkTotal(talkTotal + 1);
        refreshTalkTotalAmount(talkTotal);

        refreshButtonBackground({ domObj: talkButton, color: "red" });

        if (talkAmount < 10 && getRandomInt(0, 100) > resistanceAmount) {
            setTalkAmount(talkAmount + talkPower);
            refreshTalkAmount(talkAmount);
            setResistanceAmount(resistanceAmount + 2);
            refreshResistanceAmount(resistanceAmount);

        } else if (talkAmount >= 10 && talkAmount < 20 && getRandomInt(0, 100) > resistanceAmount) {

            setTalkAmount(talkAmount + talkPower);
            refreshTalkAmount(talkAmount);
            setResistanceAmount(resistanceAmount + 1);
            refreshResistanceAmount(resistanceAmount);
            
            if (talkAmount === 20) {

                setTalkWaitTimeMax(60);

                setResistanceAmount(99);
                refreshResistanceAmount(resistanceAmount);

            }
        } else if (talkAmount >= 20 && getRandomInt(0, 100) > resistanceAmount && getRandomInt(0, 100) > 100 - hateAmount * 100) {

            setTalkAmount(talkAmount + talkPower);
            refreshTalkAmount(talkAmount);

        }
    } else {
        return;
    }
}

export function waitTalk () {
    if ( talkWaitTimeCurrent - 1 >= 0 ) {

        setTalkWaitTimeCurrent(talkWaitTimeCurrent - 1);
        refreshTalkWaitTimeCurrent(talkWaitTimeCurrent);

    } 
    if ( talkWaitTimeCurrent === 0 ) {

        refreshTalkWaitTimeCurrent(talkWaitTimeMax);
        refreshButtonBackground({ domObj: talkButton, color: "green" });

        clearInterval(talkInterval);
        talkInterval = "";

    }
}