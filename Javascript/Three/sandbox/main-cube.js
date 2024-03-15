/**
 * Example currently based off of https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
 *
 * Todo: see if I can rewrite this with TS
 */

import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Add cube

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

//originally was `function animate`
// review functions vs arrow functions here: https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/
//This will render on screen refresh
//requestAnimationFrame vs setInterval: rAF pauses when navigated away from
const animate = () => {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};

/**
 * Check WebGL Compatibility
 */
const container = document.getElementById("container");
WebGL.isWebGLAvailable()
  ? animate()
  : container.appendChild(WebGL.getWebGLErrorMessage());
