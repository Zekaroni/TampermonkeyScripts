// ==UserScript==
// @name         Amazon List Price Sum
// @namespace    http://tampermonkey.net/
// @version      1.44
// @description  Shows the sum of all items in an Amazon list.
// @author       Zekaroni
// @match        https://www.amazon.com/hz/wishlist/*
// @icon         data:image/gif;base64,R0lGODlhEAAQAPQAAAAAAGRvkmVwk2p1lmt1lnB5mXF6mXZ/nHuEn3yEnnyEn4KJoYKJooiOpIiOpY2Spo6Tpo2SqI6SqI6TqJSXqZSYqpmdrJmdrZ+ir5+isKSnsqWms6WnswAAAAAAAAAAACH5BAEAAAAALAAAAAAQABAAAAVBICCOZGmeqKitWjpiWYa5omVbNEBVFYVKwKAQAiE5jsjkkcRoOp9NkmKqQEytVNRhe8gZvobcYDzIBQSCQG69DgEAOw==
// @grant        none
// @homepage     https://github.com/Zekaroni/TampermonkeyScripts
// @downloadURL  https://raw.githubusercontent.com/Zekaroni/TampermonkeyScripts/main/Amazon/amazonSum.js
// @updateURL    https://raw.githubusercontent.com/Zekaroni/TampermonkeyScripts/main/Amazon/amazonSum.js
// ==/UserScript==

(function() {
    'use strict';
    var totalDisplay = document.querySelector("#profile-list-name");
    var listName = totalDisplay.textContent
    var previousTotal = 0;
    function updateTotalDisplay()
    {
        var listItems = document.querySelector("#g-items").children;
        var listSum = 0;
        var itemValue = 0;
        var itemPriorityBox;
        for (let i = 0; i < listItems.length; i++)
        {
            itemValue = listItems[i].getAttribute("data-price");
            if (itemValue !== null)
            {
                if (itemValue != "-Infinity")
                {
                    itemPriorityBox = listItems[i].querySelector(".a-fixed-right-grid-col").querySelectorAll(".a-column")[1]
                    if (!(itemPriorityBox.querySelector(".a-size-small").children[1].textContent.replace(">", "").trim() == "lowest"))
                    {
                        itemValue = Number(itemValue);
                        listSum+=itemValue;
                    };
                };
            };
        };
        if (previousTotal != listSum)
        {
            totalDisplay.textContent = listName + " | Total : $" + listSum.toFixed(2);
            previousTotal = listSum
        }
        setTimeout(updateTotalDisplay, 1000);
    };
    updateTotalDisplay();
})();
