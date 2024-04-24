
const montoInicial = document.getElementById('montoInicial')
const montoFinalConvertido = document.getElementById('montoFinalConvertido')
const cantidad = document.getElementById('monto')


const btn = document.getElementById('calcular');
btn.addEventListener('click', () => {
  //debugger;
/*************CALCULADORA Bolivianos*********** */

if(montoInicial.value === 'BOB' && montoFinalConvertido.value === 'CLP'){
   const resultado = document.getElementById('respuesta')
    resultado.value = Bolivianos_A_PesosChilenos(cantidad.value)
     console.log(resultado);
}

if(montoInicial.value === 'BOB' && montoFinalConvertido.value === 'MXN'){
  const resultado = document.getElementById('respuesta')
   resultado.value = Bolivianos_A_PesosMexicanos(cantidad.value)
    console.log(resultado);
}

if(montoInicial.value === 'BOB' && montoFinalConvertido.value === 'ARS'){
  const resultado = document.getElementById('respuesta')
   resultado.value = Bolivianos_A_PesosArgentinos(cantidad.value)
    console.log(resultado);
}

if(montoInicial.value === 'BOB' && montoFinalConvertido.value === 'USD'){
  const resultado = document.getElementById('respuesta')
   resultado.value = Bolivianos_A_Dolares(cantidad.value)
    console.log(resultado);
}

/*************CALCULADORA Pesos chilenos*********** */

if(montoInicial.value === 'CLP' && montoFinalConvertido.value === 'BOB'){
  const resultado = document.getElementById('respuesta')
   resultado.value = PesosChilenos_A_Bolivianos(cantidad.value)
    console.log(resultado);
}

if(montoInicial.value === 'CLP' && montoFinalConvertido.value === 'MXN'){
 const resultado = document.getElementById('respuesta')
  resultado.value = PesosChilenos_A_PesosMexicanos(cantidad.value)
   console.log(resultado);
}

if(montoInicial.value === 'CLP' && montoFinalConvertido.value === 'ARS'){
 const resultado = document.getElementById('respuesta')
  resultado.value = PesosChilenos_A_PesosArgentinos(cantidad.value)
   console.log(resultado);
}

if(montoInicial.value === 'CLP' && montoFinalConvertido.value === 'USD'){
 const resultado = document.getElementById('respuesta')
  resultado.value = PesosChilenos_A_Dolares(cantidad.value)
   console.log(resultado);
}


/*************CALCULADORA Pesos Mexicanos*********** */

if(montoInicial.value === 'MXN' && montoFinalConvertido.value === 'BOB'){
  const resultado = document.getElementById('respuesta')
   resultado.value = PesosMexicanos_A_Bolivianos(cantidad.value)
    console.log(resultado);
}

if(montoInicial.value === 'MXN' && montoFinalConvertido.value === 'CLP'){
 const resultado = document.getElementById('respuesta')
  resultado.value = PesosMexicanos_A_PesosChilenos(cantidad.value)
   console.log(resultado);
}

if(montoInicial.value === 'MXN' && montoFinalConvertido.value === 'ARS'){
 const resultado = document.getElementById('respuesta')
  resultado.value = PesosMexicanos_A_PesosArgentinos(cantidad.value)
   console.log(resultado);
}

if(montoInicial.value === 'MXN' && montoFinalConvertido.value === 'USD'){
 const resultado = document.getElementById('respuesta')
  resultado.value = PesosMexicanos_A_Dolares(cantidad.value)
   console.log(resultado);
}



/*************CALCULADORA Pesos Argentinos*********** */

if(montoInicial.value === 'ARS' && montoFinalConvertido.value === 'BOB'){
  const resultado = document.getElementById('respuesta')
   resultado.value = PesosArgentinos_A_Bolivianos(cantidad.value)
    console.log(resultado);
}

if(montoInicial.value === 'ARS' && montoFinalConvertido.value === 'CLP'){
 const resultado = document.getElementById('respuesta')
  resultado.value = PesosArgentinos_A_PesosChilenos(cantidad.value)
   console.log(resultado);
}

if(montoInicial.value === 'ARS' && montoFinalConvertido.value === 'MXN'){
 const resultado = document.getElementById('respuesta')
  resultado.value = PesosArgentinos_A_PesosMexicanos(cantidad.value)
   console.log(resultado);
}

if(montoInicial.value === 'ARS' && montoFinalConvertido.value === 'USD'){
 const resultado = document.getElementById('respuesta')
  resultado.value = PesosArgentinos_A_Dolares(cantidad.value)
   console.log(resultado);
}



/*************CALCULADORA Dolares*********** */


if(montoInicial.value === 'USD' && montoFinalConvertido.value === 'BOB'){
  const resultado = document.getElementById('respuesta')
   resultado.value = Dolares_A_Bolivianos(cantidad.value)
    console.log(resultado);
}

if(montoInicial.value === 'USD' && montoFinalConvertido.value === 'CLP'){
 const resultado = document.getElementById('respuesta')
  resultado.value = Dolares_A_PesosChilenos(cantidad.value)
   console.log(resultado);
}

if(montoInicial.value === 'USD' && montoFinalConvertido.value === 'ARS'){
 const resultado = document.getElementById('respuesta')
  resultado.value = Dolares_A_PesosArgentinos(cantidad.value)
   console.log(resultado);
}

if(montoInicial.value === 'USD' && montoFinalConvertido.value === 'MXN'){
 const resultado = document.getElementById('respuesta')
  resultado.value = Dolares_A_PesosMexicanos(cantidad.value)
   console.log(resultado);
}

})


