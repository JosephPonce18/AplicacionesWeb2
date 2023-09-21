//1. Definir un arreglo de objetos en base a su entidad asignada en el proyecto autónomo
//con por lo menos 5 elementos.

// Definición de la interfaz 'foros' que representa una estructura de datos para foros.

interface foros {
    [x: string]: any;
    Id: number;
    email:string;
    description:string;
    date_publication:string;
    date_update: string;
}


// Definición de un arreglo 'Foro' que contiene objetos que cumplen con la interfaz 'foros'.
export const Foro:foros []= [
    {
    Id: 1,
    email: "poncejoseph182000@gmail.com",
    description:"Foro1",
    date_publication:"10 deseptiembre, 12:45",
    date_update: "15 de septiembre, 13:00",
    },
    {
    Id: 2,
    email: "poncejoseph@gmail.com",
    description:"Foro2",
    date_publication:"20 deseptiembre, 15:45",
    date_update: "21 de septiembre, 10:00",
    },    
    {
    Id: 3,
    email: "bravog@gmail.com",
    description:"Foro3",
    date_publication:"1 deseptiembre, 08:45",
    date_update: "5 de septiembre, 10:00",
    },
]
