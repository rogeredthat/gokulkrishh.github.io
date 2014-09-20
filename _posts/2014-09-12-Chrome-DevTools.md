---
layout: post
title: Chrome DevTools part - 1
---

Google chrome is one of the fastest browser around and using chrome devTools for development is simply awesome. I use two chrome browers, one is normal <a class="link" target="_blank" href="https://www.google.co.in/chrome/">chrome</a> and other is <a class="link" target="_blank" href="http://www.google.co.in/intl/en/chrome/browser/canary.html">chrome canary</a>.

Difference is that canary is from future, that is new features will be available in canary before ported to actual chrome. Sometimes you may find break down, but that doesn't stop you from using it. For now canary is available for `Mac` and `Windows`. Enough with explanation, lets get started.

## DevTools

To access devTools in both chrome and canary, press `ctrl + shift + i` and in mac replace `ctrl` it with `command`.

<!--more-->

### Inspect Element

Right click in the chrome to find `Inspect element` menu at the end.

Using it you can see default styles of a webpage. We can even modify default styles and see the live changes (without refresh, else modified styles will be removed). Auto complete styles are present by default. So changing the style is more easy. See the below image.

<img class="post-image" src="/assets/devtools/Inspect Element.gif" alt="devtool" title="click to open in new tab" onclick="window.open('/assets/devtools/Inspect Element.gif','_blank');">

### Pro Tips
1. `Shift + Click` to change the color, background styles to `rgba`, `rgb`, `hex`, `hsl`.

2. Type a property name in `styles` tab to show autocomplete name and its values.

3. To add attribute to a html element, right and select `add attribute` menu and for editing the html element, use double click or on click to select `edit as HTML` menu.

4. To see the styles of an element in the box model. (ie) content, padding, border, margin go to bottom of `styles tab`.

5. To copy a html code, right click and select `copy as html` menu in element tab or simple drag and drop in the editor. See example below.

<img class="post-image" src="/assets/devtools/copy as html.gif" alt="copy as html" title="click to open in new tab" onclick="window.open('/assets/devtools/copy as html.gif','_blank');">

### Console

The console tab is used to debug javascript. That's not all, you can write
javascript in console just like you do in javascript file and execute it. Lets see an example

<img class="post-image" src="/assets/devtools/console.gif" alt="writing function in console" title="click to open in new tab" onclick="window.open('/assets/devtools/console.gif','_blank');">

In the above screen shot, I have executed a simple function which will alert hi. Other than writing javascript function, we can see `XMLHttp Requests`, `timestamps` of a log, `preserving the log` (ie) even on refresh log won't be cleared. Go to setting and select general menu and go to bottom to set any of the above menu.

### Pro Tips

<p>DOM inspection is also possible in the console tab.</p>

1. Using `$('elementName')` will return the list of matching element from DOM which is same as `document.querySelector`. On the result, right to find menu `Reveal in Elements Panel` to see the html element in elements panel.

2. Using `$('#somename')` will return id matching element from DOM which is same as `document.getElementById`.

Here is an example

<img class="post-image" src="/assets/devtools/dom.gif" alt="Dom inspection in console" title="click to open in new tab" onclick="window.open('/assets/devtools/dom.gif','_blank');">

<a class="link" target="_blank" href="https://developer.chrome.com/devtools/docs/commandline-api">Go here</a> to see all command line api for chrome console.

### Must have chrome extentions for developers:

1. <a class="link" target="_blank" href="https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en">Postman</a> is a tool to make REST-API calls.

2. <a class="link" target="_blank" href="https://chrome.google.com/webstore/detail/dimensions-legacy/hdmihohhdcbejdkidbfijmfehjbnmifk?hl=en">Dimension</a> a tool to test responsive websites and offline webpages.

3. <a class="link" target="_blank" href="https://chrome.google.com/webstore/detail/requirify/gajpkncnknlljkhblhllcnnfjpbcmebm?hl=en">Requirify</a> is used to download libraries such as `jQuery`, `Lo-Dash` etc.. to the console.

4. <a class="link" target="_blank" href="https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm">WhatFont</a> to see the fonts used by the websites on mouse hover.

5. <a class="link" target="_blank" href="https://chrome.google.com/webstore/detail/eye-dropper/hmdcmlfkchdmnmnmheododdhjedfccka">Eye Dropper</a> allow you to pick colors from web pages.

6. <a class="link" target="_blank" href="https://chrome.google.com/webstore/detail/page-ruler/jlpkojjdgbllmedoapgfodplfhcbnbpn?hl=en">Page Ruler</a> lets to draw a ruler on any sites to show height, width and other properties.

I hope this post will be helpful to learn few basics about chrome devTools. Soon I will come back with a advanced tutorial for chrome devTools like finding memory leak, profiling etc. So stay tuned.

If you like my post share it or leave a comment.