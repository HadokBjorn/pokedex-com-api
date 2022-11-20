const id = window.location.hash.substring(1);
const newPage = document.getElementById("newPage");

const limitPokemon = 151;
const limit = 1;
let offset = id-1;

function detailToPage(offset,limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                    <div class="detail">
                                <ol class="types">
                                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join(``)}
                                </ol>
                        <img src="${pokemon.photo}"
                        alt='${pokemon.name}'>
                        <div class = "atributos">
                        <p>HP <br><progress class ="progress" value="${pokemon.hp}" max="100"></progress> ${pokemon.hp}</p>
                        <p>ATTACK <br><progress class ="progress" value="${pokemon.attack}" max="100"></progress> ${pokemon.attack}</p>
                        <p>DEFENSE <br><progress class ="progress" value="${pokemon.defense}" max="100"></progress> ${pokemon.defense}</p>
                        <p>SPECIAL ATTACK <br><progress class ="progress" value="${pokemon.spAttack}" max="100"></progress> ${pokemon.spAttack}</p>
                        <p>SPECIAL DEFENSE <br><progress class ="progress" value="${pokemon.spDefense}" max="100"></progress> ${pokemon.spDefense}</p>
                        <p>SPEED <br><progress class ="progress" value="${pokemon.speed}" max="100"></progress> ${pokemon.speed}</p>
                        </div>
                    </div>
            </li>`).join(``);

        newPage.innerHTML += newHtml;
    })
}
detailToPage(offset,limit);

function mudaTema() {
    document.body.classList.toggle("dark");
  }