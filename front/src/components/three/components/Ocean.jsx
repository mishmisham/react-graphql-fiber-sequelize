// import React, { useRef, useMemo } from "react";
// import { extend, useThree, useLoader, useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// import { Water } from "three/examples/jsm/objects/Water.js";

// extend({ Water });

// function Ocean() {
//   const ref = useRef();
//   const gl = useThree((state) => state.gl);
//   const waterNormals = useLoader(
//     THREE.TextureLoader, "./client/images/waternormals.jpg"
//   );

//   waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
//   const geom = useMemo(() => new THREE.PlaneGeometry(30000, 30000), []);
//   const config = useMemo(
//     () => ({
//       textureWidth: 512,
//       textureHeight: 512,
//       waterNormals,
//       sunDirection: new THREE.Vector3(),
//     //   sunColor: 0xeb8934,
//       waterColor: '#054040',
//       distortionScale: 1,
//       fog: true,
//       format: gl.encoding,
//     }),
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     [waterNormals]
//   );
//   useFrame(
//     (state, delta) => (ref.current.material.uniforms.time.value += delta / 2)
//   );
//   return (
//     <water
//       receiveShadow
//       ref={ref}
//       args={[geom, config]}
//       rotation-x={-Math.PI / 2}
//       position={[0, 0, 0]}
//     />
//   );
// }

// export default Ocean;