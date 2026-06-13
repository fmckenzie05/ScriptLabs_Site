import mongoose from 'mongoose'

export interface IPayment extends mongoose.Document {
  userId: mongoose.Schema.Types.ObjectId
  amount: number
  currency: string
  status: 'pending' | 'completed' | 'failed' | 'refunded'
  paymentMethod: 'card' | 'paypal' | 'wire_transfer'
  subscriptionPlan: 'starter' | 'professional' | 'business' | 'enterprise'
  billingPeriod: 'monthly' | 'yearly'
  transactionId: string
  paymentDetails: {
    cardLast4?: string
    cardBrand?: string
    paypalEmail?: string
    wireTransferReference?: string
  }
  invoice: {
    invoiceNumber: string
    invoiceDate: Date
    dueDate: Date
    items: Array<{
      description: string
      quantity: number
      unitPrice: number
      total: number
    }>
    tax: number
    total: number
  }
  metadata: Map<string, any>
  createdAt: Date
  updatedAt: Date
}

const PaymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: 'USD',
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending',
  },
  paymentMethod: {
    type: String,
    enum: ['card', 'paypal', 'wire_transfer'],
    required: true,
  },
  subscriptionPlan: {
    type: String,
    enum: ['starter', 'professional', 'business', 'enterprise'],
    required: true,
  },
  billingPeriod: {
    type: String,
    enum: ['monthly', 'yearly'],
    required: true,
  },
  transactionId: {
    type: String,
    unique: true,
    required: true,
  },
  paymentDetails: {
    cardLast4: String,
    cardBrand: String,
    paypalEmail: String,
    wireTransferReference: String,
  },
  invoice: {
    invoiceNumber: {
      type: String,
      unique: true,
      required: true,
    },
    invoiceDate: {
      type: Date,
      default: Date.now,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    items: [{
      description: String,
      quantity: Number,
      unitPrice: Number,
      total: Number,
    }],
    tax: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  metadata: {
    type: Map,
    of: mongoose.Schema.Types.Mixed,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

// Update the updatedAt timestamp
PaymentSchema.pre('save', function(next) {
  this.updatedAt = new Date()
  next()
})

// Generate invoice number
PaymentSchema.pre('save', function(next) {
  if (this.invoice && !this.invoice.invoiceNumber) {
    const timestamp = Date.now()
    const random = Math.floor(Math.random() * 1000)
    this.invoice.invoiceNumber = `INV-${timestamp}-${random}`
  }
  next()
})

export default mongoose.models.Payment || mongoose.model<IPayment>('Payment', PaymentSchema)