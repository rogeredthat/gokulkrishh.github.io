---
layout: post
title: CSS3 Animations
description: The days when people used flash for animation has become almost obsolete. Its time for CSS3 animation takeover.
date:   2014-08-28
categories: CSS
comments: true
read_time: 20
image: /images/css/animation.png
---

# CSS3 Animations

We all know that animations are cool, especially when we see one like <a href="http://cafecuba.in" target="_blank">Cafe Cuba</a>, <a href="http://tokyomildfoundation.com" target="_blank">Tokyo Mild Foundation</a>. The days when people used flash for animation has become almost obsolete. So its time for CSS3 takeover and today we are going to see some basic animation tutorial using `CSS3` and `HTML5`.

CSS3 animations are getting more popular these days and more style supports are getting added in the modern browser like Chrome, Mozilla, IE > 10. So let's get started with some basics.

### Transitions

CSS3 transition lets us change from one state to another state and these states can be of `:hover`, `:active`, `:checked`, `:visited`.

There are four different transition properties.

- property name
- duration
- time function such as `linear|ease-in|ease-out` etc., and delay.

Let's create a div which on hover will change, its background color to red after a 2 second delay.

```html
<div class="box"></div>
```

```css
.box {
  width: 150px
  height: 150px;
  background: rgb(144, 238, 144);
}

.box:hover {
  cursor: pointer;
  background: blue;
}
```

To do a background change with a transition, add below style to .box

```css
transition-property: background-color;
transition-duration: 1s;
transition-timing-function: linear;
transition-delay: 1s;
```

List of supported transition properties are

* background
* color
* border etc. See full <a href="http://www.w3.org/TR/css3-transitions/#properties-from-css-" target="_blank">list here</a>

See full example below

<p class="mtop codepen" data-width="" data-height="227" data-theme-id="7458" data-slug-hash="ltdCn" data-default-tab="result">See the Pen <a href="http://codepen.io/gokulkrishh/pen/ltdCn/"> ltdCn </a> by Gokulakrishnan ( <a href="http://codepen.io/gokulkrishh"> @gokulkrishh </a>)</p>

So the transition is happening but will it support all browsers?. The answer is no. We have include prefixes to the transition properties to work.

```css
.box {
  -webkit-transtion-property: background-color;
  -moz-transtion-property: background-color;
  -o-transtion-property: background-color;
  transtion-property: background-color;

  -webkit-transtion-duration: 1s;
  -moz-transtion-duration: 1s;
  -o-transtion-duration: 1s;
  transtion-duration: 1s;

  -webkit-transtion-timing-function: 1s;
  -moz-transtion-timing-function: 1s;
  -o-transtion-timing-function: 1s;
  transtion-timing-function: 1s;

  -webkit-transtion-delay: 2s;
  -moz-transtion-delay: 2s;
  -o-transtion-delay: 2s;
  transtion-delay: 2s;
}
```

Adding prefixes to all the properties will make the CSS large. So to fix this there is a shorthand property for a transition.

```css
/* transition: property-name duration timing-function delay */

.box {
  -webkit-transition: background-color 1s linear .1s;
  -moz-transition: background-color 1s linear .1s;
  -o-transition: background-color 1s linear .1s;
  transition: background-color 1s linear .1s;
}
```

<code class="highlight">-webkit-</code> is for safari, chrome, <code class="highlight">-moz-</code> for mozilla, <code class="highlight">-o-</code> is for opera and for IE 10+ <code class="highlight">-ms-</code>. To check CSS3 styles supported by browsers go to <a href="http://caniuse.com/" target="_blank">Can I use</a>.</p>
<p>So CSS3 transition is nothing but changing from one state to another. But you might be wondering, is animation supposed to do something like a ball moving round and round or something like this <a href="http://www.clicktorelease.com/code/css3dclouds/" target="_blank">CSS3 Cloud</a>. Yep you are right, so we are going to learn some basics on <code class="highlight">keyframes</code> which will later help you to do some fancy stuff like in the above link.</p>

