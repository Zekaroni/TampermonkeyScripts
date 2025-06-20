// ==UserScript==
// @name         Amazon List Price Sum
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Displays the total amount of money in the current wish-list.
// @author       Zekaroni
// @match        https://www.amazon.com/hz/wishlist/*
// @icon         data:image/gif;base64,R0lGODlhEAAQAPQAAAAAAGRvkmVwk2p1lmt1lnB5mXF6mXZ/nHuEn3yEnnyEn4KJoYKJooiOpIiOpY2Spo6Tpo2SqI6SqI6TqJSXqZSYqpmdrJmdrZ+ir5+isKSnsqWms6WnswAAAAAAAAAAACH5BAEAAAAALAAAAAAQABAAAAVBICCOZGmeqKitWjpiWYa5omVbNEBVFYVKwKAQAiE5jsjkkcRoOp9NkmKqQEytVNRhe8gZvobcYDzIBQSCQG69DgEAOw==
// @grant        none
// @homepage     https://github.com/Zekaroni/TampermonkeyScripts
// @downloadURL  https://raw.githubusercontent.com/Zekaroni/TampermonkeyScripts/main/Amazon/amazonSum.js
// @updateURL    https://raw.githubusercontent.com/Zekaroni/TampermonkeyScripts/main/Amazon/amazonSum.js
// ==/UserScript==

(function () {
    'use strict';

    const priceSections = document.querySelectorAll('.a-section.price-section');
    let total = 0;

    priceSections.forEach(
        section =>
        {
            const priceSpan = section.querySelector("span[id^='itemPrice_']");
            if (priceSpan)
            {
                const text = priceSpan.textContent.trim().replace(/,/g, '');
                const match = text.match(/\$?(\d+(?:\.\d{1,2})?)/);
                if (match)
                {
                    total += parseFloat(match[1]);
                }
            }
        }
    );

    const formatter = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});
    const formattedTotal = formatter.format(total);

    const totalDiv = document.createElement('div');
    totalDiv.textContent      = `Total: ${formattedTotal}`;
    totalDiv.style.fontSize   = '1.2em';
    totalDiv.style.fontWeight = 'bold';
    totalDiv.style.color      = '#B12704';                   // Amazon's Orange
    totalDiv.style.margin     = '10px 0';

    const header = document.getElementById('wl-list-info') ||
                   document.getElementById('profile-list-name');
    if (header)
    {
        header.parentElement.insertBefore(totalDiv, header.nextSibling);
    } else
    {
        document.body.prepend(totalDiv);
    }
})();
