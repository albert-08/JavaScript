function saludar(){
    console.log(`Hola. Soy ${this.name} ${this.apellido}`)
}

const frida = {
    name: 'Frida',
    apellido: 'Benitez Diaz'
}

saludar.call(frida)

function caminar(metros,direccion){
    console.log(`${this.name} camina ${metros} metros hacia ${direccion}`)
}

caminar.call(frida,400,'norte')

const valores = [800, 'norte']
caminar.apply(frida, valores)

//call = coma
//apply = arreglos

const daniela = {
    name: 'Daniela',
    apellido: 'Valdez'
}

const danielaSaluda = saludar.bind(daniela)
danielaSaluda()

const danielaCamina = caminar.bind(daniela, 400)
danielaCamina('sur')