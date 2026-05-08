# Contact Form Implementation Guide

This document summarizes the implementation of the production-ready contact form for the IKEN Technology website.

## 🚀 Overview
The contact form has been upgraded from a mock `setTimeout` simulation to a real-time backend integration using **Next.js API Routes** and the **Resend Email Service**.

## 🏗️ Architecture
1.  **Frontend**: Standard React form with loading and success states.
2.  **API Route**: `src/app/api/contact/route.ts` (Next.js App Router).
3.  **Service**: Resend SDK for email delivery.
4.  **Security**: Environment variables used for secrets; validation handled on the server.

## 📦 Changes Made
-   **Dependencies**: Installed `resend` SDK.
-   **Backend**: Created a POST handler in `/api/contact` with validation and HTML email template.
-   **Frontend**: 
    -   Added `name` attributes to all form fields.
    -   Replaced mock logic with a real `fetch` call.
    -   Implemented non-intrusive error handling UI.
-   **Config**: Created `.env.local` with necessary API keys.

## 🔑 Environment Variables
The following keys must be set in `.env.local` (local) and your hosting provider (Vercel/Netlify/Azure):

```env
RESEND_API_KEY=re_5NvQ19Wu_5kjdJn8n3DnvSNYErzFfwMoz
CONTACT_EMAIL=ibelalmohammed@gmail.com
```

## 📧 Email Structure
The email delivered to the business inbox includes:
-   Full Name
-   Email (with Reply-To support)
-   Company Name
-   Phone Number
-   Selected Service
-   Message (sanitized HTML)

## 🛠️ Maintenance & Production Notes
### Domain Verification
Currently, emails are sent from `onboarding@resend.dev`. To use a custom domain like `noreply@iken.tech`:
1.  Verify your domain in the [Resend Dashboard](https://resend.com/domains).
2.  Update the `from` field in `src/app/api/contact/route.ts`.

### Security
The API route includes basic validation and sanitization. For high-traffic production environments, consider adding a rate-limiting middleware or a CAPTCHA (like Turnstile) to prevent automated spam.

---
*Implementation completed on May 8, 2026.*
