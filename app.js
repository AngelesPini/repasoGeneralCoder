// funciones de orden superior: funciones que llaman/devuelven otras funciones

// que está haciendo esta funcion?

//  Mientras 'cuenta' sea menor o igual a 10, el cuerpo del bucle se ejecutará repetidamente. Dentro del cuerpo del bucle, se agrega el valor actual de cuenta a total y luego se aumenta cuenta en 1.

// Finalmente, después de que el bucle haya terminado, se muestra el valor final de total en la consola mediante la función console.log().

let total = 0;
let cuenta = 1;


while (cuenta <= 10) {
  total += cuenta;
  cuenta += 1;
}
console.log(total);



/*En este ejemplo, 'aplicar' es una función de orden superior que toma dos argumentos: una función 'funcion' y un valor 'valor'. La función 'aplicar' simplemente llama a la función 'funcion' con 'valor' como argumento y devuelve el resultado.

En el ejemplo de uso, se define la función cuadrado que toma un argumento y devuelve su cuadrado. Luego, se llama a la función aplicar pasando cuadrado como primer argumento y 5 como segundo argumento. El resultado de la llamada a aplicar es el cuadrado de 5, es decir, 25. */

function aplicar(funcion, valor) {
    return funcion(valor);
  }
  
  // Ejemplo de uso
  function cuadrado(x) {
    return x * x;
  }
  
  let resultado = aplicar(cuadrado, 5); // resultado = 25
  
  console.log(resultado)



/*En este ejemplo, según el parámetro op se termina asignando un return de función u otro a las variables declaradas. */
  function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b
    } else if (op == "restar") {
        return (a, b) => a - b
    }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")

console.log( suma(4, 6) )  //  10
console.log( resta(5, 3) )  //  2







/*En este ejemplo, filter es una función de orden superior que toma una función esLarga como argumento y devuelve un nuevo array llamado frutasLargas que contiene sólo las frutas del array original frutas que tienen más de 5 letras.

Después de llamar a filter con esLarga como argumento, se crea un nuevo array llamado frutasLargas que contiene las frutas que cumplen con la condición establecida por esLarga. En este caso, frutasLargas contendrá ['manzana', 'naranja', 'banana'], ya que son las únicas frutas en frutas que tienen más de 5 letras.

Por último, se utiliza el método join para concatenar los elementos de frutasLargas en una sola cadena de texto separada por comas y espacios. El resultado es una cadena de texto que contiene los nombres de las frutas largas, en este caso "manzana, naranja, banana".

En resumen, filter es una función de orden superior que se utiliza para crear un nuevo array con los elementos de un array original que cumplen una determinada condición. En este ejemplo, filter se utiliza para crear un nuevo array con las frutas largas de un array de frutas y luego se convierte en una cadena de texto con el método join.*/



const frutas = ['manzana', 'pera', 'naranja', 'banana', 'kiwi'];

const esLarga = (fruta) => fruta.length > 5;

const frutasLargas = frutas.filter(esLarga);

console.log(frutasLargas.join(', ')); // "manzana, naranja, banana"


// funcion que recibe a otra como parámetro


/* En este ejemplo, map es una función de orden superior que toma una función duplicar como argumento y devuelve un nuevo array con los resultados de aplicar duplicar a cada elemento del array original numeros. La función duplicar simplemente toma un número y devuelve su doble.

Después de llamar a map con duplicar como argumento, se crea un nuevo array llamado numerosDuplicados que contiene los resultados de aplicar la función duplicar a cada elemento de numeros. En este caso, numerosDuplicados contendrá [2, 4, 6, 8, 10], ya que cada número en numeros se ha duplicado.

En resumen, map es una función de orden superior que se utiliza para aplicar una función a cada elemento de un array y devolver un nuevo array con los resultados. En este ejemplo, map se utiliza para duplicar los elementos de un array de números.*/


const numeros = [1, 2, 3, 4, 5];

const duplicar = (numero) => numero * 2;

const numerosDuplicados = numeros.map(duplicar);

console.log(numerosDuplicados); // [2, 4, 6, 8, 10]


// metodos de busqueda y transformacion


/*En este ejemplo, forEach es una función de orden superior que toma una función como argumento y la ejecuta una vez para cada elemento en el array miArray. En este caso, la función pasada como argumento simplemente imprime cada elemento en la consola.

La función que se pasa como argumento a forEach toma un parámetro, que en este caso se llama elemento. Cada vez que la función es llamada por forEach, el parámetro elemento toma el valor de uno de los elementos en miArray, y la función se ejecuta en ese valor.

En resumen, forEach es una función de orden superior que se utiliza para realizar una tarea en cada elemento de un array. En este ejemplo, se utiliza forEach para imprimir cada elemento en la consola. */


let mostrar = document.getElementById('mostrar')
const miArray = [1, 2, 3, 4, 5];

miArray.forEach(function (elemento) {

    mostrar.innerHTML = '';
    let div = document.createElement('div')
    div.innerHTML = `<p>${elemento}</p>`

    mostrar.appendChild(div)
  console.log(elemento);
});

