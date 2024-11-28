let array = [10, "test", "palavra", false, 42]
let x = 0

do {
    console.log("Numero de x é:" + x)
    console.log("-------------------------------")
    console.log("valor da posicao é:" + array[x])
    console.log("-------------------------------")

    x++
} while (x < array.length)

    for(let index = 0; index < array.length; index ++) {
        console.log("Numero de index é:" + index)
    console.log("-------------------------------")
    console.log("valor da posicao é:" + array[index])
    console.log("-------------------------------")
    }