let pizzas = [
    {
        id: 1,
        nombre: 'Muzzarella',
        ingredientes: ['Queso mozzarella', ' aceitunas', ' oregano'],
        precio: 1200 
    },
    {
        id: 2,
        nombre: 'Fugazzetta',
        ingredientes: ['Queso mozzarella', ' cebolla', ' oregano'],
        precio: 1300 
    },
    {
        id: 3,
        nombre: 'Jamon y Queso',
        ingredientes: ['Queso mozzarella', ' jamón'],
        precio: 1400 
    },
    {
        id: 4,
        nombre: 'de Cancha',
        ingredientes: ['Salsa de tomate', ' salsa picante'],
        precio: 500
    },
    {
        id: 5,
        nombre: 'Peperonni',
        ingredientes: ['Queso mozzarella', 'queso parmesano', ' peperonni'],
        precio: 1500 
    },
    {
        id: 6,
        nombre: 'Cuatro quesos',
        ingredientes: ['Queso Muzzarella', ' queso fontana', ' queso gorgonzola', ' queso parmesano'],
        precio: 1600 
    },
]

    
    // Primer ejercicio
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

    pizzas.forEach(function ({nombre, ingredientes}) {
      console.log(`La pizza ${nombre} posee los siguientes ingredientes: ${ingredientes}`);  
    })