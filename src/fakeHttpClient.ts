// Ce fichier est volontairement compliqué et illisible pour rendre moins visible
// le type de valeur retourné. Voir ligne 11 pour la suite

import { User } from "./user";

let N = "name";

function capitalize(s: string) {
  return s[0].toUpperCase() + s.substr(1).toLowerCase();
}

interface ResultEncodeTypeProps {
  // En inversant les commentaires de ces 2 lignes, une erreur est signalée mais "loin" de ce fichier, dans "main.ts"
  // id: number;
  ID: number;
  firstName: String;
  lastName: String;
}

function enc(o: any): ResultEncodeTypeProps {
  const L = "last";
  return {
    ...o,
    [`${L}${capitalize(N)}`]: "Dylan",
  };
}

export class FakeHttpClient {
  // get(url: string) {
  // Typer le retour de la fonction permet de casser la chaine d'inférence et d'avoir les erreurs ici dans ce fichier
  get(url: string): User {
    const F = "first";

    let user = [5].map((n, i, a) => {
      let {} = a.map(() => {});
      let base = {
        id: n - 2,
      };

      function imp(base: any) {
        return {
          ...base,
          [`${F}${capitalize(N)}`]: "Bob",
        };
      }

      let next = enc(imp(base));
      return next;
    })[0];
    console.log(user);
    return user;
  }
}
