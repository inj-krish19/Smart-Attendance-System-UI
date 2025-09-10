'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Signup = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'student' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            router.push('/login');
        } catch (err) {
            setError(err.response?.data?.error || 'Signup failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-purple-950 dark:to-purple-900 transition-colors duration-500 p-4 sm:p-6">
            <div className="bg-white dark:bg-purple-900 p-8 md:p-12 rounded-2xl shadow-2xl w-full max-w-lg transform transition-transform hover:scale-105 border border-indigo-200 dark:border-purple-700">
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-800 dark:text-purple-200 mb-2">Create an Account</h1>
                    <p className="text-gray-500 dark:text-gray-400">Join us and start managing attendance smartly.</p>
                </div>
                {error && <p className="text-red-600 dark:text-red-400 text-center mb-4 font-medium">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-5 py-3 border border-indigo-300 dark:border-purple-700 rounded-lg bg-gray-50 dark:bg-purple-800 text-gray-900 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-purple-500 transition-colors"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-5 py-3 border border-indigo-300 dark:border-purple-700 rounded-lg bg-gray-50 dark:bg-purple-800 text-gray-900 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-purple-500 transition-colors"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-5 py-3 border border-indigo-300 dark:border-purple-700 rounded-lg bg-gray-50 dark:bg-purple-800 text-gray-900 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-purple-500 transition-colors"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 dark:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 dark:hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>
                <div className="mt-8 text-center">
                    <p className="text-gray-600 dark:text-gray-400">
                        Already have an account? <Link href="/login" className="text-indigo-600 dark:text-purple-400 font-bold hover:underline transition">Log In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;