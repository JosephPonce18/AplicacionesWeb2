import {Foro} from './Entidades'


// Iteración a través del arreglo 'Foro' utilizando 'forEach'
console.log("********************Foro mediante ciclo 1************************");
Foro.forEach((foro: any) => {
    for (let i = 0; i < 3; i++) {
        console.log(
            `id: ${foro.Id}, 
            Email: ${foro.email}, 
            description: ${foro.description}, 
            DatePublication: ${foro.date_publication},
            DateUpdate: ${foro.date_update}`
        );
    }
});

// Iteración a través del arreglo 'Foro' utilizando 'for in'
console.log("********************Foro mediante ciclo 2*************************");
for (let index in Foro) {
    const foro: any = Foro[index];
    for (let i = 0; i < 3; i++) {
        console.log(
            `id: ${foro.Id}, 
            Email: ${foro.email}, 
            description: ${foro.description}, 
            DatePublication: ${foro.date_publication},
            DateUpdate: ${foro.date_update}`
        );
    }
}

// Iteración a través del arreglo 'Foro' utilizando 'for of'
console.log("********************Foro mediante ciclo 3*************************");
for (const foro of Foro) {
    for (let i = 0; i < 3; i++) {
        console.log(
            `id: ${foro.Id}, 
            Email: ${foro.email}, 
            description: ${foro.description}, 
            DatePublication: ${foro.date_publication},
            DateUpdate: ${foro.date_update}`
        );
    }
}
