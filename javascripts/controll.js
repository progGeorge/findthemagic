import { talk, work } from "../index.js";
import { achievementItem01, achievementItem02, 
    achievementItem03, achievementItem04, 
    achievementItem05, achievementItem06 } from "./achievement.js";
import { shopItem01, shopItem02,
    shopItem03, shopItem04, shopItem05,
    shopItem06, shopItem07, shopItem08 } from "./shop.js";

const myModal = document.getElementById("myModal");

const peopleLimitDiv = document.getElementById("peopleLimitDiv");
const pplMoneyDiv = document.getElementById("pplMoneyDiv");
const shopDiv = document.getElementById("shopDiv");
const moneyDiv = document.getElementById("moneyDiv");
const resTextSpan = document.getElementById("resTextSpan");
const talkResSpan = document.getElementById("talkResSpan");
const workDiv = document.getElementById("workDiv");
const rewardTextSpan = document.getElementById("rewardTextSpan");

const resourcesDiv = document.getElementById("resourcesDiv");

const navbarGame = document.getElementById("navbarGame");
const navbarAchievements = document.getElementById("navbarAchievements");
const navbarSettings = document.getElementById("navbarSettings");

const navbars = [];
navbars.push(navbarGame, navbarAchievements, navbarSettings);

const achievementDiv = document.getElementById("achievementDiv");
const settingsDiv = document.getElementById("settingsDiv");

/*const peopleShowLimit = 1;
const workShowLimit = 1;
export const resShowLimit = 5;

const shopShowLimit = 1;
const shopButtonShowLimit01 = 1;
const shopButtonShowLimit02 = 1;
const shopButtonShowLimit03 = 1;
const shopButtonShowLimit04 = 1;
const shopButtonShowLimit05 = 1;
const shopButtonShowLimit06 = 1;
const shopButtonShowLimit07 = 1;
const shopButtonShowLimit08 = 1;*/

const peopleShowLimit = 3;
const workShowLimit = 10;
export const resShowLimit = 20;

const shopShowLimit = 3;
const shopButtonShowLimit01 = 1;
const shopButtonShowLimit02 = 5;
const shopButtonShowLimit03 = 12;
const shopButtonShowLimit04 = 25;
const shopButtonShowLimit05 = 33;
const shopButtonShowLimit06 = 46;
const shopButtonShowLimit07 = 82;
const shopButtonShowLimit08 = 133;

const navbarAchievementsShowLimit = 1;
const navbarSettingsShowLimit = 1;

const shopItemDiv01 = document.getElementById("shopItemDiv01");
const shopItemDiv02 = document.getElementById("shopItemDiv02");
const shopItemDiv03 = document.getElementById("shopItemDiv03");
const shopItemDiv04 = document.getElementById("shopItemDiv04");
const shopItemDiv05 = document.getElementById("shopItemDiv05");
const shopItemDiv06 = document.getElementById("shopItemDiv06");
const shopItemDiv07 = document.getElementById("shopItemDiv07");
const shopItemDiv08 = document.getElementById("shopItemDiv08");
const shopButton01 = document.getElementById("shopButton01");
const shopButton02 = document.getElementById("shopButton02");
const shopButton03 = document.getElementById("shopButton03");
const shopButton04 = document.getElementById("shopButton04");
const shopButton05 = document.getElementById("shopButton05");
const shopButton06 = document.getElementById("shopButton06");
const shopButton07 = document.getElementById("shopButton07");
const shopButton08 = document.getElementById("shopButton08");

export default class Controll {
    static closeModal() {
        myModal.style.display = "none";
    }

    static updateText({ domObj, value }) {
        domObj.textContent = value;
    }

