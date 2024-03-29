import { isTalkAutomated } from "./resources.js";

const myModal = document.getElementById("myModal");
const gameDiv = document.getElementById("gameDiv");
const shopDiv = document.getElementById("shopDiv");
const travelingDiv = document.getElementById("travelingDiv");
const achievementsDiv = document.getElementById("achievementsDiv");
const settingsDiv = document.getElementById("settingsDiv");
const navbarGame = document.getElementById("navbarGame");
const navbarShop = document.getElementById("navbarShop");
const navbarTraveling = document.getElementById("navbarTraveling");
const navbarAchievements = document.getElementById("navbarAchievements");
const navbarSettings = document.getElementById("navbarSettings");
const talkButton = document.getElementById("talkButton");
const talkAmountID = document.getElementById("talkAmountID");
const talkWaitTimeCurrentID = document.getElementById("talkWaitTimeCurrentID");
const talkPowerAutoDiv = document.getElementById("talkPowerAutoDiv");
const talkTotalPowerAutoDiv = document.getElementById("talkTotalPowerAutoDiv");
const talkPowerAutoID = document.getElementById("talkPowerAutoID");
const talkTotalPowerAutoID = document.getElementById("talkTotalPowerAutoID");
const talkTimeID = document.getElementById("talkTimeID");
const talkTimeCounterID = document.getElementById("talkTimeCounterID");
const resistanceAmountID = document.getElementById("resistanceAmountID");
const resistanceLevelMaxID = document.getElementById("resistanceLevelMaxID");
const hateLevelMaxID = document.getElementById("hateLevelMaxID");
const hateAmountID = document.getElementById("hateAmountID");
const talkTotalAmountID = document.getElementById("talkTotalAmountID");
const achievementID = document.getElementById("achievementID");
const achievementEarnedID = document.getElementById("achievementEarnedID");
const workDiv = document.getElementById("workDiv");
const coinAmountID = document.getElementById("coinAmountID");
const coinAmountID2 = document.getElementById("coinAmountID2");
const workTotalPowerID = document.getElementById("workTotalPowerID");
const coinAmountPowerID = document.getElementById("coinAmountPowerID");
const coinAmountPowerDiv = document.getElementById("coinAmountPowerDiv");
const workTimeID = document.getElementById("workTimeID");
const workCoinID = document.getElementById("workCoinID");
const workCoinMaxID = document.getElementById("workCoinMaxID");
const workCoinMinID = document.getElementById("workCoinMinID");
const workTotalAmountID = document.getElementById("workTotalAmountID");
const workButton = document.getElementById("workButton");
const workCoinTextID = document.getElementById("workCoinTextID");
const workTotalPowerDiv = document.getElementById("workTotalPowerDiv");
const workDoubleChanceID = document.getElementById("workDoubleChanceID");
const achEarnedAmountID = document.getElementById("achEarnedAmountID");
const achEarnedPercentID = document.getElementById("achEarnedPercentID");
const studyPointsAmountID = document.getElementById("studyPointsAmountID");
const studyPointsAmountID2 = document.getElementById("studyPointsAmountID2");
const studyPointsTotalAmountID = document.getElementById("studyPointsTotalAmountID");
const studyPointsPowerID = document.getElementById("studyPointsPowerID");
const studyDiv = document.getElementById("studyDiv");
const studyPointsDoubleChanceID = document.getElementById("studyPointsDoubleChanceID");
const studyPointsTimeID = document.getElementById("studyPointsTimeID");
const studyPointsAmountLimitID = document.getElementById("studyPointsAmountLimitID");
const studyPointsLevelUpCostID = document.getElementById("studyPointsLevelUpCostID");
const shopItem03 = document.getElementById("shopItem03");
const shopItem05 = document.getElementById("shopItem05");
const shopItem07 = document.getElementById("shopItem07");
const shopItem08 = document.getElementById("shopItem08");
const shopItem09 = document.getElementById("shopItem09");
const shopAmountID01SP = document.getElementById("shopAmountID01SP");
const shopAmountID02SP = document.getElementById("shopAmountID02SP");
const shopAmountID03SP = document.getElementById("shopAmountID03SP");
const shopAmountID04SP = document.getElementById("shopAmountID04SP");
const shopAmountID05C = document.getElementById("shopAmountID05C");
const shopAmountID06C = document.getElementById("shopAmountID06C");
const shopAmountID07M = document.getElementById("shopAmountID07M");
const shopAmountID08C = document.getElementById("shopAmountID08C");
const shopAmountID09C = document.getElementById("shopAmountID09C");
const shopAmountID10C = document.getElementById("shopAmountID10C");
const shopAmountID11C = document.getElementById("shopAmountID11C");
const shopStudyPointsDisplayID = document.getElementById("shopStudyPointsDisplayID");
const shopMotivationDisplayID = document.getElementById("shopMotivationDisplayID");
const shopTalkDiv = document.getElementById("shopTalkDiv");
const shopCoinDiv = document.getElementById("shopCoinDiv");
const shopStudyPointsDiv = document.getElementById("shopStudyPointsDiv");
const shopMotivationDiv = document.getElementById("shopMotivationDiv");
const shopTravelDiv = document.getElementById("shopTravelDiv");
const shopWorkWaitTimeMaxID = document.getElementById("shopWorkWaitTimeMaxID");
const shopTalkWaitTimeMaxID = document.getElementById("shopTalkWaitTimeMaxID");
const shopTravelWaitTimeMaxID = document.getElementById("shopTravelWaitTimeMaxID");
const shopTime01CounterID = document.getElementById("shopTime01CounterID");
const shopTime02CounterID = document.getElementById("shopTime02CounterID");
const shopTime03CounterID = document.getElementById("shopTime03CounterID");
const shopTime04CounterID = document.getElementById("shopTime04CounterID");
const shopTime05CounterID = document.getElementById("shopTime05CounterID");
const shopTime06CounterID = document.getElementById("shopTime06CounterID");
const shopTime08CounterID = document.getElementById("shopTime08CounterID");
const shopTime09CounterID = document.getElementById("shopTime09CounterID");
const shopTime10CounterID = document.getElementById("shopTime10CounterID");
const shopTime11CounterID = document.getElementById("shopTime11CounterID");
const motivationDiv = document.getElementById("motivationDiv");
const motivationAmountID = document.getElementById("motivationAmountID");
const motivationAmountID2 = document.getElementById("motivationAmountID2");
const motivationPowerID = document.getElementById("motivationPowerID");
const motivationLevelID = document.getElementById("motivationLevelID");
const motivationAmountLimitID = document.getElementById("motivationAmountLimitID");
const motivationTimeID = document.getElementById("motivationTimeID");
const motivationLevelUpCostID = document.getElementById("motivationLevelUpCostID");
const motivationSPBonusID = document.getElementById("motivationSPBonusID");
const motivationSPRatioID = document.getElementById("motivationSPRatioID");
const motivationLevelMaxID = document.getElementById("motivationLevelMaxID");
const travelPointsAmountID = document.getElementById("travelPointsAmountID");
const travelWaitTimeCurrentID = document.getElementById("travelWaitTimeCurrentID");
const tiredPointsID = document.getElementById("tiredPointsID");
const tiredTravelID = document.getElementById("tiredTravelID");
const tiredLimitID = document.getElementById("tiredLimitID");
const TravelPowerID = document.getElementById("TravelPowerID");
const shardWorkAmountID = document.getElementById("shardWorkAmountID");
const shardSPAmountID = document.getElementById("shardSPAmountID");
const shardMotivationAmountID = document.getElementById("shardMotivationAmountID");
const shardWorkChanceID = document.getElementById("shardWorkChanceID");
const shardSPChanceID = document.getElementById("shardSPChanceID");
const shardMotivationChanceID = document.getElementById("shardMotivationChanceID");
const zoneLevelID = document.getElementById("zoneLevelID");
const zoneLimitID = document.getElementById("zoneLimitID");
const zoneLimitID2 = document.getElementById("zoneLimitID2");
const zoneLevelUpCostID = document.getElementById("zoneLevelUpCostID");
const shopTime01 = document.getElementById("shopTime01");
const shopTime02 = document.getElementById("shopTime02");
const shopTime03 = document.getElementById("shopTime03");
const shopTime04 = document.getElementById("shopTime04");
const shopTime05 = document.getElementById("shopTime05");
const shopTime06 = document.getElementById("shopTime06");
const shopTime07 = document.getElementById("shopTime07");
const shopTime08 = document.getElementById("shopTime08");
const shopTime09 = document.getElementById("shopTime09");
const shopTime10 = document.getElementById("shopTime10");
const shopTime11 = document.getElementById("shopTime11");
const forgeDiv = document.getElementById("forgeDiv");

