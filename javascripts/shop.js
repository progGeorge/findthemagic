import { talkAmount, talkPower, talkWaitTimeMax, resistanceAmount, setResistanceAmount, 
    setTalkWaitTimeMax, setCoinAmount, workWaitTimeMax, coinAmount, workCoinMin, 
    workCoinMax, setCoinMin, setCoinMax, studyPointsAmount, studyPointsPower, 
    setStudyPointsAmount, isWorkAchievementEarned1, shopAmount01SP, shopAmount02SP, 
    shopAmount03SP, shopAmount04SP, setShopAmount, setWorkWaitTimeMax, shopAmount05C, 
    shopAmount06C, workTotalPower, setMotivationAmount, motivationAmount, 
    motivationPower, setTalkPowerAuto, setTalkTotalPowerAuto, talkPowerAuto, 
    talkTotalPowerAuto, motivationLevel, motivationLimits, setStudyPointsPower, 
    baseStudyPointsPower, workDoubleChance, setWorkDoubleChance, coinAmountPower, 
    setCoinAmountPower, zoneLevel, motivationLevelUpCost, shopAmount07M, 
    motivationSPRatio, setMotivationSPRatio, setIsTalkAutomated, studyPointsLevelUpCost, 
    setWorkTotalPower, setIsWorkAutomated, setShopItemPow, shopItem06Pow, shopItem05Pow, 
    shopItem01Pow, shopItem02Pow, shopItem03Pow, shopItem04Pow, shopItem07Pow, 
    shardWorkAchievementBonus2, hateAmount, travelWaitTimeMax, shopItem08Pow, 
    shopAmount08C, setTravelWaitTimeMax, shopAmountBase08C, shardWorkAchievementBonus1, 
    shopMultiplier08, shopAmount09C, shopAmount10C, shopAmountBase01SP, 
    shardSPAchievementBonus1, shopMultiplier01, shopMultiplier02, shopMultiplier03, 
    shopMultiplier04, shopMultiplier05, shopMultiplier06, shopMultiplier07,
    shopMultiplier09, shopMultiplier10, shopAmountBase02SP, shardSPAchievementBonus2, 
    shopAmountBase03SP, shardSPAchievementBonus3, shopAmountBase04SP, 
    shardSPAchievementBonus4, shopAmountBase05C, shopAmountBase06C, shopAmountBase07M, 
    shopAmountBase09C, shopItem09Pow, shopAmountBase10C, shopItem10Pow, tiredTravel, 
    setTiredTravel, tiredTravelPow, setTiredTravelPow, tiredLimit, setTiredLimit, setHateAmount, shopAmountBase11C, shopItem11Pow, shopAmount11C, shopMultiplier11 } from "./resources.js";
import { refreshResistanceAmount, refreshCoinAmount, refreshStudyPointsAmountID, 
    refreshShopAmountID, refreshWorkCoinMinID, refreshWorkCoinMaxID, 
    refreshWorkWaitTimeMax, refreshWorkAutomation, refreshMotivationAmount, 
    refreshTalkAutomation, refreshTalkPowerAuto, refreshTalkTotalPowerAuto, 
    refreshStudyPointsPower, refreshButtonBackground, refreshShopTime, 
    refreshCoinAmountPower, refreshWorkDoubleChance, displayNone, 
    refreshMotivationSPBonus, refreshMotivationSPRatio, refreshTalkWaitTimeMax, 
    refreshWorkTotalPower, refreshResistanceMax, refreshTravelWaitTimeMax, 
    refreshTiredTravel, refreshTiredLimit, refreshHateAmount, refreshHateMax } from "./display.js";
import { calcMotivationTime } from "./motivation.js";

const studyPointsLevelUpButton = document.getElementById("studyPointsLevelUpButton");
const motivationLevelUpButton = document.getElementById("motivationLevelUpButton");
const shopButton01 = document.getElementById("shopButton01");
const shopButton02 = document.getElementById("shopButton02");
const shopButton03 = document.getElementById("shopButton03");
const shopButton04 = document.getElementById("shopButton04");
const shopButton05 = document.getElementById("shopButton05");
const shopButton06 = document.getElementById("shopButton06");
const shopButton07 = document.getElementById("shopButton07");
const shopButton08 = document.getElementById("shopButton08");
const shopButton09 = document.getElementById("shopButton09");
const shopButton10 = document.getElementById("shopButton10");
const shopButton11 = document.getElementById("shopButton11");

