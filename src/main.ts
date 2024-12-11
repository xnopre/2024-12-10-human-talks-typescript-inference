import { DirectoryService } from "./directoryService";
import { displayUser } from "./utils";

function run() {
  const user = new DirectoryService().getUser(3);
  // Si les commentaires sont inversés pour les lignes 9 et 10 du fichier fakeHttpClient.ts
  // une erreur sera signalée sur la ligne suivante. C'est la "chaine d'inférence" qui peut
  // être "cassée" en typant le retour de la méthode `get` dans le fichier fakeHttpClient.ts
  // pour que l'erreur soit signalée au plus près de son origine (dans le fichier
  // fakeHttpClient.ts)
  displayUser(user);
}

run();
