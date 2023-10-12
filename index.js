import { talkAmount, setTalkAmount, talkTotal, setTalkTotal, setCoinAmount, workWaitTimeMax, coinAmount, 
    workTotal, setWorkTotal, workCoinMin, workCoinMax, workTotalPower, talkPowerAuto, 
    talkTotalPowerAuto, workDoubleChance, zoneLevel, zoneLimits, isTalkAutomated, isWorkAutomated, 
    romanNumbers, setZoneLevel, shardWorkAchievementBonus2, setHateAmount, hateAmount, travelPoints, zoneLevelUpCost, isHateEnabled, setIsHateEnabled } from "./javascripts/resources.js";
import { showNavbarDivs, refreshTalkAmount, refreshTalkTotalAmount, refreshCoinAmount, 
    refreshWorkTotalAmount, activateNavbar, displayNone, refreshTalkTime, showTraveling, 
    refreshzoneLevel, refreshZoneLimit, refreshHateAmount, showHate, refreshZoneLevelUpCost, refreshButtonBackground, showForge } from "./javascripts/display.js";
import { checkAchievements } from "./javascripts/achievements.js";
import { work } from "./javascripts/work.js";
import { save, load, autoSave, deleteSave } from "./javascripts/settings.js";
import { study, studyPointsLevelUp } from "./javascripts/study.js";
import { calcMotivation, motivationLevelUp } from "./javascripts/motivation.js";
import { talk } from "./javascripts/talk.js";
import { travel, rest, calcTravelPower } from "./javascripts/travel.js";
import { buyShopItem, calcAndRefreshTalkPower, calcShopTimeC } from "./javascripts/shop.js";

load();
autoSave();

const isCheatMode = false;

const intervalTime = 1000;

const navbarGame = document.getElementById("navbarGame");
const navbarShop = document.getElementById("navbarShop");
const navbarTraveling = document.getElementById("navbarTraveling");
const navbarAchievements = document.getElementById("navbarAchievements");
const navbarSettings = document.getElementById("navbarSettings");
const gameDiv = document.getElementById("gameDiv");
const shopDiv = document.getElementById("shopDiv");
const workDiv = document.getElementById("workDiv");
const studyDiv = document.getElementById("studyDiv");
const motivationDiv = document.getElementById("motivationDiv");
const travelingDiv = document.getElementById("travelingDiv");
const achievementsDiv = document.getElementById("achievementsDiv");
const settingsDiv = document.getElementById("settingsDiv");
const achievementEarnedID = document.getElementById("achievementEarnedID");
const modalButton = document.getElementById("modalButton");
const talkButton = document.getElementById("talkButton");
const workButton = document.getElementById("workButton");
const motivationLevelUpButton = document.getElementById("motivationLevelUpButton");
const studyPointsLevelUpButton = document.getElementById("studyPointsLevelUpButton");
const travelButton = document.getElementById("travelButton");
const zoneLevelUpButton = document.getElementById("zoneLevelUpButton");
const saveButton = document.getElementById("saveButton");
const deleteButton = document.getElementById("deleteButton");
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

if (isCheatMode) {
    displayNone(1);

    workDiv.classList.remove('general');
    workDiv.classList.add('generalDiv');
    studyDiv.classList.remove('general');
    studyDiv.classList.add('generalDiv');
    motivationDiv.classList.remove('general');
    motivationDiv.classList.add('generalDiv');
    showTraveling();
}

saveButton.addEventListener("click", function() {
    save()
});

deleteButton.addEventListener("click", function() {
    deleteSave()
});

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

travelButton.addEventListener("click", function() {
    travel();
})

zoneLevelUpButton.addEventListener("click", function() {
    zoneLevelUp();
})

navbarGame.addEventListener("click", function() { 
    showNavbarDivs(gameDiv);
    activateNavbar(navbarGame);
});

navbarShop.addEventListener("click", function() { 
    showNavbarDivs(shopDiv);
    activateNavbar(navbarShop);
});

navbarTraveling.addEventListener("click", function() { 
    showNavbarDivs(travelingDiv);
    activateNavbar(navbarTraveling);
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

shopButton08.addEventListener("click", function() { 
    buyShopItem({ ID: 8 });
});

shopButton09.addEventListener("click", function() { 
    buyShopItem({ ID: 9 });
});

shopButton10.addEventListener("click", function() { 
    buyShopItem({ ID: 10 });
});

shopButton11.addEventListener("click", function() { 
    buyShopItem({ ID: 11 });
});

export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let globalInterval = "";

globalInterval = setInterval(globalTime, intervalTime);

function globalTime () {
    if(isTalkAutomated) {
        talkAutomation();
    }
    if (isWorkAutomated) {
        workAutomation();
    }
    study();
    calcMotivation();
    checkAchievements();
    rest();
    calcTravelPower();
    checkZoneLevelUp();
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
        setCoinAmount(coinAmount + 2 * ((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax) * shardWorkAchievementBonus2);
    } else  {
        setCoinAmount(coinAmount + ((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax) * shardWorkAchievementBonus2);
    }
    refreshCoinAmount(coinAmount);

    calcShopTimeC();
}

function checkZoneLevelUp () {
    if (travelPoints >= zoneLevelUpCost[zoneLevel] && talkAmount >= zoneLimits[zoneLevel] ) {
        refreshButtonBackground({ domObj: zoneLevelUpButton, color: "green" });
    } else {
        refreshButtonBackground({ domObj: zoneLevelUpButton, color: "red" });
    }
}

export function zoneLevelUp () {
    if (travelPoints >= zoneLevelUpCost[zoneLevel] && talkAmount >= zoneLimits[zoneLevel] && zoneLevel < 1) {
        setZoneLevel(zoneLevel + 1);
    }
    refreshzoneLevel(romanNumbers[zoneLevel]);
    refreshZoneLevelUpCost(zoneLevelUpCost[zoneLevel]);
    refreshZoneLimit(zoneLimits[zoneLevel]);

    if (zoneLevel === 1 && !isHateEnabled) {
        setIsHateEnabled(true);

        showHate();

        setHateAmount(0.01);
        refreshHateAmount(hateAmount);

        calcAndRefreshTalkPower();

        showForge();
    }
}