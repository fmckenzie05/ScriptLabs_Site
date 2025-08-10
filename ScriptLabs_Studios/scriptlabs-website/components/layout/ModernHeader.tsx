'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Code2, ArrowRight } from 'lucide-react'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Box, 
  Drawer, 
  Stack, 
  Fade,
  useScrollTrigger,
  Slide
} from '@mui/material'

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children || <div />}
    </Slide>
  );
}

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Technology', href: '/technology' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/insights' },
]

export default function ModernHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box sx={{ p: 3 }}>
      <Stack spacing={3}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Code2 size={20} color="white" />
            </Box>
            <Typography 
              sx={{ 
                fontSize: '1.5rem', 
                fontWeight: 800, 
                background: 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              ScriptLabs
            </Typography>
          </Stack>
        </Link>
        
        {navigation.map((item) => (
          <Button
            key={item.name}
            component={Link}
            href={item.href}
            sx={{
              justifyContent: 'flex-start',
              py: 1.5,
              px: 0,
              fontSize: '1.1rem',
              fontWeight: 500,
              color: '#0F172A',
              '&:hover': {
                color: '#0066FF',
                background: 'transparent',
              }
            }}
          >
            {item.name}
          </Button>
        ))}
        
        <Stack spacing={2} sx={{ pt: 2 }}>
          <Button
            component={Link}
            href="/contact/demo"
            variant="outlined"
            sx={{
              borderRadius: '50px',
              py: 1.5,
              borderColor: '#0066FF',
              color: '#0066FF',
              '&:hover': {
                borderColor: '#0066FF',
                background: 'rgba(0, 102, 255, 0.1)',
              }
            }}
          >
            Request Demo
          </Button>
          <Button
            component={Link}
            href="/contact/get-started"
            variant="contained"
            endIcon={<ArrowRight size={18} />}
            sx={{
              borderRadius: '50px',
              py: 1.5,
              background: 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)',
              boxShadow: '0 4px 20px rgba(0, 102, 255, 0.3)',
            }}
          >
            Get Started
          </Button>
        </Stack>
      </Stack>
    </Box>
  )

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: scrolled 
              ? 'rgba(255, 255, 255, 0.95)' 
              : 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            borderBottom: scrolled 
              ? '1px solid rgba(0, 0, 0, 0.08)' 
              : '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <Toolbar sx={{ py: 1 }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none', flexGrow: 1 }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 8px 25px rgba(0, 102, 255, 0.3)',
                    }
                  }}
                >
                  <Code2 size={24} color="white" />
                </Box>
                <Typography 
                  sx={{ 
                    fontSize: '1.8rem', 
                    fontWeight: 900, 
                    background: scrolled 
                      ? 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)'
                      : 'linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    letterSpacing: '-0.01em',
                  }}
                >
                  ScriptLabs
                </Typography>
              </Stack>
            </Link>

            {/* Desktop Navigation */}
            <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: scrolled ? '#0F172A' : 'white',
                    fontWeight: 500,
                    fontSize: '1rem',
                    textTransform: 'none',
                    py: 1,
                    px: 2,
                    borderRadius: '12px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      color: '#0066FF',
                      background: scrolled 
                        ? 'rgba(0, 102, 255, 0.1)' 
                        : 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateY(-1px)',
                    }
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Stack>

            {/* Desktop CTA Buttons */}
            <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' }, ml: 4 }}>
              <Button
                component={Link}
                href="/contact/demo"
                variant="outlined"
                sx={{
                  borderRadius: '50px',
                  px: 3,
                  py: 1,
                  borderColor: scrolled ? '#0066FF' : 'rgba(255, 255, 255, 0.3)',
                  color: scrolled ? '#0066FF' : 'white',
                  fontWeight: 500,
                  '&:hover': {
                    borderColor: '#0066FF',
                    background: 'rgba(0, 102, 255, 0.1)',
                    color: '#0066FF',
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                Request Demo
              </Button>
              <Button
                component={Link}
                href="/contact/get-started"
                variant="contained"
                endIcon={<ArrowRight size={18} />}
                sx={{
                  borderRadius: '50px',
                  px: 3,
                  py: 1,
                  background: 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)',
                  fontWeight: 600,
                  boxShadow: '0 4px 20px rgba(0, 102, 255, 0.3)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0, 102, 255, 0.4)',
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                Get Started
              </Button>
            </Stack>

            {/* Mobile menu button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                display: { md: 'none' },
                color: scrolled ? '#0F172A' : 'white',
              }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}