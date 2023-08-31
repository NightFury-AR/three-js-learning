//1. scene , 2. mesh (geomentary+material) , 3. camera
import * as THREE from 'three/build/three';

console.log(THREE,"trTRTr");
//scene
const scene = new THREE.Scene();

//mesh
//geomentary
const boxGeo = new THREE.BoxGeometry(1,1,1);
//material
const material = new THREE.MeshBasicMaterial({color:0xff0000});
const mesh = new THREE.Mesh(boxGeo,material);

scene.add(mesh);

const sizes = {
    width:800,
    height:800
}

//camera
//field of view ,aspect, near ,far 
const camera = new THREE.PerspectiveCamera(120,sizes.width / sizes.height);
camera.position.z=3;
scene.add(camera);

//renderer 
const canvas  = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas:canvas
});
renderer.setSize(sizes.width,sizes.height);

//running
renderer.render(scene,camera);

