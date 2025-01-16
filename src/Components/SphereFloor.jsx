const SphereFloor = () => {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color={"blue"} />
      </mesh>
    </>
  );
};

export default SphereFloor;
