//first example - reverse word - smartacademy
function reverse(title) {
    return title.split('').reverse().join('')

}
console.log(reverse("Smartacademy"))

//second example
// 1**1 = 1
//2**2 =4
// 3**3=27 ... 


var numbers = "123456789"
var numbers1 = parseInt(i)

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i] ** numbers[i])
}
var numbers1 = parseInt(i)
console.log(typeof i)


//third example 
// 1 ** 1 = 1
// 1 ** 2 = 1
// 1 ** 3 = 1
// ..............
// 2 ** 1 = 2
// 2 ** 2 = 4
// 2 ** 3 = 8
// ...............
// 3 ** 1 = 3
// 3 ** 2 = 9
// 3 ** 3 = 27
// ...............

for (var i = 0; i < numbers.length; i++) {

    for (var b = 0; b < numbers.length; b++) {

        console.log(numbers[i] ** numbers[b])

    }
    var numbers1 = parseInt(i)
    var numbers2 = parseInt(b)
    console.log(typeof i)
    console.log(typeof b)
}