'use client'

import { Container, Typography, Box, Stack, Chip } from '@mui/material'
import { Shield } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <Box sx={{ pt: 12, pb: 8, minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center" sx={{ mb: 8 }}>
          <Chip
            icon={<Shield size={16} />}
            label="Privacy Policy"
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
            Privacy Policy
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>
            Last updated: January 2024
          </Typography>
        </Stack>

        <Stack spacing={4}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              1. Information We Collect
            </Typography>
            <Typography sx={{ mb: 2 }}>
              We collect information you provide directly to us, such as when you:
            </Typography>
            <ul>
              <li>Create an account or fill out a form</li>
              <li>Request information about our services</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us for support</li>
              <li>Participate in surveys or promotions</li>
            </ul>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              2. How We Use Your Information
            </Typography>
            <Typography sx={{ mb: 2 }}>
              We use the information we collect to:
            </Typography>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Monitor and analyze trends and usage</li>
            </ul>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              3. Information Sharing
            </Typography>
            <Typography sx={{ mb: 2 }}>
              We may share your information in the following situations:
            </Typography>
            <ul>
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With service providers who assist our operations</li>
              <li>In connection with a merger or acquisition</li>
            </ul>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              4. Data Security
            </Typography>
            <Typography>
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no 
              method of transmission over the Internet is 100% secure.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              5. Your Rights
            </Typography>
            <Typography sx={{ mb: 2 }}>
              You have certain rights regarding your personal information:
            </Typography>
            <ul>
              <li>Access and update your information</li>
              <li>Delete your account and data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data portability</li>
              <li>File complaints with supervisory authorities</li>
            </ul>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              6. Cookies and Tracking
            </Typography>
            <Typography>
              We use cookies and similar technologies to enhance your experience, analyze 
              usage patterns, and deliver personalized content. You can control cookie 
              settings through your browser preferences.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              7. Contact Us
            </Typography>
            <Typography>
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@scriptlabs.com
              <br />
              Address: 123 Innovation Drive, San Francisco, CA 94105
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}