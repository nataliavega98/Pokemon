//https://pokeapi.co/
//https://pokeapi.co/api/v2/{endpoint}/

// "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
// Query params son los parámetros que recibe a través de una URL.
// Offset
// Limit: Me trae solo 20 pokemones

const card = document.getElementById("card");
const searchbarInput = document.getElementById("search")
const searchbarBtn = document.getElementById("btnsearch")
const form = document.getElementById('form')
const small = document.getElementById("small")
const buscarPokemon = async () => {

    const pokemon = searchbarInput.value;
    if(!pokemon.length){renderError("El campo esta vacío, ingresé un numero"); return}
    console.log(pokemon);
    try {
        const getData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const jsonData = await getData.json();
        console.log(getData);
        console.log(jsonData);
        renderHtml(jsonData);
        renderError("")
    } catch (error) {
        console.log(error)
        renderError("No se encontró un pokemon")
    }

}

function renderError (mensaje) {
    small.innerHTML = mensaje;
}

const renderHtml = (pokemonData) => {

    card.innerHTML = `<div id="pokemon">
    <h3>${pokemonData.name.toUpperCase()}</h3>
        <div class="imagen">
            <img src="${pokemonData.sprites.front_default}" alt="">
        </div>
        <div>
            <h4>Tipo principal</h4><p>${pokemonData.types[0].type.name}</p>
        </div>
        <div>
            <h4>Altura</h4><p>${pokemonData.height /10} metros</p>
        </div>
        <div>
            <h4>Peso</h4><p>${pokemonData.weight /10} kilogramos</p>
        </div>
</div>
</article>`
};



console.log(renderHtml);

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        buscarPokemon();
    })
    