//Interfaces propuestas
export interface ISoftware{
    id: number;
    name: string;
    price: number;
    detail: string;
    requirements: IRequirement[];

}
export interface IRequirement{
    id: number;
    description: string;
    cost: number;
    effort: number;
    softwareId: number;
}
//---------------------------------------------//
// Definición de objetos que cumplen con las interfaces
const software1: ISoftware = {
    id: 1,
    name: "Software A",
    price: 199.99,
    detail: "Descripción del Software A",
    requirements: [
        {
            id: 1,
            description: "Requisito 1",
            cost: 50.0,
            effort: 20.0,
            softwareId: 1
        },
        {
            id: 2,
            description: "Requisito 2",
            cost: 30.0,
            effort: 15.0,
            softwareId: 1
        }
    ]
};
const software2: ISoftware = {
    id: 2,
    name: "Software B",
    price: 149.99,
    detail: "Descripción del Software B",
    requirements: [
        {
            id: 3,
            description: "Requisito 3",
            cost: 45.0,
            effort: 18.0,
            softwareId: 2
        }
    ]
};

const software3: ISoftware = {
    id: 3,
    name: "Software C",
    price: 249.99,
    detail: "Descripción del Software C",
    requirements: []
};

// Arreglo con los objetos de software
const softwareArray: ISoftware[] = [software1, software2, software3];

/***************************************************/




//2. crear y llamar una funcion que reciba dos parametros:
//a)arreglo de objeto del tipo interfaz propuesta.
//b)precio referencial
//y devuelva todos los paquetes de software desarrollados con un precio mayor al referencial.
//al momento de llamar esta funcion utilizar un callback para mostrar los elementos encontrados por consola




// Definición de la función para buscar software por precio usando callback
function findSoftwareByPrice(softwareList: ISoftware[], targetPrice: number, callback: (error: string | null, filteredSoftware: ISoftware[]) => void) {
    const filteredSoftware = softwareList.filter(software => software.price > targetPrice);
    
    if (filteredSoftware.length === 0) {
        callback("No se encontraron paquetes de software por encima del precio referencial", []);
    } else {
        callback(null, filteredSoftware);
    }
}

const targetPrice = 200.0;
findSoftwareByPrice(softwareArray, targetPrice, (error, filteredSoftware) => {
    if (error) {
        console.error(error);
    } else {
        console.log("Paquetes de software con precio superior al referencial:");
        filteredSoftware.forEach(software => {
            console.log("Nombre: " + software.name);
            console.log("Precio: $" + software.price);
        });
    }
});


