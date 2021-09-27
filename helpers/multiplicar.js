const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base = 5, l=false, hasta=10) => { // Asincrono  

  try {   

    let salida = "";
    let consola = "";


    for (let i = 1; i <= hasta; i++) {
      salida += `${colors.blue(base)} x ${colors.yellow(i)} = ${colors.green(base * i)}\n`;
      consola += `${base} x ${i} = ${base * i}\n`;
      
    }

    if(l){
        console.log(colors.red("============"));
        console.log("Table del ", base);
        console.log(colors.red("============"));
        console.log(salida);
    }
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);

    return `tabla-${base}.txt Archivo creado`; //debe devolver return

  } catch (err) {
    throw err;
  }
};

//////////////////
module.exports = {
  crearArchivo,
};
