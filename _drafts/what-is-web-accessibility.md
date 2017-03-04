---
layout: post
title: What is Web Accessibility?
description: Web accessibility means letting the user navigate and interact with your site by any means. Let it be a keyboard, a mouse or people with disabilities and impairments.
date: 2017-02-17
categories: accessibility
comments: true
read_time: 5
image: /images/accessibility/a11y.png
---

# What is accessibility?

Accessibility means letting the user navigate and interact with a website by any means. Let it be a keyboard, a mouse or people with disabilities or impairments.

## Web Accessibility

Let us learn what is web accessibility by starting with a simple button. We will style both the `<div>` and `<button>` tag to look like a button.

## Button

```html
<!-- div used as button -->
<div class="btn">Click Me</div>

<!-- actual button -->
<button class="btn">Click Me</div>
```

We will inspect and see how the user might use your website, follow the below steps.

- <b>Keyboard</b> - <i>Try to focus the below buttons using <kbd>tab</kbd> key in your keyboard.</i>

- <b>Mouse</b> - <i>Try to click the below buttons using mouse.</i>

- <b>Voice Over</b> - <i>Turn on voice over by pressing <kbd>command</kbd> + <kbd>f5</kbd> in `mac` and click the below buttons.</i>

<div class="btn">Click Me</div> 

- `Not focusable`, because of using a `div` tag as button

<button class="btn">Click Me</button> 

- <code class="highlighter-rouge focusable">Focusable</code>, because it's an actual `button`

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

Consider a `screen reader` is going to fill a form on your website, but the user needs to know the information about the form.

```html
<label for="email">Email</label>
<input type="email" id="email" required/>
```

<b>Example: </b>

Use voice over for below inputs and inspect the input tag.

<b class="mtop20">Without label & required attribute:</b>
<div class="mtop30">
  <h3 class="center">Form</h3>
  <form class="post__example-form">
    <span>Name</span>
    <input type="text"/>
    <span>Email</span>
    <input type="email"/>
    <input type="submit" value="submit"/>
  </form>
</div>

<p class="mtop30">Above form doesn't tell the user that, what kind of an input he is going to fill nor its required or not. It will voiceover that it's just an input.</p>

<b class="mtop20">With label & required attribute:</b>

We don't want our user to submit the form without filling required fields. That's where <code class="highlighter-rouge">label</code> element <code class="highlighter-rouge">required</code> attribute comes in.

<p> </p>
<div>
  <h3 class="center">Form</h3>
  <form class="post__example-form">
    <label for="name">Name</label>
    <input type="text" id="name" required/>
    <label for="email">Email</label>
    <input type="email" id="email" required/>
    <input type="submit" value="submit"/>
  </form>
</div>

<p class="mtop30">Above form will voice over the user about the `input` field and whether its `required` or not.</p>

### Conclusion

As a developer I recommend my fellow developers to consider all kinds of user and accessibility in mind while developing an application or a website. Thanks for reading my post. Catch you in my next post.

### Articles

- <a href="https://www.w3.org/WAI/intro/accessibility.php" target="_blank">What is Web Accessibility</a>
- <a href="https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g" target="_blank">A11ycasts with Rob Dodson
</a>
