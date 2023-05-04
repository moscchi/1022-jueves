const mandado = (hayPanRallado) => {
    return new Promise((resolve, reject) => {
        if(hayPanRallado) {
            resolve("Comemos milanesas")
        } else {
            reject("Comemos fideos :(")
        }
    })
}

const habia = false

mandado(habia)
    .then(compra => {
        console.log("Resultado de la compra: ", compra)
    })
    .catch(error => {
        console.log("Resultado de la compra que fallo: ", error)
    })




    //import algo from './algo' === const algo = require('./algo')
    const axios = require('axios')
    axios.get()