async function fetchData(e) {
    if (e.key == "Enter" && e.target.value != "") { 
    const inputValue = document.getElementById("user").value;
    const data = await fetch(`https://pokeapi.co/v2/pokemon/${inputValue}`);
    const json = await data.json();

    document.getElementById('pokemonName').innerText = json.name;
    document.getElementById('type').innerText = json.type;
    document.getElementById('abilities').innerText = json.abilities;
    document.getElementById("pokemonImg").src = json.sprites.front_default;
    // console.log(json);
    // console.log(data);
    }
}
const input = document.getElementById("pokemonId")

input.addEventListener("keypress", e => fetchData(e));