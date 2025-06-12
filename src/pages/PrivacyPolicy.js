import React, { useEffect, useState } from 'react';
import '../index.css'

const PrivacyPolicy = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Trigger fade-in on component mount
        setFadeIn(true);
    }, []);

    return (
        <>
            <title>CroftSync</title>
            <div className={`page-container ${fadeIn ? 'fade-in' : ''}`}>
                <iframe src="/CroftSync_Privacy_Policy.pdf" title="Privacy Policy" />
            </div>
        </>
    );
};

export default PrivacyPolicy;