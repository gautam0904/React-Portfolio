// Email service configuration
// Supports: Backend API, mailto fallback
import { env } from '../config';

interface EmailData {
    name: string;
    email: string;
    message: string;
    company?: string;
    project?: string;
    budget?: string;
}

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
    // Try backend API first
    try {
        const response = await fetch(`${env.apiUrl}/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            return { success: true, message: 'Message sent successfully!' };
        } else {
            throw new Error('API request failed');
        }
    } catch (error) {
        console.error('API error:', error);

        // Fallback: Open mailto link
        const mailtoLink = `mailto:malaviyagautam0942@gmail.com?subject=Inquiry from ${encodeURIComponent(data.name)}&body=${encodeURIComponent(
            `Name: ${data.name}\nEmail: ${data.email}\n${data.company ? `Company: ${data.company}\n` : ''}${data.project ? `Project: ${data.project}\n` : ''}Message: ${data.message}`
        )}`;
        window.open(mailtoLink, '_blank');

        return { success: true, message: 'Email client opened. Please send manually.' };
    }
};

export default { sendEmail };
