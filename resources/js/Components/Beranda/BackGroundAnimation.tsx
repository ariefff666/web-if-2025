// resources/js/Components/Beranda/BackgroundAnimation.tsx

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles() {
    const meshRef = useRef<THREE.Points>(null!);

    const particles = useMemo(() => {
        const particleCount = 5000;
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 10; // x
            positions[i3 + 1] = (Math.random() - 0.5) * 10; // y
            positions[i3 + 2] = (Math.random() - 0.5) * 10; // z
        }
        return positions;
    }, []);

    // 'useFrame' akan menjalankan fungsi ini di setiap frame (sekitar 60x per detik)
    useFrame((state, delta) => {
        // Membuat awan partikel berputar secara perlahan
        meshRef.current.rotation.y += delta * 0.05;
        meshRef.current.rotation.x += delta * 0.05;
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={particles}
                    count={particles.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.015} color="#0284c7" />
        </points>
    );
}

export default function BackGroundAnimation() {
    return (
        <div className="absolute top-0 left-0 w-full h-full -z-10">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <Particles />
            </Canvas>
        </div>
    );
}