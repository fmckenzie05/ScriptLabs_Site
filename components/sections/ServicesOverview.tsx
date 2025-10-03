'use client'

import Link from 'next/link'
import { Globe, Smartphone, Box, Sparkles, Users, ArrowRight } from 'lucide-react'
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Chip, 
  Stack,
  Box as MuiBox,
  useTheme
} from '@mui/material'

const services = [
  {
    title: 'Web Development',
    description: 'Modern, scalable web applications built with cutting-edge technologies',
    icon: Globe,
    href: '/services/web-development',
    color: 'electric-blue',
    features: ['React/Next.js', 'Progressive Web Apps', 'Cloud Architecture'],
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that users love',
    icon: Smartphone,
    href: '/services/mobile-development',
    color: 'neural-purple',
    features: ['React Native', 'Flutter', 'iOS & Android'],
  },
  {
    title: 'Web3 & Blockchain',
    description: 'Decentralized applications and smart contract solutions',
    icon: Box,
    href: '/services/web3-blockchain',
    color: 'quantum-green',
    features: ['Smart Contracts', 'DeFi Platforms', 'NFT Marketplaces'],
  },
  {
    title: 'AI-Powered SaaS',
    description: 'Intelligent platforms with our proprietary AI algorithms',
    icon: Sparkles,
    href: '/services/ai-saas',
    color: 'ai-orange',
    features: ['Custom AI Models', 'Machine Learning', 'Predictive Analytics'],
  },
  {
    title: 'Consulting',
    description: 'Strategic technology guidance and digital transformation',
    icon: Users,
    href: '/services/consulting',
    color: 'web3-pink',
    features: ['Architecture Review', 'Tech Strategy', 'Team Training'],
  },
]

export default function ServicesOverview() {
  const theme = useTheme()

  const colorMap: Record<string, string> = {
    'electric-blue': '#0066FF',
    'neural-purple': '#6B46C1',
    'quantum-green': '#10B981',
    'ai-orange': '#F59E0B',
    'web3-pink': '#EC4899',
  }

  const getServiceIcon = (IconComponent: any, colorName: string) => {
    return <IconComponent size={32} color={colorMap[colorName] || colorMap['electric-blue']} />
  }

  const getGradientColors = (colorName: string) => {
    const gradientMap: Record<string, string> = {
      'electric-blue': `linear-gradient(135deg, #0066FF15, #6B46C115)`,
      'neural-purple': `linear-gradient(135deg, #6B46C115, #10B98115)`,
      'quantum-green': `linear-gradient(135deg, #10B98115, #F59E0B15)`,
      'ai-orange': `linear-gradient(135deg, #F59E0B15, #EC489915)`,
      'web3-pink': `linear-gradient(135deg, #EC489915, #0066FF15)`,
    }
    return gradientMap[colorName] || gradientMap['electric-blue']
  }

  return (
    <MuiBox sx={{ py: 12, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <MuiBox sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 3,
              background: `linear-gradient(135deg, #0066FF 0%, #6B46C1 50%, #10B981 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontWeight: 800,
            }}
          >
            Our Services
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            From concept to deployment, we deliver end-to-end solutions that drive innovation and growth
          </Typography>
        </MuiBox>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={service.title}>
              <Card
                component={Link}
                href={service.href}
                sx={{
                  height: '100%',
                  textDecoration: 'none',
                  border: `1px solid rgba(0, 102, 255, 0.1)`,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'visible',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 40px rgba(0, 102, 255, 0.15)`,
                    '& .service-icon': {
                      transform: 'scale(1.1) rotate(5deg)',
                    },
                    '& .learn-more': {
                      transform: 'translateX(8px)',
                    }
                  }
                }}
              >
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Icon */}
                  <MuiBox
                    className="service-icon"
                    sx={{
                      width: 72,
                      height: 72,
                      borderRadius: 2,
                      background: getGradientColors(service.color),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    {getServiceIcon(service.icon, service.color)}
                  </MuiBox>

                  <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: 'text.primary' }}>
                    {service.title}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.6, flexGrow: 1 }}>
                    {service.description}
                  </Typography>

                  {/* Features */}
                  <Stack spacing={1.5} sx={{ mb: 3 }}>
                    {service.features.map((feature) => (
                      <Stack key={feature} direction="row" alignItems="center" spacing={1}>
                        <MuiBox
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: '#0066FF',
                            flexShrink: 0,
                          }}
                        />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {feature}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>

                  {/* Learn More */}
                  <Stack 
                    direction="row" 
                    alignItems="center" 
                    sx={{ 
                      color: 'primary.main',
                      fontWeight: 600,
                      mt: 'auto'
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Learn More
                    </Typography>
                    <ArrowRight 
                      size={16} 
                      className="learn-more"
                      style={{ 
                        marginLeft: 8,
                        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                      }} 
                    />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <MuiBox sx={{ textAlign: 'center' }}>
          <Button
            component={Link}
            href="/services"
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
            Explore All Services
          </Button>
        </MuiBox>
      </Container>
    </MuiBox>
  )
}