const hateDiv = document.getElementById("hateDiv");
const shopHateSpan = document.getElementById("shopHateSpan");

const navbarDivs = [gameDiv, shopDiv, travelingDiv, achievementsDiv, settingsDiv];
const navbars = [navbarGame, navbarShop, navbarTraveling, navbarAchievements, navbarSettings];

function roundNumbers(input){
    let output = Math.round(input * 1000000)/1000000;
	return output;
}

export function showNavbarDivs (domObj) {
    navbarDivs.forEach(navbarDivElement => {
        if(navbarDivElement === domObj) {
            navbarDivElement.style.display = "block";
        } else {
            navbarDivElement.style.display = "none";
        }
    });
}

export function activateNavbar (domObj) {
    navbars.forEach(navbarElement => {
        if(navbarElement === domObj) {
            navbarElement.classList.add('active');
        } else {
            navbarElement.classList.remove('active');
        }
    });
}

export function refreshTalkAmount (talkAmount) {
    if (!isTalkAutomated) {
        talkAmountID.textContent = talkAmount;
    } else {
        talkAmountID.textContent = talkAmount.toFixed(4);
    }
}

export function refreshTalkWaitTimeCurrent (talkWaitTimeCurrent) {
    talkWaitTimeCurrentID.textContent = talkWaitTimeCurrent;
}

