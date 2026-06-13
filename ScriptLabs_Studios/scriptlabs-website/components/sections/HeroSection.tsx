'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Code2, Cpu, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Chip,
  Stack,
  useTheme
} from '@mui/material'

const technologies = ['React', 'Next.js', 'AI/ML', 'Web3', 'Flutter', 'Node.js', 'Python', 'Blockchain']

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const theme = useTheme()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % technologies.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: `linear-gradient(135deg, #0F172A 0%, #0066FF15 100%)`,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 102, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 102, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.3,
          animation: 'pulse 4s ease-in-out infinite',
        }
      }}
    >
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: 4,
            height: 4,
            backgroundColor: '#0066FF',
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-20px)' },
            }
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, py: 16, textAlign: 'center' }}>
        {/* Badge */}
        <Chip
          icon={<Sparkles size={16} />}
          label="Software Development Studio"
          sx={{
            mb: 4,
            px: 2,
            py: 1,
            backgroundColor: 'rgba(0, 102, 255, 0.1)',
            border: `1px solid rgba(0, 102, 255, 0.3)`,
            color: '#0066FF',
            fontWeight: 600,
          }}
        />

        {/* Main heading */}
        <Typography
          variant="h1"
          sx={{
            color: 'white',
            mb: 4,
            fontWeight: 800,
            fontSize: { xs: '3rem', md: '5rem', lg: '6rem' },
            lineHeight: 0.9,
            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}
        >
          Creating Solutions
          <br />
          <Box
            component="span"
            sx={{
              background: `linear-gradient(135deg, #0066FF 0%, #6B46C1 50%, #10B981 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
            }}
          >
            Out of Thin Air
          </Box>
        </Typography>

        {/* Subheading with rotating tech */}
        <Stack spacing={2} alignItems="center" sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ color: 'grey.300', fontWeight: 400 }}>
            We transform your ideas into powerful
          </Typography>

          <Box sx={{ height: 60, position: 'relative', display: 'flex', alignItems: 'center' }}>
            {technologies.map((tech, index) => (
              <Typography
                key={tech}
                variant="h3"
                sx={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: '#0066FF',
                  fontWeight: 700,
                  opacity: index === activeIndex ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                  textShadow: `0 0 20px rgba(0, 102, 255, 0.5)`,
                }}
              >
                {tech}
              </Typography>
            ))}
          </Box>

          <Typography variant="h4" sx={{ color: 'grey.300', fontWeight: 400 }}>
            applications across web, mobile, and blockchain platforms
          </Typography>
        </Stack>

        {/* CTA Buttons */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" sx={{ mb: 10 }}>
          <Button
            component={Link}
            href="/contact/get-started"
            variant="contained"
            size="large"
            endIcon={<ArrowRight size={20} />}
            sx={{
              fontSize: '1.1rem',
              py: 1.5,
              px: 4,
              borderRadius: 3,
            }}
          >
            Start Your Project
          </Button>
          <Button
            component={Link}
            href="/contact/demo"
            variant="outlined"
            size="large"
            startIcon={<Sparkles size={20} />}
            sx={{
              fontSize: '1.1rem',
              py: 1.5,
              px: 4,
              borderRadius: 3,
              borderWidth: 2,
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                borderWidth: 2,
                backgroundColor: 'rgba(0, 102, 255, 0.1)',
              }
            }}
          >
            See AI Demo
          </Button>
        </Stack>

        {/* Floating tech icons */}
        <Box sx={{ position: 'absolute', bottom: 40, left: 40, opacity: 0.2, animation: 'float 6s ease-in-out infinite' }}>
          <Code2 size={48} color="#0066FF" />
        </Box>
        <Box sx={{ position: 'absolute', top: 80, right: 80, opacity: 0.2, animation: 'float 8s ease-in-out infinite', animationDelay: '2s' }}>
          <Cpu size={64} color="#6B46C1" />
        </Box>
        <Box sx={{ position: 'absolute', bottom: 80, right: 40, opacity: 0.2, animation: 'float 7s ease-in-out infinite', animationDelay: '4s' }}>
          <Globe size={56} color="#10B981" />
        </Box>
      </Container>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          '@keyframes bounce': {
            '0%, 20%, 53%, 80%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '40%, 43%': { transform: 'translateX(-50%) translateY(-10px)' },
          }
        }}
      >
        <Box
          sx={{
            width: 24,
            height: 40,
            border: '2px solid rgba(255,255,255,0.3)',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'center',
            pt: 0.5,
          }}
        >
          <Box
            sx={{
              width: 4,
              height: 12,
              backgroundColor: 'rgba(255,255,255,0.5)',
              borderRadius: '2px',
              animation: 'scroll 2s ease-in-out infinite',
              '@keyframes scroll': {
                '0%': { opacity: 0 },
                '50%': { opacity: 1 },
                '100%': { opacity: 0, transform: 'translateY(12px)' },
              }
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}
