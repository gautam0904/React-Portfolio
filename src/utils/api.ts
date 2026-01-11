// API utilities

const API_BASE_URL = '/api';

interface ApiResponse<T> {
    data?: T;
    error?: string;
    success: boolean;
}

export const api = {
    async post<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            return { data: result, success: true };
        } catch (error) {
            console.error('API Error:', error);
            return {
                error: error instanceof Error ? error.message : 'An error occurred',
                success: false
            };
        }
    },

    async get<T>(endpoint: string): Promise<ApiResponse<T>> {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            return { data: result, success: true };
        } catch (error) {
            console.error('API Error:', error);
            return {
                error: error instanceof Error ? error.message : 'An error occurred',
                success: false
            };
        }
    }
};

// Contact form API
export const submitContactForm = async (formData: {
    name: string;
    email: string;
    message?: string;
    company?: string;
    project?: string;
    budget?: string;
}): Promise<ApiResponse<{ message: string }>> => {
    return api.post('/contact', formData);
};

export default api;
