// ==UserScript==
// @name         Amazon List Price Sum
// @namespace    http://tampermonkey.net/
// @version      v1.2
// @description  Shows the sum of all items in an Amazon list.
// @author       Zekaroni
// @match        https://www.amazon.com/hz/wishlist/ls/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/Zekaroni/AmazonScripts/main/amazonSum.js
// @updateURL    https://raw.githubusercontent.com/Zekaroni/AmazonScripts/main/amazonSum.js
// ==/UserScript==

(function() {
    'use strict';
    var listItems = document.querySelector("#g-items").children;
    var totalDisplay = document.querySelector("#friends-tab");
    var itemValue = 0;
    var listSum = 0;
    var itemPriorityBox;
    for (let i = 0; i < listItems.length; i++)
    {
        itemValue = listItems[i].getAttribute("data-price");
        if (itemValue !== null)
        {
            if (itemValue != "-Infinity")
            {
                itemPriorityBox = listItems[i].querySelector(".a-fixed-right-grid-col").querySelectorAll(".a-column")[1]
                if (itemPriorityBox.classList.contains("a-hidden") || !(!itemPriorityBox.classList.contains("a-hidden") && itemPriorityBox.querySelector(".dropdown-priority").classList.contains("item-priority-lowest")))
                {
                    itemValue = Number(itemValue);
                    listSum+=itemValue;
                };
            };
        };
    };
    totalDisplay.textContent = "Total : $" + listSum.toFixed(2);;
})();