// find

/* En este ejemplo, find es una función de orden superior que toma una función como argumento y devuelve el primer elemento del array que cumple con la condición especificada en la función. En este caso, la función pasada como argumento busca un objeto en el array miArray cuyo id sea igual a 3.

La función que se pasa como argumento a find toma un parámetro, que en este caso se llama elemento. Cada vez que la función es llamada por find, el parámetro elemento toma el valor de uno de los elementos en miArray, y la función se ejecuta en ese valor.

En resumen, find es una función de orden superior que se utiliza para buscar un elemento en un array. En este ejemplo, se utiliza find para buscar el objeto en miArray cuyo id sea igual a 3.*/

const miArray2 = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Pedro" },
    { id: 3, nombre: "María" },
    { id: 4, nombre: "Lucía" },
  ];
  
  const elementoEncontrado = miArray2.find(function (elemento) {
    return elemento.id === 3;
  });
  
  console.log(elementoEncontrado); // { id: 3, nombre: "María" }
  



//   reduce

/*El método reduce() se utiliza para reducir un array a un único valor, aplicando una función a cada elemento del array.

Supongamos que tenemos un array de números y queremos sumarlos todos utilizando el método reduce(): 

En este ejemplo, la función que se pasa como primer argumento del método reduce() recibe dos parámetros: el acumulador y el valor actual. El acumulador es el valor resultante de aplicar la función en el valor anterior, y el valor actual es el valor actual del array en el que se está aplicando la función.

En la primera iteración, el valor del acumulador es 0 (porque se ha especificado como segundo argumento del método reduce()) y el valor actual es 2. La función devuelve 0 + 2, que se convierte en el nuevo valor del acumulador.

En la segunda iteración, el valor del acumulador es 2 (el resultado de la iteración anterior) y el valor actual es 5. La función devuelve 2 + 5, que se convierte en el nuevo valor del acumulador.

Y así sucesivamente, hasta que se han aplicado la función a todos los elementos del array y se obtiene el resultado final (25 en este caso).

El método reduce() es muy útil cuando se quiere aplicar una función a cada elemento de un array y obtener un único valor resultante, como una suma, un promedio, una concatenación de strings, etc.*/

const numeros2 = [2, 5, 8, 10];

const suma2 = numeros2.reduce(function(acumulador, numero2) {
  return acumulador + numero2;
}, 0);

console.log(suma2);








// objetos


function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
    this.hablar = function(){ console.log("HOLA SOY "+ this.nombre + ", tengo " + this.edad + " años")} //Acción
}
const persona10 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona11 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona10.hablar();
persona11.hablar();




const producto = { nombre:
    'manzana', categoria: 'frutas',
    precio: 1.99 ,
    nutrientes :
    { carbs: 0.95,
    grasas: 0.3,
    proteina: 0.2 }
    }
    console.log(producto);

    console.log(producto.nombre);
//"manzana"
console.log(producto["nombre"]);
//"manzana"
console.log(producto.nutrientes.carbs); //0.95

/*
¡Claro! En JavaScript, los objetos son una estructura de datos muy útil para almacenar información de forma organizada y accesible. Un objeto se define mediante la sintaxis de llaves {} y puede tener una serie de propiedades (pares de clave-valor) separadas por comas. La clave es una cadena de texto que representa el nombre de la propiedad, y el valor puede ser de cualquier tipo de dato válido en JavaScript.

Aquí te dejo un ejemplo de un objeto que representa un coche: */

const coche = {
    marca: "Ford",
    modelo: "Mustang",
    anio: 2021,
    color: "rojo",
    precio: 45000,
    conductor: {
      nombre: "Juan",
      edad: 35,
      licencia: true
    },
    caracteristicas: ["aire acondicionado", "sistema de audio premium", "asientos de cuero"]
  };

  
  /*En este ejemplo, el objeto coche tiene seis propiedades: marca, modelo, anio, color, precio, conductor y caracteristicas. La propiedad conductor es otro objeto que tiene tres propiedades: nombre, edad y licencia. La propiedad caracteristicas es un array que contiene tres elementos de tipo string.

Puedes acceder a las propiedades de un objeto utilizando la sintaxis de punto (objeto.propiedad) o la sintaxis de corchetes (objeto["propiedad"]). Por ejemplo:*/

console.log(coche.marca); // "Ford"
console.log(coche["modelo"]); // "Mustang"
console.log(coche.conductor.nombre); // "Juan"
console.log(coche["caracteristicas"][2]); // "asientos de cuero"


/*También puedes agregar nuevas propiedades a un objeto o modificar las existentes: */

coche.transmision = "automática";
coche.precio = 50000;

console.log(coche.transmision); // "automática"
console.log(coche.precio); // 50000


/*Los objetos son una parte fundamental de JavaScript y se utilizan en muchos aspectos del lenguaje, como por ejemplo para representar elementos del DOM, para manejar datos de formularios, para crear clases y mucho más. */