import React from 'react';
import { useLocation } from 'react-router-dom';

function Footer(){
    const location = useLocation();
    const noFooterPages = ['/login', '/register', '/dashboard'];
    if (noFooterPages.includes(location.pathname)) {
        return null;
    }
    return(
        <footer className="bg-blue-400 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; 2025 Planify. All Rights Reserved.</p>
                <p className="text-sm mt-2">
                    Created with ❤️ by Cinta Fatwa Aulia Nur Fadhilah
                </p>
            </div>
        </footer>
    );
}

export default Footer;