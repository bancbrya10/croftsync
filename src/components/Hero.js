import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css'
import infographic from '../assets/infographic.png'

function Hero() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/services', { state: { animate: true } });
    };

    return (
        <section>
            <div className='hero-text'>
                <p>Your partner in seamless software integration solutions.</p>
            </div>
            <button onClick={handleClick}>View Services</button>
            <div className='img-container'>
                <img src={infographic} alt='Infographic' />
            </div>
        </section>
    );
}

export default Hero;