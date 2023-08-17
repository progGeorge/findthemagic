import { talkAmount, talkPower, talkWaitTimeCurrent, talkWaitTimeMax, resistanceAmount, setTalkAmount, 
    setResistanceAmount, setTalkWaitTimeCurrent, setTalkWaitTimeMax, talkTotal, setTalkTotal, 
    setCoinAmount, workWaitTimeCurrent, workWaitTimeMax, setWorkWaitTimeCurrent, coinAmount, workCoin, 
    workTotal, setWorkTotal, workCoinMin, workCoinMax, setCoinMin, setCoinMax, studyPointsAmount, 
    studyPointsTotalAmount, studyPointsPower, setStudyPointsAmount, setStudyPointsTotalAmount, 
    isWorkAchievementEarned1, shopAmount01SP, shopAmount02SP, shopAmount03SP, shopAmount04SP,
    setShopAmount, setWorkWaitTimeMax, shopAmount05C, shopAmount06C, workTotalPower, setMotivationAmount, 
    motivationAmount, motivationPower, setMotivationPower, setTalkPowerAuto, setTalkTotalPowerAuto, talkPowerAuto, 
    talkTotalPowerAuto, motivationLevel, setMotivationLevel, motivationLimits, setStudyPointsPower, baseStudyPointsPower, 
    isStudyAchievementEarned1, workDoubleChance, setWorkDoubleChance, coinAmountPower, setCoinAmountPower, zoneLevel, 
    zoneLimits, shopMultiplier01, shopMultiplier02, shopMultiplier03, shopMultiplier04, shopMultiplier05, shopMultiplier06, 
    studyPointsDoubleChance, studyAchievementBonus, motivationTime, setMotivationTime, setMotivationLevelUpCost, 
    motivationLevelUpCost, shopAmount07M, shopMultiplier07, motivationSPRatio, setMotivationSPRatio, setIsTalkAutomated, 
    studyPointsAmountLimit, setStudyPointsAmountLimit, studyPointsLevelUpPower,
    setStudyPointsLevelUpPower, studyPointsLevelUpCost, setStudyPointsLevelUpCost, setWorkTotalPower} from "./javascripts/resources.js";
import { showNavbarDivs, refreshTalkAmount, refreshTalkWaitTimeCurrent, 
    refreshResistanceAmount, refreshTalkTotalAmount, refreshCoinAmount, refreshWorkWaitTimeCurrent, refreshWorkTotalAmount, 
    refreshStudyPointsAmountID, refreshStudyPointsTotalAmountID, refreshShopAmountID, refreshWorkCoinMinID, 
    refreshWorkCoinMaxID, refreshWorkWaitTimeMax, refreshWorkAutomation, refreshMotivationAmount, refreshMotivationPower, 
    refreshTalkAutomation, refreshTalkPowerAuto, refreshTalkTotalPowerAuto, refreshMotivationLevel, 
    refreshMotivationAmountLimit, refreshStudyPointsPower, refreshButtonBackground, refreshShopTime, refreshCoinAmountPower, 
    refreshWorkDoubleChance, activateNavbar, displayNone, refreshMotivationTime, refreshMotivationLevelUpCost, 
    refreshMotivationSPBonus, refreshMotivationSPRatio, refreshTalkTime, refreshStudyPointsTimeID, 
    refreshStudyPointsAmountLimit, refreshStudyPointsLevelUpCost, refreshTalkWaitTimeMax, refreshMotivationMax, refreshWorkTotalPower, refreshResistanceMax } from "./javascripts/display.js";
import { checkAchievements } from "./javascripts/achievements.js";
import { genWork } from "./javascripts/work.js";
import { save, load, autoSave, deleteSave } from "./javascripts/settings.js";

export let workInterval = "";

export function setWorkInterval (data) {
    workInterval = data;
}

export let talkInterval = "";

export function setTalkInterval (data) {
    talkInterval = data;
}

load();
autoSave();

const intervalTime = 1000;

