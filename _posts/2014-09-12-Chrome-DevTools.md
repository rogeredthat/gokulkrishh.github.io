---
layout: post
title: Chrome DevTools part - 1
---

Google chrome is one of fastest browser around and using chrome devTools for development is simply awesome. I use two chrome browers, one is normal <a class="link" target="_blank" href="https://www.google.co.in/chrome/">chrome</a> and other is <a class="link" target="_blank" href="http://www.google.co.in/intl/en/chrome/browser/canary.html">chrome canary</a>.

Difference is that canary is from future, that is new features will be available in canary before ported to actual chrome. Sometimes you may find break down, but that doesn't stop you from using it. For now canary is available for `Mac` and `Windows`. Enough with explanations, lets get started.

## DevTools

To access devTools in both chrome and canary, press `ctrl + shift + i` and in mac replace `ctrl` it with `command`.

<!--more-->

### Inspect Element

Right click in the chrome to find `Inspect element` menu at end.

Using it to you can see default styles of a webpages. We can even modify those styles and see the live changes (without refresh, else modified styles will be removed). Autocomplete styles are present by default. So changing the style are more easy. See the below image.

<img class="post-image" src="/assets/devtools/Inspect Element.gif" alt="devtool" title="click to open in new tab" onclick="window.open('/assets/Inspect Element.gif','_blank');">

### Pro Tips
1. `Shift + Mouse Click` to change color or background style to `rgba`, `rgb`, `hex`, `hsl`.

2. Type a property name in `styles` tab to show autocomplete name and its values.

3. In elements tab, right click to see menu like add attribute or edit as HTML.

4. See the styles of an element in a box model. (ie) padding, border, margin, position in bottom of `styles tab`.

5. Right click and select `copy as html` in element tab to copy and paste it as html code or simple drag and drop in the editor. See below.

<img class="post-image" src="/assets/devtools/copy as html.gif" alt="copy as html" title="click to open in new tab" onclick="window.open('/assets/copy as html.gif','_blank');">

### Console

The console tab is used to debug the javascript. That not all, you can write
javascript in console just like you do in javascript file and execute it. Lets see an example

<img class="post-image" src="/assets/devtools/console.gif" alt="writing function in console" title="click to open in new tab" onclick="window.open('/assets/devtools/console.gif','_blank');">

In the above screen shot, i have executed a simple function which will alert hi. Other than writing javascript function, we can see `XMLHttp Requests`, `timestamps` of a log, `preserving the log` (ie) even on refresh log wont be cleared. Go to setting, in General menu and go to bottom to set any of the above.

### Pro Tips

<p>Dom inspection is also possible from the console tab.</p>

1. Using `$('elementName')` will return the list of matching element from dom which is same as `document.querySelector`. On the result, right to find menu `Reveal in Elements Panel` to see the html element in elements panel.

2. Using `$('#somename')` will return id matching element from dom which is same as `document.getElementById`.

Here is an example

<img class="post-image" src="/assets/devtools/dom.gif" alt="Dom inspection in console" title="click to open in new tab" onclick="window.open('/assets/devtools/console.gif','_blank');">

<a class="link" target="_blank" href="https://developer.chrome.com/devtools/docs/commandline-api">Go here</a> to see all command line api for chrome console.

### Must have chrome extentions for developers:

1. <a class="link" target="_blank" href="https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en">Postman</a> is tool to make REST-API calls.

2. <a class="link" target="_blank" href="https://chrome.google.com/webstore/detail/dimensions-legacy/hdmihohhdcbejdkidbfijmfehjbnmifk?hl=en">Dimension</a> to test responsive websites and offline webpages.

3. <a class="link" target="_blank" href="https://chrome.google.com/webstore/detail/requirify/gajpkncnknlljkhblhllcnnfjpbcmebm?hl=en">Requirify</a> is used to download library like `jQuery`, `Lo-Dash` etc.. to a console tab and use it.

4. <a class="link" target="_blank" href="https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm">WhatFont</a> to see fonts used by the websites on a mouse hover.

5. <a class="link" target="_blank" href="https://chrome.google.com/webstore/detail/eye-dropper/hmdcmlfkchdmnmnmheododdhjedfccka">Eye Dropper</a> allow you to pick colors from web pages.

6. <a class="link" target="_blank" href="https://chrome.google.com/webstore/detail/page-ruler/jlpkojjdgbllmedoapgfodplfhcbnbpn?hl=en">Page Ruler</a> lets to draw a ruler on any sites to show height and width and other properties.

I hope this post will helpful to learn few basics about the chrome devTools. Soon i will come back with an advanced tutorial for chrome devTools. Like finding memory leak, profiling etc. So keep watching.

If you like my post share it or comment below.