import Bulb from "./bulb";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[6, 3, 0]}
        intensity={2}
        castShadow
        shadow-mapSize-height={2 ** 8}
        shadow-mapSize-width={2 ** 8}
      />
      <Bulb position={[3.5, 2, 0]} />
      <Bulb position={[0, 2, 0]} />
      <Bulb position={[-3.5, 2, 0]} />
    </>
  );
};

export default Lights;
