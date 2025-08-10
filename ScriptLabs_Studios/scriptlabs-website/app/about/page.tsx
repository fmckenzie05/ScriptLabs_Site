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
  Avatar,
  Button,
  Fade,
  Slide
} from '@mui/material'
import { Sparkles, Users, Target, Rocket, Award, Heart, Linkedin, Github, Twitter } from 'lucide-react'
import Link from 'next/link'

const values = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'We push boundaries and challenge the status quo to create revolutionary solutions.',
    color: '#0066FF',
  },
  {
    icon: Users,
    title: 'Client Success',
    description: 'Your success is our mission. We\'re committed to delivering exceptional value.',
    color: '#6B46C1',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code to communication.',
    color: '#10B981',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do, and it shows in the quality of our work and dedication.',
    color: '#F59E0B',
  },
]

const team = [
  {
    name: 'Alex Chen',
    role: 'CEO & Co-Founder',
    image: 'https://i.pravatar.cc/300?img=12',
    bio: 'Former Google AI researcher with 15+ years in tech leadership.',
    social: { linkedin: '#', github: '#', twitter: '#' },
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO & Co-Founder',
    image: 'https://i.pravatar.cc/300?img=48',
    bio: 'Full-stack architect with expertise in scalable enterprise solutions.',
    social: { linkedin: '#', github: '#', twitter: '#' },
  },
  {
    name: 'Michael Park',
    role: 'Head of AI',
    image: 'https://i.pravatar.cc/300?img=14',
    bio: 'PhD in Machine Learning, pioneering AI innovations for real-world applications.',
    social: { linkedin: '#', github: '#', twitter: '#' },
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    image: 'https://i.pravatar.cc/300?img=44',
    bio: 'Award-winning designer creating intuitive and beautiful user experiences.',
    social: { linkedin: '#', github: '#', twitter: '#' },
  },
]

const milestones = [
  { year: '2019', event: 'ScriptLabs founded with a vision to revolutionize development' },
  { year: '2020', event: 'Launched proprietary AI algorithms and secured first enterprise clients' },
  { year: '2021', event: 'Expanded to 50+ team members and opened offices in 3 countries' },
  { year: '2022', event: 'Achieved $10M in revenue and launched Web3 division' },
  { year: '2023', event: 'Recognized as top AI development studio by TechCrunch' },
  { year: '2024', event: 'Serving 200+ clients globally with 99.9% satisfaction rate' },
]

export default function AboutPage() {
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
                icon={<Sparkles size={16} />}
                label="About ScriptLabs"
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
                Building the Future, Today
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
                We're a team of passionate innovators, engineers, and designers creating 
                solutions that transform industries and improve lives.
              </Typography>
            </Fade>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Mission Statement */}
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
                Our Mission
              </Typography>
              <Typography sx={{ fontSize: '1.2rem', color: 'text.secondary', lineHeight: 1.8 }}>
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                growth, and positive change. We believe in creating technology that not only solves 
                problems but also opens new possibilities for human advancement.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  height: 400,
                  borderRadius: '20px',
                  background: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Values */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Our Core Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={value.title}>
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
                          background: `linear-gradient(135deg, ${value.color}20, ${value.color}10)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                        }}
                      >
                        <value.icon size={36} color={value.color} />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                        {value.title}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Timeline */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Our Journey
          </Typography>
          <Box sx={{ position: 'relative' }}>
            {milestones.map((milestone, index) => (
              <Fade in timeout={800 + index * 100} key={milestone.year}>
                <Grid container spacing={4} sx={{ mb: 4 }} alignItems="center">
                  <Grid size={{ xs: 12, md: 2 }}>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                      }}
                    >
                      {milestone.year}
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 10 }}>
                    <Card
                      sx={{
                        p: 3,
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                        borderRadius: '16px',
                        borderLeft: '4px solid #0066FF',
                      }}
                    >
                      <Typography sx={{ fontSize: '1.1rem' }}>
                        {milestone.event}
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Fade>
            ))}
          </Box>
        </Box>

        {/* Team */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Meet Our Leadership
          </Typography>
          <Grid container spacing={4}>
            {team.map((member, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={member.name}>
                <Fade in timeout={800 + index * 100}>
                  <Card
                    sx={{
                      textAlign: 'center',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Avatar
                        src={member.image}
                        sx={{
                          width: 120,
                          height: 120,
                          mx: 'auto',
                          mb: 3,
                          border: '4px solid white',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        {member.name}
                      </Typography>
                      <Typography sx={{ color: '#0066FF', fontWeight: 600, mb: 2 }}>
                        {member.role}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', mb: 3, fontSize: '0.95rem' }}>
                        {member.bio}
                      </Typography>
                      <Stack direction="row" spacing={1} justifyContent="center">
                        <Link href={member.social.linkedin}>
                          <Linkedin size={20} color="#0066FF" />
                        </Link>
                        <Link href={member.social.github}>
                          <Github size={20} color="#0066FF" />
                        </Link>
                        <Link href={member.social.twitter}>
                          <Twitter size={20} color="#0066FF" />
                        </Link>
                      </Stack>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA */}
        <Stack alignItems="center" spacing={3}>
          <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center' }}>
            Ready to Join Our Journey?
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
            <Button
              component={Link}
              href="/about/careers"
              variant="outlined"
              size="large"
              sx={{
                py: 2,
                px: 4,
                borderRadius: '50px',
                borderColor: '#0066FF',
                color: '#0066FF',
                '&:hover': {
                  borderColor: '#0066FF',
                  background: 'rgba(0, 102, 255, 0.1)',
                }
              }}
            >
              View Careers
            </Button>
            <Button
              component={Link}
              href="/contact/get-started"
              variant="contained"
              size="large"
              sx={{
                py: 2,
                px: 4,
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)',
                boxShadow: '0 8px 32px rgba(0, 102, 255, 0.3)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 40px rgba(0, 102, 255, 0.4)',
                },
              }}
            >
              Start a Project
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}