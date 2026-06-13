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
import { MessageSquare, Calendar, Rocket, Mail, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const contactMethods = [
  {
    icon: Rocket,
    title: 'Start a Project',
    description: 'Ready to build something? Tell us about your project and we\'ll put together a plan.',
    action: 'Get Started',
    href: '/contact/get-started',
    color: '#0066FF',
    features: ['Free consultation', 'Project scoping', 'Quick response', 'Clear roadmap'],
  },
  {
    icon: Calendar,
    title: 'Schedule a Call',
    description: 'Want to talk it through first? Book a time and we\'ll walk through your ideas.',
    action: 'Book a Call',
    href: '/contact/demo',
    color: '#6B46C1',
    features: ['30-60 min session', 'No obligation', 'Q&A included', 'Custom scenarios'],
  },
  {
    icon: MessageSquare,
    title: 'General Inquiry',
    description: 'Have questions about our services or capabilities? Drop us a line.',
    action: 'Send Message',
    href: 'mailto:hello@scriptstudio8.com',
    color: '#10B981',
    features: ['Quick response', 'Expert guidance', 'No obligation', 'Friendly support'],
  },
]

const faqs = [
  {
    question: 'How quickly can you start a project?',
    answer: 'We typically begin new projects within 1-2 weeks, depending on project scope and current workload.',
  },
  {
    question: 'What size projects do you take on?',
    answer: 'We work with projects of all sizes — from MVPs and prototypes to full-scale applications. We\'re happy to scope what makes sense for your budget.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in modern web technologies (React, Next.js), mobile development (React Native, Flutter), AI/ML, and blockchain. Check our Technology page for details.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes, we offer post-launch support including maintenance, updates, and feature enhancements.',
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We use agile practices with regular check-ins and transparent communication throughout the project.',
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
                Ready to turn your ideas into reality? Reach out and let's talk
                about your project.
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
            We're here to help. Reach out and let's figure out the best path forward for your project.
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
              href="mailto:hello@scriptstudio8.com"
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
