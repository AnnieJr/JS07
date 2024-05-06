const pokemonContainer = document.querySelector('.pokemon-container');

function fetchPokemon(id){ 
   fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`) 
   .then((res => res.json())) 
   .then((data) => {
     createPokemon(data);
   }); 
}



function fetchpokemons(number) { 
    for( let i = 1; i < number; i++){ 
        fetchPokemon(i); 
    }
}


function createPokemon(pokemon) { 
    const pokemonCard = document.createElement('div'); //* 1 crea un div para cada tarjeta
    pokemonCard.classList.add('pokemon-block'); 

    const pokemonConta = document.createElement('div'); // *2 crear contenedor de la imagen
    pokemonConta.classList.add('img-container');

    const pokemonImage = document.createElement('img'); //*3 crear una imagen
    pokemonImage.src = pokemon.sprites.front_default; 
    
    pokemonConta.appendChild(pokemonImage); //*4 agrega el contendor junto con la imagen para el fondo al div

    const pokemonNumber = document.createElement('p'); //*5 parrafo para el numero de pokemon
    pokemonNumber.textContent = `# ${pokemon.id.toString().padStart(3, 0)}`; 

    const pokemonName = document.createElement('p'); //*6 crear un parrafo para el nombre
    pokemonName.classList.add('pokemonName')// 
    pokemonName.textContent = pokemon.name;

    const pokemonWeight = document.createElement('p') //* 7 peso del pokemon
    pokemonWeight.textContent = `Weight: ${pokemon.weight}`; 
    
    
    pokemonCard.appendChild(pokemonConta); //* paso 2
    pokemonCard.appendChild(pokemonNumber) //* 5
    pokemonCard.appendChild(pokemonName); //* 6
    pokemonCard.appendChild(pokemonWeight); //* 7

    pokemonContainer.appendChild(pokemonCard); 
}   

fetchpokemons(16); 