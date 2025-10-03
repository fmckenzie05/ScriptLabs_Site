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
  LinearProgress,
  Fade,
  Slide
} from '@mui/material'
import { Brain, Code2, Database, Shield, Cloud, GitBranch, Cpu, Zap } from 'lucide-react'

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
          </Stack>
        </Container>
      </Box>

      {/* Technology Grid */}
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
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
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
                        }}
                      >
                        <tech.icon size={28} color={tech.color} />
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: '#0F172A' }}>
                        {tech.category}
                      </Typography>
                    </Stack>

                    {/* Skills */}
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
                              height: 6,
                              borderRadius: 3,
                              backgroundColor: `${tech.color}20`,
                              '& .MuiLinearProgress-bar': {
                                borderRadius: 3,
                                background: `linear-gradient(90deg, ${tech.color} 0%, ${tech.color}CC 100%)`,
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
      </Container>
    </Box>
  )
}