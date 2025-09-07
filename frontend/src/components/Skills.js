import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaDatabase, FaCloud, FaMobile, FaPalette } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const SkillsSection = styled.section`
  padding: 100px 0;
  background: #0a0a0a;
  position: relative;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(59, 130, 246, 0.3);
    transform: translateY(-5px);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  .icon {
    font-size: 2rem;
    color: #3b82f6;
  }
  
  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #ffffff;
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillItem = styled.div`
  .skill-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    
    span {
      color: #ffffff;
      font-weight: 500;
    }
    
    .percentage {
      color: #3b82f6;
      font-size: 0.9rem;
      font-weight: 600;
    }
  }
  
  .skill-bar {
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
    
    .skill-progress {
      height: 100%;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      border-radius: 4px;
      transition: width 1s ease-in-out;
    }
  }
`;

const TechStack = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const TechCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(59, 130, 246, 0.3);
    transform: translateY(-3px);
  }
  
  .tech-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #3b82f6;
  }
  
  .tech-name {
    color: #ffffff;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .tech-description {
    color: #94a3b8;
    font-size: 0.9rem;
  }
`;

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    setSkills(portfolioData.skills);
  }, []);

  const categories = [
    { name: 'Frontend', icon: FaCode, color: '#3b82f6' },
    { name: 'Backend', icon: FaServer, color: '#10b981' },
    { name: 'Database', icon: FaDatabase, color: '#f59e0b' },
    { name: 'Cloud', icon: FaCloud, color: '#8b5cf6' },
    { name: 'Mobile', icon: FaMobile, color: '#ef4444' },
    { name: 'Design', icon: FaPalette, color: '#ec4899' }
  ];

  const techStack = [
    { name: 'React', description: 'Frontend Framework', icon: '⚛️' },
    { name: 'Node.js', description: 'Backend Runtime', icon: '🟢' },
    { name: 'TypeScript', description: 'Type Safety', icon: '🔷' },
    { name: 'MongoDB', description: 'NoSQL Database', icon: '🍃' },
    { name: 'PostgreSQL', description: 'SQL Database', icon: '🐘' },
    { name: 'AWS', description: 'Cloud Platform', icon: '☁️' },
    { name: 'Docker', description: 'Containerization', icon: '🐳' },
    { name: 'Git', description: 'Version Control', icon: '📝' }
  ];

  const getSkillsByCategory = (category) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <SkillsSection id="skills" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A comprehensive overview of my technical expertise and proficiency levels
        </SectionSubtitle>
        
        <SkillsGrid>
          {categories.map((category, categoryIndex) => {
            const categorySkills = getSkillsByCategory(category.name);
            if (categorySkills.length === 0) return null;
            
            return (
              <SkillCategory
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              >
                <CategoryHeader>
                  <category.icon className="icon" />
                  <h3>{category.name}</h3>
                </CategoryHeader>
                
                <SkillList>
                  {categorySkills.map((skill, skillIndex) => (
                    <SkillItem key={skill.name}>
                      <div className="skill-name">
                        <span>{skill.name}</span>
                        <span className="percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        />
                      </div>
                    </SkillItem>
                  ))}
                </SkillList>
              </SkillCategory>
            );
          })}
        </SkillsGrid>
        
        <motion.h3
          style={{
            textAlign: 'center',
            fontSize: '1.8rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '2rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Technology Stack
        </motion.h3>
        
        <TechStack>
          {techStack.map((tech, index) => (
            <TechCard
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
            >
              <div className="tech-icon">{tech.icon}</div>
              <div className="tech-name">{tech.name}</div>
              <div className="tech-description">{tech.description}</div>
            </TechCard>
          ))}
        </TechStack>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
