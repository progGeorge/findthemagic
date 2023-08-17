import { talkAmount, talkPower, talkWaitTimeCurrent, talkWaitTimeMax, resistanceAmount, setTalkAmount, 
    setResistanceAmount, setTalkWaitTimeCurrent, setTalkWaitTimeMax, talkTotal, setTalkTotal, 
    setCoinAmount, workWaitTimeCurrent, workWaitTimeMax, setWorkWaitTimeCurrent, coinAmount, workCoin, 
    workTotal, setWorkTotal, isTalkAchievementEarned1, isTalkAchievementEarned2, isTalkAchievementEarned3, 
    isTalkAchievementEarned4, isTalkAchievementEarned5, isTalkAchievementEarned6, isTalkAchievementEarned7,
    isTalkAchievementEarned8, isTalkAchievementEarned9, isTalkAchievementEarned10, isTalkAchievementEarned11, 
    isTalkAchievementEarned12, isWorkAchievementEarned1, isWorkAchievementEarned2, isWorkAchievementEarned3, 
    isWorkAchievementEarned4, isWorkAchievementEarned5, isWorkAchievementEarned6, setIsTalkAchievementEarned, 
    workCoinMin, workCoinMax, setCoinMax, studyPointsAmount, studyPointsTotalAmount, 
    studyPointsPower, setStudyPointsAmount, setStudyPointsTotalAmount, setIsWorkAchievementEarned, 
    achEarnedAmount, achEarnedPercent, setAchEarnedAmount, setAchEarnedPercent, setCoinMin, 
    setWorkWaitTimeMax, shopAmount01SP, shopAmount02SP, shopAmount03SP, shopAmount04SP, shopAmount05C, 
    shopAmount06C, setShopAmount, coinAmountPower, setCoinAmountPower, talkPowerAuto, talkTotalPowerAuto, 
    setTalkPowerAuto, workDoubleChance, setWorkDoubleChance, setTalkTotalPowerAuto, isStudyAchievementEarned1, 
    isStudyAchievementEarned2, isStudyAchievementEarned3, isStudyAchievementEarned4, isStudyAchievementEarned5, 
    isStudyAchievementEarned6, isStudyAchievementEarned7, setIsStudyAchievementEarned, motivationAmount, 
    motivationPower, motivationLimits, motivationLevel, setMotivationAmount, setMotivationLevel, 
    setMotivationPower, setStudyPointsPower, studyPointsDoubleChance, setStudyPointsDoubleChance, 
    studyAchievementBonus, setStudyAchievementBonus, motivationLevelUpCost, setMotivationLevelUpCost, 
    motivationSPRatio, setMotivationSPRatio, shopAmount07M, isTalkAutomated, setIsTalkAutomated, 
    studyPointsAmountLimit, setStudyPointsAmountLimit, studyPointsLevelUpPower, 
    setStudyPointsLevelUpPower, studyPointsLevelUpCost, setStudyPointsLevelUpCost, setWorkCoin, 
    workTotalPower, setWorkTotalPower, zoneLevel, setZoneLevel, version } from "./resources.js";
import { showNavbarDivs, refreshTalkAmount, refreshTalkWaitTimeCurrent, refreshResistanceAmount, 
    refreshTalkTotalAmount, refreshCoinAmount, refreshWorkWaitTimeCurrent, refreshWorkTotalAmount, refreshAchievementBackground, refreshWorkCoinID, 
    refreshWorkCoinMinID, refreshWorkCoinMaxID, refreshStudyPointsAmountID, refreshStudyPointsTotalAmountID, 
    refreshAchEarnedAmount, refreshAchEarnedPercent, refreshWorkWaitTimeMax, refreshShopAmountID, refreshWorkAutomation, refreshCoinAmountPower, 
    refreshTalkAutomation, refreshTalkPowerAuto, refreshTalkTotalPowerAuto, refreshMotivationAmount, refreshMotivationAmountLimit, 
    refreshMotivationLevel, refreshMotivationPower, refreshStudyPointsPower, refreshButtonBackground, refreshWorkDoubleChance, 
    refreshStudyPointsDoubleChance, showWork, showStudy, showMotivation, showTravelling, displayNone, refreshMotivationLevelUpCost, 
    refreshMotivationSPBonus, refreshMotivationSPRatio, refreshStudyPointsAmountLimit, refreshStudyPointsLevelUpCost, showShopTalkDiv,
    refreshTalkWaitTimeMax, refreshMotivationMax, refreshWorkTotalPower, refreshResistanceMax} from "./display.js";
