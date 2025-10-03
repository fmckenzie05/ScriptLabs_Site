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
import { Smartphone, Users, Zap, Shield, Globe, Palette, Code, Rocket, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const features = [
  { icon: Smartphone, title: 'Cross-Platform', desc: 'Native iOS and Android apps from a single codebase' },
  { icon: Zap, title: 'High Performance', desc: 'Lightning-fast apps with smooth animations' },
  { icon: Shield, title: 'Security First', desc: 'End-to-end encryption and secure data handling' },
  { icon: Globe, title: 'Offline Support', desc: 'Apps that work seamlessly without internet' },
  { icon: Palette, title: 'UI/UX Excellence', desc: 'Beautiful, intuitive interfaces users love' },
  { icon: Code, title: 'Clean Architecture', desc: 'Maintainable, scalable code structure' },
]

const technologies = [
  { name: 'React Native', color: '#61DAFB' },
  { name: 'Flutter', color: '#02569B' },
  { name: 'Swift', color: '#FA7343' },
  { name: 'Kotlin', color: '#7F52FF' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'AWS Mobile', color: '#FF9900' },
]

const projects = [
  {
    name: 'FinanceTracker Pro',
    description: 'Personal finance app with AI-powered insights',
    stats: { downloads: '500K+', rating: '4.9', revenue: '$2M+' },
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
  },
  {
    name: 'HealthSync',
    description: 'Healthcare platform connecting patients and doctors',
    stats: { users: '200K+', consultations: '1M+', satisfaction: '96%' },
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop',
  },
  {
    name: 'EduLearn',
    description: 'Interactive learning platform for students',
    stats: { students: '100K+', courses: '500+', completion: '85%' },
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
  },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'Understanding your vision and requirements' },
  { step: '02', title: 'Design', desc: 'Creating intuitive user interfaces and experiences' },
  { step: '03', title: 'Development', desc: 'Building with cutting-edge technologies' },
  { step: '04', title: 'Testing', desc: 'Rigorous quality assurance and optimization' },
  { step: '05', title: 'Launch', desc: 'App store deployment and marketing support' },
  { step: '06', title: 'Growth', desc: 'Ongoing support and feature enhancement' },
]

export default function MobilePage() {
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
                    icon={<Smartphone size={16} />}
                    label="Mobile Development"
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
                    Mobile Apps That Users Love
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
                    Create powerful, scalable mobile applications that deliver exceptional user experiences 
                    across iOS and Android platforms. From concept to App Store success.
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
                    Start Your App
                  </Button>
                  <Button
                    component={Link}
                    href="/portfolio"
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
                    View Portfolio
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  height: 500,
                  borderRadius: '20px',
                  background: 'url(https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Features */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Why Choose Our Mobile Development
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={feature.title}>
                <Fade in timeout={800 + index * 100}>
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      borderRadius: '20px',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '20px',
                          background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(107, 70, 193, 0.1) 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                        }}
                      >
                        <feature.icon size={36} color="#0066FF" />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                        {feature.title}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        {feature.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Technologies */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Technologies We Master
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {technologies.map((tech, index) => (
              <Grid key={tech.name}>
                <Fade in timeout={800 + index * 100}>
                  <Chip
                    label={tech.name}
                    sx={{
                      px: 3,
                      py: 2,
                      fontSize: '1rem',
                      fontWeight: 600,
                      background: `${tech.color}15`,
                      color: tech.color,
                      border: `1px solid ${tech.color}30`,
                      '&:hover': {
                        background: `${tech.color}25`,
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

        {/* Success Stories */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Success Stories
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={project.name}>
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
                    <Box
                      sx={{
                        height: 200,
                        background: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                        {project.name}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', mb: 3 }}>
                        {project.description}
                      </Typography>
                      <Grid container spacing={1}>
                        {Object.entries(project.stats).map(([key, value]) => (
                          <Grid size={4} key={key}>
                            <Stack alignItems="center">
                              <Typography sx={{ fontWeight: 700, color: '#0066FF' }}>
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
        </Box>

        {/* Process */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Our Development Process
          </Typography>
          <Grid container spacing={4}>
            {process.map((step, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={step.step}>
                <Fade in timeout={800 + index * 100}>
                  <Card
                    sx={{
                      height: '100%',
                      background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.05) 0%, rgba(107, 70, 193, 0.05) 100%)',
                      border: '1px solid rgba(0, 102, 255, 0.1)',
                      borderRadius: '20px',
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
                          fontSize: '3rem',
                          fontWeight: 900,
                          color: 'rgba(0, 102, 255, 0.1)',
                        }}
                      >
                        {step.step}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#0066FF' }}>
                        {step.title}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        {step.desc}
                      </Typography>
                    </CardContent>
                  </Card>
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
            Ready to Build Your Mobile App?
          </Typography>
          <Typography sx={{ fontSize: '1.1rem', mb: 4, opacity: 0.9, maxWidth: '600px', mx: 'auto' }}>
            Let's discuss your mobile app idea and create something amazing together. 
            From concept to App Store success, we'll be with you every step of the way.
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
              Start Your Project
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
              Schedule Demo
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}