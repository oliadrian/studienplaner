import React from "react";

interface DashboardContainerProps {
    children: React.ReactNode;
    title?: string;
    subtitle?: string; 
    className?: string;
    icon?: React.ReactNode;
}

function DashboardContainer({children, title, subtitle, className="", icon}: DashboardContainerProps) {
    return ( 
        <div className={`bg-white shadow-lg shadow-gray-200/50 border-0 hover:shadow-xl transition-shadow duration-300 p-6 ${className}`}>
            <div className="w-fit">
                {title && (
                    <div className="flex items-center gap-3">
                        <h2 className='font-heading font-bold text-xl'>{title}</h2>
                        {icon && (
                        <div className="text-purple-600">
                            {icon}
                        </div>
                        )}
                    </div>
                )}
                {subtitle && (
                    <p>{subtitle}</p>
                )}
                <hr className="mt-4 mb-6 w-24 border-t-4 rounded-lg border-purple-800"/>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default DashboardContainer;