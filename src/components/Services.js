import React from 'react';
import {
    FaProjectDiagram,
    FaChalkboardTeacher,
    FaLaptopCode,
    FaCloud,
    FaKey,
    FaDatabase
} from 'react-icons/fa';
import userProvisioningDiagram from '../assets/user-provisioning.png';
import iam from '../assets/iam.png';
import etl from '../assets/etl.png'
import '../styles/Services.css';
import '../index.css';
import '../styles/Swiper.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Services() {

    const location = useLocation();
    const [fadeInFromHero, setfadeInFromHero] = useState(false);

    useEffect(() => {
        if (location.state?.animate) {
            setfadeInFromHero(true);
        }
    }, [location.state]);

    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Trigger fade-in on component mount
        setFadeIn(true);
    }, []);


    const services = [
        {
            "title": "System Integrations",
            "icon": <FaProjectDiagram className='service-icon' />,
            "text": "Businesses rely on a wide range of tools, and disconnected systems can lead to inefficiencies and data inconsistencies. We specialize in integrating platforms across departments — including HR, finance, CRM, and IT — to create a seamless flow of information. Our solutions support real-time or scheduled syncs, include monitoring and error handling, and are designed to reduce manual processes while improving reliability across your operations.",
            "image": userProvisioningDiagram
        },
        {
            "title": "Identity & Access Management (IAM)",
            "icon": <FaKey className='service-icon' />,
            "text": "Managing access across multiple systems is critical for both security and efficiency. We help automate identity lifecycles — provisioning, deprovisioning, role assignments, and more — so users have the right access at the right time. Our IAM solutions reduce IT workload, improve compliance, and enforce modern security standards like SSO and MFA across your organization.",
            "image": iam
        },
        {
            "title": "Data Integration & ETL",
            "icon": <FaDatabase className='service-icon' />,
            "text": "Reliable data is essential for reporting, analytics, and day-to-day decision-making. Our data integration and ETL services streamline the movement of data between systems by extracting, transforming, and loading it efficiently. We build pipelines that handle complex transformations, support both real-time and batch processing, and ensure your data is accurate, secure, and ready for use wherever it's needed.",
            "image": etl
        },
        {
            "title": "iPaaS Implementation",
            "icon": <FaCloud className='service-icon' />,
            "text": "In a modern digital business, success often hinges on how well your systems communicate. iPaaS solutions enable seamless, secure, and scalable integrations across cloud and on-premise applications, allowing your teams to work more efficiently and with fewer manual errors.\n\nWe specialize in implementing cloud-native workflows that automate the movement of data between systems such as HR platforms, identity providers, CRMs, ERPs, and more. Whether you're synchronizing user records, automating provisioning processes, or orchestrating multi-step business workflows, our iPaaS integration services provide a streamlined path to operational efficiency.\n\nOur approach prioritizes speed, maintainability, and governance. We build reusable components, optimize for real-time performance, and ensure that your data pipelines are robust and reliable. With our help, you can eliminate silos, reduce overhead, and turn integration into a competitive advantage — without the need to write or maintain extensive custom code.",
        },
        {
            "title": "Custom Middleware Solutions",
            "icon": <FaLaptopCode className='service-icon' />,
            "text": "When commercial integration platforms fall short — due to unique business logic, legacy systems, or specialized data requirements — custom middleware becomes the ideal solution. Our team designs and builds middleware applications tailored specifically to your environment, acting as a seamless bridge between systems that were never designed to work together.\n\nWe create solutions that handle complex tasks such as data transformation, protocol mediation, message queuing, error handling, and logging. Whether processing transactions in real time or executing batch-based data jobs, our middleware is engineered for performance, stability, and transparency.\n\nFrom lightweight microservices to enterprise-grade integration layers, we deliver software that’s scalable, secure, and fully aligned with your IT architecture. This means less reliance on manual processes, more consistency across platforms, and the freedom to evolve your infrastructure at your own pace.",
        },
        {
            "title": "Integration Strategy & Consulting",
            "icon": <FaChalkboardTeacher className='service-icon' />,
            "text": "Integrating software systems is not just a technical challenge — it’s a strategic one. Our consulting services are designed to help organizations avoid the common pitfalls of ad-hoc integrations by developing a clear, well-structured integration strategy that supports long-term growth and agility.\n\nWe begin with a comprehensive assessment of your current systems and integration landscape, identifying bottlenecks, security risks, and missed automation opportunities. From there, we work with you to develop a roadmap that includes architectural recommendations, best-fit tools, data governance frameworks, and phased implementation plans.\n\nWhether you're consolidating platforms, preparing for digital transformation, or building a hybrid infrastructure, we guide you through each step — ensuring your integrations are efficient, scalable, and resilient. With the right strategy in place, your business can respond faster to change, reduce complexity, and increase the value of your technology investments.",
        },
    ]

    return (
        <>
            <title>CroftSync</title>
            <section className={`services-container ${fadeInFromHero ? 'fade-in' : ''} ${fadeIn ? 'fade-in' : ''}`}>
                <div className='header-container'>
                    <h2>Services</h2>
                </div>
                <div className='services-carousel'>
                    <Swiper navigation={true}
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                    >
                        {services.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="card">
                                    <div className='icon-wrapper'>
                                        <div className="icon">{item.icon}</div>
                                    </div>
                                    <h3>{item.title}</h3>
                                    <div className='card-text'>˝
                                        <p style={{ whiteSpace: 'pre-line' }}>{item.text}</p>
                                    </div>
                                    {item.image && (
                                        <div className="img-container">
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default Services;
