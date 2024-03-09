let elPokeList = document.querySelector(".pokemon-list");

for (let pokemon of pokemons) {
  // Elementlarni yaratish
  let newPokemonItem = document.createElement("li");

  let newPokemonTitle = document.createElement("h3");
  let newPokemonNumBadge = document.createElement("span");
  let newPokemonImg = document.createElement("img");
  let newPokemonType = document.createElement("p");
  let newPokemonTime = document.createElement("time");

  // Style
  newPokemonItem.classList.add("pokemon-item");

  // Har bir elementga qiymat berish
  newPokemonTitle.textContent = pokemon.name;
  newPokemonNumBadge.textContent = pokemon.num;
  newPokemonImg.src = pokemon.img;
  newPokemonImg.width = "100";
  newPokemonImg.height = "100";
  newPokemonImg.alt = pokemon.name;
  newPokemonType.textContent = pokemon.type;
  newPokemonTime.textContent = pokemon.spawn_time;

  // #Uyga vazifa
  // appendChild vs append vs prepend

  // Har bir elementni li ga joylash

  newPokemonItem.appendChild(newPokemonTitle);
  newPokemonItem.appendChild(newPokemonNumBadge);
  newPokemonItem.appendChild(newPokemonImg);
  newPokemonItem.appendChild(newPokemonType);
  newPokemonItem.appendChild(newPokemonTime);

  elPokeList.appendChild(newPokemonItem);
}
