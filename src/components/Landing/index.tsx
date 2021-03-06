import React, { useState, useEffect } from "react";
import "./styles.css";
import logo from "../../assets/images/logo.svg";
import landing from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import { Link } from "react-router-dom";
import api from "../../services";

const Landing = () => {
  const [totalConnection, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data;
      setTotalConnections(total);
    });
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="Logo da Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landing} alt="Plataforma de estudos" className="hero-image" />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Study" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Give Classes" />
            Dar aulas
          </Link>
        </div>
        <span className="total-connections">
          Total de {totalConnection} conexões já realizadas{" "}
          <img src={purpleHeartIcon} alt="Purpe Heart" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
