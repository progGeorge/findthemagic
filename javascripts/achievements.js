import { talkAmount, workCoinMax, setCoinMax, achEarnedAmount, achAllAmount, 
    achEarnedPercent, setAchEarnedAmount, setAchEarnedPercent, isTalkAchievementEarned1, 
    isTalkAchievementEarned2, isTalkAchievementEarned3, isTalkAchievementEarned4, 
    isTalkAchievementEarned5, isTalkAchievementEarned6, isTalkAchievementEarned7, 
    isTalkAchievementEarned8, isTalkAchievementEarned9, isTalkAchievementEarned10, 
    isTalkAchievementEarned11, setIsTalkAchievementEarned, workTotal, 
    isWorkAchievementEarned1, isWorkAchievementEarned2, isWorkAchievementEarned3, 
    isWorkAchievementEarned4, isWorkAchievementEarned5, isWorkAchievementEarned6, setIsWorkAchievementEarned, talkTotal, 
    workWaitTimeMax, studyPointsTotalAmount, isStudyAchievementEarned1, isStudyAchievementEarned2, 
    isStudyAchievementEarned3, isStudyAchievementEarned4, isStudyAchievementEarned5, 
    isStudyAchievementEarned6, isStudyAchievementEarned7, setIsStudyAchievementEarned, 
    achLimit1, achLimit2, achLimit3, achLimit4, achLimit5, achLimit6, achLimit7, achLimit8, 
    achLimit9, achLimit10, achLimit11, achLimit12, achLimit13, achLimit14, achLimit15, 
    achLimit16, achLimit17, achLimit18, achLimit19, achLimit20, achLimit21, achLimit22, 
    achLimit23, achLimit24, setStudyPointsDoubleChance, studyPointsDoubleChance, 
    studyAchievementBonus, setStudyAchievementBonus, workCoinMin, setCoinAmountPower, coinAmountPower, talkWaitTimeMax, achLimit25, isTalkAchievementEarned12 } from "./resources.js";
import { refreshAchievementEarned, refreshAchievementBackground, showWork, 
    refreshWorkCoinMaxID, refreshAchEarnedAmount, refreshAchEarnedPercent, showStudy, showMotivation, 
    refreshStudyPointsDoubleChance, showTravelling, refreshCoinAmountPower, showShopTalkDiv } from "./display.js";

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