/************************************/
/*************FUNCIONES**************/
/************************************/

/*************Bolivianos*********** */

function Bolivianos_A_PesosChilenos(monto_bol) {
  let bol = monto_bol * 119.23
  return bol
}

function Bolivianos_A_PesosMexicanos(monto_bol) {
  let bol = monto_bol * 2.46
  return bol
}

function Bolivianos_A_PesosArgentinos(monto_bol) {
  let bol = monto_bol * 38.90
  return bol
}

function Bolivianos_A_Dolares(monto_bol) {
  let bol = monto_bol * 0.14
  return bol
}

/*************Pesos Chilenos*********** */

function PesosChilenos_A_Bolivianos(monto_Pesos_Chilenos) {
  let pesosChilenos = monto_Pesos_Chilenos * 0.0084
  return pesosChilenos
}

function PesosChilenos_A_PesosMexicanos(monto_Pesos_Chilenos) {
  let pesosChilenos = monto_Pesos_Chilenos * 0.021
  return pesosChilenos
}

function PesosChilenos_A_PesosArgentinos(monto_Pesos_Chilenos) {
  let pesosChilenos = monto_Pesos_Chilenos * 0.33
  return pesosChilenos
}

function PesosChilenos_A_Dolares(monto_Pesos_Chilenos) {
  let pesosChilenos = monto_Pesos_Chilenos * 0.0012
  return pesosChilenos
}

/*************Pesos Mexicanos*********** */

function PesosMexicanos_A_Bolivianos(monto_Pesos_Mexicanos) {
  let pesosMexicanos = monto_Pesos_Mexicanos * 0.41
  return pesosMexicanos
}

function PesosMexicanos_A_PesosChilenos(monto_Pesos_Mexicanos) {
  let pesosMexicanos = monto_Pesos_Mexicanos * 48.06
  return pesosMexicanos
}

function PesosMexicanos_A_PesosArgentinos(monto_Pesos_Mexicanos) {
  let pesosMexicanos = monto_Pesos_Mexicanos * 15.80
  return pesosMexicanos
}

function PesosMexicanos_A_Dolares(monto_Pesos_Mexicanos) {
  let pesosMexicanos = monto_Pesos_Mexicanos * 0.059
  return pesosMexicanos
}

/*************Pesos Argentinos*********** */

function PesosArgentinos_A_Bolivianos(monto_Pesos_Argentinos) {
  let pesosArgentinos = monto_Pesos_Argentinos * 0.026
  return pesosArgentinos
}

function PesosArgentinos_A_PesosChilenos(monto_Pesos_Argentinos) {
  let pesosArgentinos = monto_Pesos_Argentinos * 3.04
  return pesosArgentinos
}

function PesosArgentinos_A_PesosMexicanos(monto_Pesos_Argentinos) {
  let pesosArgentinos = monto_Pesos_Argentinos * 0.063
  return pesosArgentinos
}

function PesosArgentinos_A_Dolares(monto_Pesos_Argentinos) {
  let pesosArgentinos = monto_Pesos_Argentinos * 0.0037
  return pesosArgentinos
}

/*************Dolares*********** */

function Dolares_A_Bolivianos(monto_Dolares) {
  let dolar = monto_Dolares * 6.91
  return dolar
}

function Dolares_A_PesosChilenos(monto_Dolares) {
  let dolar = monto_Dolares * 816.48
  return dolar
}

function Dolares_A_PesosMexicanos(monto_Dolares) {
  let dolar = monto_Dolares * 16.99
  return dolar
}

function Dolares_A_PesosArgentinos(monto_Dolares) {
  let dolar = monto_Dolares * 268.46
  return dolar
}