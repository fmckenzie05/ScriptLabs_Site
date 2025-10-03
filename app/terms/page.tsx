'use client'

import { Container, Typography, Box, Stack, Chip } from '@mui/material'
import { FileText } from 'lucide-react'

export default function TermsPage() {
  return (
    <Box sx={{ pt: 12, pb: 8, minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center" sx={{ mb: 8 }}>
          <Chip
            icon={<FileText size={16} />}
            label="Terms of Service"
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
            Terms of Service
          </Typography>
          
          <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>
            Last updated: January 2024
          </Typography>
        </Stack>

        <Stack spacing={4}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              1. Acceptance of Terms
            </Typography>
            <Typography>
              By accessing and using ScriptLabs Studio's services, you accept and agree to be 
              bound by the terms and provision of this agreement. If you do not agree to 
              abide by the above, please do not use this service.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              2. Services Description
            </Typography>
            <Typography>
              ScriptLabs Studios provides software development, consulting, and technology 
              services including but not limited to web development, mobile applications, 
              AI/ML solutions, blockchain development, and technical consulting.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              3. User Obligations
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Users agree to:
            </Typography>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Use our services lawfully and ethically</li>
              <li>Respect intellectual property rights</li>
              <li>Not interfere with service operations</li>
              <li>Maintain confidentiality of account credentials</li>
            </ul>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              4. Intellectual Property
            </Typography>
            <Typography>
              All content, features, and functionality of our services are owned by 
              ScriptLabs Studios and are protected by copyright, trademark, and other 
              intellectual property laws. Custom work developed for clients remains 
              the client's intellectual property upon full payment.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              5. Payment Terms
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Payment terms vary by service type:
            </Typography>
            <ul>
              <li>Project-based work: 50% upfront, 50% on completion</li>
              <li>Consulting services: Monthly billing</li>
              <li>Ongoing support: Quarterly billing</li>
              <li>Late payments may incur additional fees</li>
            </ul>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              6. Limitation of Liability
            </Typography>
            <Typography>
              ScriptLabs Studios shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages resulting from your use of 
              our services. Our total liability shall not exceed the amount paid for 
              the specific service giving rise to the claim.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              7. Service Modifications
            </Typography>
            <Typography>
              We reserve the right to modify or discontinue our services at any time. 
              We will provide reasonable notice of significant changes that may affect 
              ongoing projects or subscriptions.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              8. Termination
            </Typography>
            <Typography>
              Either party may terminate services with appropriate notice as outlined 
              in individual service agreements. Upon termination, all accrued fees 
              become immediately due and payable.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              9. Contact Information
            </Typography>
            <Typography>
              For questions about these Terms of Service, contact us at:
              <br />
              Email: legal@scriptlabs.com
              <br />
              Address: 123 Innovation Drive, San Francisco, CA 94105
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}