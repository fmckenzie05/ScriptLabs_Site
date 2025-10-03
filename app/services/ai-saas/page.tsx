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
import { Brain, Zap, Target, Users, BarChart, Cog, Rocket, Shield, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const features = [
  { icon: Brain, title: 'Advanced AI Models', desc: 'Custom ML algorithms tailored to your business needs' },
  { icon: Zap, title: 'Real-time Processing', desc: 'Lightning-fast AI inference and decision making' },
  { icon: Target, title: 'Predictive Analytics', desc: 'Forecast trends and optimize business outcomes' },
  { icon: Users, title: 'Intelligent Automation', desc: 'Automate complex workflows with AI-powered logic' },
  { icon: BarChart, title: 'Data-Driven Insights', desc: 'Transform raw data into actionable intelligence' },
  { icon: Shield, title: 'Enterprise Security', desc: 'Bank-level security for sensitive AI workloads' },
]

const aiCapabilities = [
  { name: 'Natural Language Processing', accuracy: '98%', color: '#0066FF' },
  { name: 'Computer Vision', accuracy: '96%', color: '#6B46C1' },
  { name: 'Predictive Analytics', accuracy: '94%', color: '#10B981' },
  { name: 'Recommendation Systems', accuracy: '92%', color: '#F59E0B' },
  { name: 'Anomaly Detection', accuracy: '97%', color: '#EC4899' },
  { name: 'Time Series Forecasting', accuracy: '93%', color: '#EF4444' },
]

const useCases = [
  {
    title: 'E-commerce Personalization',
    description: 'AI-powered product recommendations and dynamic pricing',
    metrics: { increase: '45%', metric: 'conversion rate' },
    icon: Target,
  },
  {
    title: 'Financial Risk Assessment',
    description: 'Automated credit scoring and fraud detection systems',
    metrics: { reduction: '78%', metric: 'false positives' },
    icon: Shield,
  },
  {
    title: 'Healthcare Diagnostics',
    description: 'Medical image analysis and predictive health monitoring',
    metrics: { accuracy: '96%', metric: 'diagnostic accuracy' },
    icon: Brain,
  },
  {
    title: 'Supply Chain Optimization',
    description: 'Demand forecasting and inventory management',
    metrics: { reduction: '35%', metric: 'operational costs' },
    icon: BarChart,
  },
]

const platforms = [
  { name: 'TensorFlow', color: '#FF6F00' },
  { name: 'PyTorch', color: '#EE4C2C' },
  { name: 'Scikit-learn', color: '#F7931E' },
  { name: 'OpenAI GPT', color: '#00A67E' },
  { name: 'Hugging Face', color: '#FFD21E' },
  { name: 'AWS SageMaker', color: '#232F3E' },
  { name: 'Google AI', color: '#4285F4' },
  { name: 'Azure ML', color: '#0078D4' },
]

export default function AISaaSPage() {
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
                    icon={<Brain size={16} />}
                    label="AI-Powered SaaS"
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
                    Intelligent SaaS Solutions
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
                    Harness the power of artificial intelligence to build smarter SaaS platforms 
                    that learn, adapt, and deliver exceptional value to your customers.
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
                    Build AI SaaS
                  </Button>
                  <Button
                    component={Link}
                    href="/contact/demo"
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
                    See Demo
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  height: 500,
                  borderRadius: '20px',
                  background: 'url(https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop)',
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
            AI-Powered Features
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

        {/* AI Capabilities */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Our AI Capabilities
          </Typography>
          <Grid container spacing={4}>
            {aiCapabilities.map((capability, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={capability.name}>
                <Fade in timeout={800 + index * 100}>
                  <Card
                    sx={{
                      p: 3,
                      borderRadius: '16px',
                      background: `${capability.color}08`,
                      border: `1px solid ${capability.color}20`,
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 12px 30px ${capability.color}20`,
                      }
                    }}
                  >
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {capability.name}
                      </Typography>
                      <Chip
                        label={capability.accuracy}
                        sx={{
                          background: capability.color,
                          color: 'white',
                          fontWeight: 600,
                        }}
                      />
                    </Stack>
                    <Box
                      sx={{
                        height: 8,
                        borderRadius: '4px',
                        background: `${capability.color}20`,
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          height: '100%',
                          width: capability.accuracy,
                          background: capability.color,
                          borderRadius: '4px',
                        }}
                      />
                    </Box>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Use Cases */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Real-World Applications
          </Typography>
          <Grid container spacing={4}>
            {useCases.map((useCase, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={useCase.title}>
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
                    <CardContent sx={{ p: 4 }}>
                      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '12px',
                            background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(107, 70, 193, 0.1) 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <useCase.icon size={28} color="#0066FF" />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          {useCase.title}
                        </Typography>
                      </Stack>
                      
                      <Typography sx={{ color: 'text.secondary', mb: 3 }}>
                        {useCase.description}
                      </Typography>

                      <Box
                        sx={{
                          p: 3,
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
                        }}
                      >
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: '#10B981' }}>
                            {useCase.metrics.increase || useCase.metrics.reduction || useCase.metrics.accuracy}
                          </Typography>
                          <Typography sx={{ color: 'text.secondary' }}>
                            {useCase.metrics.increase ? 'increase in' : 
                             useCase.metrics.reduction ? 'reduction in' : ''} {useCase.metrics.metric}
                          </Typography>
                        </Stack>
                      </Box>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* AI Platforms */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            AI Platforms & Tools
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {platforms.map((platform, index) => (
              <Grid key={platform.name}>
                <Fade in timeout={800 + index * 50}>
                  <Chip
                    label={platform.name}
                    sx={{
                      px: 3,
                      py: 2,
                      fontSize: '1rem',
                      fontWeight: 600,
                      background: `${platform.color}15`,
                      color: platform.color,
                      border: `1px solid ${platform.color}30`,
                      '&:hover': {
                        background: `${platform.color}25`,
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

        {/* Process Timeline */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            AI Development Process
          </Typography>
          <Stack spacing={4}>
            {[
              { phase: 'Discovery & Strategy', desc: 'Understanding your data, business goals, and AI opportunities' },
              { phase: 'Data Preparation', desc: 'Data collection, cleaning, and feature engineering' },
              { phase: 'Model Development', desc: 'Building and training custom AI models' },
              { phase: 'Integration & Testing', desc: 'Seamless integration with your existing systems' },
              { phase: 'Deployment & Monitoring', desc: 'Production deployment with continuous monitoring' },
              { phase: 'Optimization & Growth', desc: 'Ongoing model improvement and feature enhancement' },
            ].map((step, index) => (
              <Fade in timeout={800 + index * 100} key={step.phase}>
                <Card
                  sx={{
                    p: 4,
                    borderRadius: '16px',
                    background: 'linear-gradient(90deg, rgba(0, 102, 255, 0.05) 0%, transparent 100%)',
                    border: '1px solid rgba(0, 102, 255, 0.1)',
                    borderLeft: '4px solid #0066FF',
                  }}
                >
                  <Grid container alignItems="center" spacing={3}>
                    <Grid size={{ xs: 12, sm: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#0066FF' }}>
                        Phase {index + 1}: {step.phase}
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 9 }}>
                      <Typography sx={{ color: 'text.secondary' }}>
                        {step.desc}
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Fade>
            ))}
          </Stack>
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
            Ready to Build Your AI-Powered SaaS?
          </Typography>
          <Typography sx={{ fontSize: '1.1rem', mb: 4, opacity: 0.9, maxWidth: '600px', mx: 'auto' }}>
            Transform your business with intelligent automation and data-driven insights. 
            Let's discuss how AI can revolutionize your SaaS platform.
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
              Start AI Project
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