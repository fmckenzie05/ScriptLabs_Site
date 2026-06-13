import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import User from '@/models/User'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      )
    }

    // Connect to database
    await dbConnect()

    // Find user by email
    const user = await User.findOne({ email: email.toLowerCase() })
    if (!user) {
      // Return success even if user doesn't exist (security best practice)
      return NextResponse.json(
        { message: 'If an account with that email exists, a reset link has been sent' },
        { status: 200 }
      )
    }

    // Generate password reset token (valid for 1 hour)
    const resetToken = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        type: 'password-reset',
      },
      JWT_SECRET,
      { expiresIn: '1h' }
    )

    // In a real application, you would send an email here
    // For now, we'll just log the reset token
    console.log(`Password reset token for ${email}: ${resetToken}`)
    console.log(`Reset URL: ${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}`)

    // TODO: Implement email sending
    // await sendPasswordResetEmail(user.email, resetToken)

    return NextResponse.json(
      { 
        message: 'If an account with that email exists, a reset link has been sent',
        // In development, return the token for testing
        ...(process.env.NODE_ENV === 'development' && { resetToken })
      },
      { status: 200 }
    )

  } catch (error: any) {
    console.error('Forgot password error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}