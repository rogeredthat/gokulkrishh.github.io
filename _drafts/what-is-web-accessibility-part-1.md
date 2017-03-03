---
layout: post
title: What is Web Accessibility? - Part 1
description: Web accessibility means letting the user navigate and interact with your site by any means. Let it be a keyboard, a mouse or people with disabilities and impairments.
date: 2017-02-17
categories: accessibility
comments: true
read_time: 5
image: /images/accessibility/a11y.png
---

# What is accessibility?

Accessibility means letting the user navigate and interact with a website by any means. Let it be a keyboard, a mouse or people with disabilities or impairments.

## Web accessibility

Let us learn accessibility by starting with a simple button. We will style both the `<div>` and `<button>` tag to look like a button.

## Button

```html
<!-- div used as button and its not focusable -->
<div class="btn">Click Me</div>

<!-- button and its focusable -->
<button class="btn">Click Me</div>
```

<b>Example:</b>

We will inspect and see how the user might use your website, follow the below steps.

- <b>Keyboard</b> - <i>Try to focus the below buttons using <kbd>tab</kbd> key in your keyboard.</i>

- <b>Mouse</b> - <i>Try to click the below buttons using mouse.</i>

- <b>Voice Over</b> - <i>Turn on voice over by pressing <kbd>command</kbd> + <kbd>f5</kbd> in `mac` and click the below buttons.</i>

<div class="btn">Click Me</div> 

- `Not focusable`, because of using a `div` tag as button

<button class="btn">Click Me</button> 

- `Focusable`, because it's an actual `button`

<iframe width="560" height="315" src="https://www.youtube.com/embed/IaL4nBgdxeM" frameborder="0" allowfullscreen></iframe>

<a href="https://output.jsbin.com/qezeca" target="_blank">Demo Link</a>

## Images

Let's imagine, our user is going to read out loud on our website. Using `alt` text, a user can identify what is that image is. That's what `alt` attribute is for.

<b>Example: </b>

```html
<!-- img tag with alt attribute -->
<img src="images/accessibility/sample.jpg" alt="Sample image"/>
```

## Forms

For screen readers, they need to know the information about the form they are going to fill it. That's where `label` tag comes in.

```html
<label for="email">Email</label>
<input type="email" id="email" required/>
```

<b>Example: </b>

Use voice over for below inputs and inspect the input tag.

<b>Without label field:</b>
<div class="mtop30">
  <form class="post__example-form">
    <span>Email</span>
    <input type="email"/>
    <input type="submit" value="submit"/>
  </form>
</div>

<b class="mtop30">With label field:</b>

We don't want our user to submit the form without filling required fields. That's where `required` field comes in.

<p> </p>
<div>
  <form class="post__example-form">
    <label for="email">Email</label>
    <input type="email" id="email" required/>
    <input type="submit" value="submit"/>
  </form>
</div>

#### Conclusion

As a developer I recommend my fellow developers to consider all kinds of user and accessibility in mind while developing an application or website. Thanks for reading my post. Catch you in my part-2 post.

#### Articles

- <a href="https://www.w3.org/WAI/intro/accessibility.php" target="_blank">What is Web Accessibility</a>
- <a href="https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g" target="_blank">A11ycasts with Rob Dodson
</a>
