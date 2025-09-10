'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for Next.js App Router

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter();

    // Sample data to be used until the backend is ready
    const sampleUserData = [
        { id: 101, name: 'Alice Johnson', email: 'alice.j@example.com', role: 'student', roll: 'S001' },
        { id: 102, name: 'Bob Williams', email: 'bob.w@example.com', role: 'student', roll: 'S002' },
        { id: 103, name: 'Charlie Davis', email: 'charlie.d@example.com', role: 'faculty', roll: null },
        { id: 104, name: 'Diana Clark', email: 'diana.c@example.com', role: 'admin', roll: null },
        { id: 105, name: 'Ethan Miller', email: 'ethan.m@example.com', role: 'student', roll: 'S003' },
    ];

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        // Simulate an API call delay
        setTimeout(() => {
            setUsers(sampleUserData);
            setLoading(false);
        }, 1000); // 1-second delay
    };

    const handleCreateUser = () => {
        router.push('/admin/users/create');
    };

    const handleEditUser = (userId) => {
        router.push(`/admin/users/edit/${userId}`);
    };

    const handleDeleteUser = (userId) => {
        if (!window.confirm("Are you sure you want to delete this user? This action cannot be undone.")) {
            return;
        }
        try {
            // Simulate API call and then update state
            setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
            alert('User deleted successfully!');
        } catch (err) {
            setError('Failed to delete user.');
            console.error(err);
        }
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center bg-indigo-50 dark:bg-gray-950 text-indigo-700 dark:text-purple-200 text-xl">Loading...</div>;
    if (error) return <div className="min-h-screen flex items-center justify-center bg-indigo-50 dark:bg-gray-950 text-red-600 dark:text-red-400 text-xl">{error}</div>;

    const totalStudents = users.filter(user => user.role === 'student').length;
    const totalFaculty = users.filter(user => user.role === 'faculty').length;
    const totalAdmins = users.filter(user => user.role === 'admin').length;

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-purple-950 dark:to-purple-900 p-8 md:p-12 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-indigo-800 dark:text-purple-100 mb-8">Admin Dashboard</h1>

                {/* Quick Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white dark:bg-purple-900 p-6 rounded-xl shadow-lg border border-indigo-200 dark:border-purple-800 flex items-center space-x-4 transition-colors duration-500">
                        <div className="text-4xl text-indigo-600 dark:text-purple-400"><i className="fas fa-users"></i></div>
                        <div>
                            <p className="text-gray-500 dark:text-gray-400 font-semibold">Total Users</p>
                            <p className="text-3xl font-bold text-indigo-800 dark:text-purple-200">{users.length}</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-purple-900 p-6 rounded-xl shadow-lg border border-indigo-200 dark:border-purple-800 flex items-center space-x-4 transition-colors duration-500">
                        <div className="text-4xl text-green-600 dark:text-green-400"><i className="fas fa-user-graduate"></i></div>
                        <div>
                            <p className="text-gray-500 dark:text-gray-400 font-semibold">Total Students</p>
                            <p className="text-3xl font-bold text-green-800 dark:text-green-200">{totalStudents}</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-purple-900 p-6 rounded-xl shadow-lg border border-indigo-200 dark:border-purple-800 flex items-center space-x-4 transition-colors duration-500">
                        <div className="text-4xl text-red-600 dark:text-red-400"><i className="fas fa-chalkboard-teacher"></i></div>
                        <div>
                            <p className="text-gray-500 dark:text-gray-400 font-semibold">Total Faculty</p>
                            <p className="text-3xl font-bold text-red-800 dark:text-red-200">{totalFaculty}</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-purple-900 p-6 rounded-xl shadow-lg border border-indigo-200 dark:border-purple-800 flex items-center space-x-4 transition-colors duration-500">
                        <div className="text-4xl text-yellow-600 dark:text-yellow-400"><i className="fas fa-user-cog"></i></div>
                        <div>
                            <p className="text-gray-500 dark:text-gray-400 font-semibold">Total Admins</p>
                            <p className="text-3xl font-bold text-yellow-800 dark:text-yellow-200">{totalAdmins}</p>
                        </div>
                    </div>
                </div>

                {/* User Management Table */}
                <div className="bg-white dark:bg-purple-900 p-8 rounded-xl shadow-lg border border-indigo-200 dark:border-purple-800 transition-colors duration-500">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-indigo-700 dark:text-purple-200">User Management</h2>
                        <button
                            onClick={handleCreateUser}
                            className="bg-indigo-600 dark:bg-purple-600 hover:bg-indigo-700 dark:hover:bg-purple-700 text-white font-medium py-2 px-5 rounded-full shadow transition-all duration-300 transform hover:scale-105"
                        >
                            Add New User
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-indigo-200 dark:divide-purple-700">
                            <thead className="bg-indigo-50 dark:bg-purple-950">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">ID</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Role</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-purple-900 divide-y divide-indigo-200 dark:divide-purple-700">
                                {users.length > 0 ? (
                                    users.map(user => (
                                        <tr key={user.id} className="hover:bg-indigo-50 dark:hover:bg-purple-800 transition duration-200">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">{user.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{user.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{user.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.role === 'admin' ? 'bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100' :
                                                    user.role === 'faculty' ? 'bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-100' :
                                                        'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100'
                                                    }`}>
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button
                                                    onClick={() => handleEditUser(user.id)}
                                                    className="text-indigo-600 dark:text-purple-400 hover:text-indigo-900 dark:hover:text-purple-200 mr-4 transition duration-200"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteUser(user.id)}
                                                    className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-200 transition duration-200"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">No users found.</td>
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

export default AdminDashboard;