'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ThemeToggleButton from '../context/ThemeToggleButton';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        router.push('/login');
    };

    const menuItems = (
        <>
            <Link href="/" className="block py-2 px-4 hover:text-indigo-400 dark:hover:text-purple-400 transition duration-300 md:inline-block md:p-0">Home</Link>
            <Link href="/future-scope" className="block py-2 px-4 hover:text-indigo-400 dark:hover:text-purple-400 transition duration-300 md:inline-block md:p-0">Future Scope</Link>
            {role === 'admin' && (
                <>
                    <Link href="/admin-dashboard" className="block py-2 px-4 hover:text-indigo-400 dark:hover:text-purple-400 transition duration-300 md:inline-block md:p-0">Admin Dashboard</Link>
                    <Link href="/admin/students" className="block py-2 px-4 hover:text-indigo-400 dark:hover:text-purple-400 transition duration-300 md:inline-block md:p-0">Students</Link>
                    <Link href="/admin/faculty" className="block py-2 px-4 hover:text-indigo-400 dark:hover:text-purple-400 transition duration-300 md:inline-block md:p-0">Faculty</Link>
                    <Link href="/admin/classes" className="block py-2 px-4 hover:text-indigo-400 dark:hover:text-purple-400 transition duration-300 md:inline-block md:p-0">Classes</Link>
                    <Link href="/admin/attendance" className="block py-2 px-4 hover:text-indigo-400 dark:hover:text-purple-400 transition duration-300 md:inline-block md:p-0">Attendance</Link>
                    <Link href="/admin/analytics" className="block py-2 px-4 hover:text-indigo-400 dark:hover:text-purple-400 transition duration-300 md:inline-block md:p-0">Analytics</Link>
                    <Link href="/admin/reports" className="block py-2 px-4 hover:text-indigo-400 dark:hover:text-purple-400 transition duration-300 md:inline-block md:p-0">Reports</Link>
                </>
            )}
            {role === 'faculty' && (
                <>
                    <Link href="/faculty-dashboard" className="block py-2 px-4 hover:text-indigo-400 dark:hover:text-purple-400 transition duration-300 md:inline-block md:p-0">Faculty Dashboard</Link>
                    <Link href="/faculty/classes" className="block py-2 px-4 hover:text-indigo-400 dark:hover:text-purple-400 transition duration-300 md:inline-block md:p-0">Classes</Link>
                    <Link href="/faculty/attendance" className="block py-2 px-4 hover:text-indigo-400 dark:hover:text-purple-400 transition duration-300 md:inline-block md:p-0">Attendance</Link>
                    <Link href="/faculty/reports" className="block py-2 px-4 hover:text-indigo-400 dark:hover:text-purple-400 transition duration-300 md:inline-block md:p-0">Reports</Link>
                </>
            )}
            {role === 'student' && (
                <>
                    <Link href="/student-dashboard" className="block py-2 px-4 hover:text-indigo-400 dark:hover:text-purple-400 transition duration-300 md:inline-block md:p-0">Student Dashboard</Link>
                    <Link href="/student/attendance" className="block py-2 px-4 hover:text-indigo-400 dark:hover:text-purple-400 transition duration-300 md:inline-block md:p-0">My Attendance</Link>
                </>
            )}
        </>
    );

    return (
        <header className="bg-indigo-800 dark:bg-purple-900 text-white shadow-lg sticky top-0 z-50 transition-colors duration-500">
            <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-bold flex items-center">
                        <i className="fas fa-fingerprint text-xl mr-2"></i>
                        <span className="hidden sm:inline">AttendanceApp</span>
                        <span className="inline sm:hidden">Att.App</span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-6">
                    {menuItems}
                    <ThemeToggleButton />
                    {token ? (
                        <button
                            onClick={handleLogout}
                            className="bg-indigo-600 dark:bg-purple-700 hover:bg-indigo-700 dark:hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300"
                        >
                            Logout
                        </button>
                    ) : (
                        <div className="flex space-x-4">
                            <Link href="/login" className="bg-indigo-600 dark:bg-purple-700 hover:bg-indigo-700 dark:hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300">
                                Login
                            </Link>
                            <Link href="/signup" className="bg-indigo-500 dark:bg-purple-600 hover:bg-indigo-600 dark:hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300">
                                Sign Up
                            </Link>
                        </div>
                    )}
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-2">
                    <ThemeToggleButton />
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-indigo-700 dark:bg-purple-800 text-white p-4 transition-colors duration-500`}>
                <div className="flex flex-col space-y-2">
                    {menuItems}
                    {token ? (
                        <button
                            onClick={handleLogout}
                            className="w-full text-left bg-indigo-600 dark:bg-purple-700 hover:bg-indigo-700 dark:hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
                        >
                            Logout
                        </button>
                    ) : (
                        <div className="flex flex-col space-y-2 mt-2">
                            <Link href="/login" className="bg-indigo-600 dark:bg-purple-700 hover:bg-indigo-700 dark:hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 text-center">
                                Login
                            </Link>
                            <Link href="/signup" className="bg-indigo-500 dark:bg-purple-600 hover:bg-indigo-600 dark:hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 text-center">
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;