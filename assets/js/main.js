const olPokemon = document.querySelector('.pokemons');
const buttonLoadMore = document.querySelector('#loadMore');

const limit = 10;
let offset = 0;
const maxRecords = 151;

function loadPokemonItems(offset, limit){
    
    pokeApi.getPokemon(offset, limit).then((pokemonList = []) => {

        olPokemon.innerHTML += pokemonList.map((pokemon) => {

            pokemon.name = firstLetterToUpperCase(pokemon.name);
        
            return `
            <li class="pokemons-item ${pokemon.type}" id="${pokemon.id}" onClick="handleClick(this.id)">
                    <span class="number">#${pokemon.id}</span>
                    <span class="name">${pokemon.name}</span>
                        <div class="detail">
                            <ol class="types">
                                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                            </ol>
        
                            <img src="${pokemon.photo}" alt="${pokemon.name}">
                        </div>
                </li>`
        }).join('\n');
    });
}






loadPokemonItems(offset, limit);

buttonLoadMore.addEventListener('click', () => {
    offset += limit;

    const qtdRecordNextPage = offset + limit;

    if(qtdRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset;
        loadPokemonItems(offset, newLimit);

        buttonLoadMore.parentElement.removeChild(buttonLoadMore);
    }else{
        loadPokemonItems(offset, limit);
    }
})

function firstLetterToUpperCase(string){
    return string[0].toUpperCase() + string.slice(1);
}


