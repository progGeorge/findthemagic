import { talkAmount, studyPointsAmount, studyPointsPower, setStudyPointsAmount, setMotivationAmount, 
    motivationAmount, motivationPower, setMotivationPower, motivationLevel, setMotivationLevel, 
    motivationLimits, setStudyPointsPower, baseStudyPointsPower, studyAchievementBonus, motivationTime, 
    setMotivationTime, setMotivationLevelUpCost, motivationLevelUpCost, motivationSPRatio, 
    studyPointsLevelUpCost, zoneLevel, shardMotivationAchievementBonus1, isStudyAchievementEarned1 } from "./resources.js";

import { refreshStudyPointsAmountID, refreshMotivationAmount, refreshMotivationPower, refreshMotivationLevel, 
    refreshMotivationAmountLimit, refreshStudyPointsPower, refreshButtonBackground, refreshMotivationTime, 
    refreshMotivationLevelUpCost, refreshMotivationSPBonus, refreshMotivationMax } from "./display.js";

import { checkShopItemAvailable, calcShopTimeSP, calcShopTimeM } from "./shop.js";

const studyPointsLevelUpButton = document.getElementById("studyPointsLevelUpButton");
const motivationLevelUpButton = document.getElementById("motivationLevelUpButton");

export function calcMotivation () {
    if(isStudyAchievementEarned1) {
        
        setMotivationPower((studyAchievementBonus + talkAmount) / 5000 * shardMotivationAchievementBonus1);
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

export function motivationLevelUp () {
    if (motivationAmount === motivationLimits[motivationLevel] && motivationLevelUpCost <= studyPointsAmount && motivationLevel < (zoneLevel + 1) * 10) {
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

        setMotivationLevelUpCost();
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

export function calcMotivationTime () {
    const actMotivationTime = (motivationLimits[motivationLevel] - motivationAmount) / motivationPower;
    const studyTime = (motivationLevelUpCost - studyPointsAmount) / studyPointsPower;

    if (actMotivationTime >= studyTime) {
        setMotivationTime(actMotivationTime.toFixed(0));
    } else if (actMotivationTime < studyTime) {
        setMotivationTime(studyTime.toFixed(0));
    }
    refreshMotivationTime(motivationTime);
}