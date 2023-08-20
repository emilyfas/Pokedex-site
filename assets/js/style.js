function handleAttribute(btn) {

 
    btn.target.setAttribute("class", "fa fa-heart like-icon-filled"); 
}

     const contentSection = document.querySelector(".content");
     const pokemonDetails = document.querySelector(".pokemon-details");

    
     function showDetailsPokemon(id){

        const pokemonClicked = document.getElementById(id);

        console.log(pokemonClicked.getElementsByClassName("type").item(0).innerHTML);

         contentSection.classList.add("content-hidden");
         pokemonDetails.classList.remove("pokemon-details-hidden");

         pokemonDetails.innerHTML =  `<div class="main-info ${pokemonClicked.getElementsByClassName("type").item(0).innerHTML}">

         <div class="main-info--options">
             <span class="icon" onclick="hideDetail()"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>
             <span class="icon like-icon" id="like-btn"><i class="fa fa-heart-o" id="like-icon" aria-hidden="true"></i></span>
             <!-- <span class="icon"><i class="fa fa-heart" aria-hidden="true"></i></span> -->

         </div>
        
         <h1 class="name">${pokemonClicked.getElementsByClassName("name").item(0).innerHTML}</h1>
         <span class="number">#${id}</span>
        
         <ol class="types">
             <li class="type ${pokemonClicked.getElementsByClassName("type").item(0).innerHTML}").item(0).innerHTML}">${pokemonClicked.getElementsByClassName("type").item(0).innerHTML}</li>
         </ol>
         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg" class="img-details" alt="">
     </div>
     <div class="details-section">
         <h3>About</h3>
         <ol class="detail-container">
             <li class="detail-item">
                 <p class="detail-item-title">Name</p>
                 <p class="detail-item-value">${pokemonClicked.getElementsByClassName("name").item(0).innerHTML}</p>
             </li>
            
             <li class="detail-item">
                 <p class="detail-item-title">Species</p>
                 <p class="detail-item-value">${pokemonClicked.getElementsByClassName("name").item(0).innerHTML}</p>
             </li>
             <li class="detail-item">
                 <p class="detail-item-title">Height</p>
                 <p class="detail-item-value">7</p>
             </li>
             <li class="detail-item">
                 <p class="detail-item-title">Weight</p>
                 <p class="detail-item-value">69</p>
             </li>
             <li class="detail-item">
                 <p class="detail-item-title">Base Experience</p>
                 <p class="detail-item-value">64</p>
             </li>

             </ol>
         </div>`;


         const likeBtn = document.querySelector("#like-btn");

         likeBtn.addEventListener("click", (btn) => {

             handleAttribute(btn);
         })
     }

    
    const olPokemonList = document.querySelector(".pokemons");
    

    function handleClick(clickedId) {
    
         console.log(clickedId);

         showDetailsPokemon(clickedId);

     }

    function hideDetail(){
        contentSection.classList.remove("content-hidden");
        pokemonDetails.classList.add("pokemon-details-hidden");
    }
    