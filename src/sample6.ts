export class User {
  constructor(
    readonly id: number,
    readonly firstName: String,
    readonly lastName: String,
  ) {}
}

export class Params {
  constructor(
    readonly prefix: string,
    readonly code: number,
  ) {}
}

// Déclaration d'une classe abstraite
abstract class Generator {
  abstract generate(params: Params): Promise<User>;
}

class MyGenerator implements Generator {
  // Par contre, ici, le typage des paramètres est obligatoires
  generate(params: Params) {
    return Promise.resolve(new User(1, "", ""));
  }
}

class MyGenerator2 implements Generator {
  // Mais les types de paramètre et de retour peuvent être différents tant qu'ils sont compatibles
  generate(params: Params2) {
    return Promise.resolve(new User2(1, "", ""));
  }
}

export class User2 {
  constructor(
    readonly id: number,
    readonly firstName: String,
    readonly lastName: String,
  ) {}
}

export class Params2 {
  constructor(
    readonly prefix: string,
    readonly code: number,
  ) {}
}

new MyGenerator().generate(new Params("", 0));
new MyGenerator2().generate(new Params("", 0));
