import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaGlobe, FaMapMarkerAlt, FaPlane, FaUser, FaHeart } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const AboutSection = styled.section`
  padding: 100px 0;
  background: rgba(15, 15, 15, 0.3);
  backdrop-filter: blur(5px);
  position: relative;
  
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: #94a3b8;
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TabButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: ${props => props.active ? 'rgba(59, 130, 246, 0.1)' : 'transparent'};
  color: ${props => props.active ? '#3b82f6' : '#94a3b8'};
  border: none;
  border-bottom: 2px solid ${props => props.active ? '#3b82f6' : 'transparent'};
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: #3b82f6;
    background: rgba(59, 130, 246, 0.05);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    border-bottom: none;
    border-left: 2px solid ${props => props.active ? '#3b82f6' : 'transparent'};
  }
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutText = styled.div`
  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #ffffff;
  }
  
  p {
    color: #cbd5e1;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  backdrop-filter: blur(10px);
  
  .number {
    font-size: 2rem;
    font-weight: 700;
    color: #3b82f6;
    margin-bottom: 0.5rem;
  }
  
  .label {
    color: #94a3b8;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

const SkillsPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const SkillTag = styled.span`
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(59, 130, 246, 0.2);
`;

const AboutImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    order: -1;
  }
`;

const ImageContainer = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 1rem;
  background: linear-gradient(135deg, #1e293b, #334155);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 1rem;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    z-index: -1;
    opacity: 0.3;
    filter: blur(20px);
  }
  
  .icon {
    font-size: 4rem;
    color: #3b82f6;
  }
`;

const About = () => {
  const [activeTab, setActiveTab] = useState('professional');
  const [personalInfo, setPersonalInfo] = useState({
    bio: "Hey there 👋 I'm a software engineer who loves building things—turning ideas into products and learning fast along the way. I'm especially excited about new tech, and working with people who are just as curious and driven.",
    location: "Toronto, Canada",
    email: "vansvirm@gmail.com"
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const tabs = [
    { id: 'professional', label: 'Professional', icon: FaCode },
    { id: 'personal', label: 'Personal', icon: FaUser }
  ];

  useEffect(() => {
    setPersonalInfo(portfolioData.personalInfo);
  }, []);

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "10+", label: "Technologies" },
    { number: "5+", label: "Happy Clients" }
  ];

  const topSkills = ["JavaScript", "React", "Node.js", "Python", "TypeScript", "MongoDB"];

  return (
    <AboutSection id="about" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Get to know me better and discover what drives my passion for development
        </SectionSubtitle>
        
        <TabsContainer>
          {tabs.map((tab, index) => (
            <TabButton
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon />
              {tab.label}
            </TabButton>
          ))}
        </TabsContainer>
        
        <ContentContainer>
          {activeTab === 'professional' ? (
            <AboutContent>
          <AboutText>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Passionate Developer & Problem Solver
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {personalInfo.bio}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I specialize in creating scalable web applications using modern technologies. 
              My goal is to build solutions that not only meet requirements but exceed expectations 
              in terms of performance, user experience, and maintainability.
            </motion.p>
            
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h4 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.1rem' }}>
                Top Skills:
              </h4>
              <SkillsPreview>
                {topSkills.map((skill, index) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </SkillsPreview>
            </motion.div>
            
            <StatsGrid>
              {stats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="number">{stat.number}</div>
                  <div className="label">{stat.label}</div>
                </StatCard>
              ))}
            </StatsGrid>
          </AboutText>
          
        </AboutContent>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '1rem',
                padding: '2rem',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <motion.div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #1e40af, #3b82f6, #06b6d4, #10b981)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {/* Earth continents pattern */}
                    <div style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      background: `
                        radial-gradient(circle at 30% 40%, rgba(34, 197, 94, 0.8) 0%, transparent 15%),
                        radial-gradient(circle at 70% 60%, rgba(34, 197, 94, 0.8) 0%, transparent 12%),
                        radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.8) 0%, transparent 10%),
                        radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.8) 0%, transparent 8%)
                      `,
                      borderRadius: '50%'
                    }} />
                    
                    {/* Animated dots representing your journey */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        width: '4px',
                        height: '4px',
                        background: '#fbbf24',
                        borderRadius: '50%',
                        top: '20%',
                        left: '30%'
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      style={{
                        position: 'absolute',
                        width: '4px',
                        height: '4px',
                        background: '#f59e0b',
                        borderRadius: '50%',
                        top: '60%',
                        left: '70%'
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.7
                      }}
                    />
                    <motion.div
                      style={{
                        position: 'absolute',
                        width: '4px',
                        height: '4px',
                        background: '#ef4444',
                        borderRadius: '50%',
                        top: '40%',
                        left: '20%'
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.4
                      }}
                    />
                  </motion.div>
                  <h3 style={{ color: '#ffffff', margin: 0, fontSize: '1.8rem' }}>Global Journey</h3>
                </div>
                
                <div style={{ marginBottom: '2rem', position: 'relative' }}>
                  {/* Journey path lines */}
                  <div style={{
                    position: 'absolute',
                    left: '20px',
                    top: '20px',
                    bottom: '20px',
                    width: '2px',
                    background: 'linear-gradient(180deg, #3b82f6, #8b5cf6, #06b6d4)',
                    opacity: 0.6,
                    zIndex: 1
                  }} />
                  
                  <motion.div 
                    style={{
                      position: 'absolute',
                      left: '19px',
                      top: '20px',
                      width: '4px',
                      height: '4px',
                      background: '#3b82f6',
                      borderRadius: '50%',
                      zIndex: 2
                    }}
                    animate={{
                      y: [0, 120, 240],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', position: 'relative', zIndex: 3 }}>
                    <motion.div 
                      style={{ 
                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
                        borderRadius: '50%', 
                        width: '40px', 
                        height: '40px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)'
                      }}
                      whileHover={{ scale: 1.1 }}
                      animate={{ 
                        boxShadow: [
                          '0 0 15px rgba(59, 130, 246, 0.5)',
                          '0 0 25px rgba(59, 130, 246, 0.8)',
                          '0 0 15px rgba(59, 130, 246, 0.5)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🇮🇳
                    </motion.div>
                    <div>
                      <h4 style={{ color: '#ffffff', margin: 0, fontSize: '1.2rem' }}>Born in India</h4>
                      <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>My roots and cultural foundation</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', position: 'relative', zIndex: 3 }}>
                    <motion.div 
                      style={{ 
                        background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', 
                        borderRadius: '50%', 
                        width: '40px', 
                        height: '40px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)'
                      }}
                      whileHover={{ scale: 1.1 }}
                      animate={{ 
                        boxShadow: [
                          '0 0 15px rgba(139, 92, 246, 0.5)',
                          '0 0 25px rgba(139, 92, 246, 0.8)',
                          '0 0 15px rgba(139, 92, 246, 0.5)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      🇰🇪
                    </motion.div>
                    <div>
                      <h4 style={{ color: '#ffffff', margin: 0, fontSize: '1.2rem' }}>8 Years in Kenya</h4>
                      <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Middle school and high school years</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 3 }}>
                    <motion.div 
                      style={{ 
                        background: 'linear-gradient(135deg, #06b6d4, #10b981)', 
                        borderRadius: '50%', 
                        width: '40px', 
                        height: '40px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        boxShadow: '0 0 15px rgba(6, 182, 212, 0.5)'
                      }}
                      whileHover={{ scale: 1.1 }}
                      animate={{ 
                        boxShadow: [
                          '0 0 15px rgba(6, 182, 212, 0.5)',
                          '0 0 25px rgba(6, 182, 212, 0.8)',
                          '0 0 15px rgba(6, 182, 212, 0.5)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      🇨🇦
                    </motion.div>
                    <div>
                      <h4 style={{ color: '#ffffff', margin: 0, fontSize: '1.2rem' }}>Now in Canada</h4>
                      <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>Building my career in Toronto</p>
                    </div>
                  </div>
                </div>
                
                <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '2rem' }}>
                  This multicultural journey has shaped my worldview and approach to problem-solving. 
                  Living across three continents has taught me to adapt quickly, embrace diversity, 
                  and bring unique perspectives to every project I work on.
                </p>
                
                <motion.div 
                  style={{ 
                    position: 'absolute', 
                    top: '1rem', 
                    right: '1rem', 
                    opacity: 0.1,
                    fontSize: '3rem'
                  }}
                  animate={{ 
                    x: [0, 15, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <FaPlane />
                </motion.div>
                
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
                  animation: 'shimmer 4s ease-in-out infinite'
                }} />
              </div>
            </motion.div>
          )}
        </ContentContainer>
      </Container>
    </AboutSection>
  );
};

export default About;
