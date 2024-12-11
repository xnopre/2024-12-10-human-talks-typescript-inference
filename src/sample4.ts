interface Callbacks {
  onReady: () => Promise<String>;
  onError: (error: String, code: number) => void;
}

const callbasck: Callbacks = {
  // Ici le typage des paramètres n'est pas nécessaire...
  onError(error, code) {},
  // ... ni le typage du retour de la fonction
  onReady() {
    return Promise.resolve("OK");
  },
};

callbasck.onReady();
