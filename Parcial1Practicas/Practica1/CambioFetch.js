
fetch('https://pokeapi.co/api/v2/pokemon/93', {
    method: 'GET'
})
        // Extrae la experiencia base del Pokémon de los datos recibidos.
    .then(response => response.json())
    .then(data => {
    const pokemonExpB = data.base_experience;
            // Imprime la experiencia base del Pokémon en la consola.
    console.log(`El experiencia base del Pokémon es: ${pokemonExpB}`);
    })
    .catch(error => console.error('Ha ocurrido un error:', error));