export function refreshTalkWaitTimeMax (talkWaitTimeMax) {
    talkWaitTimeCurrentID.textContent = talkWaitTimeMax;
    shopTalkWaitTimeMaxID.textContent = talkWaitTimeMax;
}

export function refreshResistanceAmount (resistanceAmount) {
    resistanceAmountID.textContent = resistanceAmount;
}

export function refreshResistanceMax () {
    resistanceLevelMaxID.classList.remove('general');
}

export function refreshHateMax () {
    hateLevelMaxID.classList.remove('general');
}

export function refreshHateAmount (hateAmount) {
    hateAmountID.textContent = 100 - hateAmount * 100;
}

export function refreshTalkTotalAmount (talkTotalAmount) {
    if (!isTalkAutomated) {
        talkTotalAmountID.textContent = talkTotalAmount;
    } else {
        talkTotalAmountID.textContent = talkTotalAmount.toFixed(4);
    } 
}

export function refreshTalkPowerAuto (talkPowerAuto) {
    talkPowerAutoID.textContent = talkPowerAuto.toFixed(4);
}

export function refreshTalkTotalPowerAuto (talkTotalPowerAuto) {
    talkTotalPowerAutoID.textContent = talkTotalPowerAuto.toFixed(4);
}

export function refreshTalkTime (talkTime) {
    talkTimeID.textContent = talkTime;
}

export function refreshAchievementEarned (achievementText) {
    achievementEarnedID.style.display = "block";
    achievementEarnedID.style.backgroundColor = "green";
    achievementID.textContent = achievementText;
}

export function refreshAchievementBackground (domObj) {
        domObj.style.backgroundColor = "green";
        domObj.style.border = "2px solid darkgreen";
}

export function refreshCoinAmount (coinAmount) {
    coinAmountID.textContent = coinAmount.toFixed(2);
    coinAmountID2.textContent = coinAmount.toFixed(2);

}

export function refreshWorkTotalPower (workTotalPower) {
    workTotalPowerID.textContent = workTotalPower.toFixed(2);
}

export function refreshCoinAmountPower (coinAmountPower) {
    coinAmountPowerID.textContent = coinAmountPower;
}



export function refreshWorkWaitTimeCurrent (workWaitTimeCurrent) {
    workTimeID.textContent = workWaitTimeCurrent;
}

export function refreshWorkWaitTimeMax (workWaitTimeMax) {
    workTimeID.textContent = workWaitTimeMax;
    shopWorkWaitTimeMaxID.textContent = workWaitTimeMax;
}

export function refreshWorkCoinID (workCoin) {
    workCoinID.textContent = workCoin;
}

export function refreshWorkCoinMinID (workCoinMin) {
    workCoinMinID.textContent = workCoinMin;
}

export function refreshWorkCoinMaxID (workCoinMax) {
    workCoinMaxID.textContent = workCoinMax;
}

export function refreshWorkTotalAmount (workTotalAmount) {
    workTotalAmountID.textContent = workTotalAmount.toFixed(2);
}

export function refreshWorkDoubleChance (workDoubleChance) {
    workDoubleChanceID.textContent = workDoubleChance;
}


export function refreshAchEarnedAmount (achEarnedAmount) {
    achEarnedAmountID.textContent = achEarnedAmount;
}

export function refreshAchEarnedPercent (achEarnedPercent) {
    achEarnedPercentID.textContent = achEarnedPercent.toFixed(2);
}

export function refreshStudyPointsAmountID (studyPointsAmount) {
    studyPointsAmountID.textContent = studyPointsAmount.toFixed(4);
    studyPointsAmountID2.textContent = studyPointsAmount.toFixed(4);
}

