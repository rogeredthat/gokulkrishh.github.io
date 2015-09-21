---
layout: post
title: Web performance optimization
---

An average user stays in your site if the page loads in < 1000ms. In 2014, an average page size is 1.9MB. See the below chart for more stats.

<img class="post-image" src="/assets/performance/chart-Nov-15-2014.png" alt="Nov-15-2014 chart"> 
<div class="txt-center">via source <a class="link" target="_blank" href="http://httparchive.org/interesting.php#bytesperpage">httparchive</a></div>
<br>
The core content of site should render with in `1000ms`. If it fails, then the user is never gonna come back to your site again. By improving page load time, the revenue and downloads increased tremendously for many popular companies.
<!--more--> 
Like
	<ul>
		<li>Let's take <a class="link" target="_blank" href="http://www.walmart.com/">Walmart</a> for every `100ms` of improvement to their site, they grew revenue upto to `1%`.</li>
		<li><a class="link" target="_blank" href="https://www.Yahoo.com">Yahoo</a> traffic increased by `9%` for every `400ms` of improvement.</li>
		<li><a class="link" target="_blank" href="https://www.Mozilla.com">Mozilla</a> speed up their site by `2.2sec` gave them `160 million` more firefox downloads/year.</li>
	</ul>

#### Steps involved in site optimization
<ul>
	<li class="numeric">Set preformance budget.</li>
	<li class="numeric">Measuring the current performance.</li>
	<li class="numeric">Find the problem causing performance issue.</li>
	<li class="numeric">And finally Yay, optimize it.</li>
</ul>

There are several ways to optimize your site, Lets see about it


## Speed Index

Speed index is the average time at which visible parts of page is <a class="link" href="http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#Painting" title="Browser Painting">painted</a> in the browser. Expressed in milliseconds and also depends on the viewport size. See below image ( video frames to show web page load at seconds ).
<br>
	<p class="txt-center"><i>Lower speed index score is the better score.</i></p>
	<img class="post-image" src="/assets/performance/compare_progress.png" onclick="window.open('/assets/performance/compare_progress.png','_blank');"  alt="Speed Index" title="click to open in new tab">
<br>

<p>Speed index can be measured by using <a class="link" target="_blank" href="http://www.webpagetest.org/">Webpagetest</a> ( maintained by google ). 

###  \##TL;DR
<div class="tldr">Webpage test has lots features like running multiple test in different locations using different browsers. And can measure other metrics like load time, number of dom elements, first byte time etc..</div>

Eg: checkout the measured result of amazon <a class="link" target="_blank" href="http://www.webpagetest.org/result/141126_29_DVN/">here</a> using webpagetest.

<div class="txt-center"><i>Watch the below video by <a href="http://blog.patrickmeenan.com/" class="link" target="_blank">Patrick Meenan</a> to know more about webpagetest</i></div>
<br>
<iframe style="margin: 0 auto;text-align: center;width: 100%;border: 1px solid #000;" width="560" height="315" src="//www.youtube.com/embed/euVYHee1f1M" frameborder="0" allowfullscreen></iframe>
<br>


## Render Blocking

If you know how a browser works, then you know about how `HTML, CSS, JS` are parsed by browser and which is blocking the rendering of the page. If you don't, see the below simple diagramatic representation below.
<br>
<br>
<img class="post-image" src="https://www.igvita.com/posts/12/doc-render-js.png" alt="How parsing is done in the browser" onclick="window.open('https://www.igvita.com/posts/12/doc-render-js.png','_blank');">
<br>
<br>
Read more about <a class="link" target="_blank" href="www.html5rocks.com/en/tutorials/internals/howbrowserswork/">how a browser works</a> written by <a class="link" target="_blank" href="http://www.html5rocks.com/en/profiles/#taligarsiel">Tali Garsiel</a> and <a class="link" target="_blank" href="http://www.paulirish.com/">Paul Irish</a>.


### Steps involved in rendering in a browser

<ul>
	<li class="numeric">First browser parses `HTML` markup to construct `DOM tree` ( DOM = Document Object Model )</li>
	<br>
	<li class="numeric">Then parses `CSS` to construct `CSSOM tree` ( CSSOM = CSS Object Model )</li>
	<br>
	<li class="numeric">Before combining both DOM and CSSOM tree to contruct Render tree, `JS` files are parsed and executed.</li>
</ul>
<br>
Now you understood how parsing is done in a browser. Lets see which is blocking the construction of rendering tree.
<br>

###1. Render-Blocking CSS

CSS is treated as render blocking. For the construction of CSSOM, all the CSS are downloaded regardless of whether they are used in current page or not. 

To solve this render-blocking, go through below steps

<p class="tldr">1. Inline the critical CSS, that is most important styles used by page above the fold in head tag inside `<style></style>` <br> 2. Remove the unused CSS.

So how do I find unused CSS.

1. Use <a class="link" target="_blank" href="https://developers.google.com/speed/pagespeed/insights/">Pagespeed Insight</a> to get stats like unused CSS, render-blocking CSS and JS files etc.</p>

	Eg: Flipkart's Pagespeed Insight result <a class="link" target="_blank" href="https://developers.google.com/speed/pagespeed/insights/?url=Flipkart.com">here</a>.

