// Test endpoint to verify serverless function is working
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Check if environment variables are set
    const hasGmailPassword = !!process.env.GMAIL_APP_PASSWORD;
    
    return res.status(200).json({ 
      message: 'Serverless function is working!',
      timestamp: new Date().toISOString(),
      environment: {
        hasGmailPassword,
        nodeEnv: process.env.NODE_ENV || 'development'
      },
      success: true 
    });

  } catch (error) {
    console.error('Test endpoint error:', error);
    return res.status(500).json({ 
      message: 'Test endpoint error',
      error: error.message,
      success: false 
    });
  }
} 