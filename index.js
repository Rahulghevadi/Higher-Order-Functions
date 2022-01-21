
const arr = [2, 4, 2, 5];

function Area(arr) {
    return Math.PI*arr*arr
}

function Circumference(arr) {
    return Math.PI * 2 * arr * arr;
}

function diameter(arr) {
    return 2 * arr;
}

const Calculate= function(arr, logic ) {
    const result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(logic(arr[i]))
    } 
    return result
}

console.log(Calculate(arr, Area))
console.log(Calculate(arr,Circumference))
console.log(Calculate(arr, diameter))




