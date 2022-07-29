let ordenadorAZ = new Promise((res, rej) => {
    res()
    rej()
})

ordenadorAZ.then(
    (propriedadesCSS) => {
        console.log(propriedadesCSS = ['font-size', 'text-align', 'backgroung-color'].sort())
    },
    (error) => {
        console.log(error)
    }
)