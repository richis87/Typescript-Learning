import { Pokemon } from './decorators/pokemon-class';



const charmander = new Pokemon('Charmander');


// (Pokemon.prototype as any).customName = 'Pikachu'

// console.log(charmander.savePokemonToDB(50));
// charmander.savePokemonToDB(10);
//charmander.publicApi = 'https://fernando-herrera.com';

// Apesar de ser privado sobreescribe
charmander.publicApi = 'https://fernando-herrera.com';

console.log( charmander )
console.log( charmander.savePokemonToDB(5000) )