2. Gulp tasks like <a href="https://www.npmjs.com/package/gulp-uncss" class="link" target="_blank">gulp-uncss</a> or use Grunt tasks like <a href="https://github.com/addyosmani/grunt-uncss" class="link" target="_blank">grunt-uncss</a>. If you don't no what is grunt or gulp, read my <a href="{{ site.baseurl }}/2014/10/27/Task-Automation-using-grunt-and-gulp/" class="link">previous post</a>.

### \##ProTips

1. Use <a href="http://cssstats.com/" class="link" target="_blank">CSS Stats</a> to get total no of elements used, no of unique styles, fonts etc.
<br>
2. Pagespeed Insight <a class="link" target="_blank" href="https://chrome.google.com/webstore/detail/pagespeed-insights-by-goo/gplegfbjlmmehdoakndmohflojccocli?hl=en">Chrome Extention</a>.
<br>
3. Tag Counter <a class="link" target="_blank" href="hhttps://chrome.google.com/webstore/detail/tagcounter/okjmidhcodkplbehcomejnfjlkbdnjlg">Chrome Extention</a>.


###2. Render-Blocking Javascript

If the browser encounter's javascript while parsing the `HTML markup`, the parsing is stopped. Only after executing the script, the HTML rendering will be continued. So this block's the `rendering of the page`.

To solve this

<p class="tldr">Use `async` or `defer` attribute in `<script></script>` tag.</p>
	
<ul class="numeric">
<li>`<script async>` will download the file during the `HTML parsing` and execute it as soon as the file is downloaded.</li>

<li>`<script defer>` will download the file during the `HTML parsing` and will execute it after `HTML parsing` is completed.</li>

Eg: `async and defer` both are used in Google Analytics

</ul>

Browser support for <a class="link" target="_blank" href="http://caniuse.com/#search=async" title="async browser support">async</a> and 
<a class="link" target="_blank" href="http://caniuse.com/#search=defer" title="defer browser support">defer</a>.


## Memory Leaks

`Memory leaks` and <a href="http://en.wikipedia.org/wiki/Bloating" class="link" title="bloating" target="_blank">Bloat</a> is one of the problems faced by web developers. Lets see how to find a memory leak and later solve them.

#### <p>Lets find Memory Leak in Javascript</p>

1. Using Chrome Task Manager to check `memory used by app` as well `js memory` (total + live memory). If your memory keeps on growing on each action, then you can suspect there is a memory leak.
<br>
<br>
<div class="txt-center"><i>See below the screenshot of Chrome Task Manager</i></div>
<br>
<img class="post-image" src="/assets/performance/task_manger.png" onclick="window.open('/assets/performance/task_manger.png','_blank');"  alt="Speed Index" title="click to open in new tab">
<br>
<br>

####Chrome DevTools Profiling
Use `Heap Profiler` to find memory leak. Open chrome devTools and go to profiles tab and select take heap snapshot.
If you dont know about chrome DevTools, read my <a class="link" target="_blank" href="https://gokulkrishh.github.io/2014/09/12/Chrome-DevTools/" title="Chrome DevTools"> previous post</a>.
<br>
<div class="txt-center"><i>Screenshot for Chrome DevTools Profiler</i></div>
<br>
<img class="post-image" src="/assets/performance/heap snapshot.png" onclick="window.open('/assets/performance/heap snapshot.png','_blank');"  alt="heap snapshot" title="click to open in new tab">
<br>
<br>

The Heap Profiler has 4 snapshot views
	<ul class="numeric">
		<li>Summary View - To show total number of objects allocated and its instance, `Shallow Size` (size of the memory of obj itself) and `Retained Size` (size of the memory that will be freed once automatic GC happens + unreachable object).</li>
		<br>
		<li>Comparison View - To compare two or more snapshots before and after a operation to check memory leak.</li>
		<br>
		<li>Containment View - To show overall view of your app object structure + DOMWindow Objects (that is global obj's), GC roots, Native objects (from the browser).</li>
		<br>
		<li>Dominators View - This will show the <a class="link" target="_blank" href="https://developer.chrome.com/devtools/docs/memory-analysis-101#dominators" title="dominators">dominators</a> tree of a heap graph.</li>
	</ul>

Read more in detail about <a class="link" target="_blank" href="https://developer.chrome.com/devtools/docs/heap-profiling" title="Chrome devtools heap profile">Heap profiler</a>.


####DOM Leak
Reference to `DOM elements` causes DOM Leak and prevents automatic garbage collection(GC) process.

Lets see an example

{%highlight marup%}
	<div id="container">
	<h1 id="heading">I am just a heading nothing much</h1>
</div>
{% endhighlight %}
{% highlight javascript %}
var parentEle = document.getElementById('container'); //get parent ele reference

var headingEle = document.getElementById('heading'); //get child ele reference

parentEle.remove(); //removes parent element from DOM

//but its child ref still exist, So parentEle won't collect GC'd and causes DOM Leak
{% endhighlight %}

Let's fix this DOM leak by making its reference `null`
{% highlight javascript %}
	headingEle = null; //Now parentEle will be GC'd 
{% endhighlight %}

The above are common problems faced by web developers. Thats all for today. If you like my post share it or have a doubt comment below. Thanks!!

