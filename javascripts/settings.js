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
    workTotalPower, setWorkTotalPower, zoneLevel, setZoneLevel, version, isWorkAutomated, setIsWorkAutomated, 
    travelPoints, travelWaitTimeMax, travelWaitTimeCurrent, setTravelPoints, setTravelWaitTimeCurrent, 
    tiredPoints, setTiredPoints, travelPower, setTravelPower, romanNumbers, shardWork, setShardWork, shardSP, 
    setShardSP, shardMotivation, setShardMotivation, shardWorkChance, shardSPChance, shardMotivationChance, 
    setShardWorkChance, setShardSPChance, setShardMotivationChance, setShopItemPow, shopItem01Pow, 
    shopItem02Pow, shopItem03Pow, shopItem04Pow, shopItem05Pow, shopItem06Pow, shopItem07Pow, 
    isShardAchievementEarned1, isShardAchievementEarned2, isShardAchievementEarned3, isShardAchievementEarned4, 
    isShardAchievementEarned5, isShardAchievementEarned6, isShardAchievementEarned7, isShardAchievementEarned8, 
    isShardAchievementEarned9, isShardAchievementEarned10, isShardAchievementEarned11, isShardAchievementEarned12, 
    isShardAchievementEarned13, isShardAchievementEarned14, isShardAchievementEarned15, isShardAchievementEarned16, 
    isShardAchievementEarned17, isShardAchievementEarned18, setIsShardAchievementEarned, 
    shardWorkAchievementBonus1, setShardWorkAchievementBonus1, shardWorkAchievementBonus2, 
    setShardWorkAchievementBonus2, shardSPAchievementBonus1, setShardSPAchievementBonus1, shardSPAchievementBonus2, 
    setShardSPAchievementBonus2, shardSPAchievementBonus3, setShardSPAchievementBonus3, shardSPAchievementBonus4, 
    setShardSPAchievementBonus4, studyPointsAmountLimitBase, setStudyPointsAmountLimitBase, 
    studyPointsAmountLimitPow, setStudyPointsAmountLimitPow, shardMotivationAchievementBonus1, 
    setShardMotivationAchievementBonus1, hateAmount, setHateAmount, shopAmount08C, shopAmount09C, shopAmount10C, 
    shopItem08Pow, shopItem09Pow, shopItem10Pow, tiredTravel, setTiredTravel, setTiredTravelPow, tiredTravelPow, 
    tiredLimit, setTiredLimit, setTravelWaitTimeMax, shopAmount11C, shopItem11Pow, zoneLimits, zoneLevelUpCost, 
    isHateEnabled, setIsHateEnabled } from "./resources.js";
import { showNavbarDivs, refreshTalkAmount, refreshTalkWaitTimeCurrent, refreshResistanceAmount, 
    refreshTalkTotalAmount, refreshCoinAmount, refreshWorkWaitTimeCurrent, refreshWorkTotalAmount, 
    refreshAchievementBackground, refreshWorkCoinID, refreshWorkCoinMinID, refreshWorkCoinMaxID, 
    refreshStudyPointsAmountID, refreshStudyPointsTotalAmountID, refreshAchEarnedAmount, 
    refreshAchEarnedPercent, refreshWorkWaitTimeMax, refreshShopAmountID, refreshWorkAutomation, 
    refreshCoinAmountPower, refreshTalkAutomation, refreshTalkPowerAuto, refreshTalkTotalPowerAuto, 
    refreshMotivationAmount, refreshMotivationAmountLimit, refreshMotivationLevel, refreshMotivationPower, 
    refreshStudyPointsPower, refreshButtonBackground, refreshWorkDoubleChance, refreshStudyPointsDoubleChance, 
    showWork, showStudy, showMotivation, showTraveling, displayNone, refreshMotivationLevelUpCost, 
    refreshMotivationSPBonus, refreshMotivationSPRatio, refreshStudyPointsAmountLimit, 
    refreshStudyPointsLevelUpCost, showShopTalkDiv, refreshTalkWaitTimeMax, refreshMotivationMax, 
    refreshWorkTotalPower, refreshResistanceMax, refreshTravelPoints, refreshTravelWaitTimeCurrent, 
    refreshTiredPoints, refreshTravelPower, refreshzoneLevel, refreshShardWorkChance, refreshShardSPChance, 
    refreshShardMotivationChance, refreshShardWorkAmount, refreshShardSPAmount, refreshShardMotivationAmount, 
    refreshHateAmount, refreshTiredTravel, refreshTiredLimit, showHate, refreshHateMax, refreshZoneLimit, 
    refreshTravelWaitTimeMax, refreshZoneLevelUpCost, showForge } from "./display.js";
