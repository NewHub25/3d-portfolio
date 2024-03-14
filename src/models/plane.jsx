import { useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/bird.glb";

const Plane = () => {
  const { scene, animations } = useGLTF(planeScene);

  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
