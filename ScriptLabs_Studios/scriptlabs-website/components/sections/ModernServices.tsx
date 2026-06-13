'use client'

import Link from 'next/link'
import { Globe, Smartphone, Box, Sparkles, Users, ArrowRight, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Box as MuiBox,
  Chip,
  IconButton,
  Fade,
  Slide
} from '@mui/material'

const services = [
  {
    title: 'Web Development',
    description: 'Modern web applications built with the latest frameworks and best practices',
    icon: Globe,
    href: '/services/web-development',
    gradient: 'linear-gradient(135deg, #0066FF 0%, #4FC3F7 100%)',
    features: ['Next.js & React', 'AI Integration', 'Real-time Features'],
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform apps that users love',
    icon: Smartphone,
    href: '/services/mobile-development',
    gradient: 'linear-gradient(135deg, #6B46C1 0%, #9C27B0 100%)',
    features: ['Flutter & React Native', 'iOS & Android', 'AI-Powered UX'],
  },
  {
    title: 'Web3 & Blockchain',
    description: 'Decentralized solutions for the next generation of the web',
    icon: Box,
    href: '/services/web3-blockchain',
    gradient: 'linear-gradient(135deg, #10B981 0%, #00C851 100%)',
    features: ['Smart Contracts', 'DeFi Platforms', 'NFT Solutions'],
  },
  {
    title: 'AI-Powered SaaS',
    description: 'Intelligent platforms powered by modern AI and machine learning',
    icon: Sparkles,
    href: '/services/ai-saas',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #FF6B35 100%)',
    features: ['Custom AI Models', 'Machine Learning', 'Predictive Analytics'],
  },
  {
    title: 'Strategic Consulting',
    description: 'Technology guidance and architectural planning for your projects',
    icon: Users,
    href: '/services/consulting',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)',
    features: ['Tech Strategy', 'Architecture Review', 'Team Training'],
  },
]

export default function ModernServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <MuiBox
      sx={{
        py: 12,
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 10% 20%, rgba(0, 102, 255, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(107, 70, 193, 0.03) 0%, transparent 50%)
          `,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <Stack spacing={3} alignItems="center" sx={{ mb: 8, textAlign: 'center' }}>
          <Fade in timeout={600}>
            <Chip
              label="Our Expertise"
              sx={{
                px: 3,
                py: 1,
                background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(107, 70, 193, 0.1) 100%)',
                border: '1px solid rgba(0, 102, 255, 0.2)',
                color: '#0066FF',
                fontWeight: 600,
                fontSize: '0.9rem',
              }}
            />
          </Fade>

          <Slide direction="up" in timeout={800}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 900,
                background: 'linear-gradient(135deg, #0F172A 0%, #374151 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                maxWidth: '800px',
              }}
            >
              What We Build
            </Typography>
          </Slide>

          <Fade in timeout={1000}>
            <Typography
              sx={{
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                color: '#64748B',
                maxWidth: '700px',
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              We combine cutting-edge technology with creative innovation to deliver
              solutions that bring your ideas to life.
            </Typography>
          </Fade>
        </Stack>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={service.title}>
              <Fade in timeout={800 + index * 100}>
                <Card
                  component={Link}
                  href={service.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  sx={{
                    height: '100%',
                    textDecoration: 'none',
                    position: 'relative',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: hoveredIndex === index ? 'translateY(-12px)' : 'translateY(0)',
                    boxShadow: hoveredIndex === index
                      ? '0 25px 50px rgba(0, 0, 0, 0.15)'
                      : '0 4px 20px rgba(0, 0, 0, 0.08)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: service.gradient,
                      transform: hoveredIndex === index ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Icon */}
                    <MuiBox
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '20px',
                        background: service.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        transform: hoveredIndex === index ? 'scale(1.05) rotate(5deg)' : 'scale(1)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                      }}
                    >
                      <service.icon size={36} color="white" />
                    </MuiBox>

                    {/* Title */}
                    <Typography
                      variant="h4"
                      sx={{
                        mb: 2,
                        fontWeight: 700,
                        color: '#0F172A',
                        fontSize: '1.5rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {service.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        mb: 3,
                        color: '#64748B',
                        lineHeight: 1.6,
                        flexGrow: 1,
                        fontSize: '1rem',
                      }}
                    >
                      {service.description}
                    </Typography>

                    {/* Features */}
                    <Stack spacing={1.5} sx={{ mb: 3 }}>
                      {service.features.map((feature, idx) => (
                        <Stack key={idx} direction="row" alignItems="center" spacing={1.5}>
                          <MuiBox
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              background: service.gradient,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            sx={{
                              color: '#475569',
                              fontSize: '0.95rem',
                              fontWeight: 500,
                            }}
                          >
                            {feature}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>

                    {/* Learn More */}
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{ mt: 'auto' }}
                    >
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            background: service.gradient,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                          }}
                        >
                          Learn More
                        </Typography>
                        <ArrowRight
                          size={16}
                          style={{
                            color: hoveredIndex === index ? '#0066FF' : '#94A3B8',
                            transform: hoveredIndex === index ? 'translateX(4px)' : 'translateX(0)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                        />
                      </Stack>

                      <IconButton
                        size="small"
                        sx={{
                          opacity: hoveredIndex === index ? 1 : 0,
                          transform: hoveredIndex === index ? 'scale(1)' : 'scale(0.8)',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          background: service.gradient,
                          color: 'white',
                          '&:hover': {
                            transform: 'scale(1.1)',
                          }
                        }}
                      >
                        <ExternalLink size={16} />
                      </IconButton>
                    </Stack>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Fade in timeout={1200}>
          <Stack alignItems="center" sx={{ mt: 10 }}>
            <Button
              component={Link}
              href="/services"
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
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Explore All Services
            </Button>
          </Stack>
        </Fade>
      </Container>
    </MuiBox>
  )
}
