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


### Map

Map method takes an array and returns a new array which is the return of the callback function on every element on original array.

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

Filter method takes an array and in callback it checks for the each element with provided condition and return a new array.

*Example*:

{%highlight javascript%}

var arr = [
  {
    name: "foo",
    age: 23
  },
  {
    name: "bar",
    age: 23
  },
  {
    name: "zoo",
    age: 24
  },
  {
    name: "yoo",
    age: 24
  }
];

var newArr = arr.filter(function (obj) {
  if (obj.age === 23) {
    return true;
  }
});

console.log(newArr); //Filter's age = 23

/*
Result:
[
  {
    "name": "foo",
    "age": 23
  },
  {
    "name": "bar",
    "age": 23
  }
]
*/

{%endhighlight%}

### Reduce

Reduce method takes an array and reduces into a single value from each element in array.

*Example*:

{%highlight javascript%}

var arr = [1, 2, 3, 4, 5, 6];

var newArr = arr.reduce(function (previousValue, currentValue) {
  return previousValue * currentValue;
});

console.log(newArr); //Prints 720

{%endhighlight%}

Thats all for today. Thanks. If you like my post share it.
