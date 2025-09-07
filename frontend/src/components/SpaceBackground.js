import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const SpaceContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const SpaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star field
    const stars = [];
    const numStars = 200;

    // Constellation points
    const constellations = [
      // Big Dipper
      [
        { x: 0.2, y: 0.3 }, { x: 0.25, y: 0.28 }, { x: 0.3, y: 0.26 },
        { x: 0.35, y: 0.25 }, { x: 0.32, y: 0.22 }, { x: 0.28, y: 0.2 }, { x: 0.24, y: 0.18 }
      ],
      // Orion's Belt
      [
        { x: 0.7, y: 0.6 }, { x: 0.72, y: 0.62 }, { x: 0.74, y: 0.64 }
      ],
      // Cassiopeia
      [
        { x: 0.8, y: 0.2 }, { x: 0.82, y: 0.18 }, { x: 0.85, y: 0.19 },
        { x: 0.87, y: 0.17 }, { x: 0.9, y: 0.18 }
      ]
    ];

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * 0.02 + 0.01
      });
    }

    // Shooting stars
    const shootingStars = [];
    
    const createShootingStar = () => {
      if (Math.random() < 0.003) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          length: Math.random() * 80 + 20,
          speed: Math.random() * 8 + 4,
          angle: Math.random() * Math.PI / 4 + Math.PI / 4,
          opacity: 1,
          decay: 0.02
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach(star => {
        star.y += star.speed;
        star.opacity += Math.sin(Date.now() * star.twinkle) * 0.01;
        
        if (star.y > canvas.height) {
          star.y = -5;
          star.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.opacity));
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = star.size * 2;
        ctx.shadowColor = '#ffffff';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw constellations
      constellations.forEach(constellation => {
        ctx.strokeStyle = 'rgba(100, 149, 237, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        
        constellation.forEach((point, index) => {
          const x = point.x * canvas.width;
          const y = point.y * canvas.height;
          
          if (index === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
          
          // Draw constellation stars
          ctx.save();
          ctx.fillStyle = 'rgba(100, 149, 237, 0.8)';
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'rgba(100, 149, 237, 0.8)';
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });
        
        ctx.stroke();
      });

      // Create shooting stars
      createShootingStar();

      // Draw shooting stars
      shootingStars.forEach((star, index) => {
        const gradient = ctx.createLinearGradient(
          star.x, star.y,
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length
        );
        ctx.stroke();

        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= star.decay;

        if (star.opacity <= 0 || star.x > canvas.width || star.y > canvas.height) {
          shootingStars.splice(index, 1);
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <SpaceContainer>
      <Canvas ref={canvasRef} />
    </SpaceContainer>
  );
};

export default SpaceBackground;