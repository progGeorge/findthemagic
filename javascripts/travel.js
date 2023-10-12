import { travelPoints, setTravelPoints, travelWaitTimeCurrent, setTravelWaitTimeCurrent, travelWaitTimeMax, 
    tiredPoints, setTiredPoints, tiredPower, tiredTravel, tiredLimit, travelPower, setTravelPower, 
    workTotal, studyPointsTotalAmount, shardWorkChance, setShardWorkChance, shardSPChance, setShardSPChance, 
    shardMotivationChance, setShardMotivationChance, zoneLevelUpCost, zoneLevel, setShardWork, shardWork, setShardSP, setShardMotivation, shardSP, shardMotivation, shardWorkPower, shardSPPower, shardMotivationPower } from "./resources.js";
import { refreshButtonBackground, refreshTravelPoints, refreshTravelWaitTimeCurrent, refreshTiredPoints, 
    refreshTravelPower, refreshShardWorkAmount, refreshShardWorkChance, refreshShardSPAmount, 
    refreshShardSPChance, refreshShardMotivationAmount, refreshShardMotivationChance } from "./display.js";

const travelButton = document.getElementById("travelButton");

const intervalTime = 1000;

export let travelInterval = "";

export function setTravelInterval (data) {
    travelInterval = data;
}

export function travel () {
    if (travelInterval === "" && travelWaitTimeCurrent === 0 && tiredPoints + tiredTravel <= tiredLimit) {
        if (travelWaitTimeMax > 1) {
            setTravelWaitTimeCurrent(travelWaitTimeMax);
            travelInterval = setInterval(waitTravel, intervalTime);

            calcTravelPower();

            setTravelPoints(travelPoints + travelPower);
            refreshTravelPoints(travelPoints);

            setTiredPoints(tiredPoints + tiredTravel);
            refreshTiredPoints(tiredPoints);

            refreshButtonBackground({ domObj: travelButton, color: "red" });

            calcAndRefreshShards();
        } else {
            calcTravelPower();

            setTravelPoints(travelPoints + travelPower);
            refreshTravelPoints(travelPoints);

            setTiredPoints(tiredPoints + tiredTravel);
            refreshTiredPoints(tiredPoints);

            if (tiredPoints + tiredTravel > tiredLimit) {
                refreshButtonBackground({ domObj: travelButton, color: "red" });
            }

            calcAndRefreshShards();
        } 
    } else {
        return;
    }
}

export function waitTravel () {
    if ( travelWaitTimeCurrent - 1 >= 0 ) {

        setTravelWaitTimeCurrent(travelWaitTimeCurrent - 1);
        refreshTravelWaitTimeCurrent(travelWaitTimeCurrent);

    }
    if ( travelWaitTimeCurrent === 0 ) {

        refreshTravelWaitTimeCurrent(travelWaitTimeMax);

        if (tiredPoints + tiredTravel <= tiredLimit) {
            refreshButtonBackground({ domObj: travelButton, color: "green" });
        }
        
        clearInterval(travelInterval);
        travelInterval = "";

    }
}

export function calcTravelPower () {
    setTravelPower((workTotal + studyPointsTotalAmount) / 10000);
    refreshTravelPower(travelPower);
}

function calcAndRefreshShards () {
    if (travelPoints / zoneLevelUpCost[0] * 100 <= 100) {
        setShardWorkChance(travelPoints / zoneLevelUpCost[0] * 100);   
    } else {
        setShardWorkChance(100);
    }
    if (travelPoints / zoneLevelUpCost[1] * 100 <= 100) {
        setShardSPChance(travelPoints / zoneLevelUpCost[1] * 100);
    } else {
        setShardSPChance(100);
    }
    if (travelPoints / zoneLevelUpCost[2] * 100 <= 100) {
        setShardMotivationChance(travelPoints / zoneLevelUpCost[2] * 100);
    } else {
        setShardMotivationChance(100);
    }

    refreshShardWorkChance(shardWorkChance);
    refreshShardSPChance(shardSPChance);
    refreshShardMotivationChance(shardMotivationChance);

    if (Math.random() * zoneLevelUpCost[0] < travelPoints) {
        setShardWork(shardWork + shardWorkPower);
        refreshShardWorkAmount(shardWork);
    }
    if (Math.random() * zoneLevelUpCost[1] < travelPoints) {
        setShardSP(shardSP + shardSPPower);
        refreshShardSPAmount(shardSP);

    }
    if (Math.random() * zoneLevelUpCost[2] < travelPoints) {
        setShardMotivation(shardMotivation + shardMotivationPower);
        refreshShardMotivationAmount(shardMotivation);

    }
}

export function rest () {
    if (tiredPoints - tiredPower >= 0 && travelWaitTimeCurrent === 0) {
        setTiredPoints(tiredPoints - tiredPower);
    } else if (tiredPoints - tiredPower < 0) {
        setTiredPoints(0);
    }

    refreshTiredPoints(tiredPoints);

    if (tiredPoints + tiredTravel <= tiredLimit && travelWaitTimeCurrent ===0) {
        refreshButtonBackground({ domObj: travelButton, color: "green" });
    }
}