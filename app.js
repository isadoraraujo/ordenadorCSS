const readline = require("readline")
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

let question = () => {
    return new Promise((resolve) => rl.question('', resolve))} 

console.log('Digite propriedades CSS e eu irei listar em ordem alfabética')

let propriedadesOrdenadas = []

async function mainLoop() {
    let propriedades = await question()

    if(propriedades === 'sair') {
        console.log(propriedadesOrdenadas.sort( ))
        rl.close()
    }

    propriedadesOrdenadas.push(propriedades)
    mainLoop()
}

mainLoop()