import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import threeGltfLoader from 'https://cdn.skypack.dev/three-gltf-loader';
//import{ GLTFLoader } from 'https://cdn.skypack.dev/pin/three-gltf-loader@v1.111.0-lpoUKlYnYlsaDhVQnn4i/mode=imports/optimized/three-gltf-loader.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('.model'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild( renderer.domElement );

camera.position.setZ(50);
camera.position.setX(-3);

const controls = new OrbitControls( camera, renderer.domElement );

// const controls = new OrbitControls(camera, renderer.domElement);

//controls.update();

renderer.render(scene, camera);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)



// Blender GLTF Model


  //  const gltfLoader = new threeGltfLoader();
  //  const boneurl = './models/heroTwinsBone.gltf';
  //  gltfLoader.load(boneurl, (gltf) => {
  //    const bone = gltf.scene;
  //    scene.add(bone);

  //    bone.position.y = 5;
  //    bone.rotateY(90);
  //    bone.scale({x: 5})
     
  //  });

  const gltfLoader2 = new threeGltfLoader();
  const headURL = './models/stoneFace.gltf';
  gltfLoader2.load(headURL, (gltf) => {
    const stonehead = gltf.scene;
    scene.add(stonehead);

   //  stonehead.rotateY(90);
    stonehead.rotateX(110);
    stonehead.position.y = -2;
    stonehead.scale.set(6, 6, 6);
   //  stonehead.rotateZ(180);
  });


// Animation Loop

function animate() {
    requestAnimationFrame(animate); 
  
     controls.update();
  
    renderer.render(scene, camera);
  }
  
  function onWindowResize() {
  
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  
    renderer.setSize( window.innerWidth, window.innerHeight );
  
    render();
  
  }
  
  
  // loadGLTF();
  animate();