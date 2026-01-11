import { useState, useCallback } from 'react';
import type { FormData, FormErrors } from '../types';

interface UseFormOptions {
    initialValues: FormData;
    onSubmit: (data: FormData) => Promise<void>;
    validate?: (data: FormData) => FormErrors;
}

interface UseFormReturn {
    values: FormData;
    errors: FormErrors;
    isSubmitting: boolean;
    isSuccess: boolean;
    handleChange: (field: keyof FormData, value: string) => void;
    handleSubmit: (e: React.FormEvent) => Promise<void>;
    reset: () => void;
    setFieldError: (field: string, error: string) => void;
}

const defaultValidate = (data: FormData): FormErrors => {
    const errors: FormErrors = {};

    if (!data.name?.trim()) {
        errors.name = 'Name is required';
    }

    if (!data.email?.trim()) {
        errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = 'Please enter a valid email address';
    }

    if (data.message !== undefined && !data.message.trim()) {
        errors.message = 'Message is required';
    }

    return errors;
};

export const useForm = ({
    initialValues,
    onSubmit,
    validate = defaultValidate
}: UseFormOptions): UseFormReturn => {
    const [values, setValues] = useState<FormData>(initialValues);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = useCallback((field: keyof FormData, value: string) => {
        setValues(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    }, [errors]);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = validate(values);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        try {
            await onSubmit(values);
            setIsSuccess(true);
            setValues(initialValues);
        } catch {
            setErrors({ submit: 'Failed to submit form. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    }, [values, validate, onSubmit, initialValues]);

    const reset = useCallback(() => {
        setValues(initialValues);
        setErrors({});
        setIsSuccess(false);
        setIsSubmitting(false);
    }, [initialValues]);

    const setFieldError = useCallback((field: string, error: string) => {
        setErrors(prev => ({ ...prev, [field]: error }));
    }, []);

    return {
        values,
        errors,
        isSubmitting,
        isSuccess,
        handleChange,
        handleSubmit,
        reset,
        setFieldError
    };
};

export default useForm;
