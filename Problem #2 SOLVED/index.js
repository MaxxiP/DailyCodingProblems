/*
Hard

This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

let arr_int = [1,2,3,4,5];
let arr_solution = [];
let product = 1;

for(let i = 0; i < arr_int.length; i++){
    for (let j = 0; j < arr_int.length; j++) {
        if(!(arr_int[j] == arr_int[i])) product *= arr_int[j];
    }
    arr_solution.push(product);
    product = 1;
}
console.log(arr_solution);