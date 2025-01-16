import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const BouncingSphere = () => {
  const sphereRef = useRef();
  const bounceHeight = 5;
  const bounceSpeed = 2;
  const sphereRadius = 5;

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.position.y =
        Math.abs(Math.sin(clock.getElapsedTime() * bounceSpeed)) *
          bounceHeight +
        sphereRadius;
    }
  });

  return (
    <>
      <mesh ref={sphereRef} position={[0, sphereRadius, 0]}>
        <sphereGeometry args={[sphereRadius, 32, 32]} />
        <meshStandardMaterial color={"hotpink"} />
      </mesh>
    </>
  );
};

export default BouncingSphere;

/* Note: Sphere bounce to hit the floor
axis starting sphere postion === centre of the sphere
Sphere radius = 5
Add to the bounce logic
Set Sphere y position to 5
*/
