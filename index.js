//https://kastark.co.uk/articles/incrementals-part-2.html

import Talk from "./javascripts/talk.js";
import Work from "./javascripts/work.js";
import Game from "./javascripts/game.js";
import ShopItem from "./javascripts/shop.js";
import Controll from "./javascripts/controll.js";
import { shopItem01, shopItem02,
    shopItem03, shopItem04, shopItem05, 
    shopItem06, shopItem07, shopItem08 } from "./javascripts/shop.js";
import Research from "./javascripts/research.js";
import { save, load, autoSave, deleteSave } from "./javascripts/settings.js";

let game = new Game({});
let research = new Research({});

export let talk = new Talk({ game: game });
export let work = new Work({ game: game });

load();
autoSave();

const shopButton01 = document.getElementById("shopButton01");
const shopButton02 = document.getElementById("shopButton02");
const shopButton03 = document.getElementById("shopButton03");
const shopButton04 = document.getElementById("shopButton04");
const shopButton05 = document.getElementById("shopButton05");
const shopButton06 = document.getElementById("shopButton06");
const shopButton07 = document.getElementById("shopButton07");
const shopButton08 = document.getElementById("shopButton08");

const talkAutomationButton = document.getElementById("talkAutomationButton");
const workAutomationButton = document.getElementById("workAutomationButton");

const achievementDiv01 = document.getElementById("achievementDiv01");
const achievementDiv02 = document.getElementById("achievementDiv02");
const achievementDiv03 = document.getElementById("achievementDiv03");
const achievementDiv04 = document.getElementById("achievementDiv04");
const achievementDiv05 = document.getElementById("achievementDiv05");
const achievementDiv06 = document.getElementById("achievementDiv06");

const saveButton = document.getElementById("saveButton");
const deleteButton = document.getElementById("deleteButton");

const modalButton = document.getElementById("modalButton");

modalButton.addEventListener("click", function() {
    Controll.closeModal();
})

const navbarGame = document.getElementById("navbarGame");
const navbarAchievements = document.getElementById("navbarAchievements");
const navbarSettings = document.getElementById("navbarSettings");

navbarGame.addEventListener("click", function() { 
    Controll.navbarDisplay(navbarGame);
});
navbarAchievements.addEventListener("click", function() { 
    Controll.navbarDisplay(navbarAchievements);
});
navbarSettings.addEventListener("click", function() { 
    Controll.navbarDisplay(navbarSettings);
});

talkAutomationButton.addEventListener("click", function() {
    talk.talkAutomation();
});

workAutomationButton.addEventListener("click", function() {
    work.workAutomation();
});

shopButton01.addEventListener("click", function() { ShopItem.shop(shopItem01); });
shopButton02.addEventListener("click", function() { ShopItem.shop(shopItem02); });
shopButton03.addEventListener("click", function() { ShopItem.shop(shopItem03); });
shopButton04.addEventListener("click", function() { ShopItem.shop(shopItem04); });
shopButton05.addEventListener("click", function() { ShopItem.shop(shopItem05); });
shopButton06.addEventListener("click", function() { ShopItem.shop(shopItem06); });
shopButton07.addEventListener("click", function() { ShopItem.shop(shopItem07); });
shopButton08.addEventListener("click", function() { ShopItem.shop(shopItem08); });

achievementDiv01.addEventListener("mouseover", function() { Controll.achRewardDisplay("+0.05 C/s")});
achievementDiv02.addEventListener("mouseover", function() { Controll.achRewardDisplay("+0.1 C/s")});
achievementDiv03.addEventListener("mouseover", function() { Controll.achRewardDisplay("+0.15 C/s")});
achievementDiv04.addEventListener("mouseover", function() { Controll.achRewardDisplay("+0.2 C/s")});
achievementDiv05.addEventListener("mouseover", function() { Controll.achRewardDisplay("+0.25 C/s")});
achievementDiv06.addEventListener("mouseover", function() { Controll.achRewardDisplay("-0.01 Res")});

saveButton.addEventListener("click", function() {save()});
deleteButton.addEventListener("click", function() {deleteSave()});

research.startResearch();