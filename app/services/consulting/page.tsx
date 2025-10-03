'use client'

import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Box, 
  Stack, 
  Chip,
  Button,
  Fade,
  Slide
} from '@mui/material'
import { Users, TrendingUp, Cog, Target, Lightbulb, Shield, Rocket, BarChart, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const services = [
  { 
    icon: Target, 
    title: 'Digital Strategy', 
    desc: 'Comprehensive digital transformation roadmaps aligned with business goals',
    deliverables: ['Strategy Assessment', 'Technology Roadmap', 'ROI Analysis', 'Implementation Plan']
  },
  { 
    icon: Cog, 
    title: 'Technical Architecture', 
    desc: 'Scalable system architecture and technology stack recommendations',
    deliverables: ['Architecture Review', 'Tech Stack Selection', 'Scalability Plan', 'Security Assessment']
  },
  { 
    icon: TrendingUp, 
    title: 'Performance Optimization', 
    desc: 'Identify bottlenecks and optimize existing systems for peak performance',
    deliverables: ['Performance Audit', 'Optimization Plan', 'Code Review', 'Monitoring Setup']
  },
  { 
    icon: Shield, 
    title: 'Security & Compliance', 
    desc: 'Comprehensive security audits and compliance frameworks',
    deliverables: ['Security Audit', 'Compliance Report', 'Risk Assessment', 'Remediation Plan']
  },
  { 
    icon: Users, 
    title: 'Team Augmentation', 
    desc: 'Expert developers and architects to accelerate your projects',
    deliverables: ['Skill Assessment', 'Team Integration', 'Knowledge Transfer', 'Mentoring']
  },
  { 
    icon: Lightbulb, 
    title: 'Innovation Lab', 
    desc: 'Explore emerging technologies and prototype new solutions',
    deliverables: ['Technology Research', 'Proof of Concept', 'Prototype Development', 'Market Analysis']
  },
]

const industries = [
  { name: 'FinTech', projects: '50+', icon: '💰', color: '#0066FF' },
  { name: 'HealthTech', projects: '35+', icon: '🏥', color: '#10B981' },
  { name: 'E-commerce', projects: '40+', icon: '🛒', color: '#F59E0B' },
  { name: 'EdTech', projects: '25+', icon: '📚', color: '#6B46C1' },
  { name: 'SaaS Platforms', projects: '60+', icon: '☁️', color: '#EC4899' },
  { name: 'Real Estate', projects: '20+', icon: '🏢', color: '#EF4444' },
]

const consultingProcess = [
  {
    phase: 'Discovery & Assessment',
    description: 'Deep dive into your current state, challenges, and objectives',
    duration: '1-2 weeks',
    deliverables: ['Current State Analysis', 'Gap Assessment', 'Stakeholder Interviews']
  },
  {
    phase: 'Strategy & Planning',
    description: 'Develop comprehensive strategy and detailed implementation roadmap',
    duration: '2-3 weeks',
    deliverables: ['Strategic Recommendations', 'Implementation Roadmap', 'Resource Planning']
  },
  {
    phase: 'Implementation Support',
    description: 'Hands-on support during execution with regular checkpoints',
    duration: 'Ongoing',
    deliverables: ['Technical Guidance', 'Code Reviews', 'Progress Monitoring']
  },
  {
    phase: 'Optimization & Growth',
    description: 'Continuous improvement and scaling recommendations',
    duration: 'Long-term',
    deliverables: ['Performance Metrics', 'Scaling Strategies', 'Technology Updates']
  },
]

const caseStudies = [
  {
    client: 'Fortune 500 Bank',
    challenge: 'Legacy system modernization and cloud migration',
    solution: 'Microservices architecture and gradual cloud migration strategy',
    results: ['40% cost reduction', '99.9% uptime', '60% faster deployments'],
    industry: 'Financial Services',
  },
  {
    client: 'Healthcare Startup',
    challenge: 'Scaling platform to handle 1M+ users while maintaining HIPAA compliance',
    solution: 'Auto-scaling architecture with advanced security measures',
    results: ['10x user growth', 'HIPAA compliant', '50% faster load times'],
    industry: 'HealthTech',
  },
  {
    client: 'E-commerce Leader',
    challenge: 'AI-powered personalization and recommendation system',
    solution: 'Custom ML models integrated with existing e-commerce platform',
    results: ['35% conversion increase', '50% higher engagement', '$2M revenue boost'],
    industry: 'Retail',
  },
]

const expertise = [
  'Cloud Architecture (AWS, GCP, Azure)',
  'Microservices & API Design',
  'DevOps & CI/CD',
  'Machine Learning & AI',
  'Blockchain & Web3',
  'Mobile Development',
  'Security & Compliance',
  'Performance Optimization',
]

export default function ConsultingPage() {
  return (
    <Box sx={{ pt: 12, pb: 8, minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          py: 12,
          mb: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3}>
                <Fade in timeout={600}>
                  <Chip
                    icon={<Users size={16} />}
                    label="Technology Consulting"
                    sx={{
                      px: 3,
                      py: 1,
                      background: 'rgba(0, 102, 255, 0.1)',
                      border: '1px solid rgba(0, 102, 255, 0.3)',
                      color: '#0066FF',
                      fontWeight: 600,
                      width: 'fit-content',
                    }}
                  />
                </Fade>
                
                <Slide direction="up" in timeout={800}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      fontWeight: 900,
                      color: 'white',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Expert Technology Consulting
                  </Typography>
                </Slide>
                
                <Fade in timeout={1000}>
                  <Typography
                    sx={{
                      fontSize: '1.2rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      lineHeight: 1.7,
                    }}
                  >
                    Strategic technology guidance from industry experts. We help businesses 
                    navigate digital transformation, optimize systems, and accelerate growth.
                  </Typography>
                </Fade>

                <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
                  <Button
                    component={Link}
                    href="/contact/get-started"
                    variant="contained"
                    size="large"
                    endIcon={<Rocket size={20} />}
                    sx={{
                      px: 4,
                      py: 2,
                      borderRadius: '50px',
                      background: 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)',
                      boxShadow: '0 8px 32px rgba(0, 102, 255, 0.3)',
                    }}
                  >
                    Get Consultation
                  </Button>
                  <Button
                    component={Link}
                    href="/contact/demo"
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 4,
                      py: 2,
                      borderRadius: '50px',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      color: 'white',
                    }}
                  >
                    Schedule Call
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  height: 500,
                  borderRadius: '20px',
                  background: 'url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Consulting Services */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Consulting Services
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={service.title}>
                <Fade in timeout={800 + index * 100}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: '20px',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                        borderColor: 'rgba(0, 102, 255, 0.3)',
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '12px',
                            background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(107, 70, 193, 0.1) 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <service.icon size={28} color="#0066FF" />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          {service.title}
                        </Typography>
                      </Stack>
                      
                      <Typography sx={{ color: 'text.secondary', mb: 3 }}>
                        {service.desc}
                      </Typography>

                      <Typography sx={{ fontWeight: 600, mb: 2, fontSize: '0.9rem' }}>
                        Key Deliverables:
                      </Typography>
                      <Stack spacing={1}>
                        {service.deliverables.map((deliverable) => (
                          <Stack key={deliverable} direction="row" alignItems="center" spacing={1}>
                            <CheckCircle size={16} color="#10B981" />
                            <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
                              {deliverable}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Industries */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Industry Experience
          </Typography>
          <Grid container spacing={3}>
            {industries.map((industry, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={industry.name}>
                <Fade in timeout={800 + index * 100}>
                  <Card
                    sx={{
                      p: 3,
                      borderRadius: '16px',
                      textAlign: 'center',
                      background: `${industry.color}08`,
                      border: `1px solid ${industry.color}20`,
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 12px 30px ${industry.color}20`,
                      }
                    }}
                  >
                    <Typography sx={{ fontSize: '3rem', mb: 2 }}>
                      {industry.icon}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {industry.name}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                      {industry.projects} Projects Completed
                    </Typography>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Process */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Our Consulting Process
          </Typography>
          <Grid container spacing={4}>
            {consultingProcess.map((step, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={step.phase}>
                <Fade in timeout={800 + index * 100}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.05) 0%, rgba(107, 70, 193, 0.05) 100%)',
                      border: '1px solid rgba(0, 102, 255, 0.1)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          fontSize: '2rem',
                          fontWeight: 900,
                          color: 'rgba(0, 102, 255, 0.1)',
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </Typography>
                      
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#0066FF' }}>
                        {step.phase}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', mb: 3 }}>
                        {step.description}
                      </Typography>
                      
                      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                        <Chip
                          label={step.duration}
                          size="small"
                          sx={{
                            background: 'rgba(0, 102, 255, 0.1)',
                            color: '#0066FF',
                            fontWeight: 600,
                          }}
                        />
                      </Stack>

                      <Stack spacing={1}>
                        {step.deliverables.map((deliverable) => (
                          <Stack key={deliverable} direction="row" alignItems="center" spacing={1}>
                            <CheckCircle size={14} color="#10B981" />
                            <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
                              {deliverable}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Case Studies */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Success Stories
          </Typography>
          <Grid container spacing={4}>
            {caseStudies.map((study, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={study.client}>
                <Fade in timeout={800 + index * 100}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="start" sx={{ mb: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          {study.client}
                        </Typography>
                        <Chip
                          label={study.industry}
                          size="small"
                          sx={{
                            background: 'rgba(0, 102, 255, 0.1)',
                            color: '#0066FF',
                            fontWeight: 600,
                          }}
                        />
                      </Stack>

                      <Typography sx={{ fontWeight: 600, mb: 1, fontSize: '0.9rem' }}>
                        Challenge:
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', mb: 3, fontSize: '0.9rem' }}>
                        {study.challenge}
                      </Typography>

                      <Typography sx={{ fontWeight: 600, mb: 1, fontSize: '0.9rem' }}>
                        Solution:
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', mb: 3, fontSize: '0.9rem' }}>
                        {study.solution}
                      </Typography>

                      <Typography sx={{ fontWeight: 600, mb: 2, fontSize: '0.9rem' }}>
                        Results:
                      </Typography>
                      <Stack spacing={1}>
                        {study.results.map((result) => (
                          <Stack key={result} direction="row" alignItems="center" spacing={1}>
                            <CheckCircle size={14} color="#10B981" />
                            <Typography sx={{ fontSize: '0.9rem', color: '#10B981', fontWeight: 600 }}>
                              {result}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Expertise */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Our Expertise
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {expertise.map((skill, index) => (
              <Grid key={skill}>
                <Fade in timeout={800 + index * 50}>
                  <Chip
                    label={skill}
                    sx={{
                      px: 3,
                      py: 2,
                      fontSize: '1rem',
                      fontWeight: 600,
                      background: 'rgba(0, 102, 255, 0.1)',
                      color: '#0066FF',
                      border: '1px solid rgba(0, 102, 255, 0.2)',
                      '&:hover': {
                        background: 'rgba(0, 102, 255, 0.2)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s',
                    }}
                  />
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA */}
        <Box
          sx={{
            textAlign: 'center',
            p: 8,
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)',
            color: 'white',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Ready to Transform Your Business?
          </Typography>
          <Typography sx={{ fontSize: '1.1rem', mb: 4, opacity: 0.9, maxWidth: '600px', mx: 'auto' }}>
            Get strategic guidance from technology experts who understand your challenges 
            and can help you achieve your digital transformation goals.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
            <Button
              component={Link}
              href="/contact/get-started"
              variant="contained"
              size="large"
              endIcon={<ArrowRight size={20} />}
              sx={{
                px: 6,
                py: 2,
                borderRadius: '50px',
                background: 'white',
                color: '#0066FF',
                fontWeight: 600,
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.9)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Start Consultation
            </Button>
            <Button
              component={Link}
              href="/contact/demo"
              variant="outlined"
              size="large"
              sx={{
                px: 6,
                py: 2,
                borderRadius: '50px',
                borderColor: 'white',
                color: 'white',
                fontWeight: 600,
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'white',
                },
              }}
            >
              Schedule Call
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}