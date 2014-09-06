---
layout: post
title: CSS3 Animations
---

We all know that animations are cool, especially when we see one like <a class="link" href="http://cafecuba.in" target="_blank">Cafe Cuba</a>, <a class="link" href="http://tokyomildfoundation.com" target="_blank">Tokyo Mild Foundation</a>. The days when people used flash for animation has become almost obsolete. So its time for CSS3 takeover and today we are going to see some basic animation tutorial using `CSS3` and `HTML5`.

CSS3 animations is getting more popular these days and more style supports are getting added in modern browser like chrome, mozilla, IE > 10. So lets get started with some basics.

### Transitions

The css3 transition lets us to change from one state to another state and these states can be of `:hover`, `:active`, `:checked`, `:visited`. There are four different transition properties, they are property name, duration, time function such as linear|ease-in|ease-out etc., and delay.

Lets create a div which on hover will change, its background color to red after a 2 second delay.

{% highlight markup %}
<div class="box animate"></div>
{% endhighlight %}

{% highlight css %}
.box {
    width: 150px
    height: 150px;
    background: rgb(144, 238, 144);
}

.box:hover {
    cursor: pointer;
    background: blue;
}
{% endhighlight %}

To do a background change with a transition, add below style to .box

{% highlight css %}
transition-property: background-color;
transition-duration: 1s;
transition-timing-function: linear;
transition-delay: 1s;
{% endhighlight %}

List of supported transition properties are

* background
* color
* border etc. See full <a class="link" href="http://www.w3.org/TR/css3-transitions/#properties-from-css-" target="_blank">list here</a>

See full example below


<p class="mtop codepen" data-width="" data-height="227" data-theme-id="7458" data-slug-hash="ltdCn" data-default-tab="result">See the Pen <a class="link" href="http://codepen.io/gokulkrishh/pen/ltdCn/"> ltdCn </a> by Gokulakrishnan ( <a class="link" href="http://codepen.io/gokulkrishh"> @gokulkrishh </a>)</p>

So the transition is happening but will it support all browsers?. The answer is no. We have include prefixes to the transition properties to work.

{% highlight css %}
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
{% endhighlight %}

Adding prefixes to all the properties will make the css large. So to fix this there is a shorthand property for transition.

{% highlight css %}
/* transition: property-name duration timing-function delay */

.box {
    -webkit-transition: background-color 1s linear .1s;
    -moz-transition: background-color 1s linear .1s;
    -o-transition: background-color 1s linear .1s;
    transition: background-color 1s linear .1s;
}
{% endhighlight %}

<code class="highlight">-webkit-</code> is for safari, chrome, <code class="highlight">-moz-</code> for mozilla, <code class="highlight">-o-</code> is for opera and for IE 10+ <code class="highlight">-ms-</code>. To check CSS3 styles supported by browsers go to <a class="link" href="http://caniuse.com/" target="_blank">Can I use</a>.</p>
<p>So CSS3 transition is nothing but changing from one state to another. But you might be wondering, is animation supposed to do something like a ball moving round and round or something like this <a class="link" href="http://www.clicktorelease.com/code/css3dclouds/" target="_blank">CSS3 Cloud</a>. Yep you are right, so we are going to learn some basics on <code class="highlight">keyframes</code> which will later help you to do some fancy stuff like in the above link.</p>

### Transform

CSS3 tranforms are used to apply 2D or 3D property to an element. Lets see an example.

### Keyframes

Lets keep it short, keyframes is little similar to transitions but you can change stuff in between. So to help you with better understanding lets proceed with an example.

The below example will change the <b>&lt;p&gt;&lt;/p&gt;</b> tag text to 5 different colors alternatively when you hover.

<p class="mtop mbot codepen" data-height="266" data-theme-id="7458" data-slug-hash="kFrpx" data-default-tab="result">See the Pen <a class="link" href="http://codepen.io/gokulkrishh/pen/kFrpx/">kFrpx</a> by Gokulakrishnan (<a class="link" href="http://codepen.io/gokulkrishh">@gokulkrishh</a>).</p>

Keyframes have some property similar to transitions which is <code class="highlight">animation-name</code> instead of property-name, <code class="highlight">duration</code>, <code class="highlight">timing function</code>, <code class="highlight">delay</code>. Lets see in details with keyframes</p>

{% highlight css %}
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
{% endhighlight %}

So above css style does simple thing which will change black color text to red color text. Also we have apply prefixes to keyframes to multiple browser support.

{% highlight css %}
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
{% endhighlight %}

To reduce lengthy css styles. We will be using without prefixes. So the state change is done, next is how to apply them.

{% highlight css %}
/* animation: keyframe-name duration timing-function delay iteration-count direction */

.title:hover {
    -webkit-animation: colorChange 2s linear 1s infinite normal;
    -moz-animation: colorChange 2s linear 1s infinite normal;
    -o-animation: colorChange 2s linear 1s infinite normal;
    animation: colorChange 2s linear 1s infinite normal;
}
{% endhighlight %}

Animations has more direction properties such as <code class="highlight">normal|reverse|alternate|alternate-reverse|initial|inherit</code> and also animation has one more property <code class="highlight">fill-mode: none|forwards|backwards|both|initial|inherit</code> for full list of animation properties go to <a class="link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">MDN</a>.</p>

Some Example

<p class="mtop mbot codepen" data-height="266" data-theme-id="7458" data-slug-hash="GeqEl" data-default-tab="result">See the Pen <a class="link" href="http://codepen.io/gokulkrishh/pen/GeqEl/">GeqEl</a> by Gokulakrishnan (<a class="link" href="http://codepen.io/gokulkrishh">@gokulkrishh</a>)</p>

Thats it for today. adios. Share my post if you like or leave a comment below.