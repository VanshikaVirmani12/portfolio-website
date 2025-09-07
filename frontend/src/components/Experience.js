import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const ExperienceSection = styled.section`
  padding: 100px 0;
  background: rgba(10, 10, 10, 0.3);
  backdrop-filter: blur(5px);
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

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 2rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    
    @media (max-width: 768px) {
      left: 1rem;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  padding-left: 5rem;
  
  @media (max-width: 768px) {
    padding-left: 3rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: 1.5rem;
    top: 0.5rem;
    width: 1rem;
    height: 1rem;
    background: #3b82f6;
    border-radius: 50%;
    border: 3px solid #0a0a0a;
    z-index: 1;
    
    @media (max-width: 768px) {
      left: 0.5rem;
    }
  }
`;

const TimelineCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(59, 130, 246, 0.3);
    transform: translateY(-2px);
  }
`;

const TimelineHeader = styled.div`
  margin-bottom: 1rem;
  
  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 0.25rem;
  }
  
  .company {
    color: #3b82f6;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  
  .duration {
    color: #94a3b8;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const TimelineDescription = styled.p`
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(59, 130, 246, 0.2);
`;

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    setExperience(portfolioData.experience);
    setEducation(portfolioData.education);
  }, []);

  const tabs = [
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'education', label: 'Education', icon: FaGraduationCap }
  ];

  const currentData = activeTab === 'experience' ? experience : education;

  return (
    <ExperienceSection id="experience" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Experience & Education
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My professional journey and educational background
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
          <Timeline>
            {currentData.map((item, index) => (
              <TimelineItem
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <TimelineCard>
                  <TimelineHeader>
                    <h3>{activeTab === 'experience' ? item.position : item.degree}</h3>
                    <div className="company">
                      {activeTab === 'experience' ? item.company : item.institution}
                    </div>
                    <div className="duration">
                      <FaCalendarAlt />
                      {item.duration}
                    </div>
                  </TimelineHeader>
                  
                  <TimelineDescription>
                    {item.description}
                  </TimelineDescription>
                  
                  {activeTab === 'experience' && item.technologies && (
                    <TechStack>
                      {item.technologies.map((tech) => (
                        <TechTag key={tech}>{tech}</TechTag>
                      ))}
                    </TechStack>
                  )}
                </TimelineCard>
              </TimelineItem>
            ))}
          </Timeline>
        </ContentContainer>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
