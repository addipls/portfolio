import './style.css'
import * as THREE from 'three';
import { TorusGeometry } from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100)
const torusMaterial = new THREE.MeshStandardMaterial( {color: 0xFFAACC} );
const torus = new THREE.Mesh(torusGeometry, torusMaterial);

scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5, 5, 5);

const ambiLight = new THREE.AmbientLight(0xffffff);

scene.add(ambiLight);
scene.add(pointLight);

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += .01;
  torus.rotation.y += .03;

  renderer.render(scene, camera);
}

animate()

