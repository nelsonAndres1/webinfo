import React from "react";


const Header = props => {
    return (
        <header id="welcome-section">
            <div className="forest"/>
            <div className="silhouette"/>
            <div className="moon"/>
            <div className="container">
                <h1>
                    <span className="line">Soy</span>
                    <span className="line">Ingeniero Informático</span>
                    <span className="line">
                        <span className="color">&</span>
                        Licenciado En Ciencias!
                    </span>
                </h1>
                <div className="buttons">
                    <a href="#projects">Mi Portafolio</a>
                    <a href="#contact" className="cta">
                        Contactame
                    </a>
                </div>
            </div>
        </header>
    );
};
export default Header;
