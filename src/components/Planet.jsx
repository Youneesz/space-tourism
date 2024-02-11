import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Mesh, TextureLoader } from 'three';
import '../styles/Planet.css';

const Sphere = (props) => {
    const meshRef = React.useRef();
    const customTexture = useLoader(TextureLoader, props.texture);

    useFrame(() => {
        if (!meshRef.current) {
            return;
        };

        meshRef.current.rotation.y += .001;
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[2, 64, 64]} />
            <meshStandardMaterial map={customTexture} />
        </mesh>
    )
}

const Planet = (props) => {
    return (
        <Canvas>
            <Suspense>
                <ambientLight intensity={0.4} />
                <directionalLight intensity={5} position={[-1.5, 3, -0.25]} />
                <Sphere texture={props.texture} />
            </Suspense>
        </Canvas>
    )
}

export default Planet