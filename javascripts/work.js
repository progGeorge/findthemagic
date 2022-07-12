import Controll from "./controll.js";
import { talk } from "../index.js";

const moneySpan = document.getElementById("moneySpan");
const moneyTotalSpan = document.getElementById("moneyTotalSpan");
const workPowerSpan = document.getElementById("workPowerSpan");

export default class Work {
    constructor({
        moneyActual = 0,
        moneyAll = 0,
        workPower = 0.1,
        game,
        isWorkingAutomated = false,
        moneyInterval = ""
    }) {
        this.moneyActual = moneyActual;
        this.moneyAll = moneyAll;
        this.workPower = workPower;
        this.isTalking = game.isTalking;
        this.isWorking = game.isWorking;
        this.isWorkingAutomated = isWorkingAutomated;
        this.moneyInterval = moneyInterval;
    }

    workAutomation() {
        if(!this.isWorkingAutomated) {
            if(talk.isTalkingAutomated) {
                document.getElementById("talkAutomationButton").checked = false;
                talk.talkAutomation();
            }
            this.isWorkingAutomated = true;

            let that = this;
            this.moneyInterval = setInterval(function() {
                that.moneyAutomation()}
                , 1000);
        } else if(this.isWorkingAutomated) {
            this.isWorkingAutomated = false;
            clearInterval(this.moneyInterval);
            this.moneyInterval = "";
        }
    }

    moneyAutomation() {
        this.moneyActual += this.workPower;
        this.moneyAll += this.workPower;

        let moneyActualText = this.moneyActual.toFixed(2).toString();
        let moneyTotalText = this.moneyAll.toFixed(2).toString();
        let workPowerText = this.workPower.toFixed(2).toString();
        Controll.updateText({ domObj: moneySpan, value: moneyActualText });
        Controll.updateText({ domObj: moneyTotalSpan, value: moneyTotalText });
        Controll.updateText({ domObj: workPowerSpan, value: workPowerText });

        Controll.displayDomCheck({ moneyAll: this.moneyAll });
        Controll.displayDomCheck({ moneyActual: this.moneyActual });
    }
} 