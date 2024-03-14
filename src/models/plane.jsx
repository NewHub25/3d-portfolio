import { useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/plane.glb";

const Plane = ({isRotating, ...prop}) => {
  const { scene, animations } = useGLTF(planeScene);

  return (
    <mesh {...prop}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
