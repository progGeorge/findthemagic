import Controll from "./controll.js";

const researchPointSpan = document.getElementById("researchPointSpan");
const researchLimitSpan = document.getElementById("researchLimitSpan");

export default class Research {
    constructor({ 
        researchPoint = 0,
        researchPower = 0.1,
        researchLimit = 1,
        researchLimitMultiplier = 1.1,
        researchLevel = 0,
        researchInterval = ""
     }) {
        this.researchPoint = researchPoint;
        this.researchPower = researchPower;
        this.researchLimit = researchLimit;
        this.researchLimitMultiplier = researchLimitMultiplier;
        this.researchLevel = researchLevel;
        this.researchInterval = researchInterval;
    }

    startResearch() {
        let that = this;
        this.researchInterval = setInterval(function() {
            that.research()}
            , 1000);
    }

    research() {
        if(this.researchPoint + this.researchPower >= this.researchLimit) {
            this.researchPoint = this.researchPoint + this.researchPower - this.researchLimit;
            this.researchLimit *= this.researchLimitMultiplier;
        } else {
            this.researchPoint += this.researchPower;
        }
        
        this.researchPoint = Math.round(this.researchPoint * 1000000) / 1000000;
        this.researchLimit = Math.round(this.researchLimit * 1000000) / 1000000;

        Controll.updateText({ domObj: researchPointSpan, value: this.researchPoint });
        Controll.updateText({ domObj: researchLimitSpan, value: this.researchLimit });
    }
}