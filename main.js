//sum of two numbers, is it even or odd?
var x = -5
var y = -10
var z = x + y

if (z % 2 === 0) {
    console.log('this is even')
} else if (0 > z % 2 < 2) {
    console.log('this is odd')
}


// What is the area of a triangle?  Triangle area  >>  (b*h)/2  
var b = -15
var h = 10
var s = (b * h) / 2



// first example, but not best way
// if ((b < 0 && h > 0) || (b > 0 && h < 0)) {
//     console.log(-s)
// } else {
//     console.log(s)
// }

//when b<0 and h<0 number is positive, i don't consider this case b*h=positive number

//second example
if (s < 0) {
    console.log(-s)
} else {
    console.log(s)
}