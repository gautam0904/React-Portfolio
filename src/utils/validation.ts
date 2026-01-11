// Form validation utilities

export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return phoneRegex.test(phone);
};

export const isValidUrl = (url: string): boolean => {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};

export const minLength = (value: string, min: number): boolean => {
    return value.trim().length >= min;
};

export const maxLength = (value: string, max: number): boolean => {
    return value.trim().length <= max;
};

export const isRequired = (value: string): boolean => {
    return value.trim().length > 0;
};

// Validation error messages
export const validationMessages = {
    required: (field: string) => `${field} is required`,
    email: 'Please enter a valid email address',
    phone: 'Please enter a valid phone number',
    url: 'Please enter a valid URL',
    minLength: (field: string, min: number) => `${field} must be at least ${min} characters`,
    maxLength: (field: string, max: number) => `${field} must be less than ${max} characters`
};
