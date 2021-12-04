import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';


// SETUP



const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.setZ(50);
camera.position.setX(-3);

 const canvas = document.querySelector('#stoneHead');
 
 const renderer = new THREE.WebGLRenderer({canvas});

 renderer.setPixelRatio(window.devicePixelRatio);
 renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild( renderer.domElement );


const controls = new OrbitControls( camera, renderer.domElement );



// SCENE 1 - HERO TWINS BONE

const scene1 = new THREE.Scene();
const gltfLoader = new GLTFLoader();
    const boneurl = './models/heroTwinsBone.gltf';
    gltfLoader.load(boneurl, (gltf) => {
     const bone = gltf.scene;
      scene1.add(bone);

      bone.position.y = 5;
      bone.rotateY(90);
      bone.scale.set(6, 6, 6);
     
    });


    // SCENE 2 - STONE FACE

const scene2 = new THREE.Scene();
const gltfLoader2 = new GLTFLoader();
const headURL = './models/stoneFace.gltf';
gltfLoader2.load(headURL, (gltf) => {
  const stonehead = gltf.scene;
  scene2.add(stonehead);

 //  stonehead.rotateY(90);
  stonehead.rotateX(110);
  stonehead.position.y = -2;
  stonehead.scale.set(6, 6, 6);
 //  stonehead.rotateZ(180);
});




renderer.render(scene2, camera);


// Lights


const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(ambientLight);


// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)





// Animation Loop

function animate() {



    requestAnimationFrame(animate); 

     controls.update();

    

     window.addEventListener( 'resize', onWindowResize );
  
    renderer.render(scene2, camera);

    // renderer2.render(scene2, camera2);

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

