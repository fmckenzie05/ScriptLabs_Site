'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  Box, 
  Stack, 
  Chip,
  Button,
  Tabs,
  Tab,
  Fade,
  Slide
} from '@mui/material'
import { ArrowRight, ExternalLink, Github, Award, Users, Calendar } from 'lucide-react'

const categories = ['All', 'Web Apps', 'Mobile Apps', 'AI/ML', 'Web3', 'SaaS']

const projects = [
  {
    id: 1,
    title: 'FinanceAI Pro',
    category: 'AI/ML',
    description: 'AI-powered financial analytics platform with predictive modeling',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    technologies: ['Python', 'TensorFlow', 'React', 'AWS'],
    stats: { users: '50K+', accuracy: '97%', revenue: '$2.5M' },
    color: '#0066FF',
  },
  {
    id: 2,
    title: 'HealthTrack Mobile',
    category: 'Mobile Apps',
    description: 'Cross-platform health monitoring app with real-time analytics',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    technologies: ['Flutter', 'Firebase', 'Node.js', 'MongoDB'],
    stats: { downloads: '100K+', rating: '4.8', countries: '25' },
    color: '#6B46C1',
  },
  {
    id: 3,
    title: 'DeFi Exchange Platform',
    category: 'Web3',
    description: 'Decentralized exchange with automated market making',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
    technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
    stats: { tvl: '$10M+', trades: '500K+', users: '15K' },
    color: '#10B981',
  },
  {
    id: 4,
    title: 'E-Commerce Revolution',
    category: 'Web Apps',
    description: 'Next-gen e-commerce platform with AI recommendations',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    stats: { gmv: '$5M+', merchants: '500+', conversion: '8.5%' },
    color: '#F59E0B',
  },
  {
    id: 5,
    title: 'TeamCollab SaaS',
    category: 'SaaS',
    description: 'Enterprise collaboration platform with AI-powered insights',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    technologies: ['Vue.js', 'GraphQL', 'Kubernetes', 'AWS'],
    stats: { teams: '1K+', messages: '10M+', uptime: '99.99%' },
    color: '#EC4899',
  },
  {
    id: 6,
    title: 'SmartCity IoT',
    category: 'AI/ML',
    description: 'IoT platform for smart city infrastructure management',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&h=400&fit=crop',
    technologies: ['Python', 'IoT', 'React', 'TimescaleDB'],
    stats: { devices: '10K+', cities: '5', savings: '$1M+' },
    color: '#EF4444',
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

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
                icon={<Award size={16} />}
                label="Our Work"
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
                Portfolio Showcase
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
                Explore our collection of groundbreaking projects that have transformed 
                businesses and redefined industries.
              </Typography>
            </Fade>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Category Tabs */}
        <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
          <Tabs
            value={activeCategory}
            onChange={(e, newValue) => setActiveCategory(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                fontWeight: 600,
                fontSize: '1rem',
                textTransform: 'none',
                mx: 1,
                borderRadius: '50px',
                px: 3,
                transition: 'all 0.3s',
                '&.Mui-selected': {
                  background: 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)',
                  color: 'white',
                },
              },
              '& .MuiTabs-indicator': {
                display: 'none',
              },
            }}
          >
            {categories.map((category) => (
              <Tab key={category} label={category} value={category} />
            ))}
          </Tabs>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.id}>
              <Fade in timeout={800 + index * 100}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                      '& .project-overlay': {
                        opacity: 1,
                      },
                      '& img': {
                        transform: 'scale(1.1)',
                      }
                    }
                  }}
                >
                  {/* Image */}
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />
                    <Box
                      className="project-overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${project.color}CC, ${project.color}66)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2,
                        opacity: 0,
                        transition: 'opacity 0.3s',
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          background: 'white',
                          color: project.color,
                          '&:hover': {
                            background: 'white',
                            transform: 'scale(1.05)',
                          }
                        }}
                      >
                        View Case Study
                      </Button>
                    </Box>
                    <Chip
                      label={project.category}
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        background: 'rgba(255, 255, 255, 0.95)',
                        fontWeight: 600,
                        color: project.color,
                      }}
                    />
                  </Box>

                  <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Title & Description */}
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                      {project.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 3, flexGrow: 1 }}>
                      {project.description}
                    </Typography>

                    {/* Technologies */}
                    <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            background: `${project.color}10`,
                            color: project.color,
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Stack>

                    {/* Stats */}
                    <Grid container spacing={2}>
                      {Object.entries(project.stats).map(([key, value]) => (
                        <Grid size={4} key={key}>
                          <Stack alignItems="center">
                            <Typography 
                              sx={{ 
                                fontWeight: 700, 
                                fontSize: '1.1rem',
                                color: project.color,
                              }}
                            >
                              {value}
                            </Typography>
                            <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', textTransform: 'capitalize' }}>
                              {key}
                            </Typography>
                          </Stack>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <Stack alignItems="center" sx={{ mt: 8 }}>
          <Button
            component={Link}
            href="/contact/get-started"
            variant="contained"
            size="large"
            endIcon={<ArrowRight size={20} />}
            sx={{
              py: 2,
              px: 6,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)',
              boxShadow: '0 8px 32px rgba(0, 102, 255, 0.3)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 40px rgba(0, 102, 255, 0.4)',
              },
            }}
          >
            Start Your Project
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}