export class User {
  constructor(
    readonly id: number,
    readonly firstName: string,
    readonly lastName: string,
  ) {}
}

export class Params {
  constructor(
    readonly prefix: string,
    readonly code: number,
  ) {}
}

// Déclaration d'une interface
interface Generator {
  generate: (params: Params) => Promise<User>;
}

const generator: Generator = {
  // Ici le typage des paramètres n'est pas nécessaire...
  // le paramètre non plus, mais le retour doit être compatible
  generate() {
    return Promise.resolve({
      id: 1,
      firstName: "a",
      lastName: "b",
    });
  },
};

generator.generate({
  prefix: "",
  code: 12,
});
