import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";

interface PageHeaderProps {
  title: string;
  description?: string;
  img?: string;
  text?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logo} alt="Proffy Logo" />
      </div>

      <div className="header-content">
        <div className="title-group">
          <h1 className="title">{props.title}</h1>
          <div className="total">
            <img src={props.img} alt={props.img} />
            <p>{props.text}</p>
          </div>
        </div>
        {props.description ? <p>{props.description}</p> : null}
        {props.children}
      </div>
    </header>
  );
};

export default PageHeader;
