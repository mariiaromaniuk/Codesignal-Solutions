/*
  Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
  
  Example
  inputArray = [3, 6, -2, -5, 7, 3];
  adjacentElementsProduct(inputArray); => 21 (7 and 3 produce the largest product)
*/

function adjacentElementsProduct(arr) {
    let largest = arr[0] * arr[1];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] * arr[i-1] > largest)
            largest = arr[i] * arr[i-1];
    }
    return largest;
}
