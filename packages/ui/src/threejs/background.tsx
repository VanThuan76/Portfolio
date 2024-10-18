import * as THREE from "three";
import { memo, useEffect } from "react";
import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export const Background = memo(() => {
    const { gl, scene } = useThree();
    const texture = useTexture("/art.jpg");

    useEffect(() => {
        if (texture && gl && scene) {
            const timeoutId = setTimeout(() => {
                texture.mapping = THREE.EquirectangularReflectionMapping;
                const formatted = new THREE.WebGLCubeRenderTarget(
                    texture.image.height,
                    {
                        format: THREE.RGBAFormat,
                        type: THREE.UnsignedByteType,
                        generateMipmaps: true,
                        minFilter: THREE.LinearMipMapLinearFilter,
                    },
                ).fromEquirectangularTexture(gl, texture);

                scene.background = formatted.texture;
            }, 1000);

            return () => {
                clearTimeout(timeoutId);
                scene.background = null;
            };
        }
    }, [gl, scene, texture]);

    return null;
});
