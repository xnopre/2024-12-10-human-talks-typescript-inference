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

interface Generator {
  generate: (params: Params) => Promise<User>;
}

const generator: Generator = {
  generate(params) {
    // L'inférence de la valeur de retour se fait y compris au travers de plusieurs promesses imbriquées
    return Api.firstCall({
      imagesPath: "o.imagesPath",
      previewUrl: "o.previewUrl",
      originalImageUrl: "o.originalImageUrl",
      previewUrls: "o.previewUrls",
      previewTileSize: "o.previewTileSize",
      faces: "o.faces",
    }).then(() => {
      return Api.secondCall({
        imagesPath: true,
        preview: true,
        levels: true,
        thumbnail: true,
        originalImageUrl: true,
      }).then(() => {
        return Promise.resolve({
          id: 1,
          firstName: "a",
          lastName: "b",
        });
      });
    });
  },
};

generator.generate(new Params("", 0));

const Api = {
  firstCall({}) {
    return Promise.resolve();
  },
  secondCall({}) {
    return Promise.resolve();
  },
};