const workAutomationLimit = 15;
const talkAutomationLimit = 30;

const navbarGame = document.getElementById("navbarGame");
const navbarShop = document.getElementById("navbarShop");
const navbarTravelling = document.getElementById("navbarTravelling");
const navbarAchievements = document.getElementById("navbarAchievements");
const navbarSettings = document.getElementById("navbarSettings");
const gameDiv = document.getElementById("gameDiv");
const shopDiv = document.getElementById("shopDiv");
const workDiv = document.getElementById("workDiv");
const studyDiv = document.getElementById("studyDiv");
const motivationDiv = document.getElementById("motivationDiv");
const travellingDiv = document.getElementById("travellingDiv");
const achievementsDiv = document.getElementById("achievementsDiv");
const settingsDiv = document.getElementById("settingsDiv");
const achievementEarnedID = document.getElementById("achievementEarnedID");
const modalButton = document.getElementById("modalButton");
const talkButton = document.getElementById("talkButton");
const workButton = document.getElementById("workButton");
const motivationLevelUpButton = document.getElementById("motivationLevelUpButton");
const studyPointsLevelUpButton = document.getElementById("studyPointsLevelUpButton");
const saveButton = document.getElementById("saveButton");
const deleteButton = document.getElementById("deleteButton");
const shopButton01 = document.getElementById("shopButton01");
const shopButton02 = document.getElementById("shopButton02");
const shopButton03 = document.getElementById("shopButton03");
const shopButton04 = document.getElementById("shopButton04");
const shopButton05 = document.getElementById("shopButton05");
const shopButton06 = document.getElementById("shopButton06");
const shopButton07 = document.getElementById("shopButton07");

modalButton.addEventListener("click", function() {
    displayNone( 1 );
})

talkButton.addEventListener("click", function() {
    talk();
})

achievementEarnedID.addEventListener("click", function() {
    displayNone( 2 );
})

workButton.addEventListener("click", function() {
    work(workWaitTimeMax);
})

motivationLevelUpButton.addEventListener("click", function() {
    motivationLevelUp();
})

studyPointsLevelUpButton.addEventListener("click", function() {
    studyPointsLevelUp();
})

navbarGame.addEventListener("click", function() { 
    showNavbarDivs(gameDiv);
    activateNavbar(navbarGame);
});

navbarShop.addEventListener("click", function() { 
    showNavbarDivs(shopDiv);
    activateNavbar(navbarShop);
});

navbarTravelling.addEventListener("click", function() { 
    showNavbarDivs(travellingDiv);
    activateNavbar(navbarTravelling);
});

navbarAchievements.addEventListener("click", function() { 
    showNavbarDivs(achievementsDiv);
    activateNavbar(navbarAchievements);
});

navbarSettings.addEventListener("click", function() { 
    showNavbarDivs(settingsDiv);
    activateNavbar(navbarSettings);
});

shopButton01.addEventListener("click", function() { 
    buyShopItem({ ID: 1 });
});

shopButton02.addEventListener("click", function() { 
    buyShopItem({ ID: 2 });
});

shopButton03.addEventListener("click", function() { 
    buyShopItem({ ID: 3 });
});

shopButton04.addEventListener("click", function() { 
    buyShopItem({ ID: 4 });
});

shopButton05.addEventListener("click", function() { 
    buyShopItem({ ID: 5 });
});

shopButton06.addEventListener("click", function() { 
    buyShopItem({ ID: 6 });
});

