import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';
//import threeGltfLoader from 'https://cdn.skypack.dev/three-gltf-loader';
//import{ GLTFLoader } from 'https://cdn.skypack.dev/pin/three-gltf-loader@v1.111.0-lpoUKlYnYlsaDhVQnn4i/mode=imports/optimized/three-gltf-loader.js';

const scene = new THREE.Scene();
const scene2 = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const canvas = document.querySelector('.model');

// const renderer = new THREE.WebGLRenderer({canvas});

 const renderer = new THREE.WebGLRenderer({
   canvas: document.querySelector('#stoneHead'),
 });

 const renderer2 = new THREE.WebGLRenderer({
   canvas: document.querySelector('#monkeyBone')
 });

 renderer.setPixelRatio(window.devicePixelRatio);
 renderer.setSize(window.innerWidth, window.innerHeight);
 //renderer.shadowMap.enabled = true;
  document.body.appendChild( renderer.domElement );

  renderer2.setPixelRatio(window.devicePixelRatio);
 renderer2.setSize(window.innerWidth, window.innerHeight);
 //renderer.shadowMap.enabled = true;
  document.body.appendChild( renderer2.domElement );


camera.position.setZ(50);
camera.position.setX(-3);

camera2.position.setZ(50);
camera2.position.setX(-3);

const controls = new OrbitControls( camera, renderer.domElement );

const controls2 = new OrbitControls( camera2, renderer2.domElement );

renderer.render(scene, camera);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

scene2.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)



// Blender GLTF Model


    const gltfLoader = new GLTFLoader();
    const boneurl = './models/heroTwinsBone.gltf';
    gltfLoader.load(boneurl, (gltf) => {
     const bone = gltf.scene;
      scene2.add(bone);

      bone.position.y = 5;
      bone.rotateY(90);
      bone.scale({x: 5})
     
    });

  const gltfLoader2 = new GLTFLoader();
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

  // Failed Display Resize Attempts

 // function resizeRendererToDisplaySize(renderer) {
  //   const canvas = renderer.domElement;
  //   const width = canvas.clientWidth;
  //   const height = canvas.clientHeight;
  //   const needResize = canvas.width !== width || canvas.height !== height;
  //   if (needResize) {
  //     renderer.setSize(width, height, false);
  //     camera.aspect = canvas.clientWidth / canvas.clientHeight;
  //     camera.updateProjectionMatrix()
  //   }
  //  // return needResize;
  // }


  // function resizeRendererToDisplaySize(renderer) {
  //   const canvas = renderer.domElement;
  //   const pixelRatio = window.devicePixelRatio;
  //   const width  = canvas.clientWidth  * pixelRatio | 0;
  //   const height = canvas.clientHeight * pixelRatio | 0;
  //   const needResize = canvas.width !== width || canvas.height !== height;
  //   if (needResize) {
  //     renderer.setSize(width, height, false);
  //   }
  //   return needResize;
  // }


// Animation Loop

function animate() {

  //resizeRendererToDisplaySize();

  // if (resizeRendererToDisplaySize(renderer)) {
  //   const canvas = renderer.domElement;
  //   camera.aspect = canvas.clientWidth / canvas.clientHeight;
  //   camera.updateProjectionMatrix();
  // }


    requestAnimationFrame(animate); 

     controls.update();

     controls2.update();

     window.addEventListener( 'resize', onWindowResize );
  
    renderer.render(scene, camera);

    renderer2.render(scene2, camera2)

  }
  
  function onWindowResize() {
  
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  
    renderer.setSize( window.innerWidth, window.innerHeight );

    camera2.aspect = window.innerWidth / window.innerHeight;
    camera2.updateProjectionMatrix();
  
    renderer2.setSize( window.innerWidth, window.innerHeight );
  
    //render();
  
  }

  animate();