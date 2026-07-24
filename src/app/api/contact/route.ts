import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Email service not configured' },
      { status: 500 }
    )
  }

  const resend = new Resend(apiKey)

  try {
    const body = await request.json()
    const { name, phone, email, service, city, message } = body

        // Forward to Zapier webhook for lead tracking
        try {
                await fetch('https://hooks.zapier.com/hooks/catch/20117350/44fmixd/', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                                      ...body,
                                      website: 'Concrete Pros of Dallas',
                                      submittedAt: new Date().toISOString(),
                          }),
                });
        } catch (zapierError) {
                console.error('[Zapier Webhook Error]', zapierError);
        }

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      )
    }

    const toEmail =
      process.env.CONTACT_EMAIL || 'info@dallasconcretepros.net'
    const fromEmail =
      process.env.FROM_EMAIL || 'onboarding@resend.dev'

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        <p><strong>City:</strong> ${city || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
