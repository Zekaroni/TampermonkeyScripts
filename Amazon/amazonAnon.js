// ==UserScript==
// @name         Amazon Local Privacy
// @namespace    http://tampermonkey.net/
// @version      1.00
// @description  Removes user data from being displayed
// @author       Zekaroni
// @match        https://www.amazon.com/*
// @icon         data:image/gif;base64,R0lGODlhEAAQAPABAAAAAAAAACH5BAUKAAEALAAAAAAQABAAAAImjI+pyw0M4gszRXRVva+a/R1gSJUkOI2mqYZd+2XxkkpQg+f6UQAAOw==
// @homepage     https://github.com/Zekaroni/TampermonkeyScripts
// @downloadURL  https://raw.githubusercontent.com/Zekaroni/TampermonkeyScripts/main/Amazon/amazonAnon.js
// @updateURL    https://raw.githubusercontent.com/Zekaroni/TampermonkeyScripts/main/Amazon/amazonAnon.js
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector("#nav-global-location-data-modal-action").style.display = "none";
    document.querySelector(".nav-shortened-name").textContent = "HIDDEN";
    document.querySelector("#nav-link-accountList").children[0].textContent = "" ;
    document.querySelector("#contextualIngressPt").style.display = "none"
})();