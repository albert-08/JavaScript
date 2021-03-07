function* simpleGenerator(){
    console.log('GENERATOR START'),
    yield 1,
    yield 2,
    yield 3,
    console.log('GENERATOR END')
}

const gen = simpleGenerator()
console.log(gen)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

function* idMaker(){
    let id = 1
    while(true){
        yield id
        id++
    }
}

const g = idMaker()
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())

function* idMakerReset(){
    let id = 1
    let reset
    while(true){
        reset = yield id
        if(reset) id=1
        else id++
    }
}

const gr = idMakerReset()
console.log(gr.next())
console.log(gr.next())
console.log(gr.next())
console.log(gr.next())
console.log(gr.next())
console.log(gr.next(true))
console.log(gr.next())
console.log(gr.next())
console.log(gr.next(true))
console.log(gr.next())
console.log(gr.next())
console.log(gr.next(true))

function* fibonacci(){
    let a = 1
    let b = 1
    while(true){
        const nextNumber = a + b
        a = b
        b = nextNumber
        yield nextNumber
    }
}