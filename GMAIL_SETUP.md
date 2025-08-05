# Gmail App Password Setup Guide

## Overview
Your portfolio now uses Nodemailer with Gmail to send email notifications. To make this work, you need to set up a Gmail App Password.

## Step-by-Step Setup

### 1. Enable 2-Factor Authentication
1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Click on "Security" in the left sidebar
3. Under "Signing in to Google", click on "2-Step Verification"
4. Follow the steps to enable 2-factor authentication

### 2. Generate App Password
1. Go back to [Google Account settings](https://myaccount.google.com/)
2. Click on "Security" in the left sidebar
3. Under "Signing in to Google", click on "App passwords"
4. Select "Mail" as the app and "Other" as the device
5. Enter a name like "Portfolio Contact Form"
6. Click "Generate"
7. **Copy the 16-character password** (it will look like: xxxx xxxx xxxx xxxx)

### 3. Add Environment Variable
In your Vercel project settings, add:
```
GMAIL_APP_PASSWORD=your_16_character_app_password_here
```

**Important:** 
- Use the app password, NOT your regular Gmail password
- Remove spaces from the app password when adding to environment variables
- Keep this password secure and don't share it

### 4. Test the Setup
1. Deploy your changes to Vercel
2. Fill out the contact form with a Gmail address
3. Check your email (malaviyagautam0942@gmail.com) for the notification
4. Check Vercel function logs for any errors

## Troubleshooting

### Common Issues:

**1. "Invalid login" error**
- Make sure you're using the app password, not your regular password
- Ensure 2-factor authentication is enabled
- Double-check the app password is correct

**2. "Less secure app access" error**
- This is expected and normal - Gmail will show this for app passwords
- The app password is designed to be more secure than regular passwords

**3. Environment variable not working**
- Make sure the variable name is exactly `GMAIL_APP_PASSWORD`
- Redeploy after adding the environment variable
- Check Vercel dashboard for any deployment errors

**4. Email not sending**
- Check Vercel function logs for detailed error messages
- Ensure the email address is a valid Gmail address
- Verify the serverless function is deployed correctly

## Security Notes

✅ **Secure**: App passwords are more secure than regular passwords
✅ **Limited Scope**: App passwords only work for the specific app
✅ **Revocable**: You can revoke app passwords anytime
✅ **No 2FA**: App passwords bypass 2FA for the specific app

## Alternative Setup (if Gmail doesn't work)

If you have issues with Gmail, you can switch to other email services:

### Option 1: SendGrid
```bash
npm install @sendgrid/mail
```
Then update `/api/contact.js` with SendGrid code.

### Option 2: EmailJS (Client-side)
```bash
npm install @emailjs/browser
```
Then update the components to use EmailJS instead of the serverless function.

### Option 3: AWS SES
```bash
npm install @aws-sdk/client-ses
```
Then update `/api/contact.js` with AWS SES code.

## Current Status
- ✅ Nodemailer installed
- ✅ Serverless function updated
- ✅ Gmail validation added
- ✅ Frontend forms updated
- ⏳ Gmail App Password setup needed
- ⏳ Environment variable configuration needed

## Next Steps
1. Follow the Gmail App Password setup above
2. Add the environment variable to Vercel
3. Deploy and test the contact forms
4. Monitor email notifications

## Support
If you encounter any issues:
1. Check Vercel function logs
2. Verify environment variables are set correctly
3. Test with a simple Gmail address
4. Ensure 2FA is enabled on your Google account 