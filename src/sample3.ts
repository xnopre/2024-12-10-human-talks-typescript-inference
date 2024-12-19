// La déclaration sans typer les paramètres n'est pas possible
// function add(a, b) {
//   return a + b;
// }

function add(a: number, b: number) { // type de retour inféré : number
    return a + b;
}

const result = add(3, 4); // type de result : number
