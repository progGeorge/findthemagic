import { studyPointsAmount, 
    studyPointsTotalAmount, studyPointsPower, setStudyPointsAmount, setStudyPointsTotalAmount, 
    isWorkAchievementEarned1, studyPointsDoubleChance, motivationLevelUpCost, studyPointsAmountLimit, 
    setStudyPointsAmountLimit, studyPointsLevelUpPower, studyPointsLevelUpCost, 
    setStudyPointsLevelUpCost, setStudyPointsAmountLimitPow, studyPointsAmountLimitPow } from "./resources.js";
import { refreshStudyPointsAmountID, refreshStudyPointsTotalAmountID, refreshButtonBackground, refreshStudyPointsTimeID, 
    refreshStudyPointsAmountLimit, refreshStudyPointsLevelUpCost } from "./display.js";
import { getRandomInt } from "../index.js";
import { checkShopItemAvailable, calcShopTimeSP } from "./shop.js";


const studyPointsLevelUpButton = document.getElementById("studyPointsLevelUpButton");
const motivationLevelUpButton = document.getElementById("motivationLevelUpButton");

export function study () {
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

export function studyPointsLevelUp () {
    if (studyPointsAmount >= studyPointsLevelUpCost) {
        setStudyPointsAmount(studyPointsAmount - studyPointsLevelUpCost);
        refreshStudyPointsAmountID(studyPointsAmount);

        setStudyPointsAmountLimitPow(studyPointsAmountLimitPow + 1);
        setStudyPointsAmountLimit();
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