export function refreshStudyPointsTotalAmountID (studyPointsTotalAmount) {
    studyPointsTotalAmountID.textContent = studyPointsTotalAmount.toFixed(4);
}

export function refreshStudyPointsPower (studyPointsPower) {
    studyPointsPowerID.textContent = studyPointsPower.toFixed(4);
}

export function refreshStudyPointsDoubleChance (studyPointsDoubleChance) {
    studyPointsDoubleChanceID.textContent = studyPointsDoubleChance;
}

export function refreshStudyPointsTimeID (studyPointsTime) {
    studyPointsTimeID.textContent = studyPointsTime;
}

export function refreshStudyPointsAmountLimit (studyPointsAmountLimit) {
    studyPointsAmountLimitID.textContent = studyPointsAmountLimit;
}

export function refreshStudyPointsLevelUpCost (studyPointsLevelUpCost) {
    studyPointsLevelUpCostID.textContent = studyPointsLevelUpCost.toFixed(2);
}

export function refreshShopAmountID ({ID, shopAmount}) {
    switch ( ID ) {
        case 1:
            shopAmountID01SP.textContent = shopAmount;
        break;
        case 2:
            shopAmountID02SP.textContent = shopAmount;
        break;
        case 3:
            shopAmountID03SP.textContent = shopAmount;
        break;
        case 4:
            shopAmountID04SP.textContent = shopAmount;
        break;
        case 5:
            shopAmountID05C.textContent = shopAmount;
        break;
        case 6:
            shopAmountID06C.textContent = shopAmount;
        break;
        case 7:
            shopAmountID07M.textContent = roundNumbers(shopAmount);
        break;
        case 8:
            shopAmountID08C.textContent = shopAmount;
        break;
        case 9:
            shopAmountID09C.textContent = shopAmount;
        break;
        case 10:
            shopAmountID10C.textContent = shopAmount;
        break;
        case 11:
            shopAmountID11C.textContent = shopAmount;
        break;
    }
}

export function refreshWorkAutomation() {
    workButton.style.display = "none";
    workCoinID.style.display = "none";
    workCoinTextID.style.display = "none";

    workTotalPowerDiv.classList.remove('general');
    workTotalPowerDiv.style.display = "block";
    coinAmountPowerDiv.classList.remove('general');
    coinAmountPowerDiv.style.display = "block";

    shopTime05CounterID.classList.remove('general');
    shopTime06CounterID.classList.remove('general');
    shopTime08CounterID.classList.remove('general');
    shopTime09CounterID.classList.remove('general');
    shopTime10CounterID.classList.remove('general');
    shopTime11CounterID.classList.remove('general');

}

export function refreshTalkAutomation() {
    talkButton.style.display = "none";

    talkPowerAutoDiv.classList.remove('general');
    talkPowerAutoDiv.style.display = "block";
    talkTotalPowerAutoDiv.classList.remove('general');
    talkTotalPowerAutoDiv.style.display = "block";
    talkTimeCounterID.classList.remove('general');
}

export function refreshMotivationAmount (motivationAmount) {
    motivationAmountID.textContent = roundNumbers(motivationAmount);
    motivationAmountID2.textContent = roundNumbers(motivationAmount);
}

export function refreshMotivationPower (motivationPower) {
    motivationPowerID.textContent = motivationPower.toFixed(4);
}

export function refreshMotivationLevel (motivationLevel) {
    motivationLevelID.textContent = motivationLevel;
}

export function refreshMotivationAmountLimit (motivationAmountLimit) {
    motivationAmountLimitID.textContent = motivationAmountLimit;
}

export function refreshMotivationTime (motivationTime) {
    motivationTimeID.textContent = motivationTime;
}

export function refreshMotivationLevelUpCost (motivationLevelUpCost) {
    motivationLevelUpCostID.textContent = motivationLevelUpCost;
}

export function refreshMotivationSPBonus (motivationSPBonus) {
    motivationSPBonusID.textContent = motivationSPBonus.toFixed(4);
}

export function refreshMotivationSPRatio (motivationSPRatio) {
    motivationSPRatioID.textContent = motivationSPRatio;
}

export function refreshMotivationMax () {
    motivationLevelMaxID.classList.remove('general');
}

export function refreshButtonBackground ({domObj: domObj, color: color}) {
    domObj.style.backgroundColor = color;
}

