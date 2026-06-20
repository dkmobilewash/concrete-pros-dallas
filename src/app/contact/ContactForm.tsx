'use client'

import { useState } from 'react'
import { services } from '@/data/services'
import { cities } from '@/data/cities'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle'
  )

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          phone: data.get('phone'),
          email: data.get('email'),
          service: data.get('service'),
          city: data.get('city'),
          message: data.get('message'),
        }),
      })

      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <h3 className="text-xl font-bold text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700">
          We received your message and will get back to you within one business
          day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-orange"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-orange"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-orange"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-1">
          Service
        </label>
        <select
          id="service"
          name="service"
          className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-orange"
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium mb-1">
          City
        </label>
        <select
          id="city"
          name="city"
          className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-orange"
        >
          <option value="">Select your city</option>
          {cities.map((c) => (
            <option key={c.slug} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Project Description
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border border-brand-gray-mid rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-orange"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-md transition-colors disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'error' && (
        <p className="text-red-600 text-sm text-center">
          Something went wrong. Please call us at 214-466-2536 instead.
        </p>
      )}
    </form>
  )
}
