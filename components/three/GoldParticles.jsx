"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function GoldParticles({ count = 300 }) {
    const mesh = useRef();

    // Generate random positions, scales, and colors for particles
    const particles = useRef(
        new Array(count).fill().map(() => {
            return {
                pos: new THREE.Vector3(
                    (Math.random() - 0.5) * 15,
                    (Math.random() - 0.5) * 15,
                    (Math.random() - 0.5) * 10
                ),
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.005,
                    (Math.random() * 0.01) + 0.005, // Float upwards
                    (Math.random() - 0.5) * 0.005
                ),
                scale: Math.random() * 0.05 + 0.02,
                // Slightly varying gold colors
                color: new THREE.Color().setHSL(
                    0.11 + Math.random() * 0.04, // Hue around 40-55 (Gold)
                    0.6 + Math.random() * 0.4,   // Saturation
                    0.4 + Math.random() * 0.3    // Lightness
                )
            };
        })
    );

    const dummy = new THREE.Object3D();
    const colorArray = new Float32Array(count * 3);

    useFrame((state) => {
        // Scroll effect - makes particles move faster when scrolled down
        const scrollY = window.scrollY || 0;
        const speedMultiplier = 1 + (scrollY * 0.002);

        particles.current.forEach((particle, i) => {
            // Update position
            particle.pos.add(particle.velocity.clone().multiplyScalar(speedMultiplier));

            // Reset if they float too high
            if (particle.pos.y > 7.5) {
                particle.pos.y = -7.5;
                particle.pos.x = (Math.random() - 0.5) * 15;
            }

            dummy.position.copy(particle.pos);

            // Gentle rotation
            dummy.rotation.x += 0.01;
            dummy.rotation.y += 0.01;

            dummy.scale.set(particle.scale, particle.scale, particle.scale);

            // Create a slight pulse effect based on time
            const scaleVariation = Math.sin(state.clock.elapsedTime * 2 + i) * 0.01;
            dummy.scale.addScalar(scaleVariation);

            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);

            // Set color
            particle.color.toArray(colorArray, i * 3);
        });

        mesh.current.instanceMatrix.needsUpdate = true;
        mesh.current.geometry.attributes.color.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <octahedronGeometry args={[1, 0]}>
                <instancedBufferAttribute attach="attributes-color" args={[colorArray, 3]} />
            </octahedronGeometry>
            <meshStandardMaterial
                vertexColors
                metalness={0.8}
                roughness={0.2}
                emissive="#C8A45D"
                emissiveIntensity={0.2}
            />
        </instancedMesh>
    );
}
