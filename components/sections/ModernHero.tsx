'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Play, ChevronDown } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Stack,
  IconButton,
  Fade,
  Slide
} from '@mui/material'

const technologies = [
  { name: 'AI/ML', color: '#0066FF' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Web3', color: '#6B46C1' },
  { name: 'Next.js', color: '#000000' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Flutter', color: '#02569B' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Blockchain', color: '#10B981' }
]

export default function ModernHero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % technologies.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        })
      }
    }

    const hero = heroRef.current
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove)
      return () => hero.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <Box
      ref={heroRef}
      sx={{
        position: 'relative',
        minHeight: '100vh',
        background: `
          radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
          rgba(0, 102, 255, 0.15) 0%, 
          rgba(107, 70, 193, 0.1) 35%, 
          transparent 70%),
          linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)
        `,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(0, 102, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(107, 70, 193, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
          `,
        }
      }}
    >
      {/* Animated Grid Background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 102, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 102, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      {/* Floating Orbs */}
      {[...Array(12)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            background: `radial-gradient(circle, ${
              technologies[i % technologies.length].color
            }08, transparent 70%)`,
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translate(-50%, -50%)`,
            animation: `float ${15 + Math.random() * 20}s ease-in-out infinite`,
            animationDelay: `${Math.random() * -20}s`,
            '@keyframes float': {
              '0%, 100%': { 
                transform: 'translate(-50%, -50%) scale(1) rotate(0deg)',
                opacity: 0.3 
              },
              '50%': { 
                transform: 'translate(-50%, -50%) scale(1.2) rotate(180deg)',
                opacity: 0.6 
              },
            }
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        <Grid container spacing={6} alignItems="center" sx={{ minHeight: '100vh', py: 8 }}>
          {/* Left Content */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Stack spacing={4}>
              {/* Badge */}
              <Fade in timeout={800}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 3,
                    py: 1.5,
                    background: 'rgba(0, 102, 255, 0.08)',
                    border: '1px solid rgba(0, 102, 255, 0.2)',
                    borderRadius: '50px',
                    backdropFilter: 'blur(10px)',
                    width: 'fit-content',
                  }}
                >
                  <Sparkles size={16} color="#0066FF" />
                  <Typography 
                    sx={{ 
                      color: '#0066FF', 
                      fontSize: '0.9rem', 
                      fontWeight: 600,
                      letterSpacing: '0.5px'
                    }}
                  >
                    AI-Powered Development Studio
                  </Typography>
                </Box>
              </Fade>

              {/* Main Heading */}
              <Slide direction="up" in timeout={1000}>
                <Stack spacing={2}>
                  <Typography
                    sx={{
                      fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' },
                      fontWeight: 900,
                      lineHeight: 0.9,
                      letterSpacing: '-0.02em',
                      color: 'transparent',
                      background: `linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 100%)`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      textShadow: '0 0 50px rgba(255,255,255,0.1)',
                    }}
                  >
                    Building the
                  </Typography>
                  
                  <Box sx={{ position: 'relative', height: { xs: 60, md: 80, lg: 90 } }}>
                    {technologies.map((tech, index) => (
                      <Typography
                        key={tech.name}
                        sx={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' },
                          fontWeight: 900,
                          lineHeight: 0.9,
                          letterSpacing: '-0.02em',
                          color: tech.color,
                          opacity: index === activeIndex ? 1 : 0,
                          transform: index === activeIndex ? 'translateY(0)' : 'translateY(20px)',
                          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                          textShadow: `0 0 30px ${tech.color}40`,
                          filter: 'drop-shadow(0 0 20px currentColor)',
                        }}
                      >
                        {tech.name}
                      </Typography>
                    ))}
                  </Box>
                  
                  <Typography
                    sx={{
                      fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' },
                      fontWeight: 900,
                      lineHeight: 0.9,
                      letterSpacing: '-0.02em',
                      color: 'transparent',
                      background: `linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 100%)`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                    }}
                  >
                    Future
                  </Typography>
                </Stack>
              </Slide>

              {/* Subtitle */}
              <Fade in timeout={1200}>
                <Typography
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    color: 'rgba(255, 255, 255, 0.7)',
                    maxWidth: '600px',
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                >
                  We create revolutionary digital experiences using cutting-edge AI, 
                  blockchain technology, and modern development practices that transform 
                  ideas into reality.
                </Typography>
              </Fade>

              {/* CTA Buttons */}
              <Fade in timeout={1400}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ pt: 2 }}>
                  <Button
                    component={Link}
                    href="/contact/get-started"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowRight size={20} />}
                    sx={{ 
                      py: 2,
                      px: 4,
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
                    Start Your Project
                  </Button>
                  
                  <Button
                    component={Link}
                    href="/contact/demo"
                    variant="outlined"
                    size="large"
                    startIcon={<Play size={18} />}
                    sx={{ 
                      py: 2,
                      px: 4,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: '50px',
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      backdropFilter: 'blur(10px)',
                      '&:hover': {
                        border: '2px solid rgba(0, 102, 255, 0.5)',
                        background: 'rgba(0, 102, 255, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    Watch Demo
                  </Button>
                </Stack>
              </Fade>
            </Stack>
          </Grid>

          {/* Right Visual */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: 400, md: 600 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Central Orb */}
              <Box
                sx={{
                  width: 300,
                  height: 300,
                  background: `
                    radial-gradient(circle at 30% 30%, rgba(0, 102, 255, 0.8) 0%, transparent 50%),
                    radial-gradient(circle at 70% 70%, rgba(107, 70, 193, 0.8) 0%, transparent 50%),
                    radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.4) 0%, transparent 50%)
                  `,
                  borderRadius: '50%',
                  filter: 'blur(40px)',
                  animation: 'pulse 4s ease-in-out infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { transform: 'scale(1)', opacity: 0.8 },
                    '50%': { transform: 'scale(1.2)', opacity: 1 },
                  }
                }}
              />

              {/* Orbiting Elements */}
              {technologies.map((tech, index) => (
                <Box
                  key={tech.name}
                  sx={{
                    position: 'absolute',
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: `rgba(${tech.color === '#000000' ? '255,255,255' : tech.color.slice(1).match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(',') || '0,102,255'}, 0.1)`,
                    border: `2px solid ${tech.color}40`,
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: `orbit${index} 20s linear infinite`,
                    '@keyframes orbit0': {
                      '0%': { transform: 'rotate(0deg) translateX(200px) rotate(0deg)' },
                      '100%': { transform: 'rotate(360deg) translateX(200px) rotate(-360deg)' },
                    },
                    '@keyframes orbit1': {
                      '0%': { transform: 'rotate(45deg) translateX(160px) rotate(-45deg)' },
                      '100%': { transform: 'rotate(405deg) translateX(160px) rotate(-405deg)' },
                    },
                    '@keyframes orbit2': {
                      '0%': { transform: 'rotate(90deg) translateX(220px) rotate(-90deg)' },
                      '100%': { transform: 'rotate(450deg) translateX(220px) rotate(-450deg)' },
                    },
                    '@keyframes orbit3': {
                      '0%': { transform: 'rotate(135deg) translateX(180px) rotate(-135deg)' },
                      '100%': { transform: 'rotate(495deg) translateX(180px) rotate(-495deg)' },
                    },
                    '@keyframes orbit4': {
                      '0%': { transform: 'rotate(180deg) translateX(200px) rotate(-180deg)' },
                      '100%': { transform: 'rotate(540deg) translateX(200px) rotate(-540deg)' },
                    },
                    '@keyframes orbit5': {
                      '0%': { transform: 'rotate(225deg) translateX(160px) rotate(-225deg)' },
                      '100%': { transform: 'rotate(585deg) translateX(160px) rotate(-585deg)' },
                    },
                    '@keyframes orbit6': {
                      '0%': { transform: 'rotate(270deg) translateX(220px) rotate(-270deg)' },
                      '100%': { transform: 'rotate(630deg) translateX(220px) rotate(-630deg)' },
                    },
                    '@keyframes orbit7': {
                      '0%': { transform: 'rotate(315deg) translateX(180px) rotate(-315deg)' },
                      '100%': { transform: 'rotate(675deg) translateX(180px) rotate(-675deg)' },
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: tech.color,
                      textAlign: 'center',
                      lineHeight: 1,
                    }}
                  >
                    {tech.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Scroll Indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 20%, 53%, 80%, 100%': { transform: 'translateX(-50%) translateY(0)' },
              '40%, 43%': { transform: 'translateX(-50%) translateY(-10px)' },
            }
          }}
        >
          <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontWeight: 500 }}>
            Scroll to explore
          </Typography>
          <IconButton
            sx={{
              color: 'rgba(255,255,255,0.7)',
              '&:hover': { color: '#0066FF' },
            }}
          >
            <ChevronDown size={24} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  )
}