---
layout: post
title: Immutable Javascript
description: Immutable Javascript
---

#### What is a mutable object ?

In functional programming like javascript, An object can be modified after its creation. In contrast to mutable object, `Immutable object cannot be modified after its creation`.

In javascript, there are some values we use day to day are immutable

*Example*:

{%highlight javascript%}

var myName = "foo";

console.log(myName.slice(0, 1)); //Prints f
console.log(myName); //Prints foo

{%endhighlight%}

In above example, `slice` method returned a new string instead of changing its original string.

*An example for mutable object*:

{%highlight javascript%}

var arr = [];

arr.push(0); //Changes its original array
console.log(arr); //Prints [0]

{%endhighlight%}

There are few methods in javascript which in turn gives us a new array, instead of modifying the original array.

1. **[map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)**

2. **[filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)**

3. **[reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)**

4. **[slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)**

### Map

Map methods takes an array and returns a new array which is the return of the callback function on every element on original array.

*Let's see an example*:

{%highlight javascript%}

var arr = [1, 2, 3, 4, 5, 6];

var newArr = arr.map(function (currentValue, index) {
  return currentValue * 2;
});

//Gives us a new array which is multiple of 2
console.log(newArr); //Prints [2, 4, 6, 8, 10, 12]
console.log(arr); //Prints [1, 2, 3, 4, 5, 6]

{%endhighlight%}

In above example, `map` method takes an array and return us a new array without modifying the original array.

### Filter

*Let's see an example*:

{%highlight javascript%}

var arr = [1, 2, 3, 4, 5, 6];

var newArr = arr.map(function (value, index) {
  return value * 2;
});

//Gives us a new array which is multiple of 2
console.log(newArr); //Prints [2, 4, 6, 8, 10, 12]
console.log(arr); //Prints [1, 2, 3, 4, 5, 6]

{%endhighlight%}
