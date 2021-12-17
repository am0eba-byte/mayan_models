import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';
// import './mayanStyling.css';

// Setup

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 500;

const canvas = document.querySelector('#c1');
// const canvas2 = document.querySelector('#c2');
// const canvas3 = document.querySelector('#c3');


const renderer =  new THREE.WebGLRenderer({canvas});
// const renderer2 = new THREE.WebGLRenderer({canvas2});
// const renderer3 = new THREE.WebGLRenderer({canvas3});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
// renderer2.setSize(window.innerWidth, window.innerHeight);
// renderer2.setPixelRatio(window.devicePixelRatio);
// renderer3.setSize(window.innerWidth, window.innerHeight);
// renderer3.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);
// document.body.appendChild(renderer2.domElement);
// document.body.appendChild(renderer3.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
// const controls2 = new OrbitControls(camera, renderer2.domElement);
// const controls3 = new OrbitControls(camera, renderer3.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff);




// Buttons

function init(){

var button1 = document.getElementById('scene1');
button1.addEventListener('click', cubeanimate);

var button2 = document.getElementById('scene2');
button2.addEventListener('click', stoneheadAnimate);

var button3 = document.getElementById('scene3');
button3.addEventListener('click', boneAnimate);

var button4 = document.getElementById('scene4');
button4.addEventListener('click', spsAnimate);

var button5 = document.getElementById('scene5');
button5.addEventListener('click', munperAnimate);

console.log('initialized');

}

  


/////////////////////////////////
// Button renderers
////////////////////////////////

function cubeanimate(){

  scene1.add(mesh); 
  console.log('mesh added');
  requestAnimationFrame(cubeanimate);

    renderer.render(scene1, camera);

  window.addEventListener( 'resize', onWindowResize );

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;

  controls.update();

};


function stoneheadAnimate(){

  console.log('start rendering stone model');

  requestAnimationFrame(stoneheadAnimate);
     renderer.render(scene2, camera);

  
     console.log('finish rendering stone model');

    
 window.addEventListener( 'resize', onWindowResize );
  controls.update();
  
};



function boneAnimate(){

  console.log('start rendering bone model');

  requestAnimationFrame(boneAnimate);
    renderer.render(scene3, camera);

  console.log('finish rendering bone model');
  

  window.addEventListener( 'resize', onWindowResize );
  controls.update();
 
};



function spsAnimate(){

  console.log('start rendering stone model');

  requestAnimationFrame(spsAnimate);
    renderer.render(scene4, camera);

    console.log('finish rendering stone model');

 window.addEventListener( 'resize', onWindowResize );
  
  controls.update();
  
};



function munperAnimate(){
  console.log('start rendering stone model');

  requestAnimationFrame(munperAnimate);
   renderer.render(scene5, camera);

   console.log('finish rendering stone model');

window.addEventListener( 'resize', onWindowResize );

  controls.update();
  
};





//////////////////////////////////////////////////
//        Scene 1 - demo cube                    
//////////////////////////////////////////////////

  
  const scene1 = new THREE.Scene();

  // DEMO RAINBOW CUBE
  const geometry = new THREE.BoxGeometry(200, 200, 200);
  const material = new THREE.MeshNormalMaterial();
  const mesh = new THREE.Mesh(geometry, material);
  

  /////////////////////////////////////////////////
  //       Scene 2  - Stone Head                   
  /////////////////////////////////////////////////

  const scene2 = new THREE.Scene();
  
    const gltfLoader2 = new GLTFLoader();
    const stoneURL = './models/stoneFace.gltf';


    gltfLoader2.load(stoneURL, (gltf) => {
    
      
      const stonehead = gltf.scene;
      
      scene2.add(stonehead);
      console.log('stonehead added to scene 2');

      stonehead.rotateX(110);
  stonehead.position.y = -2;
  stonehead.scale.set(10, 10, 10);
  
   });


scene2.add(ambientLight);
renderer.render(scene2, camera);

//////////////////////////////////////////////
// SCENE 3 - HERO TWINS BONE
/////////////////////////////////////////////

