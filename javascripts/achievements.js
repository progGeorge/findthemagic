import { talkAmount, workCoinMax, setCoinMax, achEarnedAmount, achAllAmount, 
    achEarnedPercent, setAchEarnedAmount, setAchEarnedPercent, isTalkAchievementEarned1, 
    isTalkAchievementEarned2, isTalkAchievementEarned3, isTalkAchievementEarned4, 
    isTalkAchievementEarned5, isTalkAchievementEarned6, isTalkAchievementEarned7, 
    isTalkAchievementEarned8, isTalkAchievementEarned9, isTalkAchievementEarned10, 
    isTalkAchievementEarned11, setIsTalkAchievementEarned, workTotal, 
    isWorkAchievementEarned1, isWorkAchievementEarned2, isWorkAchievementEarned3, 
    isWorkAchievementEarned4, isWorkAchievementEarned5, isWorkAchievementEarned6, 
    setIsWorkAchievementEarned, talkTotal, workWaitTimeMax, studyPointsTotalAmount, 
    isStudyAchievementEarned1, isStudyAchievementEarned2, isStudyAchievementEarned3, 
    isStudyAchievementEarned4, isStudyAchievementEarned5, isStudyAchievementEarned6, 
    isStudyAchievementEarned7, setIsStudyAchievementEarned, achLimit1, achLimit2, 
    achLimit3, achLimit4, achLimit5, achLimit6, achLimit7, achLimit8, achLimit9, 
    achLimit10, achLimit11, achLimit12, achLimit13, achLimit14, achLimit15, achLimit16, 
    achLimit17, achLimit18, achLimit19, achLimit20, achLimit21, achLimit22, achLimit23, 
    achLimit24, achLimit25, achLimit26, achLimit27, achLimit28, achLimit29, achLimit30, 
    achLimit31, achLimit32, achLimit33, achLimit34, achLimit35, achLimit36, achLimit37, 
    achLimit38, achLimit39, achLimit40, achLimit41, achLimit42, achLimit43,
    setStudyPointsDoubleChance, studyPointsDoubleChance, studyAchievementBonus, 
    setStudyAchievementBonus, workCoinMin, setCoinAmountPower, coinAmountPower, 
    talkWaitTimeMax, isTalkAchievementEarned12, setIsShardAchievementEarned, shardWork, 
    shardSP, shardMotivation, setShardWorkAchievementBonus1, setShopAmount, shopAmount05C,
    shopAmount06C, isShardAchievementEarned1, isShardAchievementEarned2, isShardAchievementEarned3, 
    isShardAchievementEarned4, isShardAchievementEarned5, isShardAchievementEarned6, 
    isShardAchievementEarned7, isShardAchievementEarned8, isShardAchievementEarned9, 
    isShardAchievementEarned10, isShardAchievementEarned11, isShardAchievementEarned12, 
    isShardAchievementEarned13, isShardAchievementEarned14, isShardAchievementEarned15, 
    isShardAchievementEarned16, isShardAchievementEarned17, isShardAchievementEarned18, 
    setShardWorkAchievementBonus2, shardWorkAchievementBonus2, setShardSPAchievementBonus1,
    shopAmount01SP, setShardSPAchievementBonus2, setShardSPAchievementBonus3,
    setShardSPAchievementBonus4, shopAmount02SP, shopAmount03SP, shopAmount04SP,
    setStudyPointsAmountLimitBase, setStudyPointsAmountLimit, studyPointsAmountLimit,
    setMotivationSPRatio, motivationSPRatio, motivationLevel, setStudyPointsPower,
    baseStudyPointsPower, studyPointsPower, setMotivationLevelUpCost, motivationLevelUpCost, 
    setShardMotivationAchievementBonus1, setMotivationPower, shardMotivationAchievementBonus1, 
    motivationPower, motivationAmount, motivationLimits, studyPointsAmount, shopAmount08C,
    shopAmount09C, shopAmount10C, shopAmount11C } from "./resources.js";
