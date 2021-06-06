/*async function fetchData(e) {
    if (e.key == "Enter" && e.target.value != "") { 
    var inputValue = document.getElementById("user").value;
    var data = await fetch(`https://pokeapi.co/v2/pokemon/${inputValue}`);
    var json = await data.json();

    document.getElementById('pokemonName').innerText = json.name;
    document.getElementById('type').innerText = json.type;
    document.getElementById('abilities').innerText = json.abilities;
    document.getElementById("pokemonImg").src = json.sprites.front_default;
    // console.log(json);
    // console.log(data);
    }
}
var input = document.getElementById("pokemonId");

input.addEventListener("keypress", e  fetchData(e));*/
var buton = document.getElementById('buton');

buton.addEventListener('click', () => {
    var image = document.getElementById('img');
    var p = document.getElementById('info');
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://pokeapi.co/v2/pokemon/3");
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status ==200)
        {
            var datoPokemon = JSON.parse( this.responseText);
            img.setAttribute("src", datoPokemon.sprites.front_default);
            
        }
    };
} );