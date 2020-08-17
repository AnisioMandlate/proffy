import React from "react";
import "./styles.css";
import checkIcon from "../../assets/images/icons/success-check-icon.svg";
import { useHistory } from "react-router-dom";

const SucessPost = () => {
  const history = useHistory();
  return (
    <div id="sucess">
      <img src={checkIcon} alt="Cadastro feito" />
      <h1>Cadastro salvo!</h1>
      <p>
        Tudo certo, seu cadastro está na nossa lista de professores.
        <br />
        Agora é só ficar de olho no seu WhatsApp.
      </p>
      <button onClick={() => history.push("/")}>Ir a Home</button>
    </div>
  );
};
export default SucessPost;
