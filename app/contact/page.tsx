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
import { MessageSquare, Calendar, Rocket, MapPin, Phone, Mail, Clock, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const contactMethods = [
  {
    icon: Rocket,
    title: 'Start a Project',
    description: 'Ready to build something amazing? Tell us about your project and get a detailed proposal.',
    action: 'Get Started',
    href: '/contact/get-started',
    color: '#0066FF',
    features: ['Free consultation', 'Detailed proposal', '24-hour response', 'Project roadmap'],
  },
  {
    icon: Calendar,
    title: 'Schedule a Demo',
    description: 'See our technology in action with a personalized demo tailored to your needs.',
    action: 'Book Demo',
    href: '/contact/demo',
    color: '#6B46C1',
    features: ['Live demonstration', '30-60 min session', 'Q&A included', 'Custom scenarios'],
  },
  {
    icon: MessageSquare,
    title: 'General Inquiry',
    description: 'Have questions about our services, pricing, or capabilities? We\'re here to help.',
    action: 'Send Message',
    href: 'mailto:hello@scriptlabs.com',
    color: '#10B981',
    features: ['Quick response', 'Expert guidance', 'No obligation', 'Friendly support'],
  },
]

const offices = [
  {
    city: 'San Francisco',
    address: '123 Innovation Drive, San Francisco, CA 94105',
    phone: '+1 (555) 123-4567',
    email: 'sf@scriptlabs.com',
    timezone: 'PST (UTC-8)',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  },
  {
    city: 'New York',
    address: '456 Tech Avenue, New York, NY 10001',
    phone: '+1 (555) 234-5678',
    email: 'ny@scriptlabs.com',
    timezone: 'EST (UTC-5)',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop',
  },
  {
    city: 'London',
    address: '789 Digital Street, London, EC2A 4DP, UK',
    phone: '+44 20 7123 4567',
    email: 'london@scriptlabs.com',
    timezone: 'GMT (UTC+0)',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop',
  },
]

const faqs = [
  {
    question: 'How quickly can you start a project?',
    answer: 'We typically begin new projects within 1-2 weeks of contract signing, depending on project scope and team availability.',
  },
  {
    question: 'Do you work with startups or just enterprises?',
    answer: 'We work with companies of all sizes, from early-stage startups to Fortune 500 enterprises. Our approach scales to your needs.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in modern web technologies, mobile development, AI/ML, blockchain, and cloud platforms. Check our Technology page for details.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes, we offer comprehensive post-launch support including maintenance, updates, scaling, and feature enhancements.',
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We use agile methodologies with regular sprint reviews, daily standups, and dedicated project managers for seamless communication.',
  },
  {
    question: 'Can you help with existing projects or code?',
    answer: 'Absolutely! We offer code audits, optimization, refactoring, and can take over existing projects for continued development.',
  },
]

export default function ContactPage() {
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
                icon={<MessageSquare size={16} />}
                label="Get in Touch"
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
                Let's Build Something Great Together
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
                Ready to transform your ideas into reality? Choose how you'd like to connect 
                with our team of experts.
              </Typography>
            </Fade>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Contact Methods */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            How Can We Help?
          </Typography>
          <Grid container spacing={4}>
            {contactMethods.map((method, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={method.title}>
                <Fade in timeout={800 + index * 100}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: '20px',
                      background: `${method.color}08`,
                      border: `1px solid ${method.color}20`,
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 20px 40px ${method.color}20`,
                        borderColor: `${method.color}40`,
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '20px',
                          background: `${method.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                        }}
                      >
                        <method.icon size={36} color={method.color} />
                      </Box>
                      
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
                        {method.title}
                      </Typography>
                      
                      <Typography sx={{ color: 'text.secondary', mb: 4, textAlign: 'center', flexGrow: 1 }}>
                        {method.description}
                      </Typography>

                      <Stack spacing={1} sx={{ mb: 4 }}>
                        {method.features.map((feature) => (
                          <Stack key={feature} direction="row" alignItems="center" spacing={1}>
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                background: method.color,
                              }}
                            />
                            <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
                              {feature}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>

                      <Button
                        component={Link}
                        href={method.href}
                        variant="contained"
                        size="large"
                        endIcon={<ArrowRight size={20} />}
                        sx={{
                          borderRadius: '12px',
                          py: 1.5,
                          background: method.color,
                          fontWeight: 600,
                          '&:hover': {
                            background: method.color,
                            transform: 'translateY(-1px)',
                            boxShadow: `0 8px 25px ${method.color}40`,
                          }
                        }}
                      >
                        {method.action}
                      </Button>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Office Locations */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Our Global Offices
          </Typography>
          <Grid container spacing={4}>
            {offices.map((office, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={office.city}>
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
                        background: `url(${office.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                        {office.city}
                      </Typography>
                      
                      <Stack spacing={2}>
                        <Stack direction="row" alignItems="start" spacing={2}>
                          <MapPin size={16} color="#64748B" style={{ marginTop: 2, flexShrink: 0 }} />
                          <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
                            {office.address}
                          </Typography>
                        </Stack>
                        
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Phone size={16} color="#64748B" />
                          <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
                            {office.phone}
                          </Typography>
                        </Stack>
                        
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Mail size={16} color="#64748B" />
                          <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
                            {office.email}
                          </Typography>
                        </Stack>
                        
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Clock size={16} color="#64748B" />
                          <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
                            {office.timezone}
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* FAQ Section */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Frequently Asked Questions
          </Typography>
          <Grid container spacing={3}>
            {faqs.map((faq, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Fade in timeout={800 + index * 100}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                        {faq.question}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        {faq.answer}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Quick Stats */}
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={4}>
            {[
              { number: '200+', label: 'Happy Clients', icon: Users },
              { number: '500+', label: 'Projects Delivered', icon: Rocket },
              { number: '24hr', label: 'Response Time', icon: Clock },
              { number: '99.9%', label: 'Client Satisfaction', icon: MessageSquare },
            ].map((stat, index) => (
              <Grid size={{ xs: 6, md: 3 }} key={stat.label}>
                <Fade in timeout={1000 + index * 100}>
                  <Stack alignItems="center" spacing={2}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.1) 0%, rgba(107, 70, 193, 0.1) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <stat.icon size={32} color="#0066FF" />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography sx={{ fontWeight: 600, textAlign: 'center' }}>
                      {stat.label}
                    </Typography>
                  </Stack>
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
            Still Have Questions?
          </Typography>
          <Typography sx={{ fontSize: '1.1rem', mb: 4, opacity: 0.9, maxWidth: '600px', mx: 'auto' }}>
            Our team is here to help you make the right decision for your project. 
            Get in touch and let's discuss your needs.
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
              href="mailto:hello@scriptlabs.com"
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
              Email Us
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}