/* //IIFE
(function(){
    let color = 'green'

    function printColor(){
        console.log(color)
    }

    printColor()
})()

function makeColorPrinter(color){
    let colorMessage = `The color is ${color}`

    return function() {
        console.log(colorMessage)
    }
}

let greenColorPrinter = makeColorPrinter('green')
console.log(greenColorPrinter()) */

//Variables "privadas"
const counter = {
    count:3
}

console.log(counter.count)

counter.count = 7

console.log(counter.count)

/* function makeCounter(n) {
    let count = n

    return {
        incrase: function() {
            count++
        },
        decrase: function() {
            count--
        },
        getCount: function() {
            return count
        }
    }
}

let counter = makeCounter(7)

console.log('The count is:', counter.getCount())
counter.incrase()
console.log('The count is:', counter.getCount())
counter.decrase()
counter.decrase()
counter.decrase()
counter.decrase()
console.log('The count is:', counter.getCount())

counter.count = 0

console.log('The count is:', counter.getCount()) */