export function refreshShopTime ({ ID: ID, time: time }) {
    switch(ID) {
        case 1:
            shopTime01.textContent = time;
        break
        case 2:
            shopTime02.textContent = time;
        break
        case 3:
            shopTime03.textContent = time;
        break
        case 4:
            shopTime04.textContent = time;
        break
        case 5:
            shopTime05.textContent = time;
        break
        case 6:
            shopTime06.textContent = time;
        break
        case 7:
            shopTime07.textContent = time;
        break
        case 8:
            shopTime08.textContent = time;
        break
        case 9:
            shopTime09.textContent = time;
        break
        case 10:
            shopTime10.textContent = time;
        break
        case 11:
            shopTime11.textContent = time;
        break
    }
}

export function refreshTravelPoints (travelPoints) {
    travelPointsAmountID.textContent = roundNumbers(travelPoints);
}

export function refreshTravelWaitTimeCurrent (travelWaitTimeCurrent) {
    travelWaitTimeCurrentID.textContent = travelWaitTimeCurrent;
}

export function refreshTravelWaitTimeMax (travelWaitTimeMax) {
    travelWaitTimeCurrentID.textContent = travelWaitTimeMax;
    shopTravelWaitTimeMaxID.textContent = travelWaitTimeMax;
}

export function refreshTiredPoints (tiredPoints) {
    tiredPointsID.textContent = tiredPoints.toFixed(1);
}

export function refreshTiredTravel (tiredTravel) {
    tiredTravelID.textContent = roundNumbers(tiredTravel);
}

export function refreshTiredLimit (tiredLimit) {
    tiredLimitID.textContent = tiredLimit.toFixed(1);
}

export function refreshTravelPower (travelPower) {
    TravelPowerID.textContent = travelPower.toFixed(4);
}

export function refreshShardWorkAmount (shardWork) {
    shardWorkAmountID.textContent = shardWork.toFixed(2);
}

export function refreshShardSPAmount (shardSP) {
    shardSPAmountID.textContent = shardSP.toFixed(2);
}

export function refreshShardMotivationAmount (shardMotivation) {
    shardMotivationAmountID.textContent = shardMotivation.toFixed(2);
}

export function refreshShardWorkChance (shardWorkChance) {
    shardWorkChanceID.textContent = shardWorkChance.toFixed(2);
}

export function refreshShardSPChance (shardSPChance) {
    shardSPChanceID.textContent = shardSPChance.toFixed(2);
}

export function refreshShardMotivationChance (shardMotivationChance) {
    shardMotivationChanceID.textContent = shardMotivationChance.toFixed(2);
}

export function refreshzoneLevel (zoneLevel) {
    zoneLevelID.textContent = zoneLevel;
}

export function refreshZoneLimit (zoneLimit) {
    zoneLimitID.textContent = zoneLimit;
    zoneLimitID2.textContent = zoneLimit;
}

export function refreshZoneLevelUpCost (zoneLevelUpCost) {
    zoneLevelUpCostID.textContent = zoneLevelUpCost;
}

export function displayNone (ID) {
    switch(ID) {
        case 1:
            myModal.style.display = "none";
        break
        case 2:
            achievementEarnedID.style.display = "none";
        break
        case 3:
            shopItem05.style.display = "none";
        break
        case 4:
            shopItem03.style.display = "none";
        break
        case 5:
            shopItem07.style.display = "none";
        break
        case 6:
            shopItem08.style.display = "none";
        break
        case 7:
            shopItem09.style.display = "none";
        break
    }
}

export function showWork () {
    navbarShop.classList.remove('general');
    workDiv.classList.remove('general');
    workDiv.classList.add('generalDiv');
}

export function showShopTalkDiv () {
    shopTalkDiv.classList.remove('general');
}

export function showStudy () {
    studyDiv.classList.remove('general');
    studyDiv.classList.add('generalDiv');
    shopStudyPointsDisplayID.classList.remove('general');
    shopCoinDiv.classList.remove('general');

    shopTime01CounterID.classList.remove('general');
    shopTime02CounterID.classList.remove('general');
    shopTime03CounterID.classList.remove('general');
    shopTime04CounterID.classList.remove('general');
}

export function showMotivation () {
    motivationDiv.classList.remove('general');
    motivationDiv.classList.add('generalDiv');
    shopMotivationDisplayID.classList.remove('general');
    shopMotivationDiv.classList.remove('general');
}

export function showTraveling () {
    navbarTraveling.classList.remove('general');
    shopTravelDiv.classList.remove('general');
}

export function showHate () {
    hateDiv.classList.remove('general');
    shopHateSpan.classList.remove('general');
}

export function showForge () {
    forgeDiv.classList.remove('general');
    forgeDiv.classList.add('generalDiv');
}