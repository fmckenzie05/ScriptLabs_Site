'use client'

import { useState } from 'react'
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
  Modal,
  TextField,
  Fade,
  Slide
} from '@mui/material'
import { Users, MapPin, Clock, Calendar, Briefcase, DollarSign, X } from 'lucide-react'

const benefits = [
  { icon: DollarSign, title: 'Competitive Salary', desc: 'Industry-leading compensation packages' },
  { icon: Calendar, title: 'Flexible Schedule', desc: 'Work-life balance with flexible hours' },
  { icon: Users, title: 'Learning & Growth', desc: 'Continuous learning and career development' },
  { icon: Briefcase, title: 'Remote-First', desc: 'Work from anywhere in the world' },
]

const openings = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    location: 'Remote / San Francisco',
    type: 'Full-time',
    salary: '$120k - $180k',
    description: 'Join our engineering team to build next-generation AI-powered applications.',
    requirements: ['5+ years experience', 'React/Node.js', 'Python', 'Cloud platforms'],
    color: '#0066FF',
  },
  {
    id: 2,
    title: 'AI/ML Engineer',
    department: 'AI Research',
    location: 'Remote / New York',
    type: 'Full-time',
    salary: '$140k - $200k',
    description: 'Develop cutting-edge machine learning models and AI algorithms.',
    requirements: ['ML/AI experience', 'TensorFlow/PyTorch', 'Python', 'PhD preferred'],
    color: '#6B46C1',
  },
  {
    id: 3,
    title: 'Senior UX Designer',
    department: 'Design',
    location: 'Remote / Los Angeles',
    type: 'Full-time',
    salary: '$100k - $140k',
    description: 'Create beautiful and intuitive user experiences for our products.',
    requirements: ['5+ years UX design', 'Figma/Sketch', 'Design systems', 'User research'],
    color: '#10B981',
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote / Austin',
    type: 'Full-time',
    salary: '$110k - $160k',
    description: 'Build and maintain scalable cloud infrastructure and deployment pipelines.',
    requirements: ['Kubernetes', 'AWS/GCP', 'Docker', 'CI/CD', 'Infrastructure as Code'],
    color: '#F59E0B',
  },
  {
    id: 5,
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote / Seattle',
    type: 'Full-time',
    salary: '$120k - $170k',
    description: 'Drive product strategy and roadmap for our AI-powered platform.',
    requirements: ['Product management', 'Technical background', 'Agile/Scrum', 'Analytics'],
    color: '#EC4899',
  },
  {
    id: 6,
    title: 'Marketing Specialist',
    department: 'Marketing',
    location: 'Remote / Miami',
    type: 'Full-time',
    salary: '$70k - $100k',
    description: 'Execute marketing campaigns and grow our brand presence.',
    requirements: ['Digital marketing', 'Content creation', 'SEO/SEM', 'Analytics'],
    color: '#EF4444',
  },
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof openings[0] | null>(null)
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    resumeUrl: '',
    coverLetter: '',
  })

  const handleApply = () => {
    // Handle application submission
    alert('Application submitted successfully!')
    setSelectedJob(null)
    setApplicationData({ name: '', email: '', phone: '', resumeUrl: '', coverLetter: '' })
  }

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
                icon={<Users size={16} />}
                label="Join Our Team"
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
                Shape the Future with Us
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
                Join a team of passionate innovators building the next generation of 
                AI-powered solutions. We're looking for talented individuals who share our vision.
              </Typography>
            </Fade>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Benefits */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Why Join ScriptLabs?
          </Typography>
          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={benefit.title}>
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
                        <benefit.icon size={36} color="#0066FF" />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                        {benefit.title}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary' }}>
                        {benefit.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Open Positions */}
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Open Positions
          </Typography>
          <Grid container spacing={4}>
            {openings.map((job, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={job.id}>
                <Fade in timeout={800 + index * 100}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: '20px',
                      border: `1px solid ${job.color}20`,
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 20px 40px ${job.color}20`,
                        borderColor: `${job.color}40`,
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack direction="row" alignItems="start" justifyContent="space-between" sx={{ mb: 3 }}>
                        <Box>
                          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                            {job.title}
                          </Typography>
                          <Chip
                            label={job.department}
                            size="small"
                            sx={{
                              background: `${job.color}10`,
                              color: job.color,
                              fontWeight: 600,
                              mb: 2,
                            }}
                          />
                        </Box>
                        <Typography sx={{ color: job.color, fontWeight: 700, fontSize: '1.1rem' }}>
                          {job.salary}
                        </Typography>
                      </Stack>

                      <Typography sx={{ color: 'text.secondary', mb: 3 }}>
                        {job.description}
                      </Typography>

                      <Stack spacing={2} sx={{ mb: 4 }}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <MapPin size={16} color="#64748B" />
                          <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                            {job.location}
                          </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Clock size={16} color="#64748B" />
                          <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                            {job.type}
                          </Typography>
                        </Stack>
                      </Stack>

                      <Typography sx={{ fontWeight: 600, mb: 2 }}>Requirements:</Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 4 }}>
                        {job.requirements.map((req) => (
                          <Chip
                            key={req}
                            label={req}
                            size="small"
                            sx={{
                              background: 'rgba(0, 0, 0, 0.05)',
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Stack>

                      <Button
                        fullWidth
                        variant="contained"
                        onClick={() => setSelectedJob(job)}
                        sx={{
                          borderRadius: '12px',
                          py: 1.5,
                          background: `linear-gradient(135deg, ${job.color} 0%, ${job.color}CC 100%)`,
                          fontWeight: 600,
                          '&:hover': {
                            transform: 'translateY(-1px)',
                            boxShadow: `0 8px 25px ${job.color}40`,
                          }
                        }}
                      >
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Application Modal */}
      <Modal
        open={!!selectedJob}
        onClose={() => setSelectedJob(null)}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box
          sx={{
            width: { xs: '95%', sm: 600 },
            maxHeight: '90vh',
            overflow: 'auto',
            background: 'white',
            borderRadius: '20px',
            p: 0,
          }}
        >
          {selectedJob && (
            <>
              <Box
                sx={{
                  background: `linear-gradient(135deg, ${selectedJob.color} 0%, ${selectedJob.color}CC 100%)`,
                  p: 3,
                  color: 'white',
                  position: 'relative',
                }}
              >
                <Button
                  onClick={() => setSelectedJob(null)}
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    minWidth: 'auto',
                    color: 'white',
                  }}
                >
                  <X size={24} />
                </Button>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  Apply for {selectedJob.title}
                </Typography>
                <Typography sx={{ opacity: 0.9 }}>
                  {selectedJob.department} • {selectedJob.location}
                </Typography>
              </Box>

              <Box sx={{ p: 4 }}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    value={applicationData.name}
                    onChange={(e) => setApplicationData({ ...applicationData, name: e.target.value })}
                  />
                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    value={applicationData.email}
                    onChange={(e) => setApplicationData({ ...applicationData, email: e.target.value })}
                  />
                  <TextField
                    fullWidth
                    label="Phone Number"
                    value={applicationData.phone}
                    onChange={(e) => setApplicationData({ ...applicationData, phone: e.target.value })}
                  />
                  <TextField
                    fullWidth
                    label="Resume URL (Google Drive, Dropbox, etc.)"
                    value={applicationData.resumeUrl}
                    onChange={(e) => setApplicationData({ ...applicationData, resumeUrl: e.target.value })}
                    helperText="Please provide a public link to your resume"
                  />
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Cover Letter"
                    value={applicationData.coverLetter}
                    onChange={(e) => setApplicationData({ ...applicationData, coverLetter: e.target.value })}
                    placeholder="Tell us why you're interested in this position..."
                  />

                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    onClick={handleApply}
                    sx={{
                      py: 2,
                      borderRadius: '12px',
                      background: `linear-gradient(135deg, ${selectedJob.color} 0%, ${selectedJob.color}CC 100%)`,
                      fontWeight: 600,
                      fontSize: '1.1rem',
                    }}
                  >
                    Submit Application
                  </Button>
                </Stack>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  )
}