export function checkAchievements () {
    if (!isTalkAchievementEarned1 && talkAmount >= achLimit1 ) {

        setIsTalkAchievementEarned({ ID: 1, bool: true });
        refreshAchievementEarned("Talk with " + achLimit1 + " people | Bonus: working is enabled!");
        refreshAchievementBackground(achievementDiv01);

        calcAchPercent();

        showWork();
    }
    if (!isTalkAchievementEarned2 && talkAmount >= achLimit2 ) {

        setIsTalkAchievementEarned({ ID: 2, bool: true });
        refreshAchievementEarned("Talk with " + achLimit2 + " people | Bonus: +0.04 max coins");
        refreshAchievementBackground(achievementDiv02);

        calcAchPercent();

        setCoinMax(workCoinMax + 4);
        refreshWorkCoinMaxID (workCoinMax / 100);

        setCoinAmountPower(((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax).toFixed(4));
        refreshCoinAmountPower(coinAmountPower);

        showShopTalkDiv();

    }
    if (!isTalkAchievementEarned3 && talkAmount >= achLimit3 ) {

        setIsTalkAchievementEarned({ ID: 3, bool: true });
        refreshAchievementEarned("Talk with " + achLimit3 + " people | Bonus: +0.16 max coins");
        refreshAchievementBackground(achievementDiv03);

        calcAchPercent();

        setCoinMax(workCoinMax + 8);
        refreshWorkCoinMaxID (workCoinMax / 100);

        setCoinAmountPower(((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax).toFixed(4));
        refreshCoinAmountPower(coinAmountPower);

    }
    if (!isTalkAchievementEarned4 && talkAmount >= achLimit4 ) {

        setIsTalkAchievementEarned({ ID: 4, bool: true });
        refreshAchievementEarned("Talk with " + achLimit4 + " people | Bonus: +0.32 max coins");
        refreshAchievementBackground(achievementDiv04);

        calcAchPercent();

        setCoinMax(workCoinMax + 16);
        refreshWorkCoinMaxID (workCoinMax / 100);

        setCoinAmountPower(((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax).toFixed(4));
        refreshCoinAmountPower(coinAmountPower);

    }
    if (!isTalkAchievementEarned5 && talkAmount >= achLimit5 ) {

        setIsTalkAchievementEarned({ ID: 5, bool: true });
        refreshAchievementEarned("Talk with " + achLimit5 + " people | Bonus: travelling is enabled");
        refreshAchievementBackground(achievementDiv05);

        calcAchPercent();

        showTravelling();
    }
    if (!isTalkAchievementEarned6 && talkTotal >= achLimit6 ) {

        setIsTalkAchievementEarned({ ID: 6, bool: true });
        refreshAchievementEarned("Try talk with " + achLimit6 + " people | Bonus: +0.04 max coins");
        refreshAchievementBackground(achievementDiv06);

        calcAchPercent();

        setCoinMax(workCoinMax + 4);
        refreshWorkCoinMaxID (workCoinMax / 100);

        setCoinAmountPower(((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax).toFixed(4));
        refreshCoinAmountPower(coinAmountPower);
    }
    if (!isTalkAchievementEarned7 && talkTotal >= achLimit7 ) {

        setIsTalkAchievementEarned({ ID: 7, bool: true });
        refreshAchievementEarned("Try talk with " + achLimit7 + " people | Bonus: +0.08 max coins");
        refreshAchievementBackground(achievementDiv07);

        calcAchPercent();

        setCoinMax(workCoinMax + 8);
        refreshWorkCoinMaxID (workCoinMax / 100);

        setCoinAmountPower(((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax).toFixed(4));
        refreshCoinAmountPower(coinAmountPower);

    }
    if (!isTalkAchievementEarned8 && talkTotal >= achLimit8 ) {

        setIsTalkAchievementEarned({ ID: 8, bool: true });
        refreshAchievementEarned("Try talk with " + achLimit8 + " people | Bonus: +0.12 max coins");
        refreshAchievementBackground(achievementDiv08);

        calcAchPercent();

        setCoinMax(workCoinMax + 12);
        refreshWorkCoinMaxID (workCoinMax / 100);

        setCoinAmountPower(((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax).toFixed(4));
        refreshCoinAmountPower(coinAmountPower);

    }
    if (!isTalkAchievementEarned9 && talkTotal >= achLimit9 ) {

        setIsTalkAchievementEarned({ ID: 9, bool: true });
        refreshAchievementEarned("Try talk with " + achLimit9 + " people | Bonus: +0.16 max coins");
        refreshAchievementBackground(achievementDiv09);

        calcAchPercent();

        setCoinMax(workCoinMax + 16);
        refreshWorkCoinMaxID (workCoinMax / 100);

        setCoinAmountPower(((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax).toFixed(4));
        refreshCoinAmountPower(coinAmountPower);

    }
    if (!isTalkAchievementEarned10 && talkTotal >= achLimit10 ) {

        setIsTalkAchievementEarned({ ID: 10, bool: true });
        refreshAchievementEarned("Try talk with " + achLimit10 + " people | Bonus: +0.20 max coins");
        refreshAchievementBackground(achievementDiv10);

        calcAchPercent();

        setCoinMax(workCoinMax + 20);
        refreshWorkCoinMaxID (workCoinMax / 100);

        setCoinAmountPower(((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax).toFixed(4));
        refreshCoinAmountPower(coinAmountPower);

    }
    if (!isTalkAchievementEarned11 && talkTotal >= achLimit11 ) {

        setIsTalkAchievementEarned({ ID: 11, bool: true });
        refreshAchievementEarned("Try talk with " + achLimit11 + " people | Bonus: +0.24 max coins");
        refreshAchievementBackground(achievementDiv11);

        calcAchPercent();

        setCoinMax(workCoinMax + 24);
        refreshWorkCoinMaxID (workCoinMax / 100);

        setCoinAmountPower(((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax).toFixed(4));
        refreshCoinAmountPower(coinAmountPower);

    }
    if (!isTalkAchievementEarned12 && talkWaitTimeMax <= achLimit25  && talkAmount >= 20) {

        setIsTalkAchievementEarned({ ID: 12, bool: true });
        refreshAchievementEarned("Reduce talk wait time max to " + achLimit25 + " | Bonus: talking is automated!");
        refreshAchievementBackground(achievementDiv25);

        calcAchPercent();

    }
    if (!isWorkAchievementEarned1 && workTotal >= achLimit12) {
        setIsWorkAchievementEarned({ ID: 1, bool: true });
        refreshAchievementEarned("Work " + achLimit12 + " times | Bonus: study is enabled!");
        refreshAchievementBackground(achievementDiv12);

        calcAchPercent();

        showStudy();
    }
    if (!isWorkAchievementEarned2 && workTotal >= achLimit13) {
        setIsWorkAchievementEarned({ ID: 2, bool: true });
        refreshAchievementEarned("Work " + achLimit13 + " times | Bonus: double SP chance: +1%");
        refreshAchievementBackground(achievementDiv13);

        calcAchPercent();

        setStudyPointsDoubleChance(studyPointsDoubleChance + 1);
        refreshStudyPointsDoubleChance(studyPointsDoubleChance);
    }
    if (!isWorkAchievementEarned3 && workTotal >= achLimit14) {
        setIsWorkAchievementEarned({ ID: 3, bool: true });
        refreshAchievementEarned("Work " + achLimit14 + " times | Bonus: double SP chance: +2%");
        refreshAchievementBackground(achievementDiv14);

        calcAchPercent();

        setStudyPointsDoubleChance(studyPointsDoubleChance + 2);
        refreshStudyPointsDoubleChance(studyPointsDoubleChance);
    }
    if (!isWorkAchievementEarned4 && workTotal >= achLimit15) {
        setIsWorkAchievementEarned({ ID: 4, bool: true });
        refreshAchievementEarned("Work " + achLimit15 + " times | Bonus: double SP chance: +3%");
        refreshAchievementBackground(achievementDiv15);

        calcAchPercent();

        setStudyPointsDoubleChance(studyPointsDoubleChance + 3);
        refreshStudyPointsDoubleChance(studyPointsDoubleChance);
    }
    if (!isWorkAchievementEarned5 && workTotal >= achLimit16) {
        setIsWorkAchievementEarned({ ID: 5, bool: true });
        refreshAchievementEarned("Work " + achLimit16 + " times | Bonus: double SP chance: +4%");
        refreshAchievementBackground(achievementDiv16);

        calcAchPercent();

        setStudyPointsDoubleChance(studyPointsDoubleChance + 4);
        refreshStudyPointsDoubleChance(studyPointsDoubleChance);
    }
    if (!isWorkAchievementEarned6 && workWaitTimeMax === achLimit17) {
        setIsWorkAchievementEarned({ ID: 6, bool: true });
        refreshAchievementEarned("Reduce work wait time max to " + achLimit17 + " | Bonus: working is automated!");
        refreshAchievementBackground(achievementDiv17);

        calcAchPercent();
    }
    if (!isStudyAchievementEarned1 && studyPointsTotalAmount >= achLimit18) {
        setIsStudyAchievementEarned({ ID: 1, bool: true });
        refreshAchievementEarned("Total Study Points: " + achLimit18 + " | Bonus: motivation is enabled!");
        refreshAchievementBackground(achievementDiv18);

        calcAchPercent();

        showMotivation();
    }
    if (!isStudyAchievementEarned2 && studyPointsTotalAmount >= achLimit19) {
        setIsStudyAchievementEarned({ ID: 2, bool: true });
        refreshAchievementEarned("Total Study Points: " + achLimit19 + " | Bonus: +2/10000 m/s");
        refreshAchievementBackground(achievementDiv19);

        calcAchPercent();

        setStudyAchievementBonus(studyAchievementBonus + 2);
    }
    if (!isStudyAchievementEarned3 && studyPointsTotalAmount >= achLimit20) {
        setIsStudyAchievementEarned({ ID: 3, bool: true });
        refreshAchievementEarned("Total Study Points: " + achLimit20 + " | Bonus: +4/10000 m/s");
        refreshAchievementBackground(achievementDiv20);

        calcAchPercent();

        setStudyAchievementBonus(studyAchievementBonus + 4);
    }
    if (!isStudyAchievementEarned4 && studyPointsTotalAmount >= achLimit21) {
        setIsStudyAchievementEarned({ ID: 4, bool: true });
        refreshAchievementEarned("Total Study Points: " + achLimit21 + " | Bonus: +6/10000 m/s");
        refreshAchievementBackground(achievementDiv21);

        calcAchPercent();

        setStudyAchievementBonus(studyAchievementBonus + 6);
    }
    if (!isStudyAchievementEarned5 && studyPointsTotalAmount >= achLimit22) {
        setIsStudyAchievementEarned({ ID: 5, bool: true });
        refreshAchievementEarned("Total Study Points: " + achLimit22 + " | Bonus: +10/10000 m/s");
        refreshAchievementBackground(achievementDiv22);

        calcAchPercent();

        setStudyAchievementBonus(studyAchievementBonus + 10);
    }
    if (!isStudyAchievementEarned6 && studyPointsTotalAmount >= achLimit23) {
        setIsStudyAchievementEarned({ ID: 6, bool: true });
        refreshAchievementEarned("Total Study Points: " + achLimit23 + " | Bonus: +12/10000 m/s");
        refreshAchievementBackground(achievementDiv23);

        calcAchPercent();

        setStudyAchievementBonus(studyAchievementBonus + 12);
    }
    if (!isStudyAchievementEarned7 && studyPointsTotalAmount >= achLimit24) {
        setIsStudyAchievementEarned({ ID: 7, bool: true });
        refreshAchievementEarned("Total Study Points: " + achLimit24 + " | Bonus: +16/10000 m/s");
        refreshAchievementBackground(achievementDiv24);

        calcAchPercent();

        setStudyAchievementBonus(studyAchievementBonus + 16);
    }
}

function calcAchPercent () {
    setAchEarnedAmount (achEarnedAmount + 1);
    setAchEarnedPercent (achEarnedAmount / achAllAmount * 100);

    refreshAchEarnedAmount(achEarnedAmount);
    refreshAchEarnedPercent(achEarnedPercent);
}