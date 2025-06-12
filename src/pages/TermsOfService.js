import React, { useEffect, useState } from 'react';
import '../index.css'

const TermsOfService = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Trigger fade-in on component mount
        setFadeIn(true);
    }, []);

    return (
        <>
            <title>CroftSync</title>
            <div className={`page-container ${fadeIn ? 'fade-in' : ''}`}>
                <iframe src="/CroftSync_Terms_of_Service.pdf" title="Terms of Service" />
            </div>
        </>
    );
};

export default TermsOfService;