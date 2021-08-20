// ==UserScript==
// @name         TypeRacerDeathModeRespawn
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Well it tries to remove the stupid pop-ups with in Death Mode and sets you in a new game if you die.
// @author       BudgetArms
// @match        https://play.typeracer.com/?universe=accuracy
// @icon         https://www.google.com/s2/favicons?domain=typeracer.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = ()=>{
        console.log('loaded');
        Checker();
    }
    window.onchange=async () =>{
       await Checker();
    }
})();

async function Checker(){
    let TimeLoad = 1000; // 1000(ms) is equal to 1 second


    console.log("Checking...");
    await document.querySelector("body > div.DialogBox.trPopupDialog.InstaGibPopup > div > div > div.Caption.CaptionWithIcon > span");
    if(document.querySelector("body > div.DialogBox.trPopupDialog.InstaGibPopup > div > div > div.Caption.CaptionWithIcon > span")!=undefined){
        console.log("exists");
        document.querySelector("#gwt-uid-2 > a").click();
        document.querySelector("body > div.DialogBox.trPopupDialog.InstaGibPopup").remove();
        setTimeout(Later, TimeLoad);
    }
}
async function Later(){
    console.log('Later');
    await document.querySelector("body > div.DialogBox.trPopupDialog.practiceViewScoresPopup");
    console.log(document.querySelector("body > div.DialogBox.trPopupDialog.practiceViewScoresPopup"));
    if(document.querySelector("body > div.DialogBox.trPopupDialog.practiceViewScoresPopup")!="yeet"){
        document.querySelector("body > div.DialogBox.trPopupDialog.practiceViewScoresPopup").remove();
    }
}