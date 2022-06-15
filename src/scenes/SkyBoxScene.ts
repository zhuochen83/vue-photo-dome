import { Engine, Scene, FreeCamera, Vector3, MeshBuilder, StandardMaterial, Color3, HemisphericLight, CubeTexture } from "@babylonjs/core";
const createScene = (canvas: any) => {
  const engine = new Engine(canvas, true);
  const scene = new Scene(engine);

  const envTex = CubeTexture.CreateFromPrefilteredData("./environment/cannon.env", scene);

  scene.environmentTexture = envTex;
  scene.createDefaultSkybox(envTex, true);

  const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  new HemisphericLight("light", Vector3.Up(), scene);

  const box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
  const material = new StandardMaterial("box-material", scene);
  material.diffuseColor = Color3.Blue();
  box.material = material;

  const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
  sphere.position = new Vector3(3, 0, 0);
  sphere.material = material;


  engine.runRenderLoop(() => {
    scene.render();
  });
};

export { createScene };