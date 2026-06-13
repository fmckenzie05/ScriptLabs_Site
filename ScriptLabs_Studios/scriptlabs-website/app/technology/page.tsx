'use client'

import Link from 'next/link'
import { ArrowRight, Brain, Code2, Database, Shield, Cloud, GitBranch, Cpu, Zap, Layers, Sparkles } from 'lucide-react'
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Box, 
  Stack, 
  Chip,
  LinearProgress,
  Fade,
  Slide,
  Button
} from '@mui/material'

const technologies = [
  {
    category: 'Frontend',
    icon: Code2,
    color: '#0066FF',
    items: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 98 },
      { name: 'Vue.js', level: 85 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind CSS', level: 96 },
    ]
  },
  {
    category: 'Backend',
    icon: Database,
    color: '#6B46C1',
    items: [
      { name: 'Node.js', level: 94 },
      { name: 'Python', level: 90 },
      { name: 'GraphQL', level: 88 },
      { name: 'PostgreSQL', level: 92 },
      { name: 'MongoDB', level: 86 },
    ]
  },
  {
    category: 'AI & ML',
    icon: Brain,
    color: '#10B981',
    items: [
      { name: 'TensorFlow', level: 85 },
      { name: 'PyTorch', level: 82 },
      { name: 'OpenAI APIs', level: 95 },
      { name: 'Langchain', level: 90 },
      { name: 'Scikit-learn', level: 88 },
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    color: '#F59E0B',
    items: [
      { name: 'AWS', level: 92 },
      { name: 'Docker', level: 94 },
      { name: 'Kubernetes', level: 86 },
      { name: 'CI/CD', level: 90 },
      { name: 'Terraform', level: 84 },
    ]
  },
  {
    category: 'Blockchain',
    icon: Cpu,
    color: '#EC4899',
    items: [
      { name: 'Solidity', level: 88 },
      { name: 'Web3.js', level: 90 },
      { name: 'Ethereum', level: 92 },
      { name: 'Smart Contracts', level: 87 },
      { name: 'IPFS', level: 85 },
    ]
  },
  {
    category: 'Security',
    icon: Shield,
    color: '#EF4444',
    items: [
      { name: 'OAuth 2.0', level: 94 },
      { name: 'JWT', level: 96 },
      { name: 'Encryption', level: 90 },
      { name: 'OWASP', level: 88 },
      { name: 'Penetration Testing', level: 82 },
    ]
  },
]

const technologySections = [
  {
    title: 'AI Algorithms',
    description: 'Proprietary AI technology that powers intelligent applications',
    icon: Brain,
    href: '/technology/ai-algorithms',
    color: '#6B46C1',
  },
  {
    title: 'Development Stack',
    description: 'Modern technology stack for scalable applications',
    icon: Code2,
    href: '/technology/stack',
    color: '#0066FF',
  },
  {
    title: 'Platform Architecture',
    description: 'Enterprise-grade architecture for mission-critical apps',
    icon: Layers,
    href: '/technology/architecture',
    color: '#10B981',
  },
]

