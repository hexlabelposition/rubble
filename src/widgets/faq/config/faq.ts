interface FaqItem {
  id: string
  question: string
  answer: string
}

type FaqList = Array<FaqItem>

export const faq: FaqList = [
  {
    id: 'how-to-start',
    question: 'How to start the property buying process?',
    answer:
      'To get started, simply reach out to our team or complete the form on the “Contact Us” page. Once we receive your details, one of our dedicated representatives will connect with you to discuss your specific needs and preferences.',
  },
  {
    id: 'financing',
    question: 'Is there financing or credit help for property?',
    answer:
      "Yes, we offer financing support through reliable partners. We'll help you explore mortgage or installment options that match your budget and guide you through the approval process.",
  },
  {
    id: 'overseas',
    question: 'Can I buy property from overseas?',
    answer:
      'Yes, you can buy property remotely. We support overseas buyers with virtual tours, online documentation, and secure payment methods, ensuring a smooth and legal transaction from abroad.',
  },
  {
    id: 'requirements',
    question: 'What are the requirements to apply for a purchase?',
    answer:
      "You'll typically need a valid ID, proof of income, and possibly a credit report. Depending on the property, additional documents may be requested. Our team will provide a full checklist and assist you throughout.",
  },
  {
    id: 'fees',
    question: 'Are there extra fees beyond the property price?',
    answer:
      'Yes, there are additional costs such as taxes, legal and notary fees, registration charges, and sometimes agency commissions. We always provide a full breakdown so you know the total budget upfront.',
  },
  {
    id: 'consultation',
    question: 'Is there a consultation service before purchase?',
    answer:
      "Yes, we offer free consultations where we explain the buying process, discuss your goals, and answer any questions. It's a great way to get clarity before making a decision.",
  },
  {
    id: 'rental',
    question: 'What is the process if I want to rent a property?',
    answer:
      "Let us know your rental preferences, and we'll share available listings. We assist with viewings, document checks, and contract signing, making the rental process quick and simple.",
  },
  {
    id: 'property-management',
    question: 'Do you offer property management services?',
    answer:
      'Yes, we provide full property management — from tenant search to maintenance and reporting. Perfect for landlords who want passive income and peace of mind, especially if living abroad.',
  },
]
