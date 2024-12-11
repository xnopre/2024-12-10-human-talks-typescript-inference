// La déclaration sans typer les paramètres n'est pas possible
// function add(a, b) {
function add(a: number, b: number) {
  return a + b;
}

const result = add(3, 4);
console.log(`result=${result} of type ${typeof result}`);
