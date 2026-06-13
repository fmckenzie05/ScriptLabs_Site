'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  Box, 
  Stack, 
  Chip,
  Button,
  Avatar,
  Fade,
  Slide
} from '@mui/material'
import { BookOpen, Clock, Calendar, ArrowRight, TrendingUp, FileText } from 'lucide-react'

const categories = ['All', 'AI & ML', 'Development', 'Web3', 'Technology', 'Business']

const articles = [
  {
    id: 1,
    title: 'RAG Systems and the Future of Enterprise AI',
    excerpt: 'Discover how Retrieval-Augmented Generation is transforming enterprise AI by combining the power of large language models with real-time data retrieval for more accurate and contextual responses.',
    category: 'AI & ML',
    author: {
      name: 'ScriptLabs Team',
      avatar: '/Fernando.jpg',
      role: 'Engineering',
    },
    date: '2024-01-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: 'Zero-Knowledge Proofs in Modern Blockchain Architecture',
    excerpt: 'Understanding how ZK-proofs enable privacy-preserving transactions and scalable Layer 2 solutions, revolutionizing the way we build decentralized applications.',
    category: 'Web3',
    author: {
      name: 'Fernando A McKenzie',
      avatar: '/Fernando.jpg',
      role: 'CIO & Co-Founder',
    },
    date: '2024-01-12',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop',
  },
  {
    id: 3,
    title: 'Event-Driven Microservices with Apache Kafka',
    excerpt: 'Implementing resilient, scalable microservices using event streaming platforms. Learn patterns for CQRS, event sourcing, and distributed transaction management.',
    category: 'Development',
    author: {
      name: 'ScriptLabs Team',
      avatar: '/Fernando.jpg',
      role: 'Engineering',
    },
    date: '2024-01-10',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=450&fit=crop',
  },
  {
    id: 4,
    title: 'MLOps: Automating the Machine Learning Lifecycle',
    excerpt: 'From model versioning to automated retraining pipelines, explore the tools and practices that enable reliable ML deployments at scale using Kubernetes and Kubeflow.',
    category: 'AI & ML',
    author: {
      name: 'Fernando A McKenzie',
      avatar: '/Fernando.jpg',
      role: 'CIO & Co-Founder',
    },
    date: '2024-01-08',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=450&fit=crop',
  },
  {
    id: 5,
    title: 'Edge Computing and 5G: Building Ultra-Low Latency Applications',
    excerpt: 'Leveraging edge computing with 5G networks to create responsive IoT solutions and real-time applications that process data milliseconds from the source.',
    category: 'Technology',
    author: {
      name: 'ScriptLabs Team',
      avatar: '/Fernando.jpg',
      role: 'Engineering',
    },
    date: '2024-01-05',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=450&fit=crop',
  },
  {
    id: 6,
    title: 'Platform Engineering: The Evolution of DevOps',
    excerpt: 'How internal developer platforms and self-service infrastructure are transforming software delivery, reducing cognitive load, and accelerating time-to-market.',
    category: 'Business',
    author: {
      name: 'Fernando A McKenzie',
      avatar: '/Fernando.jpg',
      role: 'CIO & Co-Founder',
    },
    date: '2024-01-02',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop',
  },
]

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  
  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(a => a.category === activeCategory)

  const featuredArticle = articles.find(a => a.featured)

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
                icon={<BookOpen size={16} />}
                label="Insights & Resources"
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
                Insights & Innovation
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
                Explore our latest thoughts on technology, innovation, and the future of 
                digital transformation.
              </Typography>
            </Fade>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Featured Article */}
        {featuredArticle && (
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
              Featured Article
            </Typography>
            <Card
              sx={{
                borderRadius: '20px',
                overflow: 'hidden',
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                }
              }}
            >
              <Grid container>
                <Grid size={{ xs: 12, md: 7 }}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={featuredArticle.image}
                    alt={featuredArticle.title}
                    sx={{ height: '100%', objectFit: 'cover' }}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                  <CardContent sx={{ p: 5, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Chip 
                      label={featuredArticle.category} 
                      sx={{ 
                        mb: 3, 
                        width: 'fit-content',
                        background: 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)',
                        color: 'white',
                        fontWeight: 600,
                      }} 
                    />
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                      {featuredArticle.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 3 }}>
                      {featuredArticle.excerpt}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={3} sx={{ mb: 3 }}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Avatar src={featuredArticle.author.avatar} sx={{ width: 32, height: 32 }} />
                        <Typography sx={{ fontWeight: 600 }}>
                          {featuredArticle.author.name}
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Calendar size={16} color="#64748B" />
                        <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                          {featuredArticle.date}
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Clock size={16} color="#64748B" />
                        <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                          {featuredArticle.readTime}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Button
                      endIcon={<ArrowRight size={20} />}
                      sx={{
                        width: 'fit-content',
                        fontWeight: 600,
                        color: '#0066FF',
                      }}
                    >
                      Read Article
                    </Button>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Box>
        )}

        {/* Category Filter */}
        <Stack direction="row" spacing={2} sx={{ mb: 6, flexWrap: 'wrap', gap: 2 }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => setActiveCategory(category)}
              sx={{
                px: 3,
                py: 1,
                cursor: 'pointer',
                fontWeight: 600,
                background: activeCategory === category 
                  ? 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)'
                  : 'rgba(0, 0, 0, 0.05)',
                color: activeCategory === category ? 'white' : 'text.primary',
                '&:hover': {
                  background: activeCategory === category 
                    ? 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)'
                    : 'rgba(0, 0, 0, 0.1)',
                }
              }}
            />
          ))}
        </Stack>

        {/* Articles Grid */}
        <Grid container spacing={4}>
          {filteredArticles.filter(a => !a.featured).map((article, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={article.id}>
              <Fade in timeout={800 + index * 100}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={article.image}
                    alt={article.title}
                  />
                  <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Chip 
                      label={article.category} 
                      size="small"
                      sx={{ 
                        mb: 2, 
                        width: 'fit-content',
                        fontWeight: 600,
                      }} 
                    />
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                      {article.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 3, flexGrow: 1 }}>
                      {article.excerpt}
                    </Typography>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Avatar src={article.author.avatar} sx={{ width: 24, height: 24 }} />
                        <Typography sx={{ fontSize: '0.9rem', fontWeight: 600 }}>
                          {article.author.name}
                        </Typography>
                      </Stack>
                      <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                        {article.readTime}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* Newsletter CTA */}
        <Box
          sx={{
            mt: 10,
            p: 6,
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, color: 'white', mb: 2 }}>
            Stay Updated with Our Latest Insights
          </Typography>
          <Typography sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 4, maxWidth: '600px', mx: 'auto' }}>
            Subscribe to our newsletter and get the latest articles, tutorials, and industry insights 
            delivered directly to your inbox.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ maxWidth: '500px', mx: 'auto' }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: '16px 24px',
                borderRadius: '50px',
                border: 'none',
                fontSize: '1rem',
                outline: 'none',
              }}
            />
            <Button
              variant="contained"
              sx={{
                px: 4,
                py: 2,
                borderRadius: '50px',
                background: 'white',
                color: '#0066FF',
                fontWeight: 600,
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.9)',
                }
              }}
            >
              Subscribe
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}