export default class AchievementItem {
    constructor({ domObj, earnLimit, isEarned = false }) {
        this.domObj = domObj;
        this.earnLimit = earnLimit;
        this.isEarned = isEarned;
    }
}

const achievementDiv01 = document.getElementById("achievementDiv01");
const achievementDiv02 = document.getElementById("achievementDiv02");
const achievementDiv03 = document.getElementById("achievementDiv03");
const achievementDiv04 = document.getElementById("achievementDiv04");
const achievementDiv05 = document.getElementById("achievementDiv05");
const achievementDiv06 = document.getElementById("achievementDiv06");

const achievementEarnLimit01 = 10;
const achievementEarnLimit02 = 100;
const achievementEarnLimit03 = 1000;
const achievementEarnLimit04 = 10000;
const achievementEarnLimit05 = 100000;
const achievementEarnLimit06 = 20;
/*const achievementEarnLimit01 = 1;
const achievementEarnLimit02 = 2;
const achievementEarnLimit03 = 3;
const achievementEarnLimit04 = 4;
const achievementEarnLimit05 = 5;
const achievementEarnLimit06 = 1;*/

export let achievementItem01 = new AchievementItem(
    {
        domObj: achievementDiv01, 
        earnLimit: achievementEarnLimit01
    });
export let achievementItem02 = new AchievementItem(
    {
        domObj: achievementDiv02, 
        earnLimit: achievementEarnLimit02
    });
export let achievementItem03 = new AchievementItem(
    {
        domObj: achievementDiv03, 
        earnLimit: achievementEarnLimit03
    });
export let achievementItem04 = new AchievementItem(
    {
        domObj: achievementDiv04, 
        earnLimit: achievementEarnLimit04
    });

export let achievementItem05 = new AchievementItem(
    {
        domObj: achievementDiv05, 
        earnLimit: achievementEarnLimit05
    });
export let achievementItem06 = new AchievementItem(
    {
        domObj: achievementDiv06, 
        earnLimit: achievementEarnLimit06
    });