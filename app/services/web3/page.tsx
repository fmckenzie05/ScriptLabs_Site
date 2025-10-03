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
import { Coins, Shield, Zap, Globe, Users, Lock, Rocket, TrendingUp, ArrowRight, Network } from 'lucide-react'
import Link from 'next/link'

const features = [
  { icon: Shield, title: 'Smart Contracts', desc: 'Secure, audited smart contracts for DeFi and NFTs' },
  { icon: Zap, title: 'High Performance', desc: 'Optimized for speed and low gas fees' },
  { icon: Lock, title: 'Security First', desc: 'Multi-layer security and rigorous auditing process' },
  { icon: Globe, title: 'Multi-Chain Support', desc: 'Deploy across Ethereum, Polygon, BSC, and more' },
  { icon: Users, title: 'Community-Driven', desc: 'Governance tokens and DAO implementations' },
  { icon: Network, title: 'Interoperability', desc: 'Cross-chain bridges and protocol integrations' },
]

const blockchains = [
  { name: 'Ethereum', color: '#627EEA', marketCap: '$200B+' },
  { name: 'Polygon', color: '#8247E5', marketCap: '$8B+' },
  { name: 'Binance Smart Chain', color: '#F3BA2F', marketCap: '$45B+' },
  { name: 'Avalanche', color: '#E84142', marketCap: '$12B+' },
  { name: 'Solana', color: '#00FFA3', marketCap: '$25B+' },
  { name: 'Arbitrum', color: '#213147', marketCap: '$2B+' },
]

const services = [
  {
    title: 'DeFi Protocols',
    description: 'Decentralized exchanges, lending platforms, and yield farming solutions',
    icon: Coins,
    examples: ['DEX Development', 'Lending Pools', 'Staking Platforms', 'Yield Aggregators'],
    color: '#0066FF',
  },
  {
    title: 'NFT Marketplaces',
    description: 'Full-featured NFT platforms with minting, trading, and royalties',
    icon: TrendingUp,
    examples: ['NFT Minting', 'Marketplace', 'Royalty Systems', 'Metadata Management'],
    color: '#6B46C1',
  },
  {
    title: 'DAO Platforms',
    description: 'Governance systems and decentralized autonomous organizations',
    icon: Users,
    examples: ['Governance Tokens', 'Voting Systems', 'Treasury Management', 'Proposals'],
    color: '#10B981',
  },
  {
    title: 'DApps & Web3 Apps',
    description: 'User-friendly decentralized applications with Web3 integration',
    icon: Globe,
    examples: ['Wallet Integration', 'Web3 Authentication', 'Gasless Transactions', 'Layer 2'],
    color: '#F59E0B',
  },
]

const projects = [
  {
    name: 'DeFiSwap Exchange',
    description: 'Next-generation DEX with automated market making',
    metrics: { tvl: '$50M+', volume: '$500M+', users: '25K+' },
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop',
  },
  {
    name: 'ArtChain NFT Platform',
    description: 'Premium NFT marketplace for digital artists',
    metrics: { nfts: '100K+', artists: '5K+', sales: '$10M+' },
    image: 'https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=400&h=300&fit=crop',
  },
  {
    name: 'GreenDAO Governance',
    description: 'Environmental sustainability DAO with $25M treasury',
    metrics: { members: '15K+', proposals: '500+', funded: '$5M+' },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
  },
]

const technologies = [
  'Solidity', 'Rust', 'Web3.js', 'Ethers.js', 'Hardhat', 'Truffle',
  'OpenZeppelin', 'MetaMask', 'WalletConnect', 'IPFS', 'The Graph', 'Chainlink'
]

export default function Web3Page() {
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
                    icon={<Coins size={16} />}
                    label="Web3 & Blockchain"
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
                    Decentralized Future
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
                    Build the future of finance, governance, and digital ownership with 
                    cutting-edge Web3 solutions. From DeFi protocols to NFT marketplaces.
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
                    Build Web3 App
                  </Button>
                  <Button
                    component={Link}
                    href="/portfolio"
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
                    View Projects
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  height: 500,
                  borderRadius: '20px',
                  background: 'url(https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop)',
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
            Web3 Development Expertise
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

        {/* Supported Blockchains */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Supported Blockchains
          </Typography>
          <Grid container spacing={3}>
            {blockchains.map((blockchain, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={blockchain.name}>
                <Fade in timeout={800 + index * 100}>
                  <Card
                    sx={{
                      p: 3,
                      borderRadius: '16px',
                      background: `${blockchain.color}08`,
                      border: `1px solid ${blockchain.color}20`,
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 12px 30px ${blockchain.color}20`,
                      }
                    }}
                  >
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {blockchain.name}
                      </Typography>
                      <Chip
                        label={blockchain.marketCap}
                        sx={{
                          background: blockchain.color,
                          color: 'white',
                          fontWeight: 600,
                        }}
                      />
                    </Stack>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Services */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Web3 Services
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={service.title}>
                <Fade in timeout={800 + index * 100}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: '20px',
                      background: `${service.color}08`,
                      border: `1px solid ${service.color}20`,
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 20px 40px ${service.color}20`,
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
                            background: `${service.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <service.icon size={28} color={service.color} />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          {service.title}
                        </Typography>
                      </Stack>
                      
                      <Typography sx={{ color: 'text.secondary', mb: 3 }}>
                        {service.description}
                      </Typography>

                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        {service.examples.map((example) => (
                          <Chip
                            key={example}
                            label={example}
                            size="small"
                            sx={{
                              background: `${service.color}15`,
                              color: service.color,
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Success Stories */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Web3 Success Stories
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={project.name}>
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
                        background: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                        {project.name}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', mb: 3 }}>
                        {project.description}
                      </Typography>
                      <Grid container spacing={1}>
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <Grid size={4} key={key}>
                            <Stack alignItems="center">
                              <Typography sx={{ fontWeight: 700, color: '#0066FF' }}>
                                {value}
                              </Typography>
                              <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', textTransform: 'capitalize' }}>
                                {key}
                              </Typography>
                            </Stack>
                          </Grid>
                        ))}
                      </Grid>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Technologies */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Web3 Technologies
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {technologies.map((tech, index) => (
              <Grid key={tech}>
                <Fade in timeout={800 + index * 50}>
                  <Chip
                    label={tech}
                    sx={{
                      px: 3,
                      py: 2,
                      fontSize: '1rem',
                      fontWeight: 600,
                      background: 'rgba(0, 102, 255, 0.1)',
                      color: '#0066FF',
                      border: '1px solid rgba(0, 102, 255, 0.2)',
                      '&:hover': {
                        background: 'rgba(0, 102, 255, 0.2)',
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
            Ready to Enter the Web3 World?
          </Typography>
          <Typography sx={{ fontSize: '1.1rem', mb: 4, opacity: 0.9, maxWidth: '600px', mx: 'auto' }}>
            Join the decentralized revolution and build applications that give users true ownership 
            and control. Let's create the future of the internet together.
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
              Start Web3 Project
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