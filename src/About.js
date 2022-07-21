import React from "react";


const About = props => {
    return (
        <section id="about">
            <div className="wrapper">
                <article>
                    <div className="title">
                        <h3>Who's this guy?</h3>
                        <p className="separator"/>
                    </div>
                    <div className="desc full">
                        <h4 className="subtitle">Mi nombre es Nelson Andres Agreda.</h4>
                        <p>
                            Soy Ingeniero Informatico de la Corporación Universitaria Autonoma de Nariño y Licenciado en Ciencias Naturales y Educación Ambiental de la Universidad de Nariño
                        </p>
                        <p> 
                        Además de mis estudios, me he dedicado al desarrollo web durante algún tiempo,
                        primero como estudiante y ahora como Ingeniero.  Como resultado, tengo conocimiento
                        de los principales lenguajes de programación dirigidos al desarrollo web y de 
                        software, así como también conocimientos en análisis de datos e información a 
                        través de técnicas de Inteligencia Artificial y Machine Learning.
                        </p>
                    </div>
                    <div className="title">
                        <h3>What does he do?</h3>
                        <p className="separator"/>
                    </div>
                    <div className="desc">
                        <h4 className="subtitle">Soy Desarrollador de Software.</h4>
                        <p>
                            He desarrollado proyectos apoyado en metodologías agiles y así mismo en Frameworks basados en PHP como lo son Laravel, Symfony y Kumbia de lado del backend, 
                        </p>
                        <p>
                        de igual manera he trabajado con frameworks de lado del frontend como lo son Angular y React.
                        </p>
                    </div>
                    <div className="desc">
                        <h4 className="subtitle">Soy Licenciado en Ciencias Naturales y Edu. Ambiental</h4>
                        <p>
                            A lo largo de dos años me desempeñe como docente practicante en distintas 
                            Instituciones Educativas de la Ciudad de Pasto, llevando a cabo tematicas dirigidas 
                            a la enseñanza de las Ciencias Naturales y a la conservación del Ambiente a través 
                            de la Educación Ambiental.

                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default About;
