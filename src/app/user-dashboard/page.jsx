'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for Next.js App Router

const UserDashboard = () => {
    const [attendance, setAttendance] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter(); // Initialize router if needed for future use

    // Sample data to be used until the backend is ready
    const sampleAttendanceData = [
        { id: 1, date: '2025-09-08', status: 'Present', timeIn: '09:00 AM', timeOut: '05:00 PM' },
        { id: 2, date: '2025-09-07', status: 'Present', timeIn: '09:05 AM', timeOut: '05:05 PM' },
        { id: 3, date: '2025-09-06', status: 'Absent', timeIn: null, timeOut: null },
        { id: 4, date: '2025-09-05', status: 'Present', timeIn: '08:58 AM', timeOut: '04:55 PM' },
        { id: 5, date: '2025-09-04', status: 'Leave', timeIn: null, timeOut: null },
    ];

    useEffect(() => {
        const fetchUserAttendance = async () => {
            try {
                // Simulate an API call delay
                setTimeout(() => {
                    setAttendance(sampleAttendanceData);
                    setLoading(false);
                }, 1000); // 1-second delay
            } catch (err) {
                setError('Failed to fetch attendance records.');
                setLoading(false);
                console.error(err);
            }
        };
        fetchUserAttendance();
    }, []);

    if (loading) return <div className="min-h-screen flex items-center justify-center bg-indigo-50 dark:bg-gray-950 text-indigo-700 dark:text-purple-200 text-xl">Loading...</div>;
    if (error) return <div className="min-h-screen flex items-center justify-center bg-indigo-50 dark:bg-gray-950 text-red-600 dark:text-red-400 text-xl">{error}</div>;

    const totalPresent = sampleAttendanceData.filter(rec => rec.status === 'Present').length;
    const totalAbsent = sampleAttendanceData.filter(rec => rec.status === 'Absent').length;
    const totalLeaves = sampleAttendanceData.filter(rec => rec.status === 'Leave').length;

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-purple-950 dark:to-purple-900 p-8 md:p-12 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-indigo-800 dark:text-purple-100 mb-8">My Dashboard</h1>

                {/* Quick Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white dark:bg-purple-900 p-6 rounded-xl shadow-lg border border-indigo-200 dark:border-purple-800 flex items-center space-x-4 transition-colors duration-500">
                        <div className="text-4xl text-indigo-600 dark:text-purple-400"><i className="fas fa-calendar-check"></i></div>
                        <div>
                            <p className="text-gray-500 dark:text-gray-400 font-semibold">Total Present</p>
                            <p className="text-3xl font-bold text-indigo-800 dark:text-purple-200">{totalPresent}</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-purple-900 p-6 rounded-xl shadow-lg border border-indigo-200 dark:border-purple-800 flex items-center space-x-4 transition-colors duration-500">
                        <div className="text-4xl text-yellow-600 dark:text-yellow-400"><i className="fas fa-calendar-times"></i></div>
                        <div>
                            <p className="text-gray-500 dark:text-gray-400 font-semibold">Total Absent</p>
                            <p className="text-3xl font-bold text-yellow-800 dark:text-yellow-200">{totalAbsent}</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-purple-900 p-6 rounded-xl shadow-lg border border-indigo-200 dark:border-purple-800 flex items-center space-x-4 transition-colors duration-500">
                        <div className="text-4xl text-green-600 dark:text-green-400"><i className="fas fa-tasks"></i></div>
                        <div>
                            <p className="text-gray-500 dark:text-gray-400 font-semibold">Total Leaves</p>
                            <p className="text-3xl font-bold text-green-800 dark:text-green-200">{totalLeaves}</p>
                        </div>
                    </div>
                </div>

                {/* Attendance Table */}
                <div className="bg-white dark:bg-purple-900 p-8 rounded-xl shadow-lg border border-indigo-200 dark:border-purple-800 transition-colors duration-500">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-indigo-700 dark:text-purple-200">Recent Attendance Records</h2>
                        <button className="bg-indigo-600 dark:bg-purple-600 hover:bg-indigo-700 dark:hover:bg-purple-700 text-white font-medium py-2 px-5 rounded-full shadow transition-all duration-300 transform hover:scale-105">
                            Request Leave
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-indigo-200 dark:divide-purple-700">
                            <thead className="bg-indigo-50 dark:bg-purple-950">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Time In</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Time Out</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-purple-900 divide-y divide-indigo-200 dark:divide-purple-700">
                                {attendance.length > 0 ? (
                                    attendance.map((record) => (
                                        <tr key={record.id} className="hover:bg-indigo-50 dark:hover:bg-purple-800 transition duration-200">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">{record.date}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${record.status === 'Present' ? 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100' :
                                                    record.status === 'Absent' ? 'bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100' :
                                                        'bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100'
                                                    }`}>
                                                    {record.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{record.timeIn ?? 'Not Available'}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{record.timeOut ?? 'Not Available'}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">No attendance records found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;