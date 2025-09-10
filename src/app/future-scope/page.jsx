import React from 'react';

const FutureScope = () => {
    const features = [
        {
            title: "Biometric Integration (Fingerprint/Face ID)",
            description: "Enhance security and accuracy by integrating biometric authentication methods for clock-in/out. This would prevent 'buddy punching' and ensure the person marking attendance is genuinely present.",
            icon: "fas fa-fingerprint", // Example icon
            status: "High Priority"
        },
        {
            title: "GPS Fencing & Location Tracking",
            description: "Implement geofencing to ensure users are within a designated geographical area when marking attendance. For field staff, real-time location tracking during work hours can be included.",
            icon: "fas fa-map-marked-alt", // Example icon
            status: "High Priority"
        },
        {
            title: "AI-Powered Absence Prediction",
            description: "Utilize machine learning to analyze past attendance data and predict potential absences, allowing administrators to proactively manage staffing and resources.",
            icon: "fas fa-brain", // Example icon
            status: "Medium Priority"
        },
        {
            title: "Shift Management & Scheduling",
            description: "Allow administrators to create, assign, and manage shifts for employees directly within the application, including notifications for shift changes.",
            icon: "fas fa-calendar-alt", // Example icon
            status: "Medium Priority"
        },
        {
            title: "Leave Management & Approvals Workflow",
            description: "A comprehensive system for employees to request various types of leave (sick, vacation, etc.) and for managers to approve or deny them with an automated workflow.",
            icon: "fas fa-plane-departure", // Example icon
            status: "Medium Priority"
        },
        {
            title: "Integration with HR/Payroll Systems",
            description: "Seamlessly connect with existing Human Resources and Payroll systems to automate data transfer, reducing manual entry and errors.",
            icon: "fas fa-coins", // Example icon
            status: "Low Priority"
        },
        {
            title: "Real-time Notifications & Alerts",
            description: "Send push notifications for missed check-ins, upcoming shifts, leave approvals, or administrative announcements.",
            icon: "fas fa-bell", // Example icon
            status: "Low Priority"
        },
        {
            title: "Detailed Reporting & Analytics",
            description: "Advanced reporting features with customizable dashboards, visual charts, and export options to gain deeper insights into attendance patterns and compliance.",
            icon: "fas fa-chart-pie", // Example icon
            status: "High Priority"
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-indigo-800 mb-6 animate-fade-in-down">
                        Our Vision: Future Scope
                    </h1>
                    <p className="text-xl text-indigo-700 max-w-3xl mx-auto animate-fade-in-up">
                        Beyond robust attendance management, we envision a suite of advanced features to empower productivity and efficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col border border-indigo-200 animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="text-5xl text-indigo-600 mb-5 text-center">
                                <i className={feature.icon}></i>
                            </div>
                            <h2 className="text-2xl font-bold text-indigo-700 mb-3 text-center">
                                {feature.title}
                            </h2>
                            <p className="text-gray-600 flex-grow text-center mb-4">
                                {feature.description}
                            </p>
                            <div className="text-center mt-auto">
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${feature.status === 'High Priority' ? 'bg-red-100 text-red-800' :
                                    feature.status === 'Medium Priority' ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-green-100 text-green-800'
                                    }`}>
                                    {feature.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center animate-fade-in-up delay-700">
                    <h2 className="text-4xl font-bold text-indigo-800 mb-6">Have an Idea?</h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                        We're constantly evolving! If you have suggestions or specific needs, feel free to reach out.
                        Your feedback drives our innovation.
                    </p>
                    <a
                        href="mailto:contact@yourapp.com"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FutureScope;