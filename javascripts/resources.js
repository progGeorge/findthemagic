export let talkAmount = 0;
export let talkPower = 1;
export let talkWaitTimeCurrent = 0;
export let talkWaitTimeMax = 5;
export let resistanceAmount = 0;
export let talkTotal = 0;
export let talkPowerAuto = 0;
export let talkTotalPowerAuto = 0;
export let isTalkAutomated = false;

export let coinAmount = 0;
export let coinAmountPower = 0;
export let workCoinMin = 20;
export let workCoinMax = 60;
export let workCoin = 0.4;
export let workWaitTimeCurrent = 0;
export let workWaitTimeMax = 30;
export let workTotal = 0;
export let workTotalPower = 0.06;
export let workDoubleChance = 0;

export let achEarnedAmount = 0;
export let achAllAmount = 25;
export let achEarnedPercent = 0;
export let isTalkAchievementEarned1 = false;
export let isTalkAchievementEarned2 = false;
export let isTalkAchievementEarned3 = false;
export let isTalkAchievementEarned4 = false;
export let isTalkAchievementEarned5 = false;
export let isTalkAchievementEarned6 = false;
export let isTalkAchievementEarned7 = false;
export let isTalkAchievementEarned8 = false;
export let isTalkAchievementEarned9 = false;
export let isTalkAchievementEarned10 = false;
export let isTalkAchievementEarned11 = false;
export let isTalkAchievementEarned12 = false;
export let isWorkAchievementEarned1 = false;
export let isWorkAchievementEarned2 = false;
export let isWorkAchievementEarned3 = false;
export let isWorkAchievementEarned4 = false;
export let isWorkAchievementEarned5 = false;
export let isWorkAchievementEarned6 = false;
export let isStudyAchievementEarned1 = false;
export let isStudyAchievementEarned2 = false;
export let isStudyAchievementEarned3 = false;
export let isStudyAchievementEarned4 = false;
export let isStudyAchievementEarned5 = false;
export let isStudyAchievementEarned6 = false;
export let isStudyAchievementEarned7 = false;
export let achLimit1 = 10;
export let achLimit2 = 20;
export let achLimit3 = 40;
export let achLimit4 = 80;
export let achLimit5 = 100;
export let achLimit6 = 25;
export let achLimit7 = 50;
export let achLimit8 = 75;
export let achLimit9 = 100;
export let achLimit10 = 150;
export let achLimit11 = 250;
export let achLimit12 = 5;
export let achLimit13 = 25;
export let achLimit14 = 50;
export let achLimit15 = 100;
export let achLimit16 = 200;
export let achLimit17 = 15;
export let achLimit18 = 1.8;
export let achLimit19 = 5;
export let achLimit20 = 10;
export let achLimit21 = 25;
export let achLimit22 = 50;
export let achLimit23 = 100;
export let achLimit24 = 250;
export let achLimit25 = 30;

export let studyPointsAmount = 0;
export let studyPointsTotalAmount = 0;
export const baseStudyPointsPower = 0.01;
export let studyPointsPower = 0.01;
export let studyPointsDoubleChance = 0;
export let studyAchievementBonus = 0;
export let studyPointsAmountLimit = 2;
export let studyPointsLevelUpCost = 1;
export let studyPointsLevelUpPower = 0.5;

export let shopAmount01SP = 0.01;
export let shopAmount02SP = 0.1;
export let shopAmount03SP = 1;
export let shopAmount04SP = 1;
export let shopAmount05C = 0.5;
export let shopAmount06C = 0.5;
export let shopAmount07M = 0.1;
export const shopMultiplier01 = 1.1;
export const shopMultiplier02 = 1.16;
export const shopMultiplier03 = 1.2;
export const shopMultiplier04 = 1.2;
export const shopMultiplier05 = 1.1;
export const shopMultiplier06 = 1.5;
export const shopMultiplier07 = 0.1;

export let motivationAmount = 0;
export let motivationPower = 0;
export let motivationLimits = [1, 1, 2, 2, 3, 4, 5, 8, 12, 18, 26, 37, 51, 70, 92];
export let motivationLevel = 0;
export let motivationTime = 0;
export let motivationLevelUpCost = 0;
export let motivationSPRatio = 100;

export let zoneLimits = [100, 500, 1000];
export let zoneLevel = 0;

export const version = "0.0.1";

export function setTalkAmount ( amount ) {
    talkAmount = amount;
}

export function setTalkWaitTimeCurrent ( amount ) {
    talkWaitTimeCurrent = amount;
}

export function setTalkWaitTimeMax ( amount ) {
    talkWaitTimeMax = amount;
}

export function setResistanceAmount ( amount ) {
    resistanceAmount = amount;
}

export function setTalkTotal ( amount ) {
    talkTotal = amount;
}

export function setTalkPowerAuto ( amount ) {
    talkPowerAuto = amount;
}

export function setTalkTotalPowerAuto ( amount ) {
    talkTotalPowerAuto = amount;
}

export function setIsTalkAutomated ( amount ) {
    isTalkAutomated = amount;
}

