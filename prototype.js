function Persona (name) {
    this.name = name
}

Persona.prototype.saludar = function(){
    console.log(`Ella es ${this.name}`)
}

const frida = new Persona('Frida')

console.log('Name:', frida.name)
console.log('Saludar:', frida.saludar)