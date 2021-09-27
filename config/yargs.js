const argv = require('yargs')
.option('b', {
    alias: 'base',
    type:'number',
    demandOption: true,
    describe: 'Es la bse de la tabla de multiplicar'
})
.option('l', {
    alias: 'listar',
    type:'boolean',
    demandOption: true,
    default: false,
    describe: 'Muestra la tabla de multiplicar'
})
.option('h', {
    alias: 'hasta',
    type:'number',
    demandOption: true,
    describe: 'Hasta por cual numero se debe multiplicar'
})
.check((argv,options)=>{
    if(isNaN(argv.b)){
        throw ' la base tiene que ser un numero'
    }
    if(isNaN(argv.h)){
        throw ' el hasta tiene que ser un numero'
    } 
    return true;   
})
.argv;

/////////////////////
module.exports=argv;
