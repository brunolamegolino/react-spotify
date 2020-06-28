import React, { useState, useEffect } from 'react';
import './Login.scss';
import backgroundImageMobile from '../../assets/images/app-intro-1.jpg';
import backgroundImageDesktop from '../../assets/images/app-intro-2.jpg';

import { endpoints } from '../../endpoints';
import Logo from '../../components/Logo/Logo'

const Login = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const onResizeHandler = () => setWindowWidth(window.innerWidth) 

    useEffect(() => {
        window.addEventListener('resize', onResizeHandler);
    
        return () => {
          window.removeEventListener('resize',  onResizeHandler);
        }
      }, [])

    return (
    <main className="login" data-testid="login" style={{backgroundImage: `url(${windowWidth <= 768 ?backgroundImageMobile:backgroundImageDesktop})`}}>
        <div className="container">
            <Logo />

            <h2 className="login__microcopy">
                Não toca a música inteira,
                <strong> mas toca o seu <span role="img" className="login__microcopy" aria-label="Coração">❤️</span></strong>
            </h2>

            <a href={endpoints.getAuthorization.url} className="login__auth-button">
                Entrar com Spotify
            </a>
        </div>
    </main>)
};

export default Login;
