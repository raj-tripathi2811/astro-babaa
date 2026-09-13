# Astro Babaa — Vercel Launch Ready

## Added in this update
- Client Login panel: Full Name + Gmail ID.
- Login is saved in the visitor's browser using localStorage.
- Chat / Call consultation prompts the client to log in first.
- Two WhatsApp numbers and two call numbers are supported.
- If Number 1 is busy/unavailable, the customer can use Number 2.
- Appointment WhatsApp flow also shows both contact options.

## IMPORTANT: Put your real numbers in `script.js`
At the top of `script.js` replace:
- `WHATSAPP_NUMBER_1`
- `WHATSAPP_NUMBER_2`
- `CONTACT_NUMBER_1`
- `CONTACT_NUMBER_2`

Use country code, without `+` or spaces. Example for India: `919876543210`.

The current values are placeholders and MUST be replaced before launch.

## Vercel deployment — easiest method
1. Extract this ZIP.
2. Open `script.js` and replace the four phone-number constants and your `UPI_ID`.
3. Make sure the folder containing `index.html`, `script.js`, `style.css`, and `assets/` is the project root.
4. Create/sign in to your Vercel account.
5. Choose **Add New → Project**.
6. Import your GitHub repository, or upload/deploy the project folder using Vercel's available deployment flow.
7. For this static HTML/CSS/JS project, no Build Command is needed and no framework preset is required.
8. Deploy.
9. Vercel will give you a `.vercel.app` URL. Open it on mobile and test:
   - Client Login
   - Chat and Call buttons
   - Number 1 / Number 2 fallback
   - UPI QR
   - Remedies
   - Kundali
   - Appointment
10. Add your custom domain later from the Vercel project settings if needed.

## Important limitation
This login is a browser-side client panel, not a secure database authentication system. It is suitable for identifying the customer in the front-end and carrying the name/Gmail into the current browser session, but it does not provide admin/customer accounts or server-side authentication.

For real production authentication, customer records, admin approvals, payment verification, and private chat, add a backend/database (for example MongoDB + server API) before treating login as secure authentication.


### Important: UPI scanner name
The website QR now sends the UPI `pn` payee name as **Astro Babaa** and the payment screens are branded **Astro Babaa**. However, many UPI apps/banks display the verified name registered against the UPI ID instead of the QR `pn` value. If scanning still shows **Raj Tripathi**, the UPI ID/account is registered with that verified name. To make the scanner show **Astro Babaa**, use a UPI/merchant account whose verified display name is Astro Babaa (subject to the provider's KYC/business-name rules). A website code change cannot override a bank/UPI provider's verified payee name.
