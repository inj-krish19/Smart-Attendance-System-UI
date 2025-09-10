import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-indigo-900 text-indigo-200 p-6 mt-auto">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Smart Attendance Management. All rights reserved.</p>
                <p className="text-xs mt-2">Preview Demo for Smart India Hackathon</p>
            </div>
        </footer>
    );
};

export default Footer;