### Transform

CSS3 transforms are used to apply 2D or 3D property to an element. Let's see an example.

```css
.box {
  -webkit-transform: rotate(30deg);
  -moz-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  -o-transform: rotate(30deg);
  transform: rotate(30deg); //specify degree
}
```

<p data-height="266" data-theme-id="7458" data-slug-hash="hjBJz" data-default-tab="result" data-user="gokulkrishh" class='codepen'>See the Pen <a href='http://codepen.io/gokulkrishh/pen/hjBJz/'>hjBJz</a> by Gokulakrishnan (<a href='http://codepen.io/gokulkrishh'>@gokulkrishh</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

### Keyframes

Let's keep it short, keyframes is little similar to transitions but you can change stuff in between. So to help you with better understanding let's proceed with an example.

The below example will change the <b>&lt;p&gt;&lt;/p&gt;</b> tag text to 5 different colors alternatively when you hover.

<p class="mtop mbot codepen" data-height="266" data-theme-id="7458" data-slug-hash="kFrpx" data-default-tab="result">See the Pen <a href="http://codepen.io/gokulkrishh/pen/kFrpx/">kFrpx</a> by Gokulakrishnan (<a href="http://codepen.io/gokulkrishh">@gokulkrishh</a>).</p>

Keyframes have some property similar to transitions which is <code class="highlight">animation-name</code> instead of property-name, <code class="highlight">duration</code>, <code class="highlight">timing function</code>, <code class="highlight">delay</code>. Lets see in details with keyframes

```css
/* @keyframes name */

@keyframes colorChange {
/* start with 0% or we can go with next state */
  0% {
    color: #00000;
  }
  100% {
    color: #ff000;
  }
}
```

So above CSS style does simple thing which will change black color text to red color text. Also, we have applied prefixes to keyframes to support other browsers.

```css
/* @keyframes name {
  start or 0% { color: #000 }
  end or 100% { color :#ff000 }
}*/

@-webkit-keyframes colorChange {
/* start with 0% or go with next state 20% or 50% or 100%  */
  0% {
  	color: #00000;
  }
  100% {
    color: #ff000;
  }
}

@-moz-keyframes colorChange {
  0% {
    color: #00000;
  }
  100% {
    color: #ff000;
  }
}

@-o-keyframes colorChange {
  0% {
  	color: #00000;
  }
  100% {
    color: #ff000;
  }
}

@keyframes colorChange {
  0% {
    color: #00000;
  }
  100% {
    color: #ff000;
  }
}
```

To reduce lengthy CSS styles. We will be using without prefixes. So the state change is done, next is how to apply them.

```css
/* animation: keyframe-name duration timing-function delay iteration-count direction */

.title:hover {
  -webkit-animation: colorChange 2s linear 1s infinite normal;
  -moz-animation: colorChange 2s linear 1s infinite normal;
  -o-animation: colorChange 2s linear 1s infinite normal;
  animation: colorChange 2s linear 1s infinite normal;
}
```

Animations has more direction properties such as <code class="highlight">normal|reverse|alternate|alternate-reverse|initial|inherit</code> and also animation has one more property <code class="highlight">fill-mode: none|forwards|backwards|both|initial|inherit</code> for full list of animation properties go to <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">MDN</a>.

#### Some Example

<p class="mtop mbot codepen" data-height="266" data-theme-id="7458" data-slug-hash="GeqEl" data-default-tab="result">See the Pen <a href="http://codepen.io/gokulkrishh/pen/GeqEl/">GeqEl</a> by Gokulakrishnan (<a href="http://codepen.io/gokulkrishh">@gokulkrishh</a>)</p>

That's it for today. adios. Share my post if you like or leave a comment below.

<script src="https://codepen.io/assets/embed/ei.js" async> </script>
