import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import { portfolioData } from '../data/portfolioData';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: transparent;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(100, 149, 237, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.1) 0%, transparent 50%);
    animation: nebulaShift 12s ease-in-out infinite;
  }
  
  @keyframes nebulaShift {
    0%, 100% {
      background: radial-gradient(circle at 20% 80%, rgba(100, 149, 237, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.1) 0%, transparent 50%);
    }
    33% {
      background: radial-gradient(circle at 60% 40%, rgba(100, 149, 237, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 40% 60%, rgba(138, 43, 226, 0.15) 0%, transparent 50%);
    }
    66% {
      background: radial-gradient(circle at 80% 20%, rgba(100, 149, 237, 0.12) 0%, transparent 50%),
                  radial-gradient(circle at 20% 80%, rgba(138, 43, 226, 0.12) 0%, transparent 50%);
    }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const Content = styled.div`
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
    position: relative;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  .greeting {
    color: #3b82f6;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    animation: fadeInUp 1s ease-out;
  }
  
  .name {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fadeInUp 1s ease-out 0.2s both;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 3px;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      animation: expandLine 1.5s ease-out 1s both;
    }
  }
  
  .title {
    font-size: 1.5rem;
    color: #94a3b8;
    margin-bottom: 1.5rem;
    font-weight: 400;
    animation: fadeInUp 1s ease-out 0.4s both;
  }
  
  .description {
    font-size: 1.1rem;
    color: #cbd5e1;
    margin-bottom: 2rem;
    line-height: 1.6;
    animation: fadeInUp 1s ease-out 0.6s both;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes expandLine {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &.primary {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
    }
  }
  
  &.secondary {
    background: transparent;
    color: #ffffff;
    border: 2px solid #3b82f6;
    
    &:hover {
      background: #3b82f6;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(59, 130, 246, 0.2);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
    transition: all 0.3s ease;
    transform: translate(-50%, -50%);
  }
  
  &:hover {
    background: #3b82f6;
    transform: translateY(-3px) scale(1.1);
    
    &::before {
      width: 100px;
      height: 100px;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    order: -1;
  }
`;

const ProfileImage = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    z-index: -1;
    opacity: 0.3;
    filter: blur(20px);
    animation: pulse 2s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    background: linear-gradient(45deg, #3b82f6, #8b5cf6, #3b82f6);
    z-index: -2;
    opacity: 0.1;
    filter: blur(30px);
    animation: rotate 4s linear infinite;
  }
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 50px rgba(59, 130, 246, 0.5);
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.5;
    }
  }
  
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    font-size: 3rem;
  }
`;

// Floating Particles Component
const FloatingParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 15,
    duration: Math.random() * 8 + 6
  }));

  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      pointerEvents: 'none', 
      zIndex: 2,
      overflow: 'hidden'
    }}>
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: 'rgba(59, 130, 246, 0.6)',
            borderRadius: '50%',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Your Name",
    title: "Full Stack Developer",
    bio: "Passionate developer with expertise in modern web technologies.",
    socialLinks: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  });

  useEffect(() => {
    setPersonalInfo(portfolioData.personalInfo);
  }, []);

  const typedStrings = [
    "Full Stack Developer",
    "React Specialist",
    "Node.js Expert",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  return (
    <HeroSection id="home">
      <FloatingParticles />
      <Container>
        <Content>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="greeting">Hello, I'm</div>
            <h1>
              <span className="name">{personalInfo.name}</span>
            </h1>
            <div className="title">
              <ReactTyped
                strings={typedStrings}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </div>
            <p className="description">
              {personalInfo.bio}
            </p>
            
            <ButtonGroup>
              <Button
                href="#projects"
                className="primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </Button>
              <Button
                href="#contact"
                className="secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </Button>
            </ButtonGroup>
            
            <SocialLinks>
              <SocialLink
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </SocialLink>
              <SocialLink
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </SocialLink>
              <SocialLink
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Download Resume"
              >
                <FaDownload />
              </SocialLink>
            </SocialLinks>
          </motion.div>
        </Content>
        
        <ImageContainer>
          <ProfileImage
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            👩🏻‍💻
          </ProfileImage>
        </ImageContainer>
      </Container>
    </HeroSection>
  );
};

export default Hero;
