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
import { Users, Briefcase, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  { icon: Briefcase, title: 'Real Projects', desc: 'Work on shipped products used by real people' },
  { icon: Calendar, title: 'Flexible Schedule', desc: 'Work-life balance with flexible hours' },
  { icon: Users, title: 'Learning & Growth', desc: 'Grow your skills with modern tech stacks' },
  { icon: ArrowRight, title: 'Remote-First', desc: 'Work from anywhere' },
]

export default function CareersPage() {
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
                icon={<Users size={16} />}
                label="Careers"
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
                Work With Us
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
                We're a small studio that punches above its weight. If you're passionate about
                building great software, we'd love to hear from you.
              </Typography>
            </Fade>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Benefits */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Why ScriptLabs?
          </Typography>
          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={benefit.title}>
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
                        <benefit.icon size={36} color="#0066FF" />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                        {benefit.title}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        {benefit.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* No Open Positions — Contact */}
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
            No Open Positions Right Now
          </Typography>
          <Typography sx={{ fontSize: '1.1rem', mb: 4, opacity: 0.9, maxWidth: '600px', mx: 'auto' }}>
            We don't have any active job listings at the moment, but we're always interested
            in connecting with talented developers. Drop us a line and tell us about yourself.
          </Typography>
          <Button
            component={Link}
            href="/contact"
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
            Get in Touch
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
