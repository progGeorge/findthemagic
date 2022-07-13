import Controll from "./controll.js";
import { talk } from "../index.js";
import { work } from "../index.js";

const resValueSpan = document.getElementById("resValueSpan");
const moneySpan = document.getElementById("moneySpan");
const workPowerSpan = document.getElementById("workPowerSpan");

const shopItemDiv01 = document.getElementById("shopItemDiv01");
const shopItemDiv02 = document.getElementById("shopItemDiv02");
const shopItemDiv03 = document.getElementById("shopItemDiv03");
const shopItemDiv04 = document.getElementById("shopItemDiv04");
const shopItemDiv05 = document.getElementById("shopItemDiv05");
const shopItemDiv06 = document.getElementById("shopItemDiv06");
const shopItemDiv07 = document.getElementById("shopItemDiv07");
const shopItemDiv08 = document.getElementById("shopItemDiv08");

export default class ShopItem {
    constructor({ domObj, price, talk = 0, talkResistanceMinIncrease = 0, pay = 0, isBought = false }) {
        this.domObj = domObj;
        this.price = price;
        this.talk = talk;
        this.talkResistanceMinIncrease = talkResistanceMinIncrease;
        this.pay = pay;
        this.isBought = isBought;
    }

    static shop(shopItem) {
        if(work.moneyActual >= shopItem.price && shopItem.isBought === false){
            work.moneyActual -= shopItem.price;
    
            talk.talkPower += shopItem.talk;
            talk.talkResistanceMin += shopItem.talkResistanceMinIncrease;
            work.workPower += shopItem.pay;

            shopItem.isBought = true;
    
            Controll.displayNone(shopItem.domObj);
    
            let moneyActualText = work.moneyActual.toFixed(2).toString();
            let talkResistanceText = (100 - talk.talkResistanceMin / talk.talkResistanceMax * 100).toFixed(2).toString();
            let workPowerText = work.workPower.toFixed(2).toString();
            Controll.updateText({ domObj: moneySpan, value: moneyActualText });
            Controll.updateText({ domObj: resValueSpan, value: talkResistanceText });
            Controll.updateText({ domObj: workPowerSpan, value: workPowerText });
            Controll.displayDomCheck({ moneyActual: work.moneyActual });
        }
    }
}

/*const shopItemPrice01 = 1;
const shopItemPrice02 = 1;
const shopItemPrice03 = 1;
const shopItemPrice04 = 1;
const shopItemPrice05 = 1;
const shopItemPrice06 = 1;
const shopItemPrice07 = 1;
const shopItemPrice08 = 1;*/

const shopItemPrice01 = 3;
const shopItemPrice02 = 8;
const shopItemPrice03 = 18;
const shopItemPrice04 = 33;
const shopItemPrice05 = 48;
const shopItemPrice06 = 60;
const shopItemPrice07 = 105;
const shopItemPrice08 = 162;



export let shopItem01 = new ShopItem(
    {
        domObj: shopItemDiv01, 
        price: shopItemPrice01, 
        pay: 0.1 
    });
export let shopItem02 = new ShopItem(
    {
        domObj: shopItemDiv02, 
        price: shopItemPrice02, 
        pay: 0.1 
    }); 
export let shopItem03 = new ShopItem(
    {
        domObj: shopItemDiv03, 
        price: shopItemPrice03, 
        pay: 0.2 
    });  
export let shopItem04 = new ShopItem(
    {
        domObj: shopItemDiv04, 
        price: shopItemPrice04, 
        pay: 0.2 
    });
export let shopItem05 = new ShopItem(
    {
        domObj: shopItemDiv05, 
        price: shopItemPrice05, 
        talkResistanceMinIncrease: 1 
    });
export let shopItem06 = new ShopItem(
    {
        domObj: shopItemDiv06, 
        price: shopItemPrice06, 
        pay: 0.2 
    }); 
export let shopItem07 = new ShopItem(
    {
        domObj: shopItemDiv07, 
        price: shopItemPrice07, 
        pay: 0.2 
    });  
export let shopItem08 = new ShopItem(
    {
        domObj: shopItemDiv08, 
        price: shopItemPrice08, 
        pay: 0.3 
    });