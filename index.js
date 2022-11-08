let pizzas = [
    {
        id: 1,
        nombre: 'Muzzarella',
        ingredientes: ['Queso mozzarella', 'Aceitunas', 'Oregano'],
        precio: 1200 
    },
    {
        id: 2,
        nombre: 'Fugazzetta',
        ingredientes: ['Queso mozzarella', 'Cebolla', 'Oregano'],
        precio: 1300 
    },
    {
        id: 3,
        nombre: 'Jamon y Queso',
        ingredientes: ['Queso mozzarella', 'Jamón'],
        precio: 1400 
    },
    {
        id: 4,
        nombre: 'de Cancha',
        ingredientes: ['Salsa de tomate', 'Salsa picante'],
        precio: 500
    },
    {
        id: 5,
        nombre: 'Peperonni',
        ingredientes: ['Queso mozzarella', 'Queso parmesano', 'Peperonni'],
        precio: 1500 
    },
    {
        id: 6,
        nombre: 'Cuatro quesos',
        ingredientes: ['Queso Muzzarella', 'Queso fontana', 'Queso gorgonzola', 'Queso parmesano'],
        precio: 1600 
    },
]


const FORM = document.getElementById("formulario");
const INPUT = document.getElementById("input_number");
const SECTION = document.getElementById("guardar")

const pizzaPorID = (value) => pizzas.find((pizza) => pizza.id === value)


const isEmpty = () => {
    SECTION.innerHTML = 
    `
    <h2>No pudimos encontrar tu pizza, ingresa un número por favor.</h2>
    `
}

const renderizado = (pizza) => {
  if (!pizza) {
    SECTION.innerHTML = `<h2>No pudimos encontrar tu pizza, ingresa un número entre 1 y 6.</h2>`
  } else {
    SECTION.innerHTML = `
    <div>
    <h2>${pizza.nombre}</h2>
    <h3>Con un precio de: ${pizza.precio}</h3>
    </div>
    `
  }
}

const showPizza = (e) => {
    e.preventDefault();
    const idNumero = INPUT.value;
    if (!idNumero) {
        isEmpty(idNumero)
        return;
    }   
    const pedirPizza = pizzaPorID(Number(idNumero))
    renderizado(pedirPizza)
}


const init = () => {
  FORM.addEventListener("submit", showPizza)
}

init();

    /* E-1
    
    Primer ejercicio
    let pizzaConIdImpar = pizzas.filter ((pizza)=> pizza.id%2 == 1)
    pizzaConIdImpar.forEach(function ({nombre}) {
        console.log(`Las pizzas con id impar son: ${nombre}`);
    })
    
    //Segundo ejercicio
    let pizzaEconomica = pizzas.filter ((pizza) => pizza.precio < 600)
    pizzaEconomica.forEach(function ({nombre, precio}) {
        console.log(`La pizza ${nombre} tiene un precio de $ ${precio}`);
    })
    //Tercer ejercicio
    let nombrePrecio = pizzas.forEach(function ({nombre, precio}) {
        console.log(`Llevese la pizza ${nombre} al precio de $ ${precio}`);
    })

    //Cuarto ejercicio

    pizzas.forEach(pizza => {
      console.log(`Los ingredientes de la ${pizza.nombre} son:`);
      pizza.ingredientes.forEach((ingrediente)  => console.log(ingrediente));
    })
*/
