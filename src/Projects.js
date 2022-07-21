import React from "react";
import Project from "./Project";
import image from "./Control.PNG";
import image2 from "./Inventario.PNG";
import image3 from "./ECG.PNG";
import image4 from "./inv1.PNG";
const Projects = props => {
    return (
        <section id="projects">
            <div className="projects-container">
                <div className="heading">
                    <h3 className="title">Mis Proyectos</h3>
                    <p className="separator"/>
                    <p className="subtitle">
                        A continuación, se muestra una serie de proyectos desarrollados 
                                                                                                                                    y llevados a cabo a lo largo de mi trayectoria laboral como 
                                                                                                                                    Desarrollador web. También algunos reconocimientos de caracter investigativo.
                    </p>
                </div>
                <div className="projects-wrapper">
                    <Project title="Sistema para el Control de Pagos"
                        img={image}
                        tech="Angular y Laravel"
                        link="https://github.com/nelsonAndres1/ControlPagos"
                        repo="https://github.com/nelsonAndres1/ControlPagos">
                        <small>
                            Construido utilizando Laravel, Angular, Bootstrap y Angular Material.
                        </small>
                        <p>
                            Es un Modulo dirigido a controlar los pagos de una empresa.
                        </p>
                    </Project>
                    <Project title="Sistema para el Inventario de Activos."
                        img={image2}
                        tech="Angular y Laravel"
                        link="https://github.com/nelsonAndres1/Inventario_Activos"
                        repo="https://github.com/nelsonAndres1/Inventario_Activos">
                        <small>
                            Construido utilizando Laravel, Angular, Bootstrap y Angular Material.
                        </small>
                        <p>
                            Es un Modulo dirigido al Inventario y Traslado de Activos de una empresa.
                        </p>
                    </Project>
                    <Project title="Exploración de técnicas de ML para la clasificación de registros ECG."
                        img={image3}
                        tech="Python"
                        link="https://github.com/nelsonAndres1/Estudio_ML_ECG"
                        repo="https://github.com/nelsonAndres1/Estudio_ML_ECG">
                        <small>Construido con tecnicas de Inteligencia Artificial y Machine Learning</small>
                        <p>
                            La presente investigación tuvo como objetivo principal la exploración
                                                                                     de técnicas de Machine Learning para la clasificación
                                                                                    de características en registros ECG.
                        </p>
                    </Project>
                    <Project title="Reconocimiento 1"
                        img={image4}
                        tech="Python"
                        link="https://github.com/nelsonAndres1/"
                        repo="https://github.com/nelsonAndres1/">
                        <small>Semillero Sinapsis y Grupo de Investigación SEDMATEC</small>
                        <p>
                            Se destacó la participación y contribución en los procesos investigativos.
                        </p>
                    </Project>
                    <Project title="Reconocimiento 2"
                        img={image4}
                        tech="Python"
                        link="https://github.com/nelsonAndres1/"
                        repo="https://github.com/nelsonAndres1/">
                        <small>Trabajo de Grado Meritorio</small>
                        <p>
                            Se destacó por el Trabajo de Grado Meritorio denominado: Estudio exploratorio de técnicas de Machine Learning para la
                            extracción y clasificación de características en registros ECG offline
                            dirigido a la detección automática de arritmias cardiacas.
                        </p>
                    </Project>
                </div>
            </div>
        </section>
    );
};
export default Projects;
