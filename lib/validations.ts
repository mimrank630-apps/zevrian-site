import { z } from 'zod'

// ─── Contact Form Schemas ─────────────────────────────────────────────────────

const GeneralInquirySchema = z.object({
  formType: z.literal('general'),
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

const SupplierInquirySchema = z.object({
  formType: z.literal('supplier'),
  name: z.string().min(1, 'Name is required'),
  company: z.string().min(1, 'Company name is required'),
  website: z.string().url('Please enter a valid URL (include https://)'),
  country: z.string().min(1, 'Country is required'),
  productCategories: z.string().min(1, 'Product categories are required'),
  moq: z.string().min(1, 'Minimum order quantity is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

const PartnershipSchema = z.object({
  formType: z.literal('partnership'),
  name: z.string().min(1, 'Name is required'),
  organisation: z.string().min(1, 'Organisation name is required'),
  partnershipType: z.enum(['Wholesale', 'Distribution', 'Co-branding', 'Other'], {
    error: 'Please select a partnership type',
  }),
  country: z.string().min(1, 'Country is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export const ContactFormSchema = z.discriminatedUnion('formType', [
  GeneralInquirySchema,
  SupplierInquirySchema,
  PartnershipSchema,
])

export type GeneralInquiryData = z.infer<typeof GeneralInquirySchema>
export type SupplierInquiryData = z.infer<typeof SupplierInquirySchema>
export type PartnershipData = z.infer<typeof PartnershipSchema>
export type ContactFormData = z.infer<typeof ContactFormSchema>

export { GeneralInquirySchema, SupplierInquirySchema, PartnershipSchema }

// ─── Newsletter Schema ────────────────────────────────────────────────────────

export const NewsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export type NewsletterData = z.infer<typeof NewsletterSchema>
