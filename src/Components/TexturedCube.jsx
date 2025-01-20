import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const TexturedCube = () => {
  const texture = useLoader(TextureLoader, "/assets/wood.jpeg");

  return (
    <mesh>
      <boxGeometry args={[10, 10, 10]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default TexturedCube;
