import React from "react";
import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/4643304?s=400&u=e9c051805fc50658102e4ee25b632b67c85ced3b&v=4"
          alt="Teacher Profile Pic (Anisio Mandlate)"
        />
        <div>
          <strong>Anisio Mandlate</strong>
          <span>Estrutura de Dados</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        <br /> <br />
        Voluptatibus totam dolore iure ipsa alias impedit quisquam. Atque facere
        nihil exercitationem laboriosam aut, dolore iure, alias fuga autem ut
        quidem repellat!
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 90,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Numero do WhatsApp" />
          Entrar em contacto
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