import { talkInterval, waitTalk, workInterval, waitWork, setWorkInterval, workAutomation, talkAutomation, setTalkInterval } from "../index.js";

const intervalTime = 1000;

const talkButton = document.getElementById("talkButton");
const workButton = document.getElementById("workButton");
const achievementDiv01 = document.getElementById("achievementDiv01");
const achievementDiv02 = document.getElementById("achievementDiv02");
const achievementDiv03 = document.getElementById("achievementDiv03");
const achievementDiv04 = document.getElementById("achievementDiv04");
const achievementDiv05 = document.getElementById("achievementDiv05");
const achievementDiv06 = document.getElementById("achievementDiv06");
const achievementDiv07 = document.getElementById("achievementDiv07");
const achievementDiv08 = document.getElementById("achievementDiv08");
const achievementDiv09 = document.getElementById("achievementDiv09");
const achievementDiv10 = document.getElementById("achievementDiv10");
const achievementDiv11 = document.getElementById("achievementDiv11");
const achievementDiv12 = document.getElementById("achievementDiv12");
const achievementDiv13 = document.getElementById("achievementDiv13");
const achievementDiv14 = document.getElementById("achievementDiv14");
const achievementDiv15 = document.getElementById("achievementDiv15");
const achievementDiv16 = document.getElementById("achievementDiv16");
const achievementDiv17 = document.getElementById("achievementDiv17");
const achievementDiv18 = document.getElementById("achievementDiv18");
const achievementDiv19 = document.getElementById("achievementDiv19");
const achievementDiv20 = document.getElementById("achievementDiv20");
const achievementDiv21 = document.getElementById("achievementDiv21");
const achievementDiv22 = document.getElementById("achievementDiv22");
const achievementDiv23 = document.getElementById("achievementDiv23");
const achievementDiv24 = document.getElementById("achievementDiv24");
const achievementDiv25 = document.getElementById("achievementDiv25");

export function save() {
    let saveObj = {
        talkAmount, talkPower, talkWaitTimeCurrent, talkWaitTimeMax, resistanceAmount, 
        talkTotal, workWaitTimeCurrent, workWaitTimeMax, 
        coinAmount, workCoin, workTotal, isTalkAchievementEarned1,
        isTalkAchievementEarned2, isTalkAchievementEarned3, isTalkAchievementEarned4, 
        isTalkAchievementEarned5, isTalkAchievementEarned6, isTalkAchievementEarned7, 
        isTalkAchievementEarned8, isTalkAchievementEarned9, isTalkAchievementEarned10, 
        isTalkAchievementEarned11, isTalkAchievementEarned12, isWorkAchievementEarned1, 
        isWorkAchievementEarned2, isWorkAchievementEarned3, isWorkAchievementEarned4, 
        isWorkAchievementEarned5, isWorkAchievementEarned6, workCoinMin, workCoinMax, 
        studyPointsAmount, studyPointsTotalAmount, studyPointsPower, achEarnedAmount, 
        achEarnedPercent, shopAmount01SP, shopAmount02SP, shopAmount03SP, shopAmount04SP, shopAmount05C, 
        shopAmount06C, coinAmountPower, talkPowerAuto, 
        talkTotalPowerAuto, isStudyAchievementEarned1, isStudyAchievementEarned2, 
        isStudyAchievementEarned3, isStudyAchievementEarned4, isStudyAchievementEarned5, 
        isStudyAchievementEarned6, isStudyAchievementEarned7, motivationAmount, motivationPower, 
        motivationLimits, motivationLevel, workDoubleChance, studyPointsDoubleChance, 
        studyAchievementBonus, motivationLevelUpCost, motivationSPRatio, shopAmount07M,
        isTalkAutomated, studyPointsAmountLimit, studyPointsLevelUpPower, 
        studyPointsLevelUpCost, workTotalPower, zoneLevel, version
    }

    localStorage.setItem("save", JSON.stringify(saveObj));
}

