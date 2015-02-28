---
layout: post
title: Introduction to React.js Framework
---

 <a href="http://facebook.github.io/react/" class="link" target="_blank">React</a> is javascript framework created by Facebook and Instagram. I would say React as Javascript library which can be used as V in MVC. Its been designed by thinking perfomance in mind. React is getting more popular these days and big companies such as Facebook, Instagram, Yahoo, even whatsapp's newly launched <a href="https://web.whatsapp.com/" class="link" target="_blank">whatsapp web</a> uses react components in production. So lets get into it.

<!--more-->

##Main concepts

<ul>
  <li class="dot">User Interface</li>
  <li class="dot">Vitual DOM</li>
  <li class="dot">Data Flow and Data Binding</li>
</ul>


###User Interface

It is easier to create components in react.js and it can be used in almost any web application. Lets create a simple component using <a href="https://jsx.github.io/" class="link" target="_blank">Javascript syntax extention</a> shortly `JSX`. If you don't know what is JSX, its simple which uses XML like syntax to write Javascript and later converts it to actual Javascript using JSX Compiler.

{%highlight javascript%}
//Using jsx syntax
var hello = React.createClass({
  //render method takes input data and returns what to display
  render: function () {
    //since we will be using jsx, so don't worry about syntax
    return (<h1>Hello World!!</h1>); //h1 tag
  }
});
{%endhighlight %}

Below is the same code which is written in actual Javascript.

{%highlight javascript%}
//Using actual JS
var hello = React.createClass({displayName: "hello",
  //render method takes input data and returns what to display
  render: function () {
    return (React.createElement("h1", null, "Hello World!!")); //h1 tag
  }
});
{%endhighlight %}

As you can see, writing components in react.js using JSX is very easy and efficient. Many developers who uses react.js uses `JSX`. Know more about JSX <a href="http://facebook.github.io/react/docs/jsx-in-depth.html" class="link" target="_blank">here</a>.

###Virtual DOM

React uses Virtual DOM and it is nothing but the mimics of the actual DOM tree. Doing a DOM operations can be very expensive and keeping track of previous DOM states are very hard. In react, each components have states. Virtual DOM allows you to update a view whenever a state is changed using <a href="http://calendar.perfplanet.com/2013/diff/" class="link" target="_blank">Diff algorithm</a>.

###Data Flow 

Unlike many popular frameworks like <a href="https://docs.angularjs.org/guide/databinding" class="link" target="_blank">AngularJS</a>, <a href="http://emberjs.com/guides/object-model/bindings/" class="link" target="_blank">EmberJS</a>. React offer unidirectional data flow which is easier to maintain according to the developer who created react.js. In future, Ember.js is moving from two way binding to one way binding as well.

###Lets create an Hello World application with React.

####HTML markup

{%highlight markup%}
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Hello World in React</title>
</head>
<body>
  <!-- CDN for react core libary -->
  <script src="http://fb.me/react-0.12.2.js"></script>
  <!-- JSX transformer to support XML syntax for JS -->
  <script src="http://fb.me/JSXTransformer-0.12.2.js"></script>
  <!-- react component file -->
  <script type="text/jsx">
  </script>
</body>
</html>
{%endhighlight %}

####React components using JSX syntax

{%highlight javascript%}
/** @jsx React.DOM */

//Syntax for creatClass(object specification)
var HelloWorld = React.createClass({
  //render method takes input data and returns what to display
  render: function () {
    return (<h1>Hello World!!</h1>); //h1 tag
  }
});
{%endhighlight %}

`React.createClass()` accepts an object and a specification. `/** @jsx React.DOM */` is used to avoid syntax error from the JS compiler in the browser. In the above example, we have used the render method which returns a html h1 tag. Which in turn compiled to actual JS by JSX compiler.

####Compiled components file

{%highlight javascript%}
/** @jsx React.DOM */

//After JSX file is compiled
var HelloWorld = React.createClass({displayName: "hello",
  //render method takes input data and returns what to display
  render: function () {
    return (React.createElement("h1", null, "Hello World!!")); //h1 tag
  }
});
{%endhighlight %}

After creating a component, we have instruct the page to use the newly created component. See the below code.

{%highlight javascript%}
/** @jsx React.DOM */

React.render(
  <HelloWorld />,
  document.body
);
{%endhighlight %}

##Full example

{%highlight markup%}
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Hello world in React.js</title>
</head>
<body>
  
  <script src="http://fb.me/react-0.12.2.js"></script>
  <script src="http://fb.me/JSXTransformer-0.12.2.js"></script>  
  <script type="text/jsx">
    /** @jsx React.DOM */

    var HelloWorld = React.createClass({
      render: function() {
        return (<p>Hello, world!</p>);
      }
    });

    //Instruct the page to use above component
    React.render(
      <HelloWorld />,
      document.body
    );
  </script>
</body>
</html>
{%endhighlight %}

React also offers developer tool for chrome browser to debug the react application. Click <a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en" class="link" target="_blank">here</a> to install.

##DEMO

<a href="/demo/ReactJS/helloworld.html" target="_blank"><paper-button raised="" class="colored-yellow" role="button" tabindex="0" style="overflow: visible;">DEMO</paper-button></a>

##Conclusions

This article provides an overview of React.js framework. And I hope you liked my article and helped you to understand a brief about what is React.js. I will try to post more about react.js in future. For any doubts please comment below.

Share my post using the below link.

Thanks!!