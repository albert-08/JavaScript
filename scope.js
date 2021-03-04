/* function printNumbers() {
    var i
    for(i = 0; i<10; i++){
        function eventuallyPrintNumber(n){
            setTimeout(() => {
                console.log(n)
            },100)
        }
        eventuallyPrintNumber(i)
    }
}

printNumbers() */

//Block Scope
function printNumbers() {
    for(let i = 0; i<10; i++){
        setTimeout(() => {
            console.log(i)
        },100)
    }
}

printNumbers()
