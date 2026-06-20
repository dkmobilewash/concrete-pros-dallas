'use client'

import { useState } from 'react'

interface FaqAccordionProps {
  faqs: { question: string; answer: string }[]
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index

        return (
          <details
            key={index}
            open={isOpen}
            className="group border border-brand-gray-mid rounded-lg"
          >
            <summary
              onClick={(e) => {
                e.preventDefault()
                toggle(index)
              }}
              className="flex items-center justify-between cursor-pointer p-4 list-none"
            >
              <span className="font-semibold text-brand-charcoal">{faq.question}</span>
              <span className="text-brand-orange text-xl font-bold ml-4 shrink-0">
                {isOpen ? '−' : '+'}
              </span>
            </summary>
            {isOpen && (
              <div className="px-4 pb-4">
                <p className="text-brand-gray">{faq.answer}</p>
              </div>
            )}
          </details>
        )
      })}
    </div>
  )
}
