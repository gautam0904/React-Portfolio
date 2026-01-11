import React from 'react';

interface FormData {
    name: string;
    email: string;
    company: string;
    project: string;
    budget: string;
    message: string;
}

interface HeroContactFormFieldsProps {
    formData: FormData;
    handleInputChange: (field: keyof FormData, value: string) => void;
}

const HeroContactFormFields: React.FC<HeroContactFormFieldsProps> = ({ formData, handleInputChange }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Name *</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-lg placeholder-gray-400"
                        placeholder="Your full name"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Email *</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-lg placeholder-gray-400"
                        placeholder="your.email@example.com"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">Company/Organization</label>
                <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-lg placeholder-gray-400"
                    placeholder="Company name (optional)"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Project Type *</label>
                    <select
                        required
                        value={formData.project}
                        onChange={(e) => handleInputChange('project', e.target.value)}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-lg bg-white"
                    >
                        <option value="">Select project type</option>
                        <option value="web-development">🌐 Web Development</option>
                        <option value="mobile-app">📱 Mobile App</option>
                        <option value="full-stack">⚡ Full Stack Application</option>
                        <option value="ecommerce">🛒 E-commerce Platform</option>
                        <option value="api-development">🔗 API Development</option>
                        <option value="consultation">💡 Consultation</option>
                        <option value="other">🔧 Other</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Budget Range</label>
                    <select
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-lg bg-white"
                    >
                        <option value="">Select budget range</option>
                        <option value="under-5k">💰 Under $5,000</option>
                        <option value="5k-10k">💰💰 $5,000 - $10,000</option>
                        <option value="10k-25k">💰💰💰 $10,000 - $25,000</option>
                        <option value="25k-50k">💰💰💰💰 $25,000 - $50,000</option>
                        <option value="50k-plus">💰💰💰💰💰 $50,000+</option>
                        <option value="discuss">🤝 Let's discuss</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">Project Description *</label>
                <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-lg placeholder-gray-400 resize-none"
                    placeholder="Describe your project requirements, timeline, specific technologies needed, and any other important details..."
                />
                <div className="text-right text-sm text-gray-500">
                    {formData.message.length}/500 characters
                </div>
            </div>
        </>
    );
};

export default HeroContactFormFields;
