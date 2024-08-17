import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Html } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../components/utils/utils";
import HeroRobot from '../assets/HeroRobot.png'; // Update with actual path
import rightdots from '../assets/rightdots.png'; // Update with actual path

const ParticleRing = () => {
  return (
    <div className="relative flex flex-col lg:flex-row min-h-screen">
      {/* 3D Canvas */}
      <div className="flex-1 flex items-center justify-center">
        <Canvas
          camera={{ position: [10, -7.5, -5], fov: 60 }}
          style={{ width: "100%", height: "100%" }}
          className="bg-slate-900"
        >
          <OrbitControls 
            maxDistance={20} 
            minDistance={10} 
            enableZoom={false} // Disable zoom
            enableRotate={true}
            enablePan={false}
          />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-30, 0, -30]} power={10.0} />
          <PointCircle />
          <Html position={[0, 2, 0]}>
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-bounce relative flex flex-col items-center">
                  {/* Shadow and Glow Effect */}
                  <div className="absolute -inset-10 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-lg opacity-50 rounded-full"></div>

                  {/* Main Text */}
                  <div className="relative text-[4vw] md:text-[6vw] lg:text-[90px] font-bold text-white text-center">
                    <span className="relative block">
                      ARCC <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">TECHNOLOGY</span>
                    </span>
                  </div>

                  {/* Animation and Decoration */}
                  <div className="relative mt-4 text-[2vw] md:text-[3vw] lg:text-lg text-gray-300 animate-bounce">AI & Automation</div>
                </div>
              </div>
            </div>
          </Html>
        </Canvas>
      </div>

      {/* Robot Section */}
      <div className="flex-1 py-12 bg-gray-900 relative z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-40">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Robot Image */}
            <div className="relative flex-shrink-0 mb-8 lg:mb-0 lg:mr-8">
              <img
                src={HeroRobot}
                alt="Robot"
                className="w-full max-w-xs md:max-w-sm lg:max-w-md object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
              />
              <img
                src={rightdots}
                alt="Background Dots"
                className="absolute inset-0 animate-slide dots-background"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.1; // Adjust rotation speed
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 16, 16]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.3} // Adjust roughness for smoother appearance
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing;
