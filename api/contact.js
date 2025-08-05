// Vercel serverless function for handling contact form submissions
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, message, name } = req.body;

    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Valid email is required' });
    }

    // Validate Gmail domain
    if (!email.endsWith('@gmail.com')) {
      return res.status(400).json({ message: 'Please use a Gmail address' });
    }

    // Check if Gmail app password is configured
    if (!process.env.GMAIL_APP_PASSWORD) {
      console.error('GMAIL_APP_PASSWORD environment variable not set');
      return res.status(500).json({ 
        message: 'Email service not configured. Please contact the administrator.',
        success: false 
      });
    }

    // Log the contact request
    console.log('New contact request:', {
      email,
      message: message || 'Newsletter subscription',
      name: name || 'Anonymous',
      timestamp: new Date().toISOString()
    });

    // Nodemailer with Gmail
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'malaviyagautam0942@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('Email transporter verified successfully');
    } catch (verifyError) {
      console.error('Email transporter verification failed:', verifyError);
      return res.status(500).json({ 
        message: 'Email service configuration error. Please try again later.',
        success: false 
      });
    }

    const mailOptions = {
      from: 'malaviyagautam0942@gmail.com',
      to: 'malaviyagautam0942@gmail.com',
      subject: 'New Contact Form Submission - Portfolio',
      text: `
New contact from your portfolio website:

Email: ${email}
Name: ${name || 'Anonymous'}
Message: ${message || 'Newsletter subscription'}
Time: ${new Date().toLocaleString()}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff6600; border-bottom: 2px solid #ff6600; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>From Email:</strong> ${email}</p>
            <p><strong>Name:</strong> ${name || 'Anonymous'}</p>
            <p><strong>Message:</strong> ${message || 'Newsletter subscription'}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <div style="background: #e8f4fd; padding: 15px; border-radius: 8px; border-left: 4px solid #ff6600;">
            <p style="margin: 0; color: #666;">
              This message was sent from your portfolio website contact form.
            </p>
          </div>
        </div>
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    // Return success
    return res.status(200).json({ 
      message: 'Contact request received successfully!',
      success: true 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Internal server error. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check configuration.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Email service connection failed. Please try again later.';
    } else if (error.message && error.message.includes('Invalid login')) {
      errorMessage = 'Email service configuration error. Please contact administrator.';
    }
    
    return res.status(500).json({ 
      message: errorMessage,
      success: false 
    });
  }
} 