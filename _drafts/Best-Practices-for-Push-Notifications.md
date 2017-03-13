---
layout: post
title: Best Practices for Push Notifications
description: 
date: 2017-03-13
categories: ux
comments: true
read_time: 5
image: /images/ux/push.png
---

# Best Practices for Push Notifications

As the web is moving forward and now we can do pretty much everything on the web which can be done in native applications (`android` & `iOS`). Such as `offline contents`, `push notifications`, `background sync` etc. 

But many websites started using the push notifications in bad ways and only a few sites are using it in better ways to engage users. 

In this post, I will explain `why` and `when` you should prompt for push notifications.

## Things to consider for push notifications

### Bad

- Asking for persmisson on the first visit (this pattern is repeated in most of the sites)

#### Example:

<center> <img src="/images/ux/flipkart.png" alt="Flipkart Website"/></center>



### Good

- Ask for persmisson when its relevant. 

#### Example:

After ordering something, prompt user that you will give order status using push notifications.

<center> <img src="/images/ux/flipkart.png" alt="Flipkart Website"/></center>

- Show an option to enable/disable push notification for certain categories.

#### Example:

<a href="https://events.google.com/io/attending/" target="_blank">Google I/O 2017</a> site has options to enable for `attendees i/o notifications`.



<center class="mtop30 mbot30 b"><i>Google I/O 2017 site</i></center>

<center> <img width="250px" src="/images/ux/google-io-1.png" alt="Google IO 2017 - Mobile"/></center>

Also give the power to user to `disable` notifications, when he/she no longer needs it.

<center class="mtop30 mbot30 b"><i>Google I/O 2017 site</i></center>

<center> <img width="250px" src="/images/ux/google-io-2.png" alt="Google IO 2017 - Mobile"/></center>

#### Browser Support

- Chrome

- Opera

- Mozilla Firefox

Above browsers supports push notificaions in both `desktop` & `mobile`.


#### References & Articles

- <a href="https://web-push-book.gauntface.com/" target="_blank">Web Push Book
</a>

- <a href="https://tests.peter.sh/notification-generator/" target="_blank">Push Notification Generator
</a>
