import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Invalid email address format.' },
        { status: 400 }
      );
    }

    // Clean and prepare the data
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanCompany = company?.trim() || 'Not provided';
    const cleanPhone = phone?.trim() || 'Not provided';
    const cleanService = service?.trim() || 'Not selected';
    const cleanMessage = message.trim();

    // Prepare HTML email content
    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>New Contact Form Submission</h2>
        <p>You have received a new message from your website's contact form.</p>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <h3 style="margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${cleanName}</p>
          <p><strong>Email:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
          <p><strong>Company:</strong> ${cleanCompany}</p>
          <p><strong>Phone:</strong> ${cleanPhone}</p>
          <p><strong>Interested Service:</strong> ${cleanService}</p>
        </div>

        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
          <h3 style="margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${cleanMessage.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
        </div>
      </div>
    `;

    // Send the email
    const { error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Default testing domain provided by Resend
      to: process.env.CONTACT_EMAIL as string,
      replyTo: cleanEmail,
      subject: `New Contact Form Submission from ${cleanName}`,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact Form Handler Error:', error);
    return NextResponse.json(
      { error: 'An internal server error occurred.' },
      { status: 500 }
    );
  }
}
