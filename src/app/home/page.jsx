'use client';

import React from 'react';
import Link from 'next/link';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-purple-950 dark:to-purple-900 text-gray-800 dark:text-gray-100 relative overflow-hidden transition-colors duration-500">
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-indigo-200 dark:bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-200 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-indigo-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

            <section className="relative overflow-hidden py-20 md:py-32 lg:py-40 text-center bg-indigo-700 dark:bg-purple-800 text-white transition-colors duration-500 z-20">
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-down">
                        Smart Attendance Management
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-up">
                        Revolutionize how you manage attendance with our intelligent, role-based Android application.
                    </p>
                    <div className="flex justify-center space-x-4 animate-scale-in">
                        <Link href="/signup" className="bg-indigo-500 dark:bg-purple-600 hover:bg-indigo-600 dark:hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                            Get Started Free
                        </Link>
                        <Link href="/login" className="bg-transparent border-2 border-white hover:border-indigo-200 dark:hover:border-purple-200 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                            Login
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white dark:bg-purple-900 relative z-10 transition-colors duration-500">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-indigo-800 dark:text-purple-100 mb-12 animate-fade-in-up">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="p-8 bg-indigo-50 dark:bg-purple-800 rounded-xl shadow-md transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-left">
                            <div className="text-5xl text-indigo-600 dark:text-purple-400 mb-4"><i className="fas fa-mobile-alt"></i></div>
                            <h3 className="text-2xl font-semibold text-indigo-700 dark:text-purple-200 mb-3">1. Effortless Check-In</h3>
                            <p className="text-gray-600 dark:text-gray-300">Users simply open the app and tap to mark their presence. The system records the time and user ID instantly.</p>
                        </div>
                        <div className="p-8 bg-indigo-50 dark:bg-purple-800 rounded-xl shadow-md transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-up delay-200">
                            <div className="text-5xl text-indigo-600 dark:text-purple-400 mb-4"><i className="fas fa-user-check"></i></div>
                            <h3 className="text-2xl font-semibold text-indigo-700 dark:text-purple-200 mb-3">2. Role-Based Access</h3>
                            <p className="text-gray-600 dark:text-gray-300">The app intelligently recognizes the user's role—be it a student, employee, or administrator—providing a tailored dashboard and features.</p>
                        </div>
                        <div className="p-8 bg-indigo-50 dark:bg-purple-800 rounded-xl shadow-md transform hover:-translate-y-2 transition-transform duration-300 animate-fade-in-right delay-400">
                            <div className="text-5xl text-indigo-600 dark:text-purple-400 mb-4"><i className="fas fa-chart-line"></i></div>
                            <h3 className="text-2xl font-semibold text-indigo-700 dark:text-purple-200 mb-3">3. Instant Insights</h3>
                            <p className="text-gray-600 dark:text-gray-300">Administrators can view real-time attendance, generate reports, and manage all records from their own dashboard.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-indigo-50 dark:bg-purple-900 relative z-10 transition-colors duration-500">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-indigo-800 dark:text-purple-100 mb-12 animate-fade-in-up">Elegance in Every Detail</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in-up delay-200">
                        Our Android app is not just functional; it's a seamless and beautiful experience designed for daily use.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-8 bg-white dark:bg-purple-800 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 animate-fade-in delay-400">
                            <div className="text-5xl text-indigo-600 dark:text-purple-400 mb-4"><i className="fas fa-palette"></i></div>
                            <h3 className="text-2xl font-semibold text-indigo-700 dark:text-purple-200 mb-3">Intuitive Interface</h3>
                            <p className="text-gray-600 dark:text-gray-300">A clean, uncluttered design that makes navigation simple for all users, regardless of technical skill.</p>
                        </div>
                        <div className="p-8 bg-white dark:bg-purple-800 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 animate-fade-in delay-500">
                            <div className="text-5xl text-indigo-600 dark:text-purple-400 mb-4"><i className="fas fa-mobile-alt"></i></div>
                            <h3 className="text-2xl font-semibold text-indigo-700 dark:text-purple-200 mb-3">Seamless Performance</h3>
                            <p className="text-gray-600 dark:text-gray-300">Engineered to be fast and responsive, providing a fluid experience on any Android device.</p>
                        </div>
                        <div className="p-8 bg-white dark:bg-purple-800 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 animate-fade-in delay-600">
                            <div className="text-5xl text-indigo-600 dark:text-purple-400 mb-4"><i className="fas fa-bolt"></i></div>
                            <h3 className="text-2xl font-semibold text-indigo-700 dark:text-purple-200 mb-3">Quick Actions</h3>
                            <p className="text-gray-600 dark:text-gray-300">One-tap check-ins and quick access to essential features save valuable time for everyone.</p>
                        </div>
                        <div className="p-8 bg-white dark:bg-purple-800 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 animate-fade-in delay-700">
                            <div className="text-5xl text-indigo-600 dark:text-purple-400 mb-4"><i className="fas fa-lock"></i></div>
                            <h3 className="text-2xl font-semibold text-indigo-700 dark:text-purple-200 mb-3">Secure & Reliable</h3>
                            <p className="text-gray-600 dark:text-gray-300">Your data is safe with us. We prioritize robust security measures to protect all user information.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-indigo-600 dark:bg-purple-800 text-white text-center relative z-10 transition-colors duration-500">
                <div className="container mx-auto px-6 animate-fade-in-up">
                    <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Attendance?</h2>
                    <p className="text-xl mb-10 max-w-3xl mx-auto">
                        Join countless organizations benefiting from smart attendance management. Start your free trial today!
                    </p>
                    <Link href="/signup" className="bg-white dark:bg-purple-900 text-indigo-700 dark:text-purple-200 hover:bg-indigo-100 dark:hover:bg-purple-700 font-bold py-3 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105">
                        Sign Up Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;