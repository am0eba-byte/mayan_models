import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';
// import './mayanStyling.css';

// Setup

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 500;

const canvas = document.querySelector('#c1');

const renderer =  new THREE.WebGLRenderer({canvas});
renderer.setClearColor(new THREE.Color("#1c1624"));

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

/* scene 2 lights */
const ambientLight = new THREE.AmbientLight( 0xffffff );
ambientLight.position.set( 100, 0, 110 )
const light = new THREE.AmbientLight( 0x404040 )
light.position.set(0, 100, 150);
const light2 = new THREE.AmbientLight( 0x404040 )
light2.position.set(-120, 0, -110);
const pointlight = new THREE.PointLight( 0xffffff );
pointlight.position.set( 90, 90, 90 );
const pointlight2 = new THREE.PointLight( 0xffffff );
pointlight2.position.set( -115, -70, 90 );
const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper( pointlight2, sphereSize );

/* scene 3 lights */
const S3ambientLight = new THREE.AmbientLight( 0xffffff );
S3ambientLight.position.set( 100, 0, 110 )
const S3light = new THREE.AmbientLight( 0x404040 )
S3light.position.set(0, 100, 150);
const S3light2 = new THREE.AmbientLight( 0x404040 )
S3light2.position.set(-120, 0, -110);
const S3pointlight = new THREE.PointLight( 0xffffff );
S3pointlight.position.set( 90, 90, 90 );
const S3pointlight2 = new THREE.PointLight( 0xffffff );
S3pointlight2.position.set( -115, -70, 90 );

/* scene 4 lights */
const S4ambientLight = new THREE.AmbientLight( 0xffffff );
S4ambientLight.position.set( 100, 0, 110 )
const S4light = new THREE.AmbientLight( 0x404040 )
S4light.position.set(0, 100, 150);
const S4light2 = new THREE.AmbientLight( 0x404040 )
S4light2.position.set(-120, 0, -110);
const S4pointlight = new THREE.PointLight( 0xffffff );
S4pointlight.position.set( 90, 90, 90 );
const S4pointlight2 = new THREE.PointLight( 0xffffff );
S4pointlight2.position.set( -115, -70, 90 );

/* scene 5 lights */
const S5ambientLight = new THREE.AmbientLight( 0xffffff );
S5ambientLight.position.set( 100, 0, 110 )
const S5light = new THREE.AmbientLight( 0x404040 )
S5light.position.set(0, 100, 150);
const S5light2 = new THREE.AmbientLight( 0x404040 )
S5light2.position.set(-120, 0, -110);
const S5pointlight = new THREE.PointLight( 0xffffff );
S5pointlight.position.set( 90, 90, 90 );
const S5pointlight2 = new THREE.PointLight( 0xffffff );
S5pointlight2.position.set( -115, -70, 90 );


const backgroundTexture = new THREE.TextureLoader().load('images/jungleRuins.jpg');
const backgroundTexture2 = new THREE.TextureLoader().load('images/uxmal.jpg')

const axesHelper = new THREE.AxesHelper( 200 );



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
  stonehead.scale.set(35, 35, 35);
  
   });

scene2.background = backgroundTexture
scene2.add(ambientLight);
scene2.add(light);
scene2.add(light2);
// scene2.add(pointlight);
// scene2.add(pointlight2);
// scene2.add( pointLightHelper );
// scene2.add( axesHelper );
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
  bone.scale.set(35, 35, 35);
  
   });
scene3.background = backgroundTexture
scene3.add(S3ambientLight);
scene3.add(S3light);
scene3.add(S3light2);
scene3.add(S3pointlight);
scene3.add(S3pointlight2);
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

    sps.rotateX(180);
    //  sps.position.y = -2;
     sps.scale.set(95, 95, 95);
  
   });
scene4.background = backgroundTexture2
scene4.add(S4ambientLight);
scene4.add(S4light);
scene4.add(S4light2);
scene4.add(S4pointlight);
scene4.add(S4pointlight2);
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

      MP.rotateY(270);
      // MP.position.set(-5, 0, 0)
      // MP.rotateX(30)
    //  MP.position.y = -2;
    MP.scale.set(15, 15, 15);
  
   });
scene5.background = backgroundTexture2
scene5.add(S5ambientLight);
scene5.add(S5light);
scene5.add(S5light2);
scene5.add(S5pointlight);
scene5.add(S5pointlight2);
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

