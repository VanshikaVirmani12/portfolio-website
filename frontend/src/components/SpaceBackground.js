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
  const mouseRef = useRef({ x: 0, y: 0, moved: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let lastMouseMove = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Mouse tracking
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        moved: true
      };
      lastMouseMove = Date.now();
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);

    // Star field
    const stars = [];
    const numStars = 200;

    // Dynamic constellations with Aquarius emphasis
    const constellationTemplates = [
      // Aquarius - The Water Bearer (most frequent)
      {
        pattern: [
          { x: 0, y: 0 }, { x: 0.12, y: -0.04 }, { x: 0.18, y: 0.08 },
          { x: 0.08, y: 0.15 }, { x: 0.22, y: 0.12 }
        ],
        weight: 3,
        name: 'Aquarius'
      },
      // Big Dipper
      {
        pattern: [
          { x: 0, y: 0 }, { x: 0.12, y: -0.04 }, { x: 0.24, y: -0.08 },
          { x: 0.36, y: -0.1 }, { x: 0.28, y: -0.16 }, { x: 0.16, y: -0.2 }
        ],
        weight: 2,
        name: 'Ursa Major'
      },
      // Orion's Belt
      {
        pattern: [
          { x: 0, y: 0 }, { x: 0.08, y: 0.04 }, { x: 0.16, y: 0.08 }
        ],
        weight: 2,
        name: 'Orion'
      },
      // Cassiopeia
      {
        pattern: [
          { x: 0, y: 0 }, { x: 0.08, y: -0.08 }, { x: 0.2, y: -0.04 },
          { x: 0.28, y: -0.12 }, { x: 0.4, y: -0.08 }
        ],
        weight: 1,
        name: 'Cassiopeia'
      },
      // Simple Triangle
      {
        pattern: [
          { x: 0, y: 0 }, { x: 0.15, y: 0.2 }, { x: 0.3, y: 0 }
        ],
        weight: 1,
        name: 'Triangle'
      }
    ];
    
    // Create weighted array for constellation selection
    const weightedTemplates = [];
    constellationTemplates.forEach(template => {
      for (let i = 0; i < template.weight; i++) {
        weightedTemplates.push(template);
      }
    });
    
    const activeConstellations = [];

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.1 + 0.02,
        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * 0.005 + 0.002
      });
    }

    // Shooting stars
    const shootingStars = [];
    


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

      // Manage dynamic constellations
      const shouldCreateConstellation = () => {
        // Higher chance near cursor if mouse moved recently
        if (mouseRef.current.moved && Date.now() - lastMouseMove < 3000) {
          return Math.random() < 0.008 && activeConstellations.length < 5;
        }
        return Math.random() < 0.001 && activeConstellations.length < 3;
      };
      
      if (shouldCreateConstellation()) {
        const template = weightedTemplates[Math.floor(Math.random() * weightedTemplates.length)];
        let baseX, baseY;
        
        // Spawn near cursor if mouse moved recently, otherwise random
        if (mouseRef.current.moved && Date.now() - lastMouseMove < 3000) {
          const offsetRange = 200;
          baseX = mouseRef.current.x + (Math.random() - 0.5) * offsetRange;
          baseY = mouseRef.current.y + (Math.random() - 0.5) * offsetRange;
          
          // Keep within bounds
          baseX = Math.max(100, Math.min(canvas.width - 100, baseX));
          baseY = Math.max(100, Math.min(canvas.height - 100, baseY));
        } else {
          baseX = Math.random() * (canvas.width * 0.6) + canvas.width * 0.2;
          baseY = Math.random() * (canvas.height * 0.6) + canvas.height * 0.2;
        }
        
        const scale = 0.8 + Math.random() * 0.4;
        
        activeConstellations.push({
          basePoints: template.pattern.map(point => ({
            x: baseX + point.x * canvas.width * scale * 0.15,
            y: baseY + point.y * canvas.height * scale * 0.15
          })),
          points: template.pattern.map(point => ({
            x: baseX + point.x * canvas.width * scale * 0.15,
            y: baseY + point.y * canvas.height * scale * 0.15
          })),
          centerX: baseX,
          centerY: baseY,
          opacity: 0,
          phase: 'appearing',
          age: 0,
          maxAge: 400 + Math.random() * 300,
          name: template.name,
          isAquarius: template.name === 'Aquarius'
        });
      }
      
      // Draw and update constellations
      activeConstellations.forEach((constellation, index) => {
        constellation.age++;
        
        // Update opacity based on phase
        if (constellation.phase === 'appearing') {
          constellation.opacity += 0.01;
          if (constellation.opacity >= 0.8) {
            constellation.phase = 'stable';
          }
        } else if (constellation.phase === 'stable') {
          if (constellation.age > constellation.maxAge * 0.7) {
            constellation.phase = 'disappearing';
          }
        } else if (constellation.phase === 'disappearing') {
          constellation.opacity -= 0.008;
          if (constellation.opacity <= 0) {
            activeConstellations.splice(index, 1);
            return;
          }
        }
        
        // Apply parallax effect based on mouse position
        if (mouseRef.current.moved) {
          const mouseInfluence = 0.02; // Subtle movement
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          
          const offsetX = (mouseRef.current.x - centerX) * mouseInfluence;
          const offsetY = (mouseRef.current.y - centerY) * mouseInfluence;
          
          // Update constellation points with parallax
          constellation.points = constellation.basePoints.map(point => ({
            x: point.x + offsetX,
            y: point.y + offsetY
          }));
        }
        
        // Special styling for Aquarius
        const isAquarius = constellation.isAquarius;
        const baseColor = isAquarius ? '64, 224, 255' : '100, 149, 237'; // Aqua blue for Aquarius
        const lineOpacity = isAquarius ? constellation.opacity * 0.8 : constellation.opacity * 0.6;
        const starSize = isAquarius ? 3.2 : 2.5;
        
        // Draw constellation lines with current positions
        ctx.strokeStyle = `rgba(${baseColor}, ${lineOpacity})`;
        ctx.lineWidth = isAquarius ? 2 : 1.5;
        ctx.beginPath();
        
        constellation.points.forEach((point, pointIndex) => {
          if (pointIndex === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.lineTo(point.x, point.y);
          }
        });
        
        ctx.stroke();
        
        // Draw constellation stars
        constellation.points.forEach(point => {
          ctx.save();
          ctx.fillStyle = `rgba(${baseColor}, ${constellation.opacity})`;
          ctx.shadowBlur = (isAquarius ? 12 : 8) * constellation.opacity;
          ctx.shadowColor = `rgba(${baseColor}, ${constellation.opacity * 0.8})`;
          ctx.beginPath();
          ctx.arc(point.x, point.y, starSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Extra glow for Aquarius
          if (isAquarius) {
            ctx.shadowBlur = 20 * constellation.opacity;
            ctx.shadowColor = `rgba(${baseColor}, ${constellation.opacity * 0.4})`;
            ctx.beginPath();
            ctx.arc(point.x, point.y, starSize * 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
          
          ctx.restore();
        });
      });

      // Create shooting stars (less frequent)
      if (Math.random() < 0.001) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          length: Math.random() * 80 + 20,
          speed: Math.random() * 6 + 3,
          angle: Math.random() * Math.PI / 4 + Math.PI / 4,
          opacity: 1,
          decay: 0.015
        });
      }

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
      canvas.removeEventListener('mousemove', handleMouseMove);
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