import { waitTalk, talkInterval, setTalkInterval } from "./talk.js";
import { waitWork, workInterval, setWorkInterval } from "./work.js";
import { waitTravel, travelInterval, setTravelInterval } from "./travel.js";

const intervalTime = 1000;

const talkButton = document.getElementById("talkButton");
const workButton = document.getElementById("workButton");
const travelButton = document.getElementById("travelButton");
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
const achievementDiv26 = document.getElementById("achievementDiv26");
const achievementDiv27 = document.getElementById("achievementDiv27");
const achievementDiv28 = document.getElementById("achievementDiv28");
const achievementDiv29 = document.getElementById("achievementDiv29");
const achievementDiv30 = document.getElementById("achievementDiv30");
const achievementDiv31 = document.getElementById("achievementDiv31");
const achievementDiv32 = document.getElementById("achievementDiv32");
const achievementDiv33 = document.getElementById("achievementDiv33");
const achievementDiv34 = document.getElementById("achievementDiv34");
const achievementDiv35 = document.getElementById("achievementDiv35");
const achievementDiv36 = document.getElementById("achievementDiv36");
const achievementDiv37 = document.getElementById("achievementDiv37");
const achievementDiv38 = document.getElementById("achievementDiv38");
const achievementDiv39 = document.getElementById("achievementDiv39");
const achievementDiv40 = document.getElementById("achievementDiv40");
const achievementDiv41 = document.getElementById("achievementDiv41");
const achievementDiv42 = document.getElementById("achievementDiv42");
const achievementDiv43 = document.getElementById("achievementDiv43");

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
        studyPointsLevelUpCost, workTotalPower, zoneLevel, version, isWorkAutomated, 
        travelPoints, travelWaitTimeCurrent, travelWaitTimeMax, tiredPoints, travelPower, shardWork,
        shardSP, shardMotivation, shardWorkChance, shardSPChance, shardMotivationChance, 
        shopItem01Pow, shopItem02Pow, shopItem03Pow, shopItem04Pow, shopItem05Pow, shopItem06Pow, 
        shopItem07Pow, isShardAchievementEarned1, isShardAchievementEarned2, isShardAchievementEarned3, isShardAchievementEarned4, 
        isShardAchievementEarned5, isShardAchievementEarned6, isShardAchievementEarned7, isShardAchievementEarned8, 
        isShardAchievementEarned9, isShardAchievementEarned10, isShardAchievementEarned11, isShardAchievementEarned12, 
        isShardAchievementEarned13, isShardAchievementEarned14, isShardAchievementEarned15, isShardAchievementEarned16, 
        isShardAchievementEarned17, isShardAchievementEarned18, shardWorkAchievementBonus1, shardWorkAchievementBonus2, 
        shardSPAchievementBonus1, shardSPAchievementBonus2, shardSPAchievementBonus3, shardSPAchievementBonus4, 
        studyPointsAmountLimitBase, studyPointsAmountLimitPow, shardMotivationAchievementBonus1, hateAmount, shopAmount08C, 
        shopAmount09C, shopAmount10C, shopItem08Pow, shopItem09Pow, shopItem10Pow, tiredTravel, tiredTravelPow, tiredLimit, 
        shopAmount11C, shopItem11Pow, isHateEnabled
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
        setHateAmount(savegame.hateAmount);
        setIsHateEnabled(savegame.isHateEnabled);
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
        setIsWorkAutomated(savegame.isWorkAutomated);
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
        setIsShardAchievementEarned({ ID: 1, bool: savegame.isShardAchievementEarned1 });
        setIsShardAchievementEarned({ ID: 2, bool: savegame.isShardAchievementEarned2 });
        setIsShardAchievementEarned({ ID: 3, bool: savegame.isShardAchievementEarned3 });
        setIsShardAchievementEarned({ ID: 4, bool: savegame.isShardAchievementEarned4 });
        setIsShardAchievementEarned({ ID: 5, bool: savegame.isShardAchievementEarned5 });
        setIsShardAchievementEarned({ ID: 6, bool: savegame.isShardAchievementEarned6 });
        setIsShardAchievementEarned({ ID: 7, bool: savegame.isShardAchievementEarned7 });
        setIsShardAchievementEarned({ ID: 8, bool: savegame.isShardAchievementEarned8 });
        setIsShardAchievementEarned({ ID: 9, bool: savegame.isShardAchievementEarned9 });
        setIsShardAchievementEarned({ ID: 10, bool: savegame.isShardAchievementEarned10 });
        setIsShardAchievementEarned({ ID: 11, bool: savegame.isShardAchievementEarned11 });
        setIsShardAchievementEarned({ ID: 12, bool: savegame.isShardAchievementEarned12 });
        setIsShardAchievementEarned({ ID: 13, bool: savegame.isShardAchievementEarned13 });
        setIsShardAchievementEarned({ ID: 14, bool: savegame.isShardAchievementEarned14 });
        setIsShardAchievementEarned({ ID: 15, bool: savegame.isShardAchievementEarned15 });
        setIsShardAchievementEarned({ ID: 16, bool: savegame.isShardAchievementEarned16 });
        setIsShardAchievementEarned({ ID: 17, bool: savegame.isShardAchievementEarned17 });
        setIsShardAchievementEarned({ ID: 18, bool: savegame.isShardAchievementEarned18 });
        setWorkDoubleChance(savegame.workDoubleChance);
        setStudyPointsAmount(savegame.studyPointsAmount);
        setStudyPointsTotalAmount(savegame.studyPointsTotalAmount);
        setStudyPointsPower(savegame.studyPointsPower);
        setStudyPointsDoubleChance(savegame.studyPointsDoubleChance);
        setStudyAchievementBonus(savegame.studyAchievementBonus);
        setStudyPointsAmountLimitPow(savegame.studyPointsAmountLimitPow);
        setStudyPointsAmountLimitBase(savegame.studyPointsAmountLimitBase);
        setStudyPointsAmountLimit();
        setStudyPointsLevelUpCost(savegame.studyPointsLevelUpCost);
        setStudyPointsLevelUpPower(savegame.studyPointsLevelUpPower);
        setAchEarnedAmount(savegame.achEarnedAmount);
        setAchEarnedPercent(savegame.achEarnedPercent);
        setWorkWaitTimeMax(savegame.workWaitTimeMax);
        setShardWorkAchievementBonus1(savegame.shardWorkAchievementBonus1);
        setShardWorkAchievementBonus2(savegame.shardWorkAchievementBonus2);
        setShardSPAchievementBonus1(savegame.shardSPAchievementBonus1);
        setShardSPAchievementBonus2(savegame.shardSPAchievementBonus2);
        setShardSPAchievementBonus3(savegame.shardSPAchievementBonus3);
        setShardSPAchievementBonus4(savegame.shardSPAchievementBonus4);
        setShardMotivationAchievementBonus1(savegame.shardMotivationAchievementBonus1);
        setShopItemPow({ ID: 1, amount: savegame.shopItem01Pow });
        setShopItemPow({ ID: 2, amount: savegame.shopItem02Pow });
        setShopItemPow({ ID: 3, amount: savegame.shopItem03Pow });
        setShopItemPow({ ID: 4, amount: savegame.shopItem04Pow });
        setShopItemPow({ ID: 5, amount: savegame.shopItem05Pow });
        setShopItemPow({ ID: 6, amount: savegame.shopItem06Pow });
        setShopItemPow({ ID: 7, amount: savegame.shopItem07Pow });
        setShopItemPow({ ID: 8, amount: savegame.shopItem08Pow });
        setShopItemPow({ ID: 9, amount: savegame.shopItem09Pow });
        setShopItemPow({ ID: 10, amount: savegame.shopItem10Pow });
        setShopItemPow({ ID: 11, amount: savegame.shopItem11Pow });
        setShopAmount(1);
        setShopAmount(2);
        setShopAmount(3);
        setShopAmount(4);
        setShopAmount(5);
        setShopAmount(6);
        setShopAmount(7);
        setShopAmount(8);
        setShopAmount(9);
        setShopAmount(10);
        setShopAmount(11);
        setMotivationAmount(savegame.motivationAmount);
        setMotivationLevel(savegame.motivationLevel);
        setMotivationPower(savegame.motivationPower);
        setMotivationLevelUpCost();
        setMotivationSPRatio(savegame.motivationSPRatio);
        setTravelPoints(savegame.travelPoints);
        setTravelWaitTimeCurrent(savegame.travelWaitTimeCurrent);
        setTravelWaitTimeMax(savegame.travelWaitTimeMax);
        setTiredPoints(savegame.tiredPoints);
        setTiredTravelPow(savegame.tiredTravelPow);
        setTiredTravel();
        setTiredLimit(savegame.tiredLimit);
        setTravelPower(savegame.travelPower);
        setZoneLevel(savegame.zoneLevel);
        setShardWork(savegame.shardWork);
        setShardSP(savegame.shardSP);
        setShardMotivation(savegame.shardMotivation);
        setShardWorkChance(savegame.shardWorkChance);
        setShardSPChance(savegame.shardSPChance);
        setShardMotivationChance(savegame.shardMotivationChance);

        refreshTalkAmount(savegame.talkAmount);
        refreshTalkWaitTimeCurrent(savegame.talkWaitTimeCurrent);
        refreshResistanceAmount(savegame.resistanceAmount);
        refreshHateAmount(savegame.hateAmount);
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
        refreshShopAmountID({ ID: 1, shopAmount: shopAmount01SP });
        refreshShopAmountID({ ID: 2, shopAmount: shopAmount02SP });
        refreshShopAmountID({ ID: 3, shopAmount: shopAmount03SP });
        refreshShopAmountID({ ID: 4, shopAmount: shopAmount04SP });
        refreshShopAmountID({ ID: 5, shopAmount: shopAmount05C });
        refreshShopAmountID({ ID: 6, shopAmount: shopAmount06C });
        refreshShopAmountID({ ID: 7, shopAmount: shopAmount07M });
        refreshShopAmountID({ ID: 8, shopAmount: shopAmount08C });
        refreshShopAmountID({ ID: 9, shopAmount: shopAmount09C });
        refreshShopAmountID({ ID: 10, shopAmount: shopAmount10C });
        refreshShopAmountID({ ID: 11, shopAmount: shopAmount11C });
        refreshMotivationAmount(savegame.motivationAmount);
        refreshMotivationAmountLimit(savegame.motivationLimits[savegame.motivationLevel]);
        refreshMotivationLevel(savegame.motivationLevel);
        refreshMotivationPower(savegame.motivationPower);
        refreshMotivationLevelUpCost(savegame.motivationLevelUpCost);
        refreshMotivationSPRatio(savegame.motivationSPRatio);
        refreshMotivationSPBonus(savegame.motivationLevel / savegame.motivationSPRatio);
        refreshTravelPoints(savegame.travelPoints);
        refreshTravelWaitTimeCurrent(savegame.travelWaitTimeCurrent);
        refreshTravelWaitTimeMax(savegame.travelWaitTimeMax);
        refreshTiredPoints(savegame.tiredPoints);
        refreshTiredTravel(savegame.tiredTravel);
        refreshTiredLimit(savegame.tiredLimit);
        refreshTravelPower(savegame.travelPower);
        refreshShardWorkAmount(savegame.shardWork);
        refreshShardSPAmount(savegame.shardSP);
        refreshShardMotivationAmount(savegame.shardMotivation);
        refreshShardWorkChance(savegame.shardWorkChance);
        refreshShardSPChance(savegame.shardSPChance);
        refreshShardMotivationChance(savegame.shardMotivationChance);
        refreshzoneLevel(romanNumbers[savegame.zoneLevel]);
        refreshZoneLimit(zoneLimits[savegame.zoneLevel]);
        refreshZoneLevelUpCost(zoneLevelUpCost[savegame.zoneLevel]);

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

            showTraveling();

        }
        if (savegame.isTalkAchievementEarned4) {
            refreshAchievementBackground(achievementDiv04);
        }
        if (savegame.zoneLevel >= 1) {
            showHate();
            showForge();
        }
        if (savegame.isTalkAchievementEarned5) {
            refreshAchievementBackground(achievementDiv05);
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
        if (savegame.isShardAchievementEarned1) {
            refreshAchievementBackground(achievementDiv26);
        }
        if (savegame.isShardAchievementEarned2) {
            refreshAchievementBackground(achievementDiv27);
        }
        if (savegame.isShardAchievementEarned3) {
            refreshAchievementBackground(achievementDiv28);
        }
        if (savegame.isShardAchievementEarned4) {
            refreshAchievementBackground(achievementDiv29);
        }
        if (savegame.isShardAchievementEarned5) {
            refreshAchievementBackground(achievementDiv30);
        }
        if (savegame.isShardAchievementEarned6) {
            refreshAchievementBackground(achievementDiv31);
        }
        if (savegame.isShardAchievementEarned7) {
            refreshAchievementBackground(achievementDiv32);
        }
        if (savegame.isShardAchievementEarned8) {
            refreshAchievementBackground(achievementDiv33);
        }
        if (savegame.isShardAchievementEarned9) {
            refreshAchievementBackground(achievementDiv34);
        }
        if (savegame.isShardAchievementEarned10) {
            refreshAchievementBackground(achievementDiv35);
        }
        if (savegame.isShardAchievementEarned11) {
            refreshAchievementBackground(achievementDiv36);
        }
        if (savegame.isShardAchievementEarned12) {
            refreshAchievementBackground(achievementDiv37);
        }
        if (savegame.isShardAchievementEarned13) {
            refreshAchievementBackground(achievementDiv38);
        }
        if (savegame.isShardAchievementEarned14) {
            refreshAchievementBackground(achievementDiv39);
        }
        if (savegame.isShardAchievementEarned15) {
            refreshAchievementBackground(achievementDiv40);
        }
        if (savegame.isShardAchievementEarned16) {
            refreshAchievementBackground(achievementDiv41);
        }
        if (savegame.isShardAchievementEarned17) {
            refreshAchievementBackground(achievementDiv42);
        }
        if (savegame.isShardAchievementEarned18) {
            refreshAchievementBackground(achievementDiv43);
        }

        if ( talkInterval === "" && savegame.talkWaitTimeCurrent !== 0) {
            setTalkInterval(setInterval(waitTalk, intervalTime));
            refreshButtonBackground({ domObj: talkButton, color: "red" });
        }
        if ( workInterval === "" && savegame.workWaitTimeCurrent !== 0) {
            setWorkInterval(setInterval(waitWork, intervalTime));
            refreshButtonBackground({ domObj: workButton, color: "red" });
        }
        if ( travelInterval === "" && savegame.travelWaitTimeCurrent !== 0) {
            setTravelInterval(setInterval(waitTravel, intervalTime));
            refreshButtonBackground({ domObj: travelButton, color: "red" });
        }
        if (savegame.isTalkAutomated) {
            refreshTalkAutomation();
        }
        if (savegame.isWorkAutomated) {
            refreshWorkAutomation();
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
        if (savegame.travelWaitTimeMax === 0) {
            displayNone(6);
        }
        if (savegame.tiredTravelPow >= 9) {
            displayNone(7);
        }

        if (savegame.resistanceAmount === 100 - (savegame.zoneLevel + 1) * 10) {
            refreshResistanceMax();
        }
        if (100 - 100 * savegame.hateAmount === 100 - savegame.zoneLevel * 10) {
            refreshHateMax();
        }

        if (savegame.motivationLevel === 10) {
            refreshMotivationMax();
        }
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