    static displayDomCheck({ peopleTalked, moneyAll, moneyActual }) {
        if(peopleTalked >= workShowLimit) {
            workDiv.style.display = "block";
            moneyDiv.style.display = "block";
        }
        if(peopleTalked >= peopleShowLimit) {
            peopleLimitDiv.style.display = "block";
            pplMoneyDiv.style.display = "block";
        }
        if(peopleTalked >= resShowLimit) {
            resTextSpan.classList.remove("general");
            talkResSpan.classList.remove("general");
        }

        if(moneyAll >= shopShowLimit) {
            shopDiv.style.display = "block";
        }
    
        if(moneyActual >= shopItem01.price && !shopItem01.isBought) {
            shopButton01.style.backgroundColor = "green";
        } else if(moneyActual <= shopItem01.price && !shopItem01.isBought) {
            shopButton01.style.backgroundColor = "red";
        }
        if(moneyActual >= shopItem02.price && !shopItem02.isBought) {
            shopButton02.style.backgroundColor = "green";
        } else if(moneyActual <= shopItem02.price && !shopItem02.isBought) {
            shopButton02.style.backgroundColor = "red";
        }
        if(moneyActual >= shopItem03.price && !shopItem03.isBought) {
            shopButton03.style.backgroundColor = "green";
        } else if(moneyActual <= shopItem03.price && !shopItem03.isBought) {
            shopButton03.style.backgroundColor = "red";
        }
        if(moneyActual >= shopItem04.price && !shopItem04.isBought) {
            shopButton04.style.backgroundColor = "green";
        } else if(moneyActual <= shopItem04.price && !shopItem04.isBought) {
            shopButton04.style.backgroundColor = "red";
        }
        if(moneyActual >= shopItem05.price && !shopItem05.isBought) {
            shopButton05.style.backgroundColor = "green";
        } else if(moneyActual <= shopItem05.price && !shopItem05.isBought) {
            shopButton05.style.backgroundColor = "red";
        }
        if(moneyActual >= shopItem06.price && !shopItem06.isBought) {
            shopButton06.style.backgroundColor = "green";
        } else if(moneyActual <= shopItem06.price && !shopItem06.isBought) {
            shopButton06.style.backgroundColor = "red";
        }
        if(moneyActual >= shopItem07.price && !shopItem07.isBought) {
            shopButton07.style.backgroundColor = "green";
        } else if(moneyActual <= shopItem07.price && !shopItem07.isBought) {
            shopButton07.style.backgroundColor = "red";
        }
        if(moneyActual >= shopItem08.price && !shopItem08.isBought) {
            shopButton08.style.backgroundColor = "green";
        } else if(moneyActual <= shopItem08.price && !shopItem08.isBought) {
            shopButton08.style.backgroundColor = "red";
        }
        if(moneyAll >= shopButtonShowLimit01 && !shopItem01.isBought) {
            shopItemDiv01.style.display = "block";
        }
        if(moneyAll >= shopButtonShowLimit02 && !shopItem02.isBought) {
            shopItemDiv02.style.display = "block";
        }
        if(moneyAll >= shopButtonShowLimit03 && !shopItem03.isBought) {
            shopItemDiv03.style.display = "block";
        }
        if(moneyAll >= shopButtonShowLimit04 && !shopItem04.isBought) {
            shopItemDiv04.style.display = "block";
        }
        if(moneyAll >= shopButtonShowLimit05 && !shopItem05.isBought) {
            shopItemDiv05.style.display = "block";
        }
        if(moneyAll >= shopButtonShowLimit06 && !shopItem03.isBought) {
            shopItemDiv06.style.display = "block";
        }
        if(moneyAll >= shopButtonShowLimit07 && !shopItem04.isBought) {
            shopItemDiv07.style.display = "block";
        }
        if(moneyAll >= shopButtonShowLimit08 && !shopItem05.isBought) {
            shopItemDiv08.style.display = "block";
        }
    
        if(moneyAll >= navbarAchievementsShowLimit) {
            navbarAchievements.style.display = "block";
        }
        if(moneyAll >= navbarSettingsShowLimit) {
            navbarSettings.style.display = "block";
        }

        if(moneyAll >= achievementItem01.earnLimit && !achievementItem01.isEarned) {
            achievementItem01.isEarned = true;
            work.workPower += 0.05;

            let that = this;
            let workPowerText = work.workPower.toFixed(2).toString();

            that.setAchEarnedColor(achievementItem01.domObj);
            that.updateText({ domObj: workPowerSpan, value: workPowerText });
        }
        if(moneyAll >= achievementItem02.earnLimit && !achievementItem02.isEarned) {
            achievementItem02.isEarned = true;
            work.workPower += 0.1;

            let that = this;
            let workPowerText = work.workPower.toFixed(2).toString();

            that.setAchEarnedColor(achievementItem02.domObj);
            that.updateText({ domObj: workPowerSpan, value: workPowerText });
        }
        if(moneyAll >= achievementItem03.earnLimit && !achievementItem03.isEarned) {
            achievementItem03.isEarned = true;
            work.workPower += 0.15;

            let that = this;
            let workPowerText = work.workPower.toFixed(2).toString();
            
            that.setAchEarnedColor(achievementItem03.domObj);
            that.updateText({ domObj: workPowerSpan, value: workPowerText });
        }
        if(moneyAll >= achievementItem04.earnLimit && !achievementItem04.isEarned) {
            achievementItem04.isEarned = true;
            work.workPower += 0.2;

            let that = this;
            let workPowerText = work.workPower.toFixed(2).toString();

            that.setAchEarnedColor(achievementItem04.domObj);
            that.updateText({ domObj: workPowerSpan, value: workPowerText });
        }
        if(moneyAll >= achievementItem05.earnLimit && !achievementItem05.isEarned) {
            achievementItem05.isEarned = true;
            work.workPower += 0.15;

            let that = this;
            let workPowerText = work.workPower.toFixed(2).toString();
            
            that.setAchEarnedColor(achievementItem05.domObj);
            that.updateText({ domObj: workPowerSpan, value: workPowerText });
        }
        if(peopleTalked >= achievementItem06.earnLimit && !achievementItem06.isEarned) {
            achievementItem06.isEarned = true;
            talk.talkResistanceMin += 1;

            let that = this;
            let talkResistanceText = (100 - talk.talkResistanceMin / talk.talkResistanceMax * 100).toFixed(2).toString();

            that.setAchEarnedColor(achievementItem06.domObj);
            that.updateText({ domObj: resValueSpan, value: talkResistanceText });
        }
    }

    static setAchEarnedColor(domObj) {
        domObj.style.backgroundColor = "green";
        domObj.style.border = "2px solid darkgreen";
    }

    static achRewardDisplay(text) {
        rewardTextSpan.textContent = text;
    }

    static displayNone(domObj) {
        domObj.style.display = "none";
    }
    
    static displayBlock(domObj) {
        domObj.style.display = "block";
    }
    
    static navbarDisplay(domObj) {
        let that = this;
        navbars.forEach(navbarElement => {
            if(navbarElement === domObj) {
                navbarElement.classList.add('active');
            } else {
                navbarElement.classList.remove('active');
            }
        });
        if(domObj === navbarGame) {
            that.displayBlock(resourcesDiv);
            that.displayNone(achievementDiv);
            that.displayNone(settingsDiv);
        }
        if(domObj === navbarAchievements) {
            that.displayBlock(achievementDiv);
            that.displayNone(resourcesDiv);
            that.displayNone(settingsDiv);
        }
        if(domObj === navbarSettings) {
            that.displayBlock(settingsDiv);
            that.displayNone(resourcesDiv);
            that.displayNone(achievementDiv);
        }
    }

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}