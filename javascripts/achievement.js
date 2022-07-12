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



const achievementEarnLimit01 = 10;
const achievementEarnLimit02 = 100;
const achievementEarnLimit03 = 1000;
/*const achievementEarnLimit01 = 1;
const achievementEarnLimit02 = 1;
const achievementEarnLimit03 = 1;*/

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