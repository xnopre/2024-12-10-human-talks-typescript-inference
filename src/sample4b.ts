import { User } from "./user";

interface Callbacks {
  onReady: () => Promise<User>;
  onError: (error: String, code: number) => void;
}

const callbasck: Callbacks = {
  onError(error, code) {},
  onReady() {
    // L'inférence se fait y compris au travers de plusieurs promesses imbriquées
    return Api.firstCall({
      imagesPath: "sceneComplete.imagesPath!",
      makrPreviewUrl: "sceneComplete.makrPreviewUrl",
      originalImageUrl: "sceneComplete.originalImageUrl",
      previewUrls: "sceneComplete.previewUrls",
      previewTileSize: "sceneComplete.previewTileSize!",
      faces: "sceneComplete.faces!",
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

callbasck.onReady();

const Api = {
  firstCall({}) {
    return Promise.resolve();
  },
  secondCall({}) {
    return Promise.resolve();
  },
};
