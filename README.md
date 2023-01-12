# Pokemon

Implement the `App` with ability to display a list of pokemons fetched through [API](https://pokeapi.co/). The list is rendered in a paginated view with ability to switch between previous and next page. Selecting a pokemon from this list shows a detailed view of pokemon containing name, front image, back image, abilities and moves. Pokemon(s) can be searched based on name or ability or move. All the pokemons which have a particular ability or a particular move learnt are shown as search result.

## Demo

https://sapnachoudhary06.github.io/pokemon/

## Run Locally

Clone the project

```bash
  https://github.com/sapnachoudhary06/pokemon.git
```

Go to the project directory

```bash
  cd pokemon
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## 🛠 Skills
Javascript, TypeScript, HTML, CSS, React, Jest, React Router and hooks.

## Assumptions/Limitations

1. Ten pokemons are displayed at a time in paginated form (with next and previous buttons which could be used to switch from one page to another)
2. Detailed view of pokemon shows name, image, abilities and moves.
  - Front and back appearances are shown from the fields 'sprites'.
  - List of moves is shown as plain comma(,) separated text from 'moves' field.
  - List of abiities is shown as plain comma(,) separated text from 'abilities' field.
3. Pokemons can be searched by one parameter at a time
  - if searched by name, the input search field for move and ability is disabled.
    -- a request is made through API [GET https://pokeapi.co/api/v2/pokemon/{id or name}/]
  - if searched by move, the input search field for name and ability is disabled.
    -- a request is made through API [GET https://pokeapi.co/api/v2/move/{id or name}/]
    -- a list of pokemons tthat can learn the move is displayed from the "learned_by_pokemon" field in the result of the above API call
  - if searched by ability, the input search field for move and name is disabled.
    -- a request is made through API [GET https://pokeapi.co/api/v2/ability/{id or name}/]
    -- a list of pokemons that could potentially have this ability is displayed from the "pokemon" field in the result of the above API call
4. Due to the less time availability, only few tests have been added.


## Original Problem Statement

The goal of this assignment is build a small application to view different Pokémons. The requirements are as follows:
1. Show a paginated view of all Pokémons
2. A detailed view of pokemon which contains name, image, abilities and moves shall be shown on selecting a Pokémon in the list
3. A view to search for Pokémons based on their name, ability or move
