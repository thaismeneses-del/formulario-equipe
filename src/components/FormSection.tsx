import React from 'react';

interface FormSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const FormSection: React.FC<FormSectionProps> = ({ title, icon, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden ${className}`}>
      {/* Section Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg text-white">
            {icon}
          </div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </div>
      </div>
      
      {/* Section Content */}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default FormSection;