const scene3 = new THREE.Scene();
  
    const gltfLoader3 = new GLTFLoader();
    const boneURL = './models/heroTwinsBone.gltf';


    gltfLoader3.load(boneURL, (gltf) => {
    
      
      const bone = gltf.scene;
      
      scene3.add(bone);
      console.log('bone added to scene 3');

      bone.rotateX(110);
  bone.position.y = -2;
  bone.scale.set(15, 15, 15);
  
   });

scene3.add(ambientLight);
renderer.render(scene3, camera);


//////////////////////////////////////////////
// SCENE 4 - SPS Pyramid
/////////////////////////////////////////////

const scene4 = new THREE.Scene();
  
    const gltfLoader4 = new GLTFLoader();
    const spsURL = './models/SPS_pyramid.gltf';


    gltfLoader4.load(spsURL, (gltf) => {
    
      
      const sps = gltf.scene;
      
      scene4.add(sps);
      console.log('sps pyramid added to scene 4');

    sps.rotateX(110);
    //  sps.position.y = -2;
     sps.scale.set(15, 15, 15);
  
   });

scene4.add(ambientLight);
renderer.render(scene4, camera);


//////////////////////////////////////////////
// SCENE 5 - Mundo Perdido
/////////////////////////////////////////////

const scene5 = new THREE.Scene();
  
    const gltfLoader5 = new GLTFLoader();
    const mundperURL = './models/mundoPerdido.gltf';


    gltfLoader5.load(mundperURL, (gltf) => {
    
      
      const MP = gltf.scene;
      
      scene5.add(MP);
      console.log('mundo perdido added to scene 5');

      MP.rotateY(110);
    //  MP.position.y = -2;
    MP.scale.set(15, 15, 15);
  
   });

scene5.add(ambientLight);
renderer.render(scene5, camera);






  // Scaling

  function onWindowResize() {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    
      renderer.setSize( window.innerWidth, window.innerHeight );
    
    }


window.addEventListener('DOMContentLoaded', init, false);




































// SETUP

// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.setZ(50);
// camera.position.setX(-3);

//  const canvas = document.querySelector('#stoneHead');
 
//  const renderer = new THREE.WebGLRenderer({canvas});

//  renderer.setPixelRatio(window.devicePixelRatio);
//  renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild( renderer.domElement );


// const controls = new OrbitControls( camera, renderer.domElement );



// // SCENE 1 - HERO TWINS BONE

// const scene1 = new THREE.Scene();
// const gltfLoader = new GLTFLoader();
//     const boneurl = './models/heroTwinsBone.gltf';
//     gltfLoader.load(boneurl, (gltf) => {
//      const bone = gltf.scene;
//       scene1.add(bone);

//       bone.position.y = 5;
//       bone.rotateY(90);
//       bone.scale.set(6, 6, 6);
     
//     });


//     // SCENE 2 - STONE FACE

// const scene2 = new THREE.Scene();
// const gltfLoader2 = new GLTFLoader();
// const headURL = './models/stoneFace.gltf';
// gltfLoader2.load(headURL, (gltf) => {
//   const stonehead = gltf.scene;
//   scene2.add(stonehead);

//  //  stonehead.rotateY(90);
//   stonehead.rotateX(110);
//   stonehead.position.y = -2;
//   stonehead.scale.set(6, 6, 6);
//  //  stonehead.rotateZ(180);
// });




// renderer.render(scene2, camera);


// // Lights


// const ambientLight = new THREE.AmbientLight(0xffffff);

// scene2.add(ambientLight);


// // Helpers

// // const lightHelper = new THREE.PointLightHelper(pointLight)
// // const gridHelper = new THREE.GridHelper(200, 50);
// // scene.add(lightHelper, gridHelper)





// // Animation Loop

// function animate() {



//     requestAnimationFrame(animate); 

//      controls.update();

    

//      window.addEventListener( 'resize', onWindowResize );
  
//     renderer.render(scene2, camera);

//     // renderer2.render(scene2, camera2);

//   }

  
//   function onWindowResize() {
  
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
  
//     renderer.setSize( window.innerWidth, window.innerHeight );

//     // camera2.aspect = window.innerWidth / window.innerHeight;
//     // camera2.updateProjectionMatrix();
  
//     // renderer2.setSize( window.innerWidth, window.innerHeight );
  
//     //render();
  
//   }

//   animate();

