const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");


console.clear();

// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");
// console.log(base);

// const base = 7;

//console.log(process.argv);

console.log(argv);

//console.log('base: yargs', argv.base);

crearArchivo(argv.base, argv.l, argv.h)
.then(nombreArchivo=> console.log(nombreArchivo,'creado'))
.catch(err=>console.log(err));