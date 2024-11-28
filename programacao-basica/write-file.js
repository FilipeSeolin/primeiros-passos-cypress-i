const fs = require('fs')

fs.writeFile('message.txt', "Oi Mãe", (err) => {
    if (err) {
        throw err;
    } else {
    console.log('The file has been saved!')
    }
})