const workAutomationLimit = 15;
const talkAutomationLimit = 30;

function roundNumbers(input){
    let output = Math.round(input * 1000000)/1000000;
	return output;
}

export function buyShopItem ({ID}) {
    switch (ID) {
        case 1: 
            if (shopAmountBase01SP * shardSPAchievementBonus1 * Math.pow(shopMultiplier01, shopItem01Pow) <= studyPointsAmount && workCoinMin < workCoinMax) {
                setStudyPointsAmount(studyPointsAmount - shopAmountBase01SP * shardSPAchievementBonus1 * Math.pow(shopMultiplier01, shopItem01Pow));
                refreshStudyPointsAmountID(studyPointsAmount);

                setShopItemPow({ ID: ID, amount: shopItem01Pow + 1 });
                setShopAmount(1);
                refreshShopAmountID({ ID: ID, shopAmount: shopAmount01SP });

                setCoinMin(workCoinMin + 1);
                refreshWorkCoinMinID (workCoinMin / 100);

                setCoinAmountPower(((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax * shardWorkAchievementBonus2).toFixed(4));
                refreshCoinAmountPower(coinAmountPower);

                if (studyPointsAmount <= studyPointsLevelUpCost) {
                    refreshButtonBackground({ domObj: studyPointsLevelUpButton, color: "red" });
                }
                if (studyPointsAmount <= motivationLevelUpCost) {
                    refreshButtonBackground({ domObj: motivationLevelUpButton, color: "red" });
                }
            }
        break;
        case 2: 
            if (shopAmountBase02SP * shardSPAchievementBonus2 * Math.pow(shopMultiplier02, shopItem02Pow) <= studyPointsAmount) {
                setStudyPointsAmount(studyPointsAmount - shopAmountBase02SP * shardSPAchievementBonus2 * Math.pow(shopMultiplier02, shopItem02Pow));
                refreshStudyPointsAmountID(studyPointsAmount);

                setShopItemPow({ ID: ID, amount: shopItem02Pow + 1 });
                setShopAmount(2);
                refreshShopAmountID({ ID: ID, shopAmount: shopAmount02SP });

                setCoinMax(workCoinMax + 1);
                refreshWorkCoinMaxID (workCoinMax / 100);

                setCoinAmountPower(((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax * shardWorkAchievementBonus2).toFixed(4));
                refreshCoinAmountPower(coinAmountPower);

                if (studyPointsAmount <= studyPointsLevelUpCost) {
                    refreshButtonBackground({ domObj: studyPointsLevelUpButton, color: "red" });
                }
                if (studyPointsAmount <= motivationLevelUpCost) {
                    refreshButtonBackground({ domObj: motivationLevelUpButton, color: "red" });
                }
            }
        break;
        case 3: 
            if (shopAmountBase03SP * shardSPAchievementBonus3 * Math.pow(shopMultiplier03, shopItem03Pow) <= studyPointsAmount && workWaitTimeMax > 1) {
                setStudyPointsAmount(studyPointsAmount - shopAmountBase03SP * shardSPAchievementBonus3 * Math.pow(shopMultiplier03, shopItem03Pow));
                refreshStudyPointsAmountID(studyPointsAmount);

                setShopItemPow({ ID: ID, amount: shopItem03Pow + 1 });
                setShopAmount(3);
                refreshShopAmountID({ ID: ID, shopAmount: shopAmount03SP });

                setWorkWaitTimeMax(workWaitTimeMax - 1);
                refreshWorkWaitTimeMax(workWaitTimeMax);

                setWorkTotalPower(1 / workWaitTimeMax);
                refreshWorkTotalPower(workTotalPower);

                setCoinAmountPower(((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax * shardWorkAchievementBonus2).toFixed(4));
                refreshCoinAmountPower(coinAmountPower);

                if (workWaitTimeMax === workAutomationLimit) {
                    refreshWorkAutomation();
                    setIsWorkAutomated(true);
                }

                if (workWaitTimeMax === 1) {
                    displayNone(4);
                }

                if (studyPointsAmount <= studyPointsLevelUpCost) {
                    refreshButtonBackground({ domObj: studyPointsLevelUpButton, color: "red" });
                }
                if (studyPointsAmount <= motivationLevelUpCost) {
                    refreshButtonBackground({ domObj: motivationLevelUpButton, color: "red" });
                }
            }
        break;
        case 4:
            if (shopAmountBase04SP * shardSPAchievementBonus4 * Math.pow(shopMultiplier04, shopItem04Pow) <= studyPointsAmount && workDoubleChance < 100) {
                setStudyPointsAmount(studyPointsAmount - shopAmountBase04SP * shardSPAchievementBonus4 * Math.pow(shopMultiplier04, shopItem04Pow));
                refreshStudyPointsAmountID(studyPointsAmount);

                setShopItemPow({ ID: ID, amount: shopItem04Pow + 1 });
                setShopAmount(4);
                refreshShopAmountID({ ID: ID, shopAmount: shopAmount04SP });

                setWorkDoubleChance(workDoubleChance + 2);
                refreshWorkDoubleChance(workDoubleChance);

                if (studyPointsAmount <= studyPointsLevelUpCost) {
                    refreshButtonBackground({ domObj: studyPointsLevelUpButton, color: "red" });
                }
                if (studyPointsAmount <= motivationLevelUpCost) {
                    refreshButtonBackground({ domObj: motivationLevelUpButton, color: "red" });
                }
            }
        break
        case 5: 
            if (shopAmountBase05C * shardWorkAchievementBonus1 * Math.pow(shopMultiplier05, shopItem05Pow) <= coinAmount && talkWaitTimeMax > 1 && talkAmount >= 20) {
                setCoinAmount(coinAmount - shopAmountBase05C * shardWorkAchievementBonus1 * Math.pow(shopMultiplier05, shopItem05Pow));
                refreshCoinAmount(coinAmount);

                setShopItemPow({ ID: ID, amount: shopItem05Pow + 1 });

                setShopAmount(5);
                refreshShopAmountID({ ID: ID, shopAmount: shopAmount05C });

                setTalkWaitTimeMax(talkWaitTimeMax - 1);
                refreshTalkWaitTimeMax(talkWaitTimeMax);

                if (talkWaitTimeMax === talkAutomationLimit) {
                    refreshTalkAutomation();
                    setIsTalkAutomated(true);
                }

                calcAndRefreshTalkPower();

                if (talkWaitTimeMax === 1) {
                    displayNone(3);
                }
            }
        break;
        case 6: 
            if (shopAmountBase06C * shardWorkAchievementBonus1 * Math.pow(shopMultiplier06, shopItem06Pow) <= coinAmount && resistanceAmount > 100 - (zoneLevel + 1) * 10) {
                setCoinAmount(coinAmount - shopAmountBase06C * shardWorkAchievementBonus1 * Math.pow(shopMultiplier06, shopItem06Pow));
                refreshCoinAmount(coinAmount);

                setShopItemPow({ ID: ID, amount: shopItem06Pow + 1 });

                setShopAmount(6);
                refreshShopAmountID({ ID: ID, shopAmount: shopAmount06C });

                setResistanceAmount(resistanceAmount - 1);
                refreshResistanceAmount(resistanceAmount);

                if (resistanceAmount === 100 - (zoneLevel + 1) * 10) {
                    refreshResistanceMax();
                }

                calcAndRefreshTalkPower();
                
            }
        break;
        case 7: 
            if (shopAmountBase07M + shopMultiplier07 * shopItem07Pow <= motivationAmount && shopItem07Pow < 25) {
                setMotivationAmount(motivationAmount - (shopAmountBase07M + shopMultiplier07 * shopItem07Pow));
                refreshMotivationAmount(motivationAmount);

                setShopItemPow({ ID: ID, amount: shopItem07Pow + 1 });
                setShopAmount(7);
                refreshShopAmountID({ ID: ID, shopAmount: shopAmount07M });

                setMotivationSPRatio(motivationSPRatio - 2);
                refreshMotivationSPRatio(motivationSPRatio);

                refreshMotivationSPBonus(motivationLevel / motivationSPRatio);

                setStudyPointsPower(baseStudyPointsPower + motivationLevel / motivationSPRatio);
                refreshStudyPointsPower(studyPointsPower);

                calcMotivationTime();
                calcShopTimeM();

                if (shopItem07Pow >= 25) {
                    displayNone(5);
                }
            }
        break;
        case 8: 
            if (shopAmountBase08C * shardWorkAchievementBonus1 * Math.pow(shopMultiplier08, shopItem08Pow) <= coinAmount && travelWaitTimeMax > 0) {
                setCoinAmount(coinAmount - shopAmountBase08C * shardWorkAchievementBonus1 * Math.pow(shopMultiplier08, shopItem08Pow));
                refreshCoinAmount(coinAmount);

                setShopItemPow({ ID: ID, amount: shopItem08Pow + 1 });

                setShopAmount(8);
                refreshShopAmountID({ ID: ID, shopAmount: shopAmount08C });

                setTravelWaitTimeMax(travelWaitTimeMax - 1);
                refreshTravelWaitTimeMax(travelWaitTimeMax);

                if (travelWaitTimeMax === 0) {
                    displayNone(6);
                }
            }
        break;
        case 9: 
            if ((shopAmountBase09C + shopMultiplier09 * shopItem09Pow) * shardWorkAchievementBonus1 <= coinAmount && tiredTravelPow < 39) {
                setCoinAmount(coinAmount - (shopAmountBase09C + shopMultiplier09 * shopItem09Pow) * shardWorkAchievementBonus1);
                refreshCoinAmount(coinAmount);

                setShopItemPow({ ID: ID, amount: shopItem09Pow + 1 });

                setShopAmount(9);
                refreshShopAmountID({ ID: ID, shopAmount: shopAmount09C });

                setTiredTravelPow(tiredTravelPow + 1);
                setTiredTravel();
                refreshTiredTravel(tiredTravel);

                if (tiredTravelPow >= 9) {
                    displayNone(7);
                }
            }
        break;
        case 10: 
            if ((shopAmountBase10C + shopMultiplier10 * shopItem10Pow) * shardWorkAchievementBonus1 <= coinAmount) {
                setCoinAmount(coinAmount - (shopAmountBase10C + shopMultiplier10 * shopItem10Pow) * shardWorkAchievementBonus1);
                refreshCoinAmount(coinAmount);

                setShopItemPow({ ID: ID, amount: shopItem10Pow + 1 });

                setShopAmount(10);
                refreshShopAmountID({ ID: ID, shopAmount: shopAmount10C });

                setTiredLimit(tiredLimit + 2);
                refreshTiredLimit(tiredLimit);
            }
        break;
        case 11: 
            if (shopAmountBase11C * shardWorkAchievementBonus1 * Math.pow(shopMultiplier11, shopItem11Pow) <= coinAmount && (100 - hateAmount * 100) > 100 - zoneLevel * 10) {
                setCoinAmount(coinAmount - shopAmountBase11C * shardWorkAchievementBonus1 * Math.pow(shopMultiplier11, shopItem11Pow));
                refreshCoinAmount(coinAmount);

                setShopItemPow({ ID: ID, amount: shopItem11Pow + 1 });

                setShopAmount(11);
                refreshShopAmountID({ ID: ID, shopAmount: shopAmount11C });

                setHateAmount(hateAmount + 0.01);
                refreshHateAmount(hateAmount);

                if (100 - 100 * hateAmount === 100 - zoneLevel * 10) {
                    refreshHateMax();
                }

                calcAndRefreshTalkPower();
                
            }
        break;
    }

    checkShopItemAvailable();
    calcShopTimeSP();
}

export function calcAndRefreshTalkPower () {
    setTalkPowerAuto(talkPower / talkWaitTimeMax / (100 / (100 - resistanceAmount)) * hateAmount);
    setTalkTotalPowerAuto(talkPower / talkWaitTimeMax );
    refreshTalkPowerAuto(talkPowerAuto);
    refreshTalkTotalPowerAuto(talkTotalPowerAuto);
}

export function checkShopItemAvailable () {
    if (shopAmountBase01SP * shardSPAchievementBonus1 * Math.pow(shopMultiplier01, shopItem01Pow) <= studyPointsAmount && workCoinMin < workCoinMax) {
        refreshButtonBackground({ domObj: shopButton01, color: "green" });
    } else {
        refreshButtonBackground({ domObj: shopButton01, color: "red" });
    }
 
    if (shopAmountBase02SP * shardSPAchievementBonus2 * Math.pow(shopMultiplier02, shopItem02Pow) <= studyPointsAmount) {
        refreshButtonBackground({ domObj: shopButton02, color: "green" });
    } else {
        refreshButtonBackground({ domObj: shopButton02, color: "red" });
    }

    if (shopAmountBase03SP * shardSPAchievementBonus3 * Math.pow(shopMultiplier03, shopItem03Pow) <= studyPointsAmount) {
        refreshButtonBackground({ domObj: shopButton03, color: "green" });
    } else {
        refreshButtonBackground({ domObj: shopButton03, color: "red" });
    }

    if (shopAmountBase04SP * shardSPAchievementBonus4 * Math.pow(shopMultiplier04, shopItem04Pow) <= studyPointsAmount) {
        refreshButtonBackground({ domObj: shopButton04, color: "green" });
    } else {
        refreshButtonBackground({ domObj: shopButton04, color: "red" });
    }
 
    if (shopAmountBase05C * shardWorkAchievementBonus1 * Math.pow(shopMultiplier05, shopItem05Pow) <= coinAmount) {
        refreshButtonBackground({ domObj: shopButton05, color: "green" });
    } else {
        refreshButtonBackground({ domObj: shopButton05, color: "red" });
    }
 
    if (shopAmountBase06C * shardWorkAchievementBonus1 * Math.pow(shopMultiplier06, shopItem06Pow) <= coinAmount && resistanceAmount > 100 - (zoneLevel + 1) * 10) {
        refreshButtonBackground({ domObj: shopButton06, color: "green" });
    } else {
        refreshButtonBackground({ domObj: shopButton06, color: "red" });
    }

    if (shopAmountBase07M + shopMultiplier07 * shopItem07Pow <= motivationAmount && motivationSPRatio > 50) {
        refreshButtonBackground({ domObj: shopButton07, color: "green" });
    } else {
        refreshButtonBackground({ domObj: shopButton07, color: "red" });
    }

    if (shopAmountBase08C * shardWorkAchievementBonus1 * Math.pow(shopMultiplier08, shopItem08Pow) <= coinAmount) {
        refreshButtonBackground({ domObj: shopButton08, color: "green" });
    } else {
        refreshButtonBackground({ domObj: shopButton08, color: "red" });
    }

    if ((shopAmountBase09C + shopMultiplier09 * shopItem09Pow) * shardWorkAchievementBonus1 <= coinAmount) {
        refreshButtonBackground({ domObj: shopButton09, color: "green" });
    } else {
        refreshButtonBackground({ domObj: shopButton09, color: "red" });
    }

    if ((shopAmountBase10C + shopMultiplier10 * shopItem10Pow) * shardWorkAchievementBonus1 <= coinAmount) {
        refreshButtonBackground({ domObj: shopButton10, color: "green" });
    } else {
        refreshButtonBackground({ domObj: shopButton10, color: "red" });
    }

    if (shopAmountBase11C * shardWorkAchievementBonus1 * Math.pow(shopMultiplier11, shopItem11Pow) <= coinAmount && (100 - hateAmount * 100) > 100 - (zoneLevel) * 10) {
        refreshButtonBackground({ domObj: shopButton11, color: "green" });
    } else {
        refreshButtonBackground({ domObj: shopButton11, color: "red" });
    }
}

export function calcShopTimeSP () {
    const time01 = Math.ceil((shopAmountBase01SP * shardSPAchievementBonus1 * Math.pow(shopMultiplier01, shopItem01Pow) - studyPointsAmount) / studyPointsPower);
    const time02 = Math.ceil((shopAmountBase02SP * shardSPAchievementBonus1 * Math.pow(shopMultiplier02, shopItem02Pow) - studyPointsAmount) / studyPointsPower);
    const time03 = Math.ceil((shopAmountBase03SP * shardSPAchievementBonus1 * Math.pow(shopMultiplier03, shopItem03Pow) - studyPointsAmount) / studyPointsPower);
    const time04 = Math.ceil((shopAmountBase04SP * shardSPAchievementBonus1 * Math.pow(shopMultiplier04, shopItem04Pow) - studyPointsAmount) / studyPointsPower);

    if (time01 >= 0 && isWorkAchievementEarned1) {
        refreshShopTime({ ID: 1, time: time01 });
    } else {
        refreshShopTime({ ID: 1, time: 0 });
    }
    if (time02 >= 0 && isWorkAchievementEarned1) {
        refreshShopTime({ ID: 2, time: time02 });
    } else {
        refreshShopTime({ ID: 2, time: 0 });
    }
    if (time03 >= 0 && isWorkAchievementEarned1) {
        refreshShopTime({ ID: 3, time: time03 });
    } else {
        refreshShopTime({ ID: 3, time: 0 });
    }
    if (time04 >= 0 && isWorkAchievementEarned1) {
        refreshShopTime({ ID: 4, time: time04 });
    } else {
        refreshShopTime({ ID: 4, time: 0 });
    }
}

export function calcShopTimeC () {
    const time01 = Math.ceil((shopAmountBase05C * shardWorkAchievementBonus1 * Math.pow(shopMultiplier05, shopItem05Pow) - coinAmount) / ((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax));
    const time02 = Math.ceil((shopAmountBase06C * shardWorkAchievementBonus1 * Math.pow(shopMultiplier06, shopItem06Pow) - coinAmount) / ((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax));
    const time03 = Math.ceil((shopAmountBase08C * shardWorkAchievementBonus1 * Math.pow(shopMultiplier08, shopItem08Pow) - coinAmount) / ((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax));
    const time04 = Math.ceil(((shopAmountBase09C + shopMultiplier09 * shopItem09Pow) * shardWorkAchievementBonus1 - coinAmount) / ((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax));
    const time05 = Math.ceil(((shopAmountBase10C + shopMultiplier10 * shopItem10Pow) * shardWorkAchievementBonus1 - coinAmount) / ((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax));
    const time06 = Math.ceil((shopAmountBase11C * shardWorkAchievementBonus1 * Math.pow(shopMultiplier11, shopItem11Pow) - coinAmount) / ((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax));

    if (time01 >= 0) {
        refreshShopTime({ ID: 5, time: time01 });
    } else {
        refreshShopTime({ ID: 5, time: 0 });
    }
    if (time02 >= 0) {
        refreshShopTime({ ID: 6, time: time02 });
    } else {
        refreshShopTime({ ID: 6, time: 0 });
    }
    if (time03 >= 0) {
        refreshShopTime({ ID: 8, time: time03 });
    } else {
        refreshShopTime({ ID: 8, time: 0 });
    }
    if (time04 >= 0) {
        refreshShopTime({ ID: 9, time: time04 });
    } else {
        refreshShopTime({ ID: 9, time: 0 });
    }
    if (time05 >= 0) {
        refreshShopTime({ ID: 10, time: time05 });
    } else {
        refreshShopTime({ ID: 10, time: 0 });
    }
    if (time06 >= 0) {
        refreshShopTime({ ID: 11, time: time06 });
    } else {
        refreshShopTime({ ID: 11, time: 0 });
    }
}

export function calcShopTimeM () {
    const time01 = Math.ceil((shopAmount07M - motivationAmount) / motivationPower);

    if (time01 >= 0 && shopAmount07M <= motivationLimits[motivationLevel]) {
        refreshShopTime({ ID: 7, time: time01 });
    } else {
        refreshShopTime({ ID: 7, time: 0 });
    }
}