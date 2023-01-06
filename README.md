The goal of this assignment is build a small application to view different Pokémons. The requirements are as follows:
1. Show a paginated view of all Pokémons
2. A detailed view of pokemon which contains name, image, abilities and moves shall be shown on selecting a Pokémon in the list
3. A view to search for Pokémons based on their name, ability or move

Bonus points if you can write some tests(unit, integration, end-to-end)
Feel free to use the framework/library of your choice.
Note: APIs for fetching the Pokémons can be found at https://pokeapi.co/

Upload it to Github, Gitlab or similar and a share a link to it.
Please contact us incase you have any queries regarding this assignment.

Assumptions/Limitations :
1. 10 Pokemons are displayed at a time in paginated form (with next and previous buttons which could be used to switch from one page to another)
2. Pokemons can be searched by one parameter at a time
  - if searched by name, the input search field for move and ability is disabled.
    - a request is made through API [GET https://pokeapi.co/api/v2/pokemon/{id or name}/]
  - if searched by move, the input search field for name and ability is disabled.
    - a request is made through API []
    - a list of pokemons tthat can learn the move is displayed from the "learned_by_pokemon" field in the result of the above API call
  - if searched by ability, the input search field for move and name is disabled.
    - a request is made through API [GET https://pokeapi.co/api/v2/ability/{id or name}/]
    - a list of pokemons that could potentially have this ability is displayed from the "pokemon" field in the result of the above API call