import { refreshAchievementEarned, refreshAchievementBackground, showWork, 
    refreshWorkCoinMaxID, refreshAchEarnedAmount, refreshAchEarnedPercent, showStudy, 
    showMotivation, refreshStudyPointsDoubleChance, showTraveling, refreshCoinAmountPower, 
    showShopTalkDiv, refreshShopAmountID, refreshStudyPointsAmountLimit, refreshMotivationSPRatio, 
    refreshMotivationSPBonus, refreshStudyPointsPower, refreshMotivationLevelUpCost, refreshMotivationPower, refreshButtonBackground } from "./display.js";

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
const motivationLevelUpButton = document.getElementById("motivationLevelUpButton");

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
        refreshAchievementEarned("Talk with " + achLimit3 + " people | Bonus: traveling is enabled");
        refreshAchievementBackground(achievementDiv03);

        calcAchPercent();

        showTraveling();

    }
    if (!isTalkAchievementEarned4 && talkAmount >= achLimit4 ) {

        setIsTalkAchievementEarned({ ID: 4, bool: true });
        refreshAchievementEarned("Talk with " + achLimit4 + " people | Bonus: +0.16 max coins");
        refreshAchievementBackground(achievementDiv04);

        calcAchPercent();

        setCoinMax(workCoinMax + 8);
        refreshWorkCoinMaxID (workCoinMax / 100);

        setCoinAmountPower(((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax).toFixed(4));
        refreshCoinAmountPower(coinAmountPower);
        
    }
    if (!isTalkAchievementEarned5 && talkAmount >= achLimit5 ) {

        setIsTalkAchievementEarned({ ID: 5, bool: true });
        refreshAchievementEarned("Talk with " + achLimit5 + " people | Bonus: +0.32 max coins");
        refreshAchievementBackground(achievementDiv05);

        calcAchPercent();

        setCoinMax(workCoinMax + 16);
        refreshWorkCoinMaxID (workCoinMax / 100);

        setCoinAmountPower(((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax).toFixed(4));
        refreshCoinAmountPower(coinAmountPower);
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
        refreshAchievementEarned("Total Study Points: " + achLimit19 + " | Bonus: +2/10000 M/s");
        refreshAchievementBackground(achievementDiv19);

        calcAchPercent();

        setStudyAchievementBonus(studyAchievementBonus + 2);
    }
    if (!isStudyAchievementEarned3 && studyPointsTotalAmount >= achLimit20) {
        setIsStudyAchievementEarned({ ID: 3, bool: true });
        refreshAchievementEarned("Total Study Points: " + achLimit20 + " | Bonus: +4/10000 M/s");
        refreshAchievementBackground(achievementDiv20);

        calcAchPercent();

        setStudyAchievementBonus(studyAchievementBonus + 4);
    }
    if (!isStudyAchievementEarned4 && studyPointsTotalAmount >= achLimit21) {
        setIsStudyAchievementEarned({ ID: 4, bool: true });
        refreshAchievementEarned("Total Study Points: " + achLimit21 + " | Bonus: +6/10000 M/s");
        refreshAchievementBackground(achievementDiv21);

        calcAchPercent();

        setStudyAchievementBonus(studyAchievementBonus + 6);
    }
    if (!isStudyAchievementEarned5 && studyPointsTotalAmount >= achLimit22) {
        setIsStudyAchievementEarned({ ID: 5, bool: true });
        refreshAchievementEarned("Total Study Points: " + achLimit22 + " | Bonus: +10/10000 M/s");
        refreshAchievementBackground(achievementDiv22);

        calcAchPercent();

        setStudyAchievementBonus(studyAchievementBonus + 10);
    }
    if (!isStudyAchievementEarned6 && studyPointsTotalAmount >= achLimit23) {
        setIsStudyAchievementEarned({ ID: 6, bool: true });
        refreshAchievementEarned("Total Study Points: " + achLimit23 + " | Bonus: +12/10000 M/s");
        refreshAchievementBackground(achievementDiv23);

        calcAchPercent();

        setStudyAchievementBonus(studyAchievementBonus + 12);
    }
    if (!isStudyAchievementEarned7 && studyPointsTotalAmount >= achLimit24) {
        setIsStudyAchievementEarned({ ID: 7, bool: true });
        refreshAchievementEarned("Total Study Points: " + achLimit24 + " | Bonus: +16/10000 M/s");
        refreshAchievementBackground(achievementDiv24);

        calcAchPercent();

        setStudyAchievementBonus(studyAchievementBonus + 16);
    }
    if (!isShardAchievementEarned1 && shardWork >= achLimit26) {
        setIsShardAchievementEarned({ ID: 1, bool: true });
        refreshAchievementEarned("Earn " + achLimit26 + " Work Shard | Bonus: -10% Coin price in shop");
        refreshAchievementBackground(achievementDiv26);

        calcAchPercent();

        setShardWorkAchievementBonus1(0.9);
        setShopAmount(5);
        setShopAmount(6);
        setShopAmount(8);
        setShopAmount(9);
        setShopAmount(10);
        setShopAmount(11);
        refreshShopAmountID({ ID: 5, shopAmount: shopAmount05C });
        refreshShopAmountID({ ID: 6, shopAmount: shopAmount06C });
        refreshShopAmountID({ ID: 8, shopAmount: shopAmount08C });
        refreshShopAmountID({ ID: 9, shopAmount: shopAmount09C });
        refreshShopAmountID({ ID: 10, shopAmount: shopAmount10C });
        refreshShopAmountID({ ID: 11, shopAmount: shopAmount11C });
    }
    if (!isShardAchievementEarned2 && shardWork >= achLimit27) {
        setIsShardAchievementEarned({ ID: 2, bool: true });
        refreshAchievementEarned("Earn " + achLimit27 + " Work Shard | Bonus: -15% Coin price in shop");
        refreshAchievementBackground(achievementDiv27);

        calcAchPercent();

        setShardWorkAchievementBonus1(0.85);
        setShopAmount(5);
        setShopAmount(6);
        setShopAmount(8);
        setShopAmount(9);
        setShopAmount(10);
        setShopAmount(11);
        refreshShopAmountID({ ID: 5, shopAmount: shopAmount05C });
        refreshShopAmountID({ ID: 6, shopAmount: shopAmount06C });
        refreshShopAmountID({ ID: 8, shopAmount: shopAmount08C });
        refreshShopAmountID({ ID: 9, shopAmount: shopAmount09C });
        refreshShopAmountID({ ID: 10, shopAmount: shopAmount10C });
        refreshShopAmountID({ ID: 11, shopAmount: shopAmount11C });
    }
    if (!isShardAchievementEarned3 && shardWork >= achLimit28) {
        setIsShardAchievementEarned({ ID: 3, bool: true });
        refreshAchievementEarned("Earn " + achLimit28 + " Work Shard | Bonus: -20% Coin price in shop");
        refreshAchievementBackground(achievementDiv28);

        calcAchPercent();

        setShardWorkAchievementBonus1(0.8);
        setShopAmount(5);
        setShopAmount(6);
        setShopAmount(8);
        setShopAmount(9);
        setShopAmount(10);
        setShopAmount(11);
        refreshShopAmountID({ ID: 5, shopAmount: shopAmount05C });
        refreshShopAmountID({ ID: 6, shopAmount: shopAmount06C });
        refreshShopAmountID({ ID: 8, shopAmount: shopAmount08C });
        refreshShopAmountID({ ID: 9, shopAmount: shopAmount09C });
        refreshShopAmountID({ ID: 10, shopAmount: shopAmount10C });
        refreshShopAmountID({ ID: 11, shopAmount: shopAmount11C });
    }
    if (!isShardAchievementEarned4 && shardWork >= achLimit29) {
        setIsShardAchievementEarned({ ID: 4, bool: true });
        refreshAchievementEarned("Earn " + achLimit29 + " Work Shard | Bonus: +10% Coin/s");
        refreshAchievementBackground(achievementDiv29);

        calcAchPercent();

        setShardWorkAchievementBonus2(1.1);
        setCoinAmountPower(((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax * shardWorkAchievementBonus2).toFixed(4));
        refreshCoinAmountPower(coinAmountPower);
    }
    if (!isShardAchievementEarned5 && shardWork >= achLimit30) {
        setIsShardAchievementEarned({ ID: 5, bool: true });
        refreshAchievementEarned("Earn " + achLimit30 + " Work Shard | Bonus: +15% Coin/s");
        refreshAchievementBackground(achievementDiv30);

        calcAchPercent();

        setShardWorkAchievementBonus2(1.15);
        setCoinAmountPower(((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax * shardWorkAchievementBonus2).toFixed(4));
        refreshCoinAmountPower(coinAmountPower);
    }
    if (!isShardAchievementEarned6 && shardWork >= achLimit31) {
        setIsShardAchievementEarned({ ID: 6, bool: true });
        refreshAchievementEarned("Earn " + achLimit31 + " Work Shard | Bonus: +20% Coin/s");
        refreshAchievementBackground(achievementDiv31);

        calcAchPercent();

        setShardWorkAchievementBonus2(1.2);
        setCoinAmountPower(((workCoinMin + workCoinMax) / 2 / 100 / workWaitTimeMax * shardWorkAchievementBonus2).toFixed(4));
        refreshCoinAmountPower(coinAmountPower);
    }
    if (!isShardAchievementEarned7 && shardSP >= achLimit32) {
        setIsShardAchievementEarned({ ID: 7, bool: true });
        refreshAchievementEarned("Earn " + achLimit32 + " SP Shard | Bonus: -10% work sec price");
        refreshAchievementBackground(achievementDiv32);

        calcAchPercent();

        setShardSPAchievementBonus3(0.9);
        setShopAmount(3);
        refreshShopAmountID({ ID: 3, shopAmount: shopAmount03SP });
    }
    if (!isShardAchievementEarned8 && shardSP >= achLimit33) {
        setIsShardAchievementEarned({ ID: 8, bool: true });
        refreshAchievementEarned("Earn " + achLimit33 + " SP Shard | Bonus: -10% min coin price");
        refreshAchievementBackground(achievementDiv33);

        calcAchPercent();

        setShardSPAchievementBonus1(0.9);
        setShopAmount(1);
        refreshShopAmountID({ ID: 1, shopAmount: shopAmount01SP });
    }
    if (!isShardAchievementEarned9 && shardSP >= achLimit34) {
        setIsShardAchievementEarned({ ID: 9, bool: true });
        refreshAchievementEarned("Earn " + achLimit34 + " SP Shard | Bonus: -10% max coin price");
        refreshAchievementBackground(achievementDiv34);

        calcAchPercent();

        setShardSPAchievementBonus2(0.9);
        setShopAmount(2);
        refreshShopAmountID({ ID: 2, shopAmount: shopAmount02SP });
    }
    if (!isShardAchievementEarned10 && shardSP >= achLimit35) {
        setIsShardAchievementEarned({ ID: 10, bool: true });
        refreshAchievementEarned("Earn " + achLimit35 + " SP Shard | Bonus: -10% double coin price");
        refreshAchievementBackground(achievementDiv35);

        calcAchPercent();

        setShardSPAchievementBonus4(0.9);
        setShopAmount(4);
        refreshShopAmountID({ ID: 4, shopAmount: shopAmount04SP });
    }
    if (!isShardAchievementEarned11 && shardSP >= achLimit36) {
        setIsShardAchievementEarned({ ID: 11, bool: true });
        refreshAchievementEarned("Earn " + achLimit36 + " SP Shard | Bonus: +10% double SP chance");
        refreshAchievementBackground(achievementDiv36);

        calcAchPercent();

        setStudyPointsDoubleChance(studyPointsDoubleChance + 10);
        refreshStudyPointsDoubleChance(studyPointsDoubleChance);
    }
    if (!isShardAchievementEarned12 && shardSP >= achLimit37) {
        setIsShardAchievementEarned({ ID: 12, bool: true });
        refreshAchievementEarned("Earn " + achLimit37 + " SP Shard | Bonus: SP limit 2 -> 4");
        refreshAchievementBackground(achievementDiv37);

        calcAchPercent();

        setStudyPointsAmountLimitBase(4);
        setStudyPointsAmountLimit();
        refreshStudyPointsAmountLimit(studyPointsAmountLimit);
    }
    if (!isShardAchievementEarned13 && shardMotivation >= achLimit38) {
        setIsShardAchievementEarned({ ID: 13, bool: true });
        refreshAchievementEarned("Earn " + achLimit38 + " Motivation Shard | Bonus: -4 motivation ratio reduction");
        refreshAchievementBackground(achievementDiv38);

        calcAchPercent();

        setMotivationSPRatio(motivationSPRatio - 4);
        refreshMotivationSPRatio(motivationSPRatio);

        refreshMotivationSPBonus(motivationLevel / motivationSPRatio);

        setStudyPointsPower(baseStudyPointsPower + motivationLevel / motivationSPRatio);
        refreshStudyPointsPower(studyPointsPower);
    }
    if (!isShardAchievementEarned14 && shardMotivation >= achLimit39) {
        setIsShardAchievementEarned({ ID: 14, bool: true });
        refreshAchievementEarned("Earn " + achLimit39 + " Motivation Shard | Bonus: -8 motivation ratio reduction");
        refreshAchievementBackground(achievementDiv39);

        calcAchPercent();

        setMotivationSPRatio(motivationSPRatio - 8);
        refreshMotivationSPRatio(motivationSPRatio);

        refreshMotivationSPBonus(motivationLevel / motivationSPRatio);

        setStudyPointsPower(baseStudyPointsPower + motivationLevel / motivationSPRatio);
        refreshStudyPointsPower(studyPointsPower);
    }
    if (!isShardAchievementEarned15 && shardMotivation >= achLimit40) {
        setIsShardAchievementEarned({ ID: 15, bool: true });
        refreshAchievementEarned("Earn " + achLimit40 + " Motivation Shard | Bonus: -12 motivation ratio reduction");
        refreshAchievementBackground(achievementDiv40);

        calcAchPercent();

        setMotivationSPRatio(motivationSPRatio - 12);
        refreshMotivationSPRatio(motivationSPRatio);

        refreshMotivationSPBonus(motivationLevel / motivationSPRatio);

        setStudyPointsPower(baseStudyPointsPower + motivationLevel / motivationSPRatio);
        refreshStudyPointsPower(studyPointsPower);
    }
    if (!isShardAchievementEarned16 && shardMotivation >= achLimit41) {
        setIsShardAchievementEarned({ ID: 16, bool: true });
        refreshAchievementEarned("Earn " + achLimit41 + " Motivation Shard | Bonus: -16 motivation ratio reduction");
        refreshAchievementBackground(achievementDiv41);

        calcAchPercent();

        setMotivationSPRatio(motivationSPRatio - 16);
        refreshMotivationSPRatio(motivationSPRatio);

        refreshMotivationSPBonus(motivationLevel / motivationSPRatio);

        setStudyPointsPower(baseStudyPointsPower + motivationLevel / motivationSPRatio);
        refreshStudyPointsPower(studyPointsPower);
    }
    if (!isShardAchievementEarned17 && shardMotivation >= achLimit42) {
        setIsShardAchievementEarned({ ID: 17, bool: true });
        refreshAchievementEarned("Earn " + achLimit42 + " Motivation Shard | Bonus: Motivation Level UP price -50%");
        refreshAchievementBackground(achievementDiv42);

        calcAchPercent();

        setMotivationLevelUpCost();
        refreshMotivationLevelUpCost(motivationLevelUpCost);

        if (motivationAmount >= motivationLimits[motivationLevel] && motivationLevelUpCost <= studyPointsAmount) {
            refreshButtonBackground({ domObj: motivationLevelUpButton, color: "green" });
        }
    }
    if (!isShardAchievementEarned18 && shardMotivation >= achLimit43) {
        setIsShardAchievementEarned({ ID: 18, bool: true });
        refreshAchievementEarned("Earn " + achLimit43 + " Motivation Shard | Bonus: +10% M/sec");
        refreshAchievementBackground(achievementDiv43);

        calcAchPercent();

        setShardMotivationAchievementBonus1(1.1);

        setMotivationPower((studyAchievementBonus + talkAmount) / 10000 * shardMotivationAchievementBonus1);
        refreshMotivationPower(motivationPower);
    }
}

function calcAchPercent () {
    setAchEarnedAmount (achEarnedAmount + 1);
    setAchEarnedPercent (achEarnedAmount / achAllAmount * 100);

    refreshAchEarnedAmount(achEarnedAmount);
    refreshAchEarnedPercent(achEarnedPercent);
}