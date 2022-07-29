const readline = require("readline")
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

let ordenadorAZ = new Promise((res, rej) => {
    res()
    rej()
})

ordenadorAZ.then(
    () => {
        rl.question('Digite uma propriedade CSS e eu irei listar de A-Z: ', (propriedade) => {
            let propriedadesOrdenadas = propriedade.split(' ').sort( )
            console.log(propriedadesOrdenadas)
        })
    },
    (error) => {
        console.log(error)
    }
)