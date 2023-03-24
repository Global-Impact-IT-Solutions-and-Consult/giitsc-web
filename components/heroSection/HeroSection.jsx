import Link from "next/link";
import * as THREE from "three";

// styles

// Components and widgets
import { Button } from "../../widgets/buttonWidget/ButtonWidget.Styles";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap, { Expo } from "gsap";
import { HeroText, HeroWrapper } from "./HeroSection.Styles";

const HeroSection = () => {
  const containerRef = useRef();

  if (typeof window !== "undefined") {
    useEffect(() => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
      });
      renderer.setClearColor("#011729");
      renderer.setSize(window.innerWidth, window.innerHeight);
      window.addEventListener("resize", () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      });
      containerRef.current.appendChild(renderer.domElement);
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshLambertMaterial({
        color: 0xf7f7f7,
      });

      const meshX = -10;

      for (let i = 0; i < 20; i++) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = (Math.random() - 0.5) * 10;
        mesh.position.y = (Math.random() - 0.5) * 10;
        mesh.position.z = (Math.random() - 0.5) * 10;
        mesh.position.x = (Math.random() - 0.5) * 10;
        scene.add(mesh);
      }

      const light1 = new THREE.PointLight(0xffffff, 1, 1000);
      light1.position.set(0, 0, 0);
      scene.add(light1);

      const light2 = new THREE.PointLight(0xffffff, 2, 1000);
      light2.position.set(0, 0, 25);
      scene.add(light2);

      const render = () => {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
      };

      const handleChange = (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects(scene.children, true);

        for (const intersect of intersects) {
          const tl = gsap.timeline({
            delay: 0.3,
          });
          tl.to(intersect.object.scale, 1, { x: 2, ease: Expo.easeOut });
          tl.to(intersect.object.scale, 0.5, { x: 0.5, ease: Expo.easeOut });
          tl.to(intersect.object.position, 0.5, { x: 0.5, ease: Expo.easeOut });
          tl.to(
            intersect.object.rotation,
            0.5,
            { y: Math.PI * 0.5, ease: Expo.easeOut },
            "=-1.5"
          );
        }
      };

      render();

      window.addEventListener("mousemove", handleChange);
    }, []);
  }

  return (
    <HeroWrapper className="three" ref={containerRef}>
      <HeroText>ThreeJs Rocks</HeroText>
    </HeroWrapper>
  );
};

export default HeroSection;
