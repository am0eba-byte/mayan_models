import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';
// import './mayanStyling.css';


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

console.log('finished');
// update();
  }

  
// const scene = {}

/////////////////////////////////
// Button renderers
////////////////////////////////

function cubeanimate(){

  // if(scene3.visible = true){
  //       scene3.visible = false
  //     };
  //     if(scene2.visible = true){
  //       scene2.visible = false
  //     };
  //     scene1.visible = true

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
  

  requestAnimationFrame(stoneheadAnimate);

  console.log('button successfully clicked')

  window.addEventListener( 'resize', onWindowResize );
  
  console.log('start rendering stone model');
  
  // if (scene2.visible !== false) {
  //   renderer.render( scene2, camera );
  // }

  renderer.render(scene2, camera);

  console.log('finish rendering stone model');

  controls.update();

  // console.log('controls functional')
  
};

function boneAnimate(){
  
  
  // if(scene1.visible = true){
  //       scene1.visible = false
  //     };
  //     if(scene2.visible = true){
  //       scene2.visible = false
  //     };
  //     scene3.visible = true;

  requestAnimationFrame(boneAnimate);

  console.log('button successfully clicked')

  window.addEventListener( 'resize', onWindowResize );
  
  console.log('start rendering bone model');
  

    // if(scene3.visible = true){
    //   console.log('requesting animation frame');
      // renderer.render(scene3, camera);
      
    // };
  

  renderer.render(scene3, camera);

  console.log('finish rendering bone model');

  controls.update();

  // console.log('controls functional')
 
};


function spsAnimate(){

  requestAnimationFrame(spsAnimate);

  console.log('button successfully clicked')

  window.addEventListener( 'resize', onWindowResize );
  
  console.log('start rendering stone model');
 
  renderer.render(scene4, camera);

  console.log('finish rendering stone model');

  controls.update();
  
};

function munperAnimate(){

  requestAnimationFrame(munperAnimate);

  console.log('button successfully clicked')

  window.addEventListener( 'resize', onWindowResize );
  
  console.log('start rendering stone model');
 
  renderer.render(scene5, camera);

  console.log('finish rendering stone model');

  controls.update();
  
};



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
  stonehead.scale.set(20, 20, 20);
  
   });


scene2.add(ambientLight);


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
  bone.scale.set(30, 30, 30);
  
   });

scene3.add(ambientLight);


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

    //  sps.rotateX(110);
    //  sps.position.y = -2;
     sps.scale.set(50, 50, 50);
  
   });

scene4.add(ambientLight);


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

     MP.rotateX(110);
    //  MP.position.y = -2;
    MP.scale.set(50, 50, 50);
  
   });

scene5.add(ambientLight);







  // Scaling

  function onWindowResize() {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    
      renderer.setSize( window.innerWidth, window.innerHeight );
    
    }

// Update 

//  function update(){
//   if (renderer.domElement.style.display !== 'none') {
//     renderer.render( scene1, camera );
//   }
//  }



    // Render
// renderer.render(scene2, camera);
// renderer.render(scene3, camera);
 

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

