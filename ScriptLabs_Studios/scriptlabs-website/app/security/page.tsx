'use client'

import { Container, Typography, Box, Stack, Chip, Grid, Card, CardContent } from '@mui/material'
import { Shield, Lock, Eye, Server, CheckCircle, AlertTriangle } from 'lucide-react'

const securityMeasures = [
  {
    icon: Lock,
    title: 'Data Encryption',
    description: 'All data is encrypted at rest and in transit using industry-standard AES-256 encryption.',
  },
  {
    icon: Server,
    title: 'Secure Infrastructure',
    description: 'Our systems are hosted on SOC 2 compliant cloud platforms with 24/7 monitoring.',
  },
  {
    icon: Eye,
    title: 'Access Control',
    description: 'Multi-factor authentication and role-based access controls protect sensitive information.',
  },
  {
    icon: Shield,
    title: 'Regular Audits',
    description: 'Third-party security audits and penetration testing ensure ongoing protection.',
  },
]

const certifications = [
  'SOC 2 Type II Compliant',
  'GDPR Compliant',
  'CCPA Compliant',
  'HIPAA Ready',
  'ISO 27001 Certified',
  'PCI DSS Compliant',
]

export default function SecurityPage() {
  return (
    <Box sx={{ pt: 12, pb: 8, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" sx={{ mb: 8 }}>
          <Chip
            icon={<Shield size={16} />}
            label="Security & Compliance"
            sx={{
              px: 3,
              py: 1,
              background: 'rgba(0, 102, 255, 0.1)',
              border: '1px solid rgba(0, 102, 255, 0.3)',
              color: '#0066FF',
              fontWeight: 600,
            }}
          />
          
          <Typography variant="h2" sx={{ fontWeight: 900, textAlign: 'center' }}>
            Security & Compliance
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'center', maxWidth: '600px' }}>
            Your security is our priority. We implement comprehensive measures to protect 
            your data and ensure compliance with industry standards.
          </Typography>
        </Stack>

        {/* Security Measures */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Security Measures
          </Typography>
          <Grid container spacing={4}>
            {securityMeasures.map((measure, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={measure.title}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '20px',
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
                      <measure.icon size={36} color="#0066FF" />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                      {measure.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                      {measure.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Certifications */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Certifications & Compliance
          </Typography>
          <Grid container spacing={3}>
            {certifications.map((cert) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={cert}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: '16px',
                    background: 'rgba(16, 185, 129, 0.05)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <CheckCircle size={24} color="#10B981" />
                    <Typography sx={{ fontWeight: 600 }}>{cert}</Typography>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Grid container spacing={6}>
          {/* Data Protection */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                Data Protection
              </Typography>
              <Stack spacing={2}>
                <Typography>
                  <strong>Encryption:</strong> All sensitive data is encrypted using AES-256 
                  encryption both at rest and in transit.
                </Typography>
                <Typography>
                  <strong>Backup & Recovery:</strong> Regular automated backups with 
                  point-in-time recovery capabilities.
                </Typography>
                <Typography>
                  <strong>Data Retention:</strong> Data is retained only as long as necessary 
                  for business purposes or legal requirements.
                </Typography>
                <Typography>
                  <strong>Secure Deletion:</strong> Data is securely wiped when no longer 
                  needed using industry-standard methods.
                </Typography>
              </Stack>
            </Box>
          </Grid>

          {/* Access Control */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                Access Control
              </Typography>
              <Stack spacing={2}>
                <Typography>
                  <strong>Multi-Factor Authentication:</strong> Required for all system 
                  access with support for hardware tokens.
                </Typography>
                <Typography>
                  <strong>Role-Based Access:</strong> Principle of least privilege ensures 
                  users only access what they need.
                </Typography>
                <Typography>
                  <strong>Session Management:</strong> Automatic session timeouts and 
                  secure session handling.
                </Typography>
                <Typography>
                  <strong>Audit Logging:</strong> Comprehensive logging of all access 
                  and system activities.
                </Typography>
              </Stack>
            </Box>
          </Grid>

          {/* Infrastructure Security */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                Infrastructure Security
              </Typography>
              <Stack spacing={2}>
                <Typography>
                  <strong>Network Security:</strong> Firewalls, intrusion detection, 
                  and network segmentation protect our systems.
                </Typography>
                <Typography>
                  <strong>Vulnerability Management:</strong> Regular security patches 
                  and vulnerability assessments.
                </Typography>
                <Typography>
                  <strong>DDoS Protection:</strong> Advanced DDoS mitigation ensures 
                  service availability.
                </Typography>
                <Typography>
                  <strong>Physical Security:</strong> Data centers with biometric access 
                  controls and 24/7 surveillance.
                </Typography>
              </Stack>
            </Box>
          </Grid>

          {/* Incident Response */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                Incident Response
              </Typography>
              <Stack spacing={2}>
                <Typography>
                  <strong>24/7 Monitoring:</strong> Continuous monitoring of systems 
                  and security events.
                </Typography>
                <Typography>
                  <strong>Rapid Response:</strong> Dedicated security team ready to 
                  respond to incidents within minutes.
                </Typography>
                <Typography>
                  <strong>Communication:</strong> Clear communication protocols for 
                  notifying affected parties.
                </Typography>
                <Typography>
                  <strong>Post-Incident Review:</strong> Thorough analysis and 
                  improvement of security measures.
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* Contact */}
        <Box
          sx={{
            mt: 8,
            p: 6,
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            textAlign: 'center',
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{ mb: 3 }}>
            <AlertTriangle size={24} color="#EF4444" />
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Security Concerns?
            </Typography>
          </Stack>
          <Typography sx={{ mb: 3, maxWidth: '600px', mx: 'auto' }}>
            If you discover a security vulnerability or have concerns about our security 
            practices, please contact our security team immediately.
          </Typography>
          <Typography sx={{ fontWeight: 600 }}>
            Email: security@scriptlabs.com
            <br />
            Phone: +1 (555) 123-SECURE
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}