shopButton07.addEventListener("click", function() { 
    buyShopItem({ ID: 7 });
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function talk () {
    if (talkInterval === "" && talkWaitTimeCurrent === 0 && talkAmount < zoneLimits[zoneLevel]) {
        setTalkWaitTimeCurrent(talkWaitTimeMax);
        talkInterval = setInterval(waitTalk, intervalTime);
        setTalkTotal(talkTotal + 1);
        refreshTalkTotalAmount(talkTotal);

        refreshButtonBackground({ domObj: talkButton, color: "red" });

        if (talkAmount < 10 && getRandomInt(0, 100) > resistanceAmount) {

            setTalkAmount(talkAmount + talkPower);
            refreshTalkAmount(talkAmount);
            setResistanceAmount(resistanceAmount + 3);
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
        } else if (talkAmount >= 20 && getRandomInt(0, 100) > resistanceAmount) {

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

    } else if ( talkWaitTimeCurrent === 0 ) {

        refreshTalkWaitTimeCurrent(talkWaitTimeMax);
        refreshButtonBackground({ domObj: talkButton, color: "green" });

        clearInterval(talkInterval);
        talkInterval = "";

    }
}

function work (workWaitTimeMax) {
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

    } else if ( workWaitTimeCurrent === 0 ) {
        refreshWorkWaitTimeCurrent(workWaitTimeMax);
        
        clearInterval(workInterval);
        workInterval = "";

        refreshButtonBackground({ domObj: workButton, color: "green" });

    }
}

export let studyInterval = "";

studyInterval = setInterval(study, intervalTime);

function study () {
    if (isWorkAchievementEarned1) {
        const actStudyPointsDoubleChance = getRandomInt(1, 100);

        if (actStudyPointsDoubleChance <= studyPointsDoubleChance) {
            if (studyPointsAmount + 2 * studyPointsPower <= studyPointsAmountLimit) {
                setStudyPointsAmount(studyPointsAmount + 2 * studyPointsPower);
                setStudyPointsTotalAmount(studyPointsTotalAmount + 2 * studyPointsPower);
            } else {
                setStudyPointsTotalAmount(studyPointsTotalAmount + studyPointsAmountLimit - studyPointsAmount);
                setStudyPointsAmount(studyPointsAmountLimit);
            }
        } else {
            if (studyPointsAmount + studyPointsPower <= studyPointsAmountLimit) {
                setStudyPointsAmount(studyPointsAmount + studyPointsPower);
                setStudyPointsTotalAmount(studyPointsTotalAmount + studyPointsPower);
            } else {
                setStudyPointsTotalAmount(studyPointsTotalAmount + studyPointsAmountLimit - studyPointsAmount);
                setStudyPointsAmount(studyPointsAmountLimit);
            }
        }

        if (studyPointsAmount >= studyPointsLevelUpCost) {
            refreshButtonBackground({ domObj: studyPointsLevelUpButton, color: "green" });
        }

        refreshStudyPointsAmountID(studyPointsAmount);
        refreshStudyPointsTotalAmountID(studyPointsTotalAmount);
        refreshStudyPointsTimeID(Math.ceil((studyPointsAmountLimit - studyPointsAmount) / studyPointsPower));

        checkShopItemAvailable();
        calcShopTimeSP();
    }
}

function studyPointsLevelUp () {
    if (studyPointsAmount >= studyPointsLevelUpCost) {
        setStudyPointsAmount(studyPointsAmount - studyPointsLevelUpCost);
        refreshStudyPointsAmountID(studyPointsAmount);

        setStudyPointsAmountLimit(studyPointsAmountLimit + 2);
        refreshStudyPointsAmountLimit(studyPointsAmountLimit);

        setStudyPointsLevelUpCost(studyPointsLevelUpCost + studyPointsLevelUpPower);
        refreshStudyPointsLevelUpCost(studyPointsLevelUpCost);

        if (studyPointsAmount <= motivationLevelUpCost) {
            refreshButtonBackground({ domObj: motivationLevelUpButton, color: "red" });
        }
        if (studyPointsAmount <= studyPointsLevelUpCost) {
            refreshButtonBackground({ domObj: studyPointsLevelUpButton, color: "red" });
        }
    }
}

export function checkShopItemAvailable () {
    if (shopAmount01SP <= studyPointsAmount && workCoinMin < workCoinMax) {
        refreshButtonBackground({ domObj: shopButton01, color: "green" });
    } else {
        refreshButtonBackground({ domObj: shopButton01, color: "red" });
    }
 
    if (shopAmount02SP <= studyPointsAmount) {
        refreshButtonBackground({ domObj: shopButton02, color: "green" });
    } else {
        refreshButtonBackground({ domObj: shopButton02, color: "red" });
    }

    if (shopAmount03SP <= studyPointsAmount) {
        refreshButtonBackground({ domObj: shopButton03, color: "green" });
    } else {
        refreshButtonBackground({ domObj: shopButton03, color: "red" });
    }

    if (shopAmount04SP <= studyPointsAmount) {
        refreshButtonBackground({ domObj: shopButton04, color: "green" });
    } else {
        refreshButtonBackground({ domObj: shopButton04, color: "red" });
    }
 
    if (shopAmount05C <= coinAmount) {
        refreshButtonBackground({ domObj: shopButton05, color: "green" });
    } else {
        refreshButtonBackground({ domObj: shopButton05, color: "red" });
    }
 
    if (shopAmount06C <= coinAmount && resistanceAmount > 90) {
        refreshButtonBackground({ domObj: shopButton06, color: "green" });
    } else {
        refreshButtonBackground({ domObj: shopButton06, color: "red" });
    }

    if (shopAmount07M <= motivationAmount && motivationSPRatio > 50) {
        refreshButtonBackground({ domObj: shopButton07, color: "green" });
    } else {
        refreshButtonBackground({ domObj: shopButton07, color: "red" });
    }
}

export function calcShopTimeSP () {
    const time01 = Math.ceil((shopAmount01SP - studyPointsAmount) / studyPointsPower);
    const time02 = Math.ceil((shopAmount02SP - studyPointsAmount) / studyPointsPower);
    const time03 = Math.ceil((shopAmount03SP - studyPointsAmount) / studyPointsPower);
    const time04 = Math.ceil((shopAmount04SP - studyPointsAmount) / studyPointsPower);

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

let workAutoInterval = "";
let talkAutoInterval = "";

function buyShopItem ({ID}) {
    switch (ID) {
        case 1: 
            if (shopAmount01SP <= studyPointsAmount && workCoinMin < workCoinMax) {
                setStudyPointsAmount(studyPointsAmount - shopAmount01SP);
                refreshStudyPointsAmountID(studyPointsAmount);

                setShopAmount({ ID: ID, amount: (shopMultiplier01 * shopAmount01SP).toFixed(3) });
                refreshShopAmountID({ ID: ID, shopAmount: shopAmount01SP });

                setCoinMin(workCoinMin + 1);
                refreshWorkCoinMinID (workCoinMin / 100);

                setCoinAmountPower(((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax).toFixed(4));
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
            if (shopAmount02SP <= studyPointsAmount) {
                setStudyPointsAmount(studyPointsAmount - shopAmount02SP);
                refreshStudyPointsAmountID(studyPointsAmount);

                setShopAmount({ ID: ID, amount: (shopMultiplier02 * shopAmount02SP).toFixed(3) });
                refreshShopAmountID({ ID: ID, shopAmount: shopAmount02SP });

                setCoinMax(workCoinMax + 1);
                refreshWorkCoinMaxID (workCoinMax / 100);

                setCoinAmountPower(((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax).toFixed(4));
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
            if (shopAmount03SP <= studyPointsAmount && workWaitTimeMax > 1) {
                setStudyPointsAmount(studyPointsAmount - shopAmount03SP);
                refreshStudyPointsAmountID(studyPointsAmount);

                setShopAmount({ ID: ID, amount: (shopMultiplier03 * shopAmount03SP).toFixed(2) });
                refreshShopAmountID({ ID: ID, shopAmount: shopAmount03SP });

                setWorkWaitTimeMax(workWaitTimeMax - 1);
                refreshWorkWaitTimeMax(workWaitTimeMax);

                setWorkTotalPower(1 / workWaitTimeMax);
                refreshWorkTotalPower(workTotalPower);

                setCoinAmountPower(((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax).toFixed(4));
                refreshCoinAmountPower(coinAmountPower);

                if (workWaitTimeMax === workAutomationLimit) {
                    refreshWorkAutomation();
                    workAutoInterval = setInterval(workAutomation, intervalTime);
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
            if (shopAmount04SP <= studyPointsAmount && workDoubleChance < 100) {
                setStudyPointsAmount(studyPointsAmount - shopAmount04SP);
                refreshStudyPointsAmountID(studyPointsAmount);

                setShopAmount({ ID: ID, amount: (shopMultiplier04 * shopAmount04SP).toFixed(2) });
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
            if (shopAmount05C <= coinAmount && talkWaitTimeMax > 1 && talkAmount >= 20) {
                setCoinAmount(coinAmount - shopAmount05C);
                refreshCoinAmount(coinAmount);

                setShopAmount({ ID: ID, amount: (shopMultiplier05 * shopAmount05C).toFixed(2) });
                refreshShopAmountID({ ID: ID, shopAmount: shopAmount05C });

                setTalkWaitTimeMax(talkWaitTimeMax - 1);
                refreshTalkWaitTimeMax(talkWaitTimeMax);

                if (talkWaitTimeMax === talkAutomationLimit) {
                    refreshTalkAutomation();
                    talkAutoInterval = setInterval(talkAutomation, intervalTime);
                    setIsTalkAutomated(true);
                }

                calcAndRefreshTalkPower();

                if (talkWaitTimeMax === 1) {
                    displayNone(3);
                }
            }
        break;
        case 6: 
            if (shopAmount06C <= coinAmount && resistanceAmount > 100 - (zoneLevel + 1) * 10) {
                setCoinAmount(coinAmount - shopAmount06C);
                refreshCoinAmount(coinAmount);

                setShopAmount({ ID: ID, amount: (shopMultiplier06 * shopAmount06C).toFixed(2) });
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
            if (shopAmount07M <= motivationAmount && motivationSPRatio > 50) {
                setMotivationAmount(motivationAmount - shopAmount07M);
                refreshMotivationAmount(motivationAmount);

                setShopAmount({ ID: ID, amount: (shopMultiplier07 + shopAmount07M) });
                refreshShopAmountID({ ID: ID, shopAmount: shopAmount07M });

                setMotivationSPRatio(motivationSPRatio - 2);
                refreshMotivationSPRatio(motivationSPRatio);

                refreshMotivationSPBonus(motivationLevel / motivationSPRatio);

                setStudyPointsPower(baseStudyPointsPower + motivationLevel / motivationSPRatio);
                refreshStudyPointsPower(studyPointsPower);

                calcMotivationTime();
                calcShopTimeM();

                if (motivationSPRatio <= 50) {
                    displayNone(5);
                }
            }
        break;
    }

    checkShopItemAvailable();
    calcShopTimeSP();
}

function calcAndRefreshTalkPower () {
    setTalkPowerAuto(talkPower / talkWaitTimeMax / (100 / (100 - resistanceAmount)));
    setTalkTotalPowerAuto(talkPower / talkWaitTimeMax );
    refreshTalkPowerAuto(talkPowerAuto);
    refreshTalkTotalPowerAuto(talkTotalPowerAuto);
}

export function talkAutomation () {
    if (talkAmount + talkPowerAuto <= zoneLimits[zoneLevel]) {
        setTalkAmount(talkAmount + talkPowerAuto);
        refreshTalkAmount(talkAmount);
        setTalkTotal(talkTotal + talkTotalPowerAuto);
        refreshTalkTotalAmount(talkTotal);
    } else {
        setTalkAmount(zoneLimits[zoneLevel]);
        refreshTalkAmount(talkAmount);
    }

    refreshTalkTime(Math.ceil((zoneLimits[zoneLevel] - talkAmount) / talkPowerAuto));
}

export function workAutomation () {
    setWorkTotal(workTotal + workTotalPower);
    refreshWorkTotalAmount(workTotal);

    let actWorkDoubleChance = getRandomInt(1, 100);
    

    if (actWorkDoubleChance <= workDoubleChance) {
        setCoinAmount(coinAmount + 2 * ((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax));
    } else  {
        setCoinAmount(coinAmount + ((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax));
    }
    refreshCoinAmount(coinAmount);

    calcShopTimeC();
}

export function calcShopTimeC () {
    const time01 = Math.ceil((shopAmount05C - coinAmount) / ((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax));
    const time02 = Math.ceil((shopAmount06C - coinAmount) / ((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax));

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
}

export let motivationInterval = "";

motivationInterval = setInterval(calcMotivation, intervalTime);

function calcMotivation () {
    if(isStudyAchievementEarned1) {
        
        setMotivationPower((studyAchievementBonus + talkAmount) / 10000);
        refreshMotivationPower(motivationPower);

        if (motivationAmount + motivationPower >= motivationLimits[motivationLevel]) {
            setMotivationAmount(motivationLimits[motivationLevel]);
            refreshMotivationAmount(motivationAmount);

            if (motivationLevelUpCost <= studyPointsAmount) {
                refreshButtonBackground({ domObj: motivationLevelUpButton, color: "green" });
            }
        } else {
            setMotivationAmount(motivationAmount + motivationPower);
            refreshMotivationAmount(motivationAmount);
        }

        checkShopItemAvailable();
        calcMotivationTime();
        calcShopTimeM();
    }
}

function motivationLevelUp () {
    if (motivationAmount === motivationLimits[motivationLevel] && motivationLevelUpCost <= studyPointsAmount && motivationLevel < 10) {
        setMotivationAmount(motivationAmount - motivationLimits[motivationLevel]);
        refreshMotivationAmount(motivationAmount);

        setMotivationLevel(motivationLevel + 1);
        refreshMotivationLevel(motivationLevel);

        refreshMotivationAmountLimit(motivationLimits[motivationLevel]);

        setStudyPointsPower(baseStudyPointsPower + motivationLevel / motivationSPRatio);
        refreshStudyPointsPower(studyPointsPower);

        setMotivationTime(((motivationLimits[motivationLevel] - motivationAmount) / motivationPower).toFixed(0));
        refreshMotivationTime(motivationTime);

        refreshButtonBackground({ domObj: motivationLevelUpButton, color: "red" });

        setStudyPointsAmount(studyPointsAmount - motivationLevelUpCost);
        refreshStudyPointsAmountID(studyPointsAmount);

        refreshMotivationSPBonus(motivationLevel / motivationSPRatio);

        checkShopItemAvailable();
        calcShopTimeSP();

        setMotivationLevelUpCost(2 * motivationLevel);
        refreshMotivationLevelUpCost(motivationLevelUpCost);

        if (motivationLevel === 10) {
            refreshMotivationMax();
        }

        if (studyPointsAmount <= studyPointsLevelUpCost) {
            refreshButtonBackground({ domObj: studyPointsLevelUpButton, color: "red" });
        }

        calcMotivationTime();
        calcShopTimeM();
    }
}

function calcMotivationTime () {
    const actMotivationTime = (motivationLimits[motivationLevel] - motivationAmount) / motivationPower;
    const studyTime = (motivationLevelUpCost - studyPointsAmount) / studyPointsPower;

    if (actMotivationTime >= studyTime) {
        setMotivationTime(actMotivationTime.toFixed(0));
    } else if (actMotivationTime < studyTime) {
        setMotivationTime(studyTime.toFixed(0));
    }
    refreshMotivationTime(motivationTime);
}

function calcShopTimeM () {
    const time01 = Math.ceil((shopAmount07M - motivationAmount) / motivationPower);

    if (time01 >= 0 && shopAmount07M <= motivationLimits[motivationLevel]) {
        refreshShopTime({ ID: 7, time: time01 });
    } else {
        refreshShopTime({ ID: 7, time: 0 });
    }
}

setInterval(checkAchievements, intervalTime);

saveButton.addEventListener("click", function() {save()});
deleteButton.addEventListener("click", function() {deleteSave()});