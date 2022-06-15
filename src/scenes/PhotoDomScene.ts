import { Engine, Scene, FreeCamera, Vector3, MeshBuilder, StandardMaterial, Color3, HemisphericLight, CubeTexture, PhotoDome } from "@babylonjs/core";
const createScene = (canvas: any) => {
  const engine = new Engine(canvas, true);
  const scene = new Scene(engine);

  const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  const dome = new PhotoDome(
    "photo",
    "./photo/kris.jpg",
    {
        resolution: 32,
        size: 1000
    },
    scene
);

  engine.runRenderLoop(() => {
    scene.render();
  });
};

export { createScene };