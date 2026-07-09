export interface ServiceCityContent {
  metaTitle: string
  metaDescription: string
  headline: string
  heroSubhead: string
  intro: string[]
  whyUs: string
  process: { step: string; detail: string }[]
  benefits: string[]
  neighborhoodNote: string
  pricingNote: string
  faqs: { question: string; answer: string }[]
}
