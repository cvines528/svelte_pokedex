<script>
    function renderPokemon(pokeData){
        let allPokemonContainer = document.getElementById('poke-container');
        // allPokemonContainer.classList.add('w-screen')
        let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
        pokeContainer.classList.add("flex", "rounded-xl","shadow-2xl", "py-4", "font-mono", "text-l", "text-white", "uppercase", "items-center", "text-center", "m-4",)
        let infoContainer = document.createElement("div")
        infoContainer.classList.add("flex-1")
        let photoContainer = document.createElement("div")
        photoContainer.classList.add("flex-1")
        let pokeName = document.createElement('h1')
        pokeName.classList.add('text-3xl')
        pokeName.innerText = pokeData.name
        let pokeNumber = document.createElement('h1')
        pokeNumber.classList.add('bg-gray-400', 'text-right', 'text-4xl', 'mr-9', 'rounded-full', 'bg-opacity-70', 'w-14', 'h-14')
        pokeNumber.innerText = `#${pokeData.id}`
        if(pokeData.types.length > 1) {
            let pokeType1 = pokeData.types[0].type.name
            let pokeType2 = pokeData.types[1].type.name
            let typebubble1 = document.createElement('div')
            typebubble1.classList.add('bg-gray-400', 'w-28', 'rounded-full', 'py-1', 'mt-3', 'bg-opacity-70', 'ml-9')
            typebubble1.innerText = `${pokeType1}`
            let typebubble2 = document.createElement('div')
            typebubble2.classList.add('bg-gray-400', 'w-28', 'rounded-full', 'py-1', 'mt-3', 'bg-opacity-70', 'ml-9')
            typebubble2.innerText = `${pokeType2}`
            infoContainer.append(pokeName, typebubble1, typebubble2)
        } else {
            let pokeType = pokeData.types[0].type.name
            let typeBubble = document.createElement('div')
            typeBubble.classList.add('bg-gray-400', 'w-28', 'rounded-full', 'py-1', 'mt-3', 'bg-opacity-70', 'ml-9')
            typeBubble.innerText = `${pokeType}`
            infoContainer.append(pokeName, typeBubble)
        }

        switch (pokeData.types[0].type.name) {
            case 'grass':
                pokeContainer.classList.add('bg-green-500')
                break;
            case 'fire':
                pokeContainer.classList.add('bg-red-600')
                break
            case 'water':
                pokeContainer.classList.add('bg-blue-500')
                break;
            case 'bug':
                pokeContainer.classList.add('bg-green-300')
                break;
            case 'normal':
                pokeContainer.classList.add('bg-pink-400')
                break;
            case 'poison':
                pokeContainer.classList.add('bg-purple-600')
                break;
            case 'electric':
                pokeContainer.classList.add('bg-yellow-400')
                break;
            case 'ground':
                pokeContainer.classList.add('bg-yellow-900')
                break;
            case 'fairy':
                pokeContainer.classList.add('bg-indigo-500')
                break;
            case 'fighting':
                pokeContainer.classList.add('bg-red-900')
                break;
            case 'psychic':
                pokeContainer.classList.add('bg-purple-900')
                break;
            case 'rock':
                pokeContainer.classList.add('bg-gray-600')
                break;
            case 'dragon':
                pokeContainer.classList.add('bg-blue-900')
                break;
            default:
                pokeContainer.classList.add('bg-green-500')
                ;
        }
        let pokeSprites = document.createElement('img')
        // pokeSprites.classList.add('w-1/2', 'h-auto')
        pokeSprites.src = `${pokeData.sprites.other.dream_world.front_default}`
        photoContainer.append(pokeNumber, pokeSprites)
        pokeContainer.append(infoContainer, photoContainer);
        allPokemonContainer.appendChild(pokeContainer) 
        //appending all details to the pokeContainer div
        //allPokemonContainer.append(pokeContainer);       
        //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
    }

    function fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(function(allpokemon) {
            allpokemon.results.forEach(function(pokemon){
                fetchPokemonData(pokemon);
        })
        })
    }

    function fetchPokemonData(pokemon){
        let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
        fetch(url)
        .then(response => response.json())
        .then(function(pokeData){
            console.log(pokeData)
            renderPokemon(pokeData)
        })
    }
    

    
    
    fetchKantoPokemon()

</script>
<div id="poke-container" class="grid sm:grid-cols-2 md:grid-cols-3">
    <!-- <div class="w-1/2 rounded-lg bg-green-500 flex px-2 py-4 font-mono text-xl text-white uppercase items-center text-center m-4 w-50% flex-1">
        <div class="flex-1">
            <h1 class="text-5xl">BulbaSaur</h1>
            <div class="bg-gray-400 w-28 rounded-full py-1 mt-3 bg-opacity-70 ml-9">Grass</div>
            <div class="bg-gray-400 w-28 rounded-full py-1 mt-3 bg-opacity-70 ml-9">Poison</div>
        </div>
        <div class="flex-1">
            <h1 class="bg-gray-400 text-right text-4xl mr-9 rounded-full  bg-opacity-70 w-14 h-14">#001</h1>
            <img src="imgs/bulba.png" alt="">
        </div>
    </div>
    <div class="w-1/2 rounded-lg bg-green-500 flex px-2 py-4 font-mono text-xl text-white uppercase items-center text-center m-4 w-50% flex-1">
        <div class="flex-1">
            <h1 class="text-5xl">BulbaSaur</h1>
            <div class="bg-gray-400 w-28 rounded-full py-1 mt-3 bg-opacity-70 ml-9">Grass</div>
            <div class="bg-gray-400 w-28 rounded-full py-1 mt-3 bg-opacity-70 ml-9">Poison</div>
        </div>
        <div class="flex-1">
            <h1 class="bg-gray-400 text-right text-4xl mr-9 rounded-full  bg-opacity-70 w-14 h-14">#001</h1>
            <img src="imgs/bulba.png" alt="">
        </div>
    </div> -->

    <!-- pokeContainer.classList.add("rounded-xl","shadow-2xl", "flex", "px-2", "py-4", "font-mono", "text-xl", "text-white", "uppercase", "items-center", "text-center", "m-4",  "h-80", "w-full") -->
</div>


