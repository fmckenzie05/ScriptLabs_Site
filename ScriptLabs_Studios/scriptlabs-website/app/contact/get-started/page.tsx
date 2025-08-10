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
  Stepper,
  Step,
  StepLabel,
  Fade,
  Slide,
  Alert,
  LinearProgress
} from '@mui/material'
import { Send, User, Mail, Phone, Building, MessageSquare, DollarSign, Calendar, Rocket, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react'

const steps = ['Basic Information', 'Project Details', 'Budget & Timeline', 'Review & Submit']

const projectTypes = [
  'Web Development',
  'Mobile Development',
  'Web3 & Blockchain',
  'AI-Powered SaaS',
  'Consulting',
  'Other'
]

const budgetRanges = [
  'Less than $50,000',
  '$50,000 - $100,000',
  '$100,000 - $250,000',
  '$250,000 - $500,000',
  'More than $500,000'
]

const timelines = [
  'Less than 1 month',
  '1-3 months',
  '3-6 months',
  '6-12 months',
  'More than 12 months'
]

export default function GetStartedPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState({
    // Step 1
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    
    // Step 2
    projectType: '',
    projectName: '',
    projectDescription: '',
    currentWebsite: '',
    
    // Step 3
    budget: '',
    timeline: '',
    startDate: '',
    additionalInfo: '',
  })
  
  const [errors, setErrors] = useState<any>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleNext = () => {
    if (validateStep()) {
      setActiveStep((prevStep) => prevStep + 1)
    }
  }

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1)
  }

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: event.target.value })
    setErrors({ ...errors, [field]: '' })
  }

  const validateStep = () => {
    const newErrors: any = {}
    
    if (activeStep === 0) {
      if (!formData.firstName) newErrors.firstName = 'First name is required'
      if (!formData.lastName) newErrors.lastName = 'Last name is required'
      if (!formData.email) newErrors.email = 'Email is required'
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
      if (!formData.company) newErrors.company = 'Company is required'
    } else if (activeStep === 1) {
      if (!formData.projectType) newErrors.projectType = 'Project type is required'
      if (!formData.projectName) newErrors.projectName = 'Project name is required'
      if (!formData.projectDescription) newErrors.projectDescription = 'Project description is required'
    } else if (activeStep === 2) {
      if (!formData.budget) newErrors.budget = 'Budget is required'
      if (!formData.timeline) newErrors.timeline = 'Timeline is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (validateStep()) {
      setIsSubmitting(true)
      // Simulate API call
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
                <CheckCircle size={50} color="white" />
              </Box>
              
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                Thank You!
              </Typography>
              
              <Typography sx={{ fontSize: '1.2rem', color: 'text.secondary', mb: 4 }}>
                We've received your project inquiry. Our team will review your requirements 
                and get back to you within 24 hours.
              </Typography>
              
              <Typography sx={{ mb: 4, fontWeight: 600 }}>
                Project Reference: <Chip label={`SL-${Date.now().toString().slice(-6)}`} color="primary" />
              </Typography>
              
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

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="First Name"
                value={formData.firstName}
                onChange={handleChange('firstName')}
                error={!!errors.firstName}
                helperText={errors.firstName}
                InputProps={{
                  startAdornment: <User size={20} style={{ marginRight: 8, color: '#94A3B8' }} />
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Last Name"
                value={formData.lastName}
                onChange={handleChange('lastName')}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{
                  startAdornment: <Mail size={20} style={{ marginRight: 8, color: '#94A3B8' }} />
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Phone Number"
                value={formData.phone}
                onChange={handleChange('phone')}
                InputProps={{
                  startAdornment: <Phone size={20} style={{ marginRight: 8, color: '#94A3B8' }} />
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Company Name"
                value={formData.company}
                onChange={handleChange('company')}
                error={!!errors.company}
                helperText={errors.company}
                InputProps={{
                  startAdornment: <Building size={20} style={{ marginRight: 8, color: '#94A3B8' }} />
                }}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Your Role"
                value={formData.role}
                onChange={handleChange('role')}
                placeholder="e.g., CEO, CTO, Product Manager"
              />
            </Grid>
          </Grid>
        )
        
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid size={12}>
              <TextField
                fullWidth
                select
                label="Project Type"
                value={formData.projectType}
                onChange={handleChange('projectType')}
                error={!!errors.projectType}
                helperText={errors.projectType}
              >
                {projectTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Project Name"
                value={formData.projectName}
                onChange={handleChange('projectName')}
                error={!!errors.projectName}
                helperText={errors.projectName}
                placeholder="What's your project called?"
              />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                multiline
                rows={6}
                label="Project Description"
                value={formData.projectDescription}
                onChange={handleChange('projectDescription')}
                error={!!errors.projectDescription}
                helperText={errors.projectDescription}
                placeholder="Tell us about your project goals, target audience, and key features..."
              />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Current Website (if any)"
                value={formData.currentWebsite}
                onChange={handleChange('currentWebsite')}
                placeholder="https://example.com"
              />
            </Grid>
          </Grid>
        )
        
      case 2:
        return (
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                select
                label="Project Budget"
                value={formData.budget}
                onChange={handleChange('budget')}
                error={!!errors.budget}
                helperText={errors.budget}
                InputProps={{
                  startAdornment: <DollarSign size={20} style={{ marginRight: 8, color: '#94A3B8' }} />
                }}
              >
                {budgetRanges.map((range) => (
                  <MenuItem key={range} value={range}>
                    {range}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                select
                label="Project Timeline"
                value={formData.timeline}
                onChange={handleChange('timeline')}
                error={!!errors.timeline}
                helperText={errors.timeline}
                InputProps={{
                  startAdornment: <Calendar size={20} style={{ marginRight: 8, color: '#94A3B8' }} />
                }}
              >
                {timelines.map((timeline) => (
                  <MenuItem key={timeline} value={timeline}>
                    {timeline}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Preferred Start Date"
                type="date"
                value={formData.startDate}
                onChange={handleChange('startDate')}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Additional Information"
                value={formData.additionalInfo}
                onChange={handleChange('additionalInfo')}
                placeholder="Any other details you'd like to share?"
              />
            </Grid>
          </Grid>
        )
        
      case 3:
        return (
          <Box>
            <Alert severity="info" sx={{ mb: 4 }}>
              Please review your information before submitting.
            </Alert>
            
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ p: 3, height: '100%', background: 'rgba(0, 102, 255, 0.05)' }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    Contact Information
                  </Typography>
                  <Stack spacing={2}>
                    <Box>
                      <Typography variant="caption" color="text.secondary">Name</Typography>
                      <Typography>{formData.firstName} {formData.lastName}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary">Email</Typography>
                      <Typography>{formData.email}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary">Company</Typography>
                      <Typography>{formData.company}</Typography>
                    </Box>
                    {formData.phone && (
                      <Box>
                        <Typography variant="caption" color="text.secondary">Phone</Typography>
                        <Typography>{formData.phone}</Typography>
                      </Box>
                    )}
                  </Stack>
                </Card>
              </Grid>
              
              <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ p: 3, height: '100%', background: 'rgba(107, 70, 193, 0.05)' }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    Project Details
                  </Typography>
                  <Stack spacing={2}>
                    <Box>
                      <Typography variant="caption" color="text.secondary">Project Type</Typography>
                      <Typography>{formData.projectType}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary">Project Name</Typography>
                      <Typography>{formData.projectName}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary">Budget</Typography>
                      <Typography>{formData.budget}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary">Timeline</Typography>
                      <Typography>{formData.timeline}</Typography>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
              
              {formData.projectDescription && (
                <Grid size={12}>
                  <Card sx={{ p: 3, background: 'rgba(16, 185, 129, 0.05)' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      Project Description
                    </Typography>
                    <Typography>{formData.projectDescription}</Typography>
                  </Card>
                </Grid>
              )}
            </Grid>
          </Box>
        )
        
      default:
        return null
    }
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
                icon={<Rocket size={16} />}
                label="Start Your Project"
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
                Let's Build Something Amazing
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
                Tell us about your project and we'll help bring your vision to life with 
                cutting-edge technology and innovative solutions.
              </Typography>
            </Fade>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="md">
        {/* Stepper */}
        <Stepper activeStep={activeStep} sx={{ mb: 6 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Form Content */}
        <Card sx={{ borderRadius: '20px', overflow: 'hidden' }}>
          {isSubmitting && <LinearProgress />}
          <CardContent sx={{ p: 5 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 4 }}>
              {steps[activeStep]}
            </Typography>
            
            {renderStepContent()}
            
            {/* Navigation Buttons */}
            <Stack direction="row" spacing={2} sx={{ mt: 6 }} justifyContent="space-between">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                startIcon={<ArrowLeft size={20} />}
                sx={{ 
                  visibility: activeStep === 0 ? 'hidden' : 'visible',
                  borderRadius: '50px',
                  px: 4,
                  py: 1.5,
                }}
              >
                Back
              </Button>
              
              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  endIcon={isSubmitting ? null : <Send size={20} />}
                  sx={{
                    borderRadius: '50px',
                    px: 6,
                    py: 1.5,
                    background: 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)',
                    boxShadow: '0 8px 32px rgba(0, 102, 255, 0.3)',
                    '&:hover': {
                      boxShadow: '0 12px 40px rgba(0, 102, 255, 0.4)',
                    },
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Project'}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  endIcon={<ArrowRight size={20} />}
                  sx={{
                    borderRadius: '50px',
                    px: 6,
                    py: 1.5,
                    background: 'linear-gradient(135deg, #0066FF 0%, #6B46C1 100%)',
                    boxShadow: '0 8px 32px rgba(0, 102, 255, 0.3)',
                    '&:hover': {
                      boxShadow: '0 12px 40px rgba(0, 102, 255, 0.4)',
                    },
                  }}
                >
                  Next
                </Button>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}