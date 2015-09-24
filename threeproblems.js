/**
 * Created by Rory on 9/23/2015.
 */

var testlist = [1, 4, 8, 3, 12, 7];

var testlist2 = ['a', 'b', 'c', 'd'];

//Problem 1: Write four functions that return the sum of the numbers in a given list using a for-loop, a while-loop, recursion, and underscore. Call them sumFor, sumWhile, sumRecursion, and sumTheSimpleWay.

function sumFor(list) {
  var count = 0;
  for(var i = 0; i < list.length; i++) {
    count += list[i];
  }
  return count;
}

console.log(sumFor(testlist));

function sumWhile(list) {
  var i = 0;
  var count = 0;
  while(i < list.length) {
    count += list[i];
    i++;
  }
  return count;
}
console.log(sumWhile(testlist));

function sumRecursion(list) {
  return sumRecursionHelper(list, 0);
}

function sumRecursionHelper(list, num) {
  if(num < list.length) {
    return list[num] + sumRecursionHelper(list, num + 1);
  }
  else {
    return 0;
  }
}

console.log(sumRecursion(testlist));

function sumTheSimpleWay(list) {
  return _.reduce(list, addUp, 0);
}

function addUp(memo, num) {
  return memo + num;
}

console.log(sumTheSimpleWay(testlist));

//Problem 2: Write a function called zipList that accepts two lists of equal length and returns the result of alternatingly taking elements. For example: given the two lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3]. zipList should not use underscore. Now write a function called zipListTheSimpleWay that does the same thing using underscore.

function zipList(list1, list2) {
  var newlist = [];
  var j = 0;

  for(var i = 0; i < Math.max(list1.length, list2.length); i++) {
    if(list1[i] != undefined) {
      newlist[j] = list1[i];
      j++;
    }
    if(list2[i] != undefined) {
      newlist[j] = list2[i];
      j++;
    }
  }
  return newlist;
}

console.log(zipList(testlist, testlist2));

function zipListTheSimpleWay(list1, list2) {
  return _.compact(_.flatten(_.zip(list1, list2)));
}

console.log(zipListTheSimpleWay(testlist, testlist2));

//Problem 3: Write a function called fib that returns a list of the first 100 Fibonacci numbers. By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. As an example, here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.

function createFibList(num) {
  var list = [0, 1];

  for(var i = 2; i < num; i++) {
    list[i] = list[i - 1] + list[i - 2];
  }

  return list;
}

console.log(createFibList(100));