export function setCoinAmount ( amount ) {
    coinAmount = amount;
}

export function setCoinAmountPower (amount) {
    coinAmountPower = amount;
}

export function setWorkWaitTimeCurrent ( amount ) {
    workWaitTimeCurrent = amount;
}

export function setWorkCoin ( amount ) {
    workCoin = amount;
}

export function setWorkTotal ( amount ) {
    workTotal = amount;
}

export function setCoinMin ( amount ) {
    workCoinMin = amount;
}

export function setCoinMax ( amount ) {
    workCoinMax = amount;
}

export function setWorkWaitTimeMax ( amount ) {
    workWaitTimeMax = amount;
}

export function setWorkTotalPower ( amount ) {
    workTotalPower = amount;
}

export function setWorkDoubleChance ( amount ) {
    workDoubleChance = amount;
}

export function setAchEarnedAmount ( amount ) {
    achEarnedAmount = amount;
}

/*export function setAchAllAmount ( amount ) {
    achAllAmount = amount;
}*/

export function setAchEarnedPercent ( amount ) {
    achEarnedPercent = amount;
}

export function setIsTalkAchievementEarned ({ ID, bool }) {
    switch(ID) {
        case 1:
            isTalkAchievementEarned1 = bool;
        break;
        case 2:
            isTalkAchievementEarned2 = bool;
        break;
        case 3:
            isTalkAchievementEarned3 = bool;
        break;
        case 4:
            isTalkAchievementEarned4 = bool;
        break;
        case 5:
            isTalkAchievementEarned5 = bool;
        break;
        case 6:
            isTalkAchievementEarned6 = bool;
        break;
        case 7:
            isTalkAchievementEarned7 = bool;
        break;
        case 8:
            isTalkAchievementEarned8 = bool;
        break;
        case 9:
            isTalkAchievementEarned9 = bool;
        break;
        case 10:
            isTalkAchievementEarned10 = bool;
        break;
        case 11:
            isTalkAchievementEarned11 = bool;
        break;
        case 12:
            isTalkAchievementEarned12 = bool;
        break;
    }
}

export function setIsWorkAchievementEarned ({ ID, bool }) {
    switch(ID) {
        case 1:
            isWorkAchievementEarned1 = bool;
        break;
        case 2:
            isWorkAchievementEarned2 = bool;
        break;
        case 3:
            isWorkAchievementEarned3 = bool;
        break;
        case 4:
            isWorkAchievementEarned4 = bool;
        break;
        case 5:
            isWorkAchievementEarned5 = bool;
        break;
        case 6:
            isWorkAchievementEarned6 = bool;
        break;
    }
}

export function setIsStudyAchievementEarned ({ ID, bool }) {
    switch(ID) {
        case 1:
            isStudyAchievementEarned1 = bool;
        break;
        case 2:
            isStudyAchievementEarned2 = bool;
        break;
        case 3:
            isStudyAchievementEarned3 = bool;
        break;
        case 4:
            isStudyAchievementEarned4 = bool;
        break;
        case 5:
            isStudyAchievementEarned5 = bool;
        break;
        case 6:
            isStudyAchievementEarned6 = bool;
        break;
        case 7:
            isStudyAchievementEarned7 = bool;
        break;
    }
}

export function setStudyPointsAmount ( amount ) {
    studyPointsAmount = amount;
}

export function setStudyPointsTotalAmount ( amount ) {
    studyPointsTotalAmount = amount;
}

export function setStudyPointsPower ( amount ) {
    studyPointsPower = amount;
}

export function setStudyPointsDoubleChance ( amount ) {
    studyPointsDoubleChance = amount;
}

export function setStudyAchievementBonus (amount) {
    studyAchievementBonus = amount;
}

export function setStudyPointsAmountLimit (amount) {
    studyPointsAmountLimit = amount;
}

export function setStudyPointsLevelUpCost (amount) {
    studyPointsLevelUpCost = amount;
}

export function setStudyPointsLevelUpPower (amount) {
    studyPointsLevelUpPower = amount;
}

export function setShopAmount ({ ID, amount }) {
    switch (ID) {
        case 1:
            shopAmount01SP = amount;
        break;
        case 2:
            shopAmount02SP = amount;
        break;
        case 3:
            shopAmount03SP = amount;
        break;
        case 4:
            shopAmount04SP = amount;
        break;
        case 5:
            shopAmount05C = amount;
        break;
        case 6:
            shopAmount06C = amount;
        break;
        case 7:
            shopAmount07M = amount;
        break;
    }
}

export function setMotivationAmount (amount) {
    motivationAmount = amount;
}

export function setMotivationPower (amount) {
    motivationPower = amount;
}

export function setMotivationLevel (amount) {
    motivationLevel = amount;
}

export function setMotivationTime (amount) {
    motivationTime = amount;
}

export function setMotivationLevelUpCost (amount) {
    motivationLevelUpCost = amount;
}

export function setMotivationSPRatio (amount) {
    motivationSPRatio = amount;
}

export function setZoneLevel (amount) {
    zoneLevel = amount;
}
