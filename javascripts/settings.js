import { talk } from "../index.js";
import { work } from "../index.js";
import { shopItem01, shopItem02,
    shopItem03, shopItem04, shopItem05,
    shopItem06, shopItem07, shopItem08 } from "./shop.js";
import Controll from "./controll.js";
import { achievementItem01, achievementItem02, 
    achievementItem03, achievementItem04, 
    achievementItem05, achievementItem06 } from "./achievement.js";

const shopItems = [
    shopItem01, shopItem02, shopItem03, shopItem04, shopItem05, 
    shopItem06, shopItem07, shopItem08
];

const achievementItems = [ 
    achievementItem01, achievementItem02, achievementItem03, 
    achievementItem04, achievementItem05, achievementItem06
];

export function save() {
    let saveObj = {
        talk: talk,
        work: work, 
        shopItems: shopItems,
        achievementItems: achievementItems
    }

    localStorage.setItem("save", JSON.stringify(saveObj));
}

export function load() {
    if(JSON.parse(localStorage.getItem("save")) !== null){
        let savegame = JSON.parse(localStorage.getItem("save"));
    
        if (typeof savegame.talk !== "undefined") {
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
        Controll.displayDomCheck({ moneyActual: work.moneyActual });
    }
}

let autoSaveInterval = "";

export function autoSave() {
    autoSaveInterval = setInterval(save, 30000);
}

export function deleteSave() {
    if(confirm("are you really want to delete all data?")) {
        localStorage.removeItem("save");
        document.getElementById("talkAutomationButton").checked = false;
        document.getElementById("workAutomationButton").checked = false;
        location.reload();
    }
}