export function load() {
    if(JSON.parse(localStorage.getItem("save")) !== null){
        let savegame = JSON.parse(localStorage.getItem("save"));

        if (typeof savegame.version === "undefined") {
            localStorage.removeItem("save");
            location.reload();
        }

        setTalkAmount(savegame.talkAmount);
        setResistanceAmount(savegame.resistanceAmount);
        setTalkWaitTimeCurrent(savegame.talkWaitTimeCurrent);
        setTalkWaitTimeMax(savegame.talkWaitTimeMax);
        setTalkTotal(savegame.talkTotal);
        setTalkPowerAuto(savegame.talkPowerAuto);
        setTalkTotalPowerAuto(savegame.talkTotalPowerAuto);
        setIsTalkAutomated(savegame.isTalkAutomated);
        setCoinAmount(savegame.coinAmount);
        setWorkWaitTimeCurrent(savegame.workWaitTimeCurrent);
        setWorkTotal(savegame.workTotal);
        setWorkCoin(savegame.workCoin);
        setCoinMax(savegame.workCoinMax);
        setCoinMin(savegame.workCoinMin);
        setWorkTotalPower(1 / savegame.workWaitTimeMax);
        setCoinAmountPower(savegame.coinAmountPower);
        setIsTalkAchievementEarned({ ID: 1, bool: savegame.isTalkAchievementEarned1 });
        setIsTalkAchievementEarned({ ID: 2, bool: savegame.isTalkAchievementEarned2 });
        setIsTalkAchievementEarned({ ID: 3, bool: savegame.isTalkAchievementEarned3 });
        setIsTalkAchievementEarned({ ID: 4, bool: savegame.isTalkAchievementEarned4 });
        setIsTalkAchievementEarned({ ID: 5, bool: savegame.isTalkAchievementEarned5 });
        setIsTalkAchievementEarned({ ID: 6, bool: savegame.isTalkAchievementEarned6 });
        setIsTalkAchievementEarned({ ID: 7, bool: savegame.isTalkAchievementEarned7 });
        setIsTalkAchievementEarned({ ID: 8, bool: savegame.isTalkAchievementEarned8 });
        setIsTalkAchievementEarned({ ID: 9, bool: savegame.isTalkAchievementEarned9 });
        setIsTalkAchievementEarned({ ID: 10, bool: savegame.isTalkAchievementEarned10 });
        setIsTalkAchievementEarned({ ID: 11, bool: savegame.isTalkAchievementEarned11 });
        setIsTalkAchievementEarned({ ID: 12, bool: savegame.isTalkAchievementEarned12 });
        setIsWorkAchievementEarned({ ID: 1, bool: savegame.isWorkAchievementEarned1 });
        setIsWorkAchievementEarned({ ID: 2, bool: savegame.isWorkAchievementEarned2 });
        setIsWorkAchievementEarned({ ID: 3, bool: savegame.isWorkAchievementEarned3 });
        setIsWorkAchievementEarned({ ID: 4, bool: savegame.isWorkAchievementEarned4 });
        setIsWorkAchievementEarned({ ID: 5, bool: savegame.isWorkAchievementEarned5 });
        setIsWorkAchievementEarned({ ID: 6, bool: savegame.isWorkAchievementEarned6 });
        setIsStudyAchievementEarned({ ID: 1, bool: savegame.isStudyAchievementEarned1 });
        setIsStudyAchievementEarned({ ID: 2, bool: savegame.isStudyAchievementEarned2 });
        setIsStudyAchievementEarned({ ID: 3, bool: savegame.isStudyAchievementEarned3 });
        setIsStudyAchievementEarned({ ID: 4, bool: savegame.isStudyAchievementEarned4 });
        setIsStudyAchievementEarned({ ID: 5, bool: savegame.isStudyAchievementEarned5 });
        setIsStudyAchievementEarned({ ID: 6, bool: savegame.isStudyAchievementEarned6 });
        setIsStudyAchievementEarned({ ID: 7, bool: savegame.isStudyAchievementEarned7 });
        setWorkDoubleChance(savegame.workDoubleChance);
        setStudyPointsAmount(savegame.studyPointsAmount);
        setStudyPointsTotalAmount(savegame.studyPointsTotalAmount);
        setStudyPointsPower(savegame.studyPointsPower);
        setStudyPointsDoubleChance(savegame.studyPointsDoubleChance);
        setStudyAchievementBonus(savegame.studyAchievementBonus);
        setStudyPointsAmountLimit(savegame.studyPointsAmountLimit);
        setStudyPointsLevelUpCost(savegame.studyPointsLevelUpCost);
        setStudyPointsLevelUpPower(savegame.studyPointsLevelUpPower);
        setAchEarnedAmount(savegame.achEarnedAmount);
        setAchEarnedPercent(savegame.achEarnedPercent);
        setWorkWaitTimeMax(savegame.workWaitTimeMax);
        setShopAmount({ ID: 1, amount: savegame.shopAmount01SP });
        setShopAmount({ ID: 2, amount: savegame.shopAmount02SP });
        setShopAmount({ ID: 3, amount: savegame.shopAmount03SP });
        setShopAmount({ ID: 4, amount: savegame.shopAmount04SP });
        setShopAmount({ ID: 5, amount: savegame.shopAmount05C });
        setShopAmount({ ID: 6, amount: savegame.shopAmount06C });
        setShopAmount({ ID: 7, amount: savegame.shopAmount07M });
        setMotivationAmount(savegame.motivationAmount);
        setMotivationLevel(savegame.motivationLevel);
        setMotivationPower(savegame.motivationPower);
        setMotivationLevelUpCost(savegame.motivationLevelUpCost);
        setMotivationSPRatio(savegame.motivationSPRatio);
        setZoneLevel(savegame.zoneLevel);

        refreshTalkAmount(savegame.talkAmount);
        refreshTalkWaitTimeCurrent(savegame.talkWaitTimeCurrent);
        refreshResistanceAmount(savegame.resistanceAmount);
        refreshTalkTotalAmount(savegame.talkTotal);
        refreshTalkPowerAuto(savegame.talkPowerAuto);
        refreshTalkTotalPowerAuto(savegame.talkTotalPowerAuto);
        refreshTalkWaitTimeMax(savegame.talkWaitTimeMax);
        refreshCoinAmount(savegame.coinAmount);
        refreshWorkTotalPower(savegame.workTotalPower);
        refreshCoinAmountPower(savegame.coinAmountPower);
        refreshWorkWaitTimeCurrent(savegame.workWaitTimeCurrent);
        refreshWorkTotalAmount(savegame.workTotal);
        refreshWorkCoinID(savegame.workCoin);
        refreshWorkCoinMinID (savegame.workCoinMin / 100);
        refreshWorkCoinMaxID (savegame.workCoinMax / 100);
        refreshWorkDoubleChance(savegame.workDoubleChance);
        refreshStudyPointsAmountID(savegame.studyPointsAmount);
        refreshStudyPointsTotalAmountID(savegame.studyPointsTotalAmount);
        refreshStudyPointsPower(savegame.studyPointsPower);
        refreshStudyPointsDoubleChance(savegame.studyPointsDoubleChance);
        refreshStudyPointsAmountLimit(savegame.studyPointsAmountLimit);
        refreshStudyPointsLevelUpCost(savegame.studyPointsLevelUpCost);
        refreshAchEarnedAmount(savegame.achEarnedAmount);
        refreshAchEarnedPercent(savegame.achEarnedPercent);
        refreshWorkWaitTimeMax(savegame.workWaitTimeMax);
        refreshShopAmountID({ ID: 1, shopAmount: savegame.shopAmount01SP });
        refreshShopAmountID({ ID: 2, shopAmount: savegame.shopAmount02SP });
        refreshShopAmountID({ ID: 3, shopAmount: savegame.shopAmount03SP });
        refreshShopAmountID({ ID: 4, shopAmount: savegame.shopAmount04SP });
        refreshShopAmountID({ ID: 5, shopAmount: savegame.shopAmount05C });
        refreshShopAmountID({ ID: 6, shopAmount: savegame.shopAmount06C });
        refreshShopAmountID({ ID: 7, shopAmount: savegame.shopAmount07M });
        refreshMotivationAmount(savegame.motivationAmount);
        refreshMotivationAmountLimit(savegame.motivationLimits[savegame.motivationLevel]);
        refreshMotivationLevel(savegame.motivationLevel);
        refreshMotivationPower(savegame.motivationPower);
        refreshMotivationLevelUpCost(savegame.motivationLevelUpCost);
        refreshMotivationSPRatio(savegame.motivationSPRatio);
        refreshMotivationSPBonus(savegame.motivationLevel / savegame.motivationSPRatio);

        if (savegame.isTalkAchievementEarned1) {
            refreshAchievementBackground(achievementDiv01);

            showWork();
        }
        if (savegame.isTalkAchievementEarned2) {
            refreshAchievementBackground(achievementDiv02);

            showShopTalkDiv();
        }
        if (savegame.isTalkAchievementEarned3) {
            refreshAchievementBackground(achievementDiv03);
        }
        if (savegame.isTalkAchievementEarned4) {
            refreshAchievementBackground(achievementDiv04);
        }
        if (savegame.isTalkAchievementEarned5) {
            refreshAchievementBackground(achievementDiv05);

            showTravelling();
        }
        if (savegame.isTalkAchievementEarned6) {
            refreshAchievementBackground(achievementDiv06);
        }
        if (savegame.isTalkAchievementEarned7) {
            refreshAchievementBackground(achievementDiv07);
        }
        if (savegame.isTalkAchievementEarned8) {
            refreshAchievementBackground(achievementDiv08);
        }
        if (savegame.isTalkAchievementEarned9) {
            refreshAchievementBackground(achievementDiv09);
        }
        if (savegame.isTalkAchievementEarned10) {
            refreshAchievementBackground(achievementDiv10);
        }
        if (savegame.isTalkAchievementEarned11) {
            refreshAchievementBackground(achievementDiv11);
        }
        if (savegame.isTalkAchievementEarned12) {
            refreshAchievementBackground(achievementDiv25);
        }
        if (savegame.isWorkAchievementEarned1) {
            refreshAchievementBackground(achievementDiv12);

            showStudy();
        }
        if (savegame.isWorkAchievementEarned2) {
            refreshAchievementBackground(achievementDiv13);
        }
        if (savegame.isWorkAchievementEarned3) {
            refreshAchievementBackground(achievementDiv14);
        }
        if (savegame.isWorkAchievementEarned4) {
            refreshAchievementBackground(achievementDiv15);
        }
        if (savegame.isWorkAchievementEarned5) {
            refreshAchievementBackground(achievementDiv16);
        }
        if (savegame.isWorkAchievementEarned6) {
            refreshAchievementBackground(achievementDiv17);
        }
        if (savegame.isStudyAchievementEarned1) {
            refreshAchievementBackground(achievementDiv18);

            showMotivation();
        }
        if (savegame.isStudyAchievementEarned2) {
            refreshAchievementBackground(achievementDiv19);
        }
        if (savegame.isStudyAchievementEarned3) {
            refreshAchievementBackground(achievementDiv20);
        }
        if (savegame.isStudyAchievementEarned4) {
            refreshAchievementBackground(achievementDiv21);
        }
        if (savegame.isStudyAchievementEarned5) {
            refreshAchievementBackground(achievementDiv22);
        }
        if (savegame.isStudyAchievementEarned6) {
            refreshAchievementBackground(achievementDiv23);
        }
        if (savegame.isStudyAchievementEarned7) {
            refreshAchievementBackground(achievementDiv24);
        }

        if ( talkInterval === "" && savegame.talkWaitTimeCurrent !== 0) {
            setTalkInterval(setInterval(waitTalk, intervalTime));
            refreshButtonBackground({ domObj: talkButton, color: "red" });
        }
        if ( workInterval === "" && savegame.workWaitTimeCurrent !== 0) {
            setWorkInterval(setInterval(waitWork, intervalTime));
            refreshButtonBackground({ domObj: workButton, color: "red" });
        }

        if (savegame.talkWaitTimeMax <= 30 && savegame.talkAmount >= 20) {
            refreshTalkAutomation();
            setTalkInterval(setInterval(talkAutomation, intervalTime));
        }
        if (savegame.workWaitTimeMax <= 15) {
            refreshWorkAutomation();
            setWorkInterval(setInterval(workAutomation, intervalTime));
        }
        if (savegame.motivationLevel === 10) {
            refreshMotivationMax();
        }
        if (savegame.talkWaitTimeMax === 1) {
            displayNone(3);
        }
        if (savegame.workWaitTimeMax === 1) {
            displayNone(4);
        }
        if (savegame.motivationSPRatio <= 50) {
            displayNone(5);
        }

        if (savegame.resistanceAmount === 100 - (savegame.zoneLevel + 1) * 10) {
            refreshResistanceMax();
        }

        if (savegame.motivationLevel === 10) {
            refreshMotivationMax();
        }
        
        

        /*if (typeof savegame.talk !== "undefined") {
            talk.peopleTalked = savegame.talk.peopleTalked;
            talk.talkPower = savegame.talk.talkPower;
            talk.isTalking = savegame.talk.isTalking;
            talk.isWorking = savegame.talk.isWorking;
            talk.isTalkingAutomated = savegame.talk.isTalkingAutomated;
            talk.talkingInterval = savegame.talk.talkingInterval;
            talk.talkResistanceMin = savegame.talk.talkResistanceMin;
            talk.talkResistanceMax = savegame.talk.talkResistanceMax;

            if(talk.isTalkingAutomated) {
                document.getElementById("talkAutomationButton").checked = true;
                talk.isTalkingAutomated = false;
                talk.talkAutomation();
            } else if(!talk.isTalkingAutomated) {
                document.getElementById("talkAutomationButton").checked = false;
            }
        }

        if(typeof savegame.work !== "undefined") {
            work.moneyActual = savegame.work.moneyActual;
            work.moneyAll = savegame.work.moneyAll;
            work.workPower = savegame.work.workPower;
            work.isTalking = savegame.work.isTalking;
            work.isWorking = savegame.work.isWorking;
            work.isWorkingAutomated = savegame.work.isWorkingAutomated;
            work.moneyInterval = savegame.work.moneyInterval;

            if(work.isWorkingAutomated) {
                document.getElementById("workAutomationButton").checked = true;
                work.isWorkingAutomated = false;
                work.workAutomation();
            } else if(!work.isWorkingAutomated) {
                document.getElementById("workAutomationButton").checked = false;
            }
        }
        
        if(typeof savegame.shopItems !== "undefined") {
            for(let i = 0; i < savegame.shopItems.length; i++) {
                if(savegame.shopItems[i].isBought && 
                    typeof savegame.shopItems[i] !== "undefined") {
                        shopItems[i].isBought = savegame.shopItems[i].isBought;
                        Controll.displayNone(shopItems[i].domObj);
                }
            }
        }

        if(typeof savegame.achievementItems !== "undefined") {
            for(let i = 0; i < savegame.achievementItems.length; i++) {
                if(savegame.achievementItems[i].isEarned && 
                    typeof savegame.achievementItems[i] !== "undefined") {
                        achievementItems[i].isEarned = savegame.achievementItems[i].isEarned;
                        Controll.setAchEarnedColor(achievementItems[i].domObj);
                }
            }
        }

        let peopleTalkedText = talk.peopleTalked.toFixed(2).toString();
        let talkPowerText = talk.talkPower.toFixed(2).toString();
        let moneyActualText = work.moneyActual.toFixed(2).toString();
        let moneyTotalText = work.moneyAll.toFixed(2).toString();
        let workPowerText = work.workPower.toFixed(2).toString();
        let talkResistanceText = (100 - talk.talkResistanceMin / talk.talkResistanceMax * 100).toFixed(2).toString();

        Controll.updateText({ domObj: peopleTalkedSpan, value: peopleTalkedText });
        Controll.updateText({ domObj: talkPowerSpan, value: talkPowerText });
        Controll.updateText({ domObj: moneySpan, value: moneyActualText });
        Controll.updateText({ domObj: moneyTotalSpan, value: moneyTotalText });
        Controll.updateText({ domObj: workPowerSpan, value: workPowerText });
        Controll.updateText({ domObj: resValueSpan, value: talkResistanceText });

        Controll.displayDomCheck({ peopleTalked: talk.peopleTalked });
        Controll.displayDomCheck({ moneyAll: work.moneyAll });
        Controll.displayDomCheck({ moneyActual: work.moneyActual });*/
    }
}

let autoSaveInterval = "";

export function autoSave() {
    autoSaveInterval = setInterval(save, 30000);
}

export function deleteSave() {
    if(confirm("Are you really want to delete all data?")) {
        localStorage.removeItem("save");
        location.reload();
    }
}
