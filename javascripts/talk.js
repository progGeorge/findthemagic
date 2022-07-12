import Controll from "./controll.js";
import { resShowLimit } from "./controll.js";
import { work } from "../index.js";

const peopleTalkedSpan = document.getElementById("peopleTalkedSpan");
const talkPowerSpan = document.getElementById("talkPowerSpan");

const peopleLimit = 8000000000;

export default class Talk {
    constructor({
        peopleTalked = 0, 
        talkPower = 1,
        game,
        isTalkingAutomated = false,
        talkingInterval = "",
        talkResistanceMin = 1,
        talkResistanceMax = 10000,
    }) {
        this.peopleTalked = peopleTalked;
        this.talkPower = talkPower;
        this.isTalking = game.isTalking;
        this.isWorking = game.isWorking;
        this.isTalkingAutomated = isTalkingAutomated;
        this.talkingInterval = talkingInterval;
        this.talkResistanceMin = talkResistanceMin;
        this.talkResistanceMax = talkResistanceMax;
    }

    talkAutomation() {
        if(!this.isTalkingAutomated) {
            if(work.isWorkingAutomated) {
                document.getElementById("workAutomationButton").checked = false;
                work.workAutomation();
            }

            this.isTalkingAutomated = true;

            let that = this;
            this.talkingInterval = setInterval(function() {
                that.talkCalculation()}
                , 1000);
        } else if(this.isTalkingAutomated) {
            this.isTalkingAutomated = false;
            clearInterval(this.talkingInterval);
            this.talkingInterval = "";
        }
    }

    talkCalculation() {
        if(this.peopleTalked < resShowLimit) {
            this.peopleTalked += this.talkPower;
        } else if(Controll.getRandomInt(1, this.talkResistanceMax) <= this.talkResistanceMin) {
            this.peopleTalked += this.talkPower;
        }
        

        let peopleTalkedText = this.peopleTalked.toFixed(2).toString();
        let talkPowerText = this.talkPower.toFixed(2).toString();

        Controll.updateText({ domObj: peopleTalkedSpan, value: peopleTalkedText });
        Controll.updateText({ domObj: talkPowerSpan, value: talkPowerText });

        Controll.displayDomCheck({ peopleTalked: this.peopleTalked });
    }
}