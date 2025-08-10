'use client'

import { useState } from 'react'
import { 
  Container, 
  Typography, 
  Grid, 
  TextField,
  MenuItem,
  Button,
  Box, 
  Stack, 
  Chip,
  Card,
  CardContent,
  Fade,
  Slide,
  Alert,
  LinearProgress,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material'
import { Play, Calendar, Clock, Users, Monitor, CheckCircle, Star, MessageSquare } from 'lucide-react'

const demoTypes = [
  { id: 'ai', label: 'AI Platform Demo', description: 'See our proprietary AI algorithms in action' },
  { id: 'web', label: 'Web Development', description: 'Modern web application capabilities' },
  { id: 'mobile', label: 'Mobile Apps', description: 'Cross-platform mobile solutions' },
  { id: 'web3', label: 'Web3 & Blockchain', description: 'Decentralized application features' },
]

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'
]

const durations = [
  '30 minutes', '45 minutes', '60 minutes'
]

export default function RequestDemoPage() {
  const [selectedDemo, setSelectedDemo] = useState('ai')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    teamSize: '',
    preferredDate: '',
    preferredTime: '',
    duration: '30 minutes',
    specificInterests: '',
  })
  
  const [errors, setErrors] = useState<any>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: string) => (event: any) => {
    setFormData({ ...formData, [field]: event.target.value })
    setErrors({ ...errors, [field]: '' })
  }

  const validateForm = () => {
    const newErrors: any = {}
    
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.company) newErrors.company = 'Company is required'
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a date'
    if (!formData.preferredTime) newErrors.preferredTime = 'Please select a time'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitting(false)
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <Box sx={{ pt: 12, pb: 8, minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <Container maxWidth="sm">
          <Card sx={{ borderRadius: '20px', overflow: 'hidden' }}>
            <Box sx={{ 
              background: 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)',
              p: 2,
            }} />
            <CardContent sx={{ p: 6, textAlign: 'center' }}>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 4,
                }}
              >
                <Calendar size={50} color="white" />
              </Box>
              
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                Demo Scheduled!
              </Typography>
              
              <Typography sx={{ fontSize: '1.2rem', color: 'text.secondary', mb: 4 }}>
                We've scheduled your demo for {formData.preferredDate} at {formData.preferredTime}. 
                Check your email for the meeting link and calendar invite.
              </Typography>
              
              <Alert severity="info" sx={{ mb: 4 }}>
                A member of our team will reach out within 24 hours to confirm the details 
                and understand your specific requirements.
              </Alert>
              
              <Button
                variant="contained"
                size="large"
                onClick={() => window.location.href = '/'}
                sx={{
                  borderRadius: '50px',
                  px: 6,
                  py: 2,
                  background: 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)',
                }}
              >
                Back to Home
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>
    )
  }

  return (
    <Box sx={{ pt: 12, pb: 8, minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          py: 8,
          mb: 8,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Fade in timeout={600}>
              <Chip
                icon={<Play size={16} />}
                label="Live Demo"
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
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 900,
                  color: 'white',
                  letterSpacing: '-0.02em',
                }}
              >
                See Our Technology in Action
              </Typography>
            </Slide>
            
            <Fade in timeout={1000}>
              <Typography
                sx={{
                  fontSize: '1.2rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  maxWidth: '600px',
                }}
              >
                Schedule a personalized demo to explore how our AI-powered solutions 
                can transform your business.
              </Typography>
            </Fade>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Left Side - Benefits */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ 
              borderRadius: '20px', 
              p: 4,
              background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.05) 0%, rgba(107, 70, 193, 0.05) 100%)',
              border: '1px solid rgba(0, 102, 255, 0.1)',
              height: '100%',
            }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>
                What You'll Experience
              </Typography>
              
              <Stack spacing={3}>
                {[
                  { icon: Monitor, title: 'Live Platform Demo', desc: 'Real-time demonstration of our capabilities' },
                  { icon: MessageSquare, title: 'Q&A Session', desc: 'Get all your questions answered by experts' },
                  { icon: Users, title: 'Custom Solutions', desc: 'Tailored recommendations for your needs' },
                  { icon: Star, title: 'Best Practices', desc: 'Industry insights and proven strategies' },
                ].map((item) => (
                  <Stack key={item.title} direction="row" spacing={2}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '12px',
                        background: 'rgba(0, 102, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <item.icon size={24} color="#0066FF" />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.desc}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>

              <Box sx={{ mt: 4, p: 3, background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#10B981' }}>
                  100% Free, No Obligation
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Our demo is completely free with no strings attached. 
                  We're here to help you make the best decision.
                </Typography>
              </Box>
            </Card>
          </Grid>

          {/* Right Side - Form */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Card sx={{ borderRadius: '20px', overflow: 'hidden' }}>
              {isSubmitting && <LinearProgress />}
              <CardContent sx={{ p: 5 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>
                  Schedule Your Demo
                </Typography>

                {/* Demo Type Selection */}
                <Typography sx={{ fontWeight: 600, mb: 2 }}>
                  What would you like to see?
                </Typography>
                <Grid container spacing={2} sx={{ mb: 4 }}>
                  {demoTypes.map((demo) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={demo.id}>
                      <Card
                        onClick={() => setSelectedDemo(demo.id)}
                        sx={{
                          p: 2,
                          cursor: 'pointer',
                          border: selectedDemo === demo.id 
                            ? '2px solid #0066FF' 
                            : '1px solid rgba(0, 0, 0, 0.1)',
                          background: selectedDemo === demo.id 
                            ? 'rgba(0, 102, 255, 0.05)' 
                            : 'white',
                          transition: 'all 0.3s',
                          '&:hover': {
                            borderColor: '#0066FF',
                            transform: 'translateY(-2px)',
                          }
                        }}
                      >
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {demo.label}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {demo.description}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        value={formData.name}
                        onChange={handleChange('name')}
                        error={!!errors.name}
                        helperText={errors.name}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={handleChange('email')}
                        error={!!errors.email}
                        helperText={errors.email}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Company"
                        value={formData.company}
                        onChange={handleChange('company')}
                        error={!!errors.company}
                        helperText={errors.company}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Your Role"
                        value={formData.role}
                        onChange={handleChange('role')}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        select
                        label="Team Size"
                        value={formData.teamSize}
                        onChange={handleChange('teamSize')}
                      >
                        <MenuItem value="1-10">1-10 employees</MenuItem>
                        <MenuItem value="11-50">11-50 employees</MenuItem>
                        <MenuItem value="51-200">51-200 employees</MenuItem>
                        <MenuItem value="201-500">201-500 employees</MenuItem>
                        <MenuItem value="500+">500+ employees</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        select
                        label="Demo Duration"
                        value={formData.duration}
                        onChange={handleChange('duration')}
                      >
                        {durations.map((duration) => (
                          <MenuItem key={duration} value={duration}>
                            {duration}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Preferred Date"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleChange('preferredDate')}
                        error={!!errors.preferredDate}
                        helperText={errors.preferredDate}
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ min: new Date().toISOString().split('T')[0] }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        select
                        label="Preferred Time"
                        value={formData.preferredTime}
                        onChange={handleChange('preferredTime')}
                        error={!!errors.preferredTime}
                        helperText={errors.preferredTime}
                      >
                        {timeSlots.map((time) => (
                          <MenuItem key={time} value={time}>
                            {time}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        label="Specific Interests or Questions (Optional)"
                        value={formData.specificInterests}
                        onChange={handleChange('specificInterests')}
                        placeholder="Tell us what specific features or solutions you'd like to explore..."
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    endIcon={isSubmitting ? null : <Calendar size={20} />}
                    sx={{
                      mt: 4,
                      borderRadius: '50px',
                      px: 6,
                      py: 2,
                      background: 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)',
                      boxShadow: '0 8px 32px rgba(0, 102, 255, 0.3)',
                      '&:hover': {
                        boxShadow: '0 12px 40px rgba(0, 102, 255, 0.4)',
                      },
                    }}
                  >
                    {isSubmitting ? 'Scheduling...' : 'Schedule Demo'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}