export default function TechnologyPage() {
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
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Fade in timeout={600}>
              <Chip
                icon={<Zap size={16} />}
                label="Our Technology Stack"
                sx={{
                  px: 3,
                  py: 1,
                  background: 'rgba(0, 102, 255, 0.1)',
                  border: '1px solid rgba(0, 102, 255, 0.3)',
                  color: '#0066FF',
                  fontWeight: 600,
                }}
              />
            </Fade>
            
            <Slide direction="up" in timeout={800}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', md: '4rem' },
                  fontWeight: 900,
                  color: 'white',
                  letterSpacing: '-0.02em',
                }}
              >
                Cutting-Edge Technology
              </Typography>
            </Slide>
            
            <Fade in timeout={1000}>
              <Typography
                sx={{
                  fontSize: '1.3rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  maxWidth: '700px',
                }}
              >
                We leverage the most advanced technologies to build scalable, secure, 
                and innovative solutions that drive business growth.
              </Typography>
            </Fade>

            {/* Quick Links to Sub-pages */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
              {technologySections.map((section) => (
                <Button
                  key={section.title}
                  component={Link}
                  href={section.href}
                  variant="outlined"
                  startIcon={<section.icon size={20} />}
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    '&:hover': {
                      borderColor: section.color,
                      backgroundColor: `${section.color}20`,
                    }
                  }}
                >
                  {section.title}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Animated Technology Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {technologies.map((tech, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={tech.category}>
              <Fade in timeout={800 + index * 100}>
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                    transformStyle: 'preserve-3d',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    animation: `float 6s ease-in-out infinite`,
                    animationDelay: `${index * 0.5}s`,
                    '@keyframes float': {
                      '0%, 100%': { 
                        transform: 'perspective(1000px) translateY(0px) rotateX(0deg) rotateY(0deg)' 
                      },
                      '50%': { 
                        transform: 'perspective(1000px) translateY(-10px) rotateX(2deg) rotateY(-2deg)' 
                      },
                    },
                    '&:hover': {
                      animation: 'none',
                      transform: 'perspective(1000px) translateY(-20px) translateZ(50px) rotateX(-5deg) rotateY(5deg) scale(1.05)',
                      boxShadow: '0 30px 60px rgba(0, 0, 0, 0.2), 0 0 40px rgba(0, 102, 255, 0.1)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    {/* Header */}
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: '16px',
                          background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}10)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transformStyle: 'preserve-3d',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          animation: `spin 8s linear infinite`,
                          animationDelay: `${index * 1}s`,
                          '@keyframes spin': {
                            '0%': { transform: 'rotateY(0deg) rotateX(0deg)' },
                            '25%': { transform: 'rotateY(90deg) rotateX(15deg)' },
                            '50%': { transform: 'rotateY(180deg) rotateX(0deg)' },
                            '75%': { transform: 'rotateY(270deg) rotateX(-15deg)' },
                            '100%': { transform: 'rotateY(360deg) rotateX(0deg)' },
                          },
                          '&:hover': {
                            animation: 'none',
                            transform: 'scale(1.2) rotateY(15deg) rotateX(-15deg)',
                            boxShadow: `0 8px 20px ${tech.color}40`,
                          }
                        }}
                      >
                        <tech.icon 
                          size={28} 
                          color={tech.color}
                          style={{
                            filter: `drop-shadow(0 2px 4px ${tech.color}40)`,
                          }}
                        />
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: '#0F172A' }}>
                        {tech.category}
                      </Typography>
                    </Stack>

                    {/* Skills with Animated Progress Bars */}
                    <Stack spacing={3}>
                      {tech.items.map((item) => (
                        <Box key={item.name}>
                          <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                            <Typography sx={{ fontWeight: 500, color: '#334155' }}>
                              {item.name}
                            </Typography>
                            <Typography sx={{ fontWeight: 600, color: tech.color }}>
                              {item.level}%
                            </Typography>
                          </Stack>
                          <LinearProgress
                            variant="determinate"
                            value={item.level}
                            sx={{
                              height: 8,
                              borderRadius: 4,
                              backgroundColor: `${tech.color}10`,
                              boxShadow: `inset 0 2px 4px ${tech.color}20`,
                              '& .MuiLinearProgress-bar': {
                                borderRadius: 4,
                                background: `linear-gradient(90deg, ${tech.color} 0%, ${tech.color}CC 100%)`,
                                boxShadow: `0 2px 8px ${tech.color}40`,
                                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                              }
                            }}
                          />
                        </Box>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* Explore More Section */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
            Explore Our Technology In Depth
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {technologySections.map((section) => (
              <Grid size={{ xs: 12, md: 4 }} key={section.title}>
                <Card
                  component={Link}
                  href={section.href}
                  sx={{
                    p: 4,
                    textDecoration: 'none',
                    borderRadius: '16px',
                    border: '2px solid transparent',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: section.color,
                      transform: 'translateY(-4px)',
                      boxShadow: `0 10px 30px ${section.color}20`,
                    }
                  }}
                >
                  <Stack alignItems="center" spacing={2}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '16px',
                        background: `linear-gradient(135deg, ${section.color}20, ${section.color}10)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <section.icon size={32} color={section.color} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#0F172A' }}>
                      {section.title}
                    </Typography>
                    <Typography sx={{ color: '#64748B', textAlign: 'center' }}>
                      {section.description}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography sx={{ color: section.color, fontWeight: 600 }}>
                        Learn More
                      </Typography>
                      <ArrowRight size={20} color={section.color} />
                    </Stack>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box sx={{ mt: 12, textAlign: 'center' }}>
          <Stack spacing={3} alignItems="center">
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Ready to Build with Advanced Technology?
            </Typography>
            <Typography sx={{ fontSize: '1.1rem', color: '#64748B', maxWidth: '600px' }}>
              Let's discuss how our technology expertise can transform your business.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                component={Link}
                href="/contact/get-started"
                variant="contained"
                size="large"
                endIcon={<ArrowRight size={20} />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  background: 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)',
                  fontWeight: 600,
                  boxShadow: '0 4px 20px rgba(0, 102, 255, 0.3)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0, 102, 255, 0.4)',
                  },
                }}
              >
                Start Your Project
              </Button>
              <Button
                component={Link}
                href="/contact/demo"
                variant="outlined"
                size="large"
                endIcon={<ArrowRight size={20} />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '50px',
                  borderColor: '#0066FF',
                  color: '#0066FF',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: '#0066FF',
                    backgroundColor: 'rgba(0, 102, 255, 0.1)',
                  },
                }}
              >
                Request Tech Demo
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}