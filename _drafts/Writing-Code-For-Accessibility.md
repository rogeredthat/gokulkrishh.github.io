---
layout: post
title: Writing Code For Accessibility
description: Web accessibility means letting the user to navigate and interact with your site by any means. Let it be a keyboard, a mouse or people with disabilities and impairments.
date: 2017-02-17
categories: accessibility
comments: true
read_time: 5
image: /images/accessibility/a11y.png
---

# What is web accessibility?

Web accessibility means letting the user to navigate and interact with your site by any means. Let it be a keyboard, a mouse or people with disabilities and impairments.

## Writing code for accessibility

Lets learn accessibility by starting with `HTML`. We will style both the `<div>` and `<button>` tag to look like the same.

```html
<!-- div used as button and its not focusable -->
<div class="btn">Click Me</div>

<!-- button and its focusable -->
<button class="btn">Click Me</div>
```

<b>Example:</b>

We will inspect and see how user might use your website, follow the below steps.

- <b>Keyboard</b> - <i>Try to focus the below buttons using tab key in your keyboard.</i>

- <b>Mouse</b> - <i>Try to click the below buttons using mouse.</i>

- <b>Voice Over</b> - <i>Turn on voice over (cmd + f5 in mac) and click the below buttons.</i>

<div class="btn">Click Me</div> 

- <span>Not focusable</span>, since a `<div>` styled as button.

<button class="btn">Click Me</button> 

- Focusable, because its a `<button>`

<embed width="420" height="315"
src="https://www.youtube.com/v/IaL4nBgdxeM">

<a href="https://output.jsbin.com/qezeca" target="_blank">Demo Link</a>
