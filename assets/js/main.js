const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('carregaMaisPokemon');

const limitPokemon = 151;
const limit = 12;
let offset = 0;

function carregaOsPokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <a href="./pokemonDetail.html#${pokemon.number}"><li id = "p${pokemon.number}" class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                    <div class="detail">
                                <ol class="types">
                                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join(``)}
                                </ol>
                        <img src="${pokemon.photo}"
                        alt='${pokemon.name}'>
                    </div>
            </li></a>`).join(``);

        pokemonList.innerHTML += newHtml;
    })
}

carregaOsPokemons(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const nextPage = offset + limit;


    if (nextPage >= limitPokemon) {
        const newLimit = limitPokemon - offset;

        carregaOsPokemons(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
        return
    } else {
        carregaOsPokemons(offset, limit);
    }
})

function mudaTema() {
    document.body.classList